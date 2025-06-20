import { CreateExperienceFormSchemaType } from "@/types/Request/CreateExperienceForm";
import { toast } from "sonner";

export async function createExperience(
  experience: CreateExperienceFormSchemaType
) {
  const url = `${import.meta.env.VITE_BACKEND_URL}/forms`;
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(experience),
  })
    .then(() => toast.success("Experiencia creada"))
    .catch((error) => toast.error("Error al crear la experiencia", error));
}
