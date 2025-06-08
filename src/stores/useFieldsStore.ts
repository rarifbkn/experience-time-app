import { Field } from "@/types/interfaces/Fields";
import { create } from "zustand";

interface FieldsState {
  fields: Field[];
  setFields: (fields: Field[]) => void;
  addFields: (field: Field) => void;
  removeField: (name: string) => void;
}

const useFieldsStore = create<FieldsState>()((set) => ({
  fields: [],
  addFields: (field: Field) =>
    set((state: FieldsState) => ({ fields: [...state.fields, field] })),
  removeField: (name: string) =>
    set((state: FieldsState) => ({
      fields: state.fields.filter((field) => field.name !== name),
    })),
  setFields: (fields: Field[]) => set({ fields: fields }),
}));

export default useFieldsStore;
