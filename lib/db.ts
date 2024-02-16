import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
};

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db

// hack to not hot-reload too many prismaclients in next , whenever in development a new Prismaclient created in hotrload
// globalThis is not affected in hot reload
