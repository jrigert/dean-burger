import prisma from "@/api/db";
import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";

export const authOptions: AuthOptions = {
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
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (!(credentials?.email && credentials.password)) {
          return null;
        }

        const { email, password } = credentials;
        const user = await prisma.users.findUnique({ where: { email } });

        if (!user) {
          return null;
        }

        // compare hashed passwords
        const passwordCorrect = await compare(password, user.password);
        if (passwordCorrect) {
          return {
            id: user.id,
            email: user.email,
            firstName: user.first_name,
          };
        }

        return null;
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
