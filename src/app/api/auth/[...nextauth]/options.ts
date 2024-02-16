import type {NextAuthOptions} from "next-auth";
import CredentialsContainer from "next-auth/providers/credentials";
import {PrismaAdapter} from "@auth/prisma-adapter";
import prisma from "@/lib/db";
import bcrypt from "bcrypt";
import {User} from "@prisma/client";
import {Adapter} from "next-auth/adapters";
import env from "@/config/env";

export const options: NextAuthOptions = {
  secret: env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    CredentialsContainer({
      name: "credentials",
      credentials: {
        username: {label: "Username", type: "text"},
        password: {label: "Password", type: "password"},
      },
      async authorize(credentials) {
        if (!credentials || !credentials.username || !credentials.password) {
          console.error("Empty credentials,", credentials);
          return null;
        }
        const user = await prisma.user.findFirst({
          where: {
            username: credentials.username,
          },
        });
        if (!user || !user.password) {
          console.error("User couldn't found!", credentials);
          return null;
        }

        const passwordCorrect = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!passwordCorrect) {
          console.error("Password is wrong!", credentials);
          return null;
        }
        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt: ({token, user}) => {
      user && (token.user = user as User);
      token.user;

      return token;
    },
    session: ({session, token}) => {
      if (token.user) {
        const {password, ...user} = token.user;
        session.user = {...session.user, ...user};
      }

      return session;
    },
  },
  debug: process.env.NODE_ENV === "development",
};
