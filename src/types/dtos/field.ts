import { Field } from "../interfaces/Fields";

export interface CreateFieldDTO {
  name: string;
  category: string;
}

export interface UpdateFieldDTO extends Partial<CreateFieldDTO> {
  _id: string;
}

export interface FieldResponseDTO
  extends Omit<Field, "createdAt" | "updatedAt" | "deletedAt"> {
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
}
