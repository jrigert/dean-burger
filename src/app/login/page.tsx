import { LoginForm } from "@/controllers/auth/login-form/LoginForm";
import { NextPage } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const LoginPage: NextPage = async () => {
  const session = await getServerSession();

  // go to home page if already signed in
  if (session) {
    redirect("/");
  }

  return <LoginForm />;
};

export default LoginPage;
