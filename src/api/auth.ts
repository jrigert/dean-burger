import prisma from "@/api/db";
import { compare } from "bcrypt";
import {
  AuthOptions,
  getServerSession as nextGetServerSession,
} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

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
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.userId = user.id as number;
        token.firstName = user.firstName;
      }

      return token;
    },
    async session({ session, token }) {
      session.user.id = token.userId;
      session.user.firstName = token.firstName;

      return session;
    },
  },
};

export const getServerSession = () => nextGetServerSession(authOptions);
