"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  LoginUserSchema,
  LoginUserSchemaType,
} from "@/types/Schemas/auth.types";
import { GithubIcon } from "lucide-react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { REGISTER_ROUTE } from "@/utils/constants";

function LoginPage() {
  const form = useForm<LoginUserSchemaType>({
    resolver: zodResolver(LoginUserSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const handleSignIn = async () => {
    try {
      await signIn("github");
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = () => {};

  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Enter access information</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Input your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Passwod</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Input your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center items-center">
              <Button type="submit">Send</Button>
            </div>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex items-center justify-center">
        <p>
          Tienes una cuenta?
          <Button variant="link" asChild>
            <Link href={REGISTER_ROUTE}>Ingrsesa aqui</Link>
          </Button>
        </p>
      </CardFooter>
    </Card>
  );
}

export default LoginPage;
