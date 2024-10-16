import { RegisterForm } from "@/controllers/auth/register-form/RegisterForm";
import { type Metadata, NextPage } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign Up | Dean Burger",
};

const RegisterPage: NextPage = async () => {
  const session = await getServerSession();

  // go to home page if already signed in
  if (session) {
    redirect("/");
  }

  return <RegisterForm />;
};

export default RegisterPage;
