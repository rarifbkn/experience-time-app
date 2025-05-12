"use client";

import { z } from "zod";

export const LoginUserSchema = z.object({
  token: z.string().uuid({ message: "El token es requerido" }),
});
export type LoginSchemaType = z.infer<typeof LoginUserSchema>;
