"use client";

import { z } from "zod";

export const LoginUserSchema = z.object({
  email: z.string().email({ message: "El correo es requerido" }),
  password: z
    .string()
    .min(8, { message: "La contraseña debe tener al menos 8 caracteres" })
    .max(32, { message: "La contraseña debe tener menos de 32 caracteres" }),
});
export type LoginSchemaType = z.infer<typeof LoginUserSchema>;
