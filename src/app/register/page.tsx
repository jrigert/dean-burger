import { RegisterForm } from "@/controllers/auth/register-form/RegisterForm";
import { NextPage } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const RegisterPage: NextPage = async () => {
  const session = await getServerSession();

  // go to home page if already signed in
  if (session) {
    redirect("/");
  }

  return <RegisterForm />;
};

export default RegisterPage;
