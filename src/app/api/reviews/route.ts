import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

// Simple in-memory rate limiter (resets on cold start, which is fine for serverless)
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 3; // max 3 reviews per hour per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }

  entry.count++;
  return false;
}

// GET /api/reviews — fetch all reviews
export async function GET() {
  try {
    const reviews = await prisma.review.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(reviews);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("Failed to fetch reviews:", message);
    return NextResponse.json(
      { error: "Failed to fetch reviews", details: message },
      { status: 500 }
    );
  }
}

// POST /api/reviews — submit a new review
export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many reviews submitted. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, company, rating, message, website } = body;

    // Honeypot — bots tend to fill hidden fields
    if (website) {
      // Silently accept but don't store (looks like success to the bot)
      return NextResponse.json({ success: true });
    }

    // Validation
    if (!name || typeof name !== "string" || name.trim().length < 2 || name.trim().length > 100) {
      return NextResponse.json(
        { error: "Name must be between 2 and 100 characters." },
        { status: 400 }
      );
    }

    if (!company || typeof company !== "string" || company.trim().length < 2 || company.trim().length > 100) {
      return NextResponse.json(
        { error: "Company must be between 2 and 100 characters." },
        { status: 400 }
      );
    }

    if (!rating || typeof rating !== "number" || rating < 1 || rating > 5 || !Number.isInteger(rating)) {
      return NextResponse.json(
        { error: "Rating must be an integer between 1 and 5." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10 || message.trim().length > 2000) {
      return NextResponse.json(
        { error: "Message must be between 10 and 2000 characters." },
        { status: 400 }
      );
    }

    const review = await prisma.review.create({
      data: {
        name: name.trim(),
        company: company.trim(),
        rating,
        message: message.trim(),
      },
    });

    return NextResponse.json(review, { status: 201 });
  } catch (error) {
    console.error("Failed to submit review:", error);
    return NextResponse.json(
      { error: "Failed to submit review" },
      { status: 500 }
    );
  }
}
