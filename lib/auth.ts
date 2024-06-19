import { AuthOptions, NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prismaClient } from "./db";
import type { Adapter } from "next-auth/adapters";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prismaClient) as Adapter,
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jb@gmail.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          console.log("Authorize function called with credentials:", credentials);
          
          if (!credentials?.email || !credentials?.password) {
            console.log("No Inputs Found");
            throw { error: "No Inputs Found", status: 401 };
          }
          console.log("Pass 1 checked");

          const startFindUser = Date.now();
          const existingUser = await prismaClient.user.findUnique({
            where: { email: credentials.email },
          });
          console.log(`User query took ${Date.now() - startFindUser} ms`);

          if (!existingUser) {
            console.log("No user found");
            throw { error: "No user found", status: 401 };
          }
          
          console.log("Pass 2 Checked");
          console.log(existingUser);

          const startComparePassword = Date.now();
          const passwordMatch = existingUser.password 
            ? await compare(credentials.password, existingUser.password)
            : false;
          console.log(`Password comparison took ${Date.now() - startComparePassword} ms`);

          if (!passwordMatch) {
            console.log("Password incorrect");
            throw { error: "Password Incorrect", status: 401 };
          }
          
          console.log("Pass 3 Checked");
          const user = {
            id: existingUser.id,
            name: existingUser.name,
            email: existingUser.email,
            role: existingUser.role,
          };
          
          console.log("User Compiled");
          console.log(user);
          return user;
        } catch (error) {
          console.log("All Failed");
          console.log(error);
          throw { error: "Something went wrong", status: 401 };
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      const startFindFirst = Date.now();
      const dbUser = await prismaClient.user.findFirst({
        where: { email: token?.email ?? "" },
      });
      console.log(`JWT user query took ${Date.now() - startFindFirst} ms`);

      if (!dbUser) {
        token.id = user!.id;
        return token;
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        role: dbUser.role,
        picture: dbUser.image,
      };
    },
    session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
        session.user.role = token.role;
      }
      return session;
    },
  },
};
