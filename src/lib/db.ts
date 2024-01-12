import {PrismaClient} from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prisma ?? prismaClientSingleton();

export default prisma;
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;
