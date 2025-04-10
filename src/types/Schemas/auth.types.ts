import { z } from "zod";

//login
export const LoginUserSchema = z.object({
  email: z.string().email({ message: "Debe ingresar un correo" }),
  password: z.string().min(8),
});

export type LoginUserSchemaType = z.infer<typeof LoginUserSchema>;

//register
export const RegisterUserSchema = z
  .object({
    username: z.string().min(3),
    email: z.string().email({ message: "Debe ingresar un correo" }),
    password: z.string().min(8),
    passwordConfirm: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Password don't match",
    path: ["passwordConfirm"],
  });

export type RegisterUserSchemaType = z.infer<typeof RegisterUserSchema>;
