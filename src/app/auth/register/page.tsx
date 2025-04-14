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
  RegisterUserSchema,
  RegisterUserSchemaType,
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
import { register } from "@/app/actions/auth";
import Link from "next/link";
import { LOGIN_ROUTE } from "@/utils/constants";
import { useRouter } from "next/navigation";

function RegisterPage() {
  const form = useForm<RegisterUserSchemaType>({
    resolver: zodResolver(RegisterUserSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    mode: "onChange",
  });

  const { isValid, isSubmitting } = form.formState;

  const router = useRouter();

  const handleSignIn = async () => {
    try {
      await signIn("github");
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (values: RegisterUserSchemaType) => {
    const response = await register(values);
    if (response?.success) {
      router.push(LOGIN_ROUTE);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Registro</CardTitle>
        <CardDescription>Ingresa tu información debajo</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Usuario</FormLabel>
                  <FormControl>
                    <Input placeholder="Tu usuario" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Correo</FormLabel>
                  <FormControl>
                    <Input placeholder="Tu correo" {...field} />
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
                    <PasswordInput placeholder="Tu contraseña" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="passwordConfirm"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Conirma contraseña</FormLabel>
                  <FormControl>
                    <PasswordInput
                      placeholder="Confirma tu contraseña"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center items-center">
              <Button type="submit" disabled={!isValid && isSubmitting}>
                {isSubmitting && <LoaderCircle />}
                Registrar
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex items-center justify-center">
        <p>
          Tienes una cuenta?
          <Button variant="link" asChild>
            <Link href={LOGIN_ROUTE}>Ingresa aqui</Link>
          </Button>
        </p>
      </CardFooter>
    </Card>
  );
}

export default RegisterPage;
