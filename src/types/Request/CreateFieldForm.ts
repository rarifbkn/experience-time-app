import { z } from "zod";

export const createFieldFormSchema = z.object({
  name: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
});

export type CreateFieldFormSchemaType = z.infer<typeof createFieldFormSchema>;
