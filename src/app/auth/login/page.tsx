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
import { GithubIcon, LoaderCircle } from "lucide-react";
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
import { Input, PasswordInput } from "@/components/ui/input";
import Link from "next/link";
import { REGISTER_ROUTE } from "@/utils/constants";
import { useRouter } from "next/navigation";

function LoginPage() {
  const router = useRouter();
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

  const onSubmit = async ({ password, email }: LoginUserSchemaType) => {
    const res = await signIn("credentials", {
      email,
      password,
    });

    if (res?.ok) return router.push("/");
  };

  const { isSubmitting, isValid } = form.formState;

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
                    <Input placeholder="Ingresa tu correo" {...field} />
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
                  <FormLabel>Contraseña</FormLabel>
                  <FormControl>
                    <PasswordInput
                      placeholder="Ingresa tu contraseña"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center items-center">
              <Button type="submit" disabled={!isValid || isSubmitting}>
                {isSubmitting && <LoaderCircle />}
                Ingresar
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex items-center justify-center">
        <p>
          No tienes una cuenta?
          <Button variant="link" asChild>
            <Link href={REGISTER_ROUTE}>Registrarse :D</Link>
          </Button>
        </p>
      </CardFooter>
    </Card>
  );
}

export default LoginPage;
