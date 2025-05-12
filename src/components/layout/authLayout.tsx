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
    <div>
      <div className="flex items-center justify-end h-16 p-4">
        <ModeToggle />
      </div>
      <div className="flex items-center justify-center h-screen">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle>{title}</CardTitle>
            {subtitle && <CardDescription>{subtitle}</CardDescription>}
          </CardHeader>
          <CardContent>{children}</CardContent>
          <CardFooter className="text-center">
            <p>¿No tienes una cuenta?</p>
            <Button asChild variant="link">
              <Link href={urlRedirect}>{textRedirect}</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default AuthLayout;
