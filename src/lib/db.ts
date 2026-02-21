import { PrismaClient } from "@/generated/prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

function toAccelerateUrl(url: string): string {
  // Prisma Client requires prisma+postgres:// scheme for Accelerate connections.
  // The DATABASE_URL from Vercel uses postgres:// — convert it.
  if (url.startsWith("prisma://") || url.startsWith("prisma+postgres://")) {
    return url;
  }
  return url.replace(/^postgres(ql)?:\/\//, "prisma+postgres://");
}

function createPrismaClient() {
  return new PrismaClient({
    accelerateUrl: toAccelerateUrl(process.env.DATABASE_URL!),
  });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
