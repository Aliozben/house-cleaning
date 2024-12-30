import {DefaultSession, User} from "next-auth";
import {AdapterUser} from "next-auth/adapters";
import {DefaultJWT} from "next-auth/jwt";
import type {User as UserType} from "@prisma/client";

declare module "next-auth" {
  interface Session {
    user: UserType;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    user: UserType;
  }

  interface User extends AdapterUser {}
}
