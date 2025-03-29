"use client";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/theme-toggle";
import { GithubIcon } from "lucide-react";
import { signIn } from "next-auth/react";

const handleSignIn = async () => {
  try {
    await signIn("github");
  } catch (error) {
    console.log(error);
  }
};

function LoginPage() {
  return (
    <form action={handleSignIn}>
      <Button type="submit">
        <GithubIcon />
        Signin with Github
      </Button>
    </form>
  );
}

export default LoginPage;
