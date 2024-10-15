import { SignInForm } from "@/controllers/auth/sign-in-form/SignInForm";
import { type Metadata, NextPage } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign In | Dean Burger",
};

const LoginPage: NextPage = async () => {
  const session = await getServerSession();

  // go to home page if already signed in
  if (session) {
    redirect("/");
  }

  return <SignInForm />;
};

export default LoginPage;
