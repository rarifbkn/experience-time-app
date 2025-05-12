import { z } from "zod";

const RegisterUserSchema = z
  .object({
    username: z.string().min(3, { message: "Usuario es requerido" }),
    email: z.string().email({ message: "Correo es requerido" }),
    password: z.string().min(8, { message: "Contraseña es requerida" }),
    confirmPassword: z
      .string()
      .min(8, { message: "Confirmar contraseña es requerida" }),
  })
  .refine((data) => data.password == data.confirmPassword, {
    message: "Confirmar Contraseña debe ser igual a Contraseña",
  });
export type RegisterSchemaType = z.infer<typeof RegisterUserSchema>;
