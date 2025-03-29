import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import { compare } from "bcryptjs";

import User from "@/models/User";
import { connectDB } from "@/utils/mongoose";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub,
    Credentials({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "********",
        },
      },
      async authorize(credentials) {
        await connectDB();
        const userFound = await User.findOne({ email: credentials.email });
        if (!userFound) throw new Error("Invalid credentials");

        const isPasswordValid = await compare(
          credentials.password as string,
          userFound.password
        );

        if (!isPasswordValid) throw new Error("Invalid credentials");

        return userFound;
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    async session({ session, token }) {
      session.user = token.user as any;
      return session;
    },
  },
  debug: true,
});
