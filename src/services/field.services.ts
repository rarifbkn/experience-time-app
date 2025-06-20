import { CreateFieldDTO } from "@/types/dtos/field";
import { toast } from "sonner";

export async function fetchFields() {
  const url = `${import.meta.env.VITE_BACKEND_URL}/fields`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    toast.success("Campos Cargados");
    return data;
  } catch (error) {
    console.error(error);
    toast.error("Error al obtener los campos");
  }
}

export async function createField(field: CreateFieldDTO) {
  const url = `${import.meta.env.VITE_BACKEND_URL}/fields`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(field),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}
