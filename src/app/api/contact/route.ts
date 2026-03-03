import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 5;

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

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many messages sent. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, phone, projectType, message, website } = body;

    // Honeypot
    if (website) {
      return NextResponse.json({ success: true });
    }

    // Validation
    if (!name || typeof name !== "string" || name.trim().length < 2 || name.trim().length > 100) {
      return NextResponse.json({ error: "Invalid name." }, { status: 400 });
    }
    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email." }, { status: 400 });
    }
    if (!message || typeof message !== "string" || message.trim().length < 5 || message.trim().length > 5000) {
      return NextResponse.json({ error: "Message must be between 5 and 5000 characters." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Eight Byte Studio" <${process.env.SMTP_USER}>`,
      to: "alban@eightbyte.al",
      replyTo: email.trim(),
      subject: `New Contact: ${name.trim()}${projectType ? ` — ${projectType}` : ""}`,
      text: [
        `Name: ${name.trim()}`,
        `Email: ${email.trim()}`,
        phone ? `Phone: ${phone.trim()}` : null,
        projectType ? `Project Type: ${projectType}` : null,
        `\nMessage:\n${message.trim()}`,
      ]
        .filter(Boolean)
        .join("\n"),
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="color: #1a1a2e; border-bottom: 2px solid #c9a84c; padding-bottom: 8px;">
            New Contact Form Submission
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #666; width: 120px;"><strong>Name</strong></td><td>${name.trim()}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;"><strong>Email</strong></td><td><a href="mailto:${email.trim()}">${email.trim()}</a></td></tr>
            ${phone ? `<tr><td style="padding: 8px 0; color: #666;"><strong>Phone</strong></td><td>${phone.trim()}</td></tr>` : ""}
            ${projectType ? `<tr><td style="padding: 8px 0; color: #666;"><strong>Project Type</strong></td><td>${projectType}</td></tr>` : ""}
          </table>
          <div style="margin-top: 16px; padding: 16px; background: #f5f5f5; border-left: 3px solid #c9a84c;">
            <strong style="color: #666;">Message:</strong>
            <p style="margin: 8px 0 0; white-space: pre-wrap;">${message.trim()}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
