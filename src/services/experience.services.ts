import { CreateExperienceFormSchemaType } from "@/types/Request/CreateExperienceForm";
import { toast } from "sonner";

const url = `${import.meta.env.VITE_BACKEND_URL}/forms`;

export async function createExperience(
  experience: CreateExperienceFormSchemaType
) {
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

//Add further validations by date
export async function ExperienceAuth(id: string): Promise<any> {
  const response = await fetch(`${url}/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(async (response) => {
      toast.success("Experiencia autenticada");
      return await response.json();
    })
    .catch((error) => toast.error("Error al autenticar la experiencia", error));

  return response;
}
