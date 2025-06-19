import { CreateFieldDTO } from "@/types/dtos/field";
import { ExperienceFormSteps } from "@/types/enums/ExperienceFormSteps";
import { CreateExperienceFormSchemaType } from "@/types/Request/CreateExperienceForm";
import { create } from "zustand";
import { v4 as uuid } from "uuid";

interface ExperienceFormState {
  ExperienceForm: CreateExperienceFormSchemaType;
  Fields: CreateFieldDTO[];
  tab: ExperienceFormSteps;
  setTab: (tab: ExperienceFormSteps) => void;
  setExperienceForm: (experienceForm: CreateExperienceFormSchemaType) => void;
  addField: (field: CreateFieldDTO) => void;
  removeField: (name: string) => void;
  editField: (name: string, field: CreateFieldDTO) => void;
}

const useExperienceFormStore = create<ExperienceFormState>()((set) => ({
  ExperienceForm: {
    title: "Título del formulario",
    description: "Descripción del formulario",
    expireAt: new Date(),
    expireHour: "00",
    expireMinute: "00",
    token: uuid(),
  },
  Fields: [
    {
      name: "Desarrollo de Software",
      category: "Desarrollo",
    },
    {
      name: "Ciberseguridad",
      category: "Seguridad",
    },
    {
      name: "Gestión de proyectos",
      category: "Gestión",
    },
    {
      name: "Ciencia de datos",
      category: "Datos",
    },
    {
      name: "Desarrollo de IA",
      category: "IA",
    },
    {
      name: "Ingeniería de datos",
      category: "Datos",
    },
  ],
  tab: ExperienceFormSteps.INFO,
  setTab: (tab: ExperienceFormSteps) => set({ tab }),
  setExperienceForm: (experienceForm: CreateExperienceFormSchemaType) =>
    set({ ExperienceForm: experienceForm }),
  addField: (field: CreateFieldDTO) =>
    set((state: ExperienceFormState) => {
      const hasDuplicate = state.Fields.some((f) => f.name === field.name);
      return {
        Fields: hasDuplicate ? [...state.Fields] : [...state.Fields, field],
      };
    }),
  removeField: (name: string) =>
    set((state: ExperienceFormState) => ({
      Fields: state.Fields.filter((field) => field.name !== name),
    })),
  editField: (name: string, field: CreateFieldDTO) =>
    set((state: ExperienceFormState) => {
      const fieldIndex = state.Fields.findIndex((field) => field.name === name);
      if (fieldIndex !== -1) {
        state.Fields[fieldIndex] = field;
        return {
          Fields: [...state.Fields],
        };
      }
      return {
        Fields: [...state.Fields],
      };
    }),
}));

export default useExperienceFormStore;
