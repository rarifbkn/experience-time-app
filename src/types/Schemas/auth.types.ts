import { z } from "zod";

//login
export const LoginUserSchema = z.object({
  email: z.string().email({ message: "Debe ingresar un correo" }),
  password: z.string().min(8),
});

export type LoginUserSchemaType = z.infer<typeof LoginUserSchema>;


//register
export const RegisterUserSchema = z.object({
  email: z.string().email({ message: "Debe ingresar un correo" }),
  password: z.string().min(8),
});

export type RegisterUserSchemaType = z.infer<typeof RegisterUserSchema>;
