"use client";
import { z } from "zod";

export const CreateExperienceFormSchema = z.object({
  title: z.string().min(3, "El titulo debe tener al menos 3 caracteres"),
  description: z
    .string()
    .min(3, "La descripcion debe tener al menos 3 caracteres"),
  expireAt: z.date(),
  expireHour: z.string().min(2, "La hora debe tener al menos 2 caracteres"),
  expireMinute: z.string().min(2, "El minuto debe tener al menos 2 caracteres"),
  token: z.string().uuid({ message: "El token es requerido" }),
});

export type CreateExperienceFormSchemaType = z.infer<
  typeof CreateExperienceFormSchema
>;
