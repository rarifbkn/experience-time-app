import { Link } from "wouter";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { ModeToggle } from "../mode-toggle";

interface AuthLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  urlRedirect: string;
  textRedirect: string;
}

function AuthLayout({
  title,
  subtitle,
  children,
  urlRedirect,
  textRedirect,
}: AuthLayoutProps) {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center justify-end h-1/12 p-4">
        <ModeToggle />
      </div>
      <div className="container flex items-center justify-center flex-1">
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
