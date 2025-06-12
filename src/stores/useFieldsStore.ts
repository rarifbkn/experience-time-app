import { CreateFieldDTO } from "@/types/dtos/field";
import { Field } from "@/types/interfaces/Fields";
import { create } from "zustand";

interface FieldsState {
  fields: Field[];
  fieldsAdded: CreateFieldDTO[];
  setFields: (fields: Field[]) => void;
  addFields: (field: CreateFieldDTO) => void;
  removeField: (name: string) => void;
}

const useFieldsStore = create<FieldsState>()((set) => ({
  fields: [],
  fieldsAdded: [],
  addFields: (field: CreateFieldDTO) =>
    set((state: FieldsState) => ({
      fieldsAdded: [...state.fieldsAdded, field],
    })),
  removeField: (name: string) =>
    set((state: FieldsState) => ({
      fieldsAdded: state.fieldsAdded.filter((field) => field.name !== name),
    })),
  setFields: (fields: Field[]) => set({ fields: fields }),
}));

export default useFieldsStore;
