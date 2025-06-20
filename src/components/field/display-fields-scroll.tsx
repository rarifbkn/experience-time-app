import { CreateFieldDTO } from "@/types/dtos/field";
import DraggableFieldCard from "./draggable-field-card";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { ScrollArea } from "../ui/scroll-area";

interface Props {
  fields: CreateFieldDTO[];
}

function DisplayFieldsScroll({ fields }: Props) {
  return (
    <ScrollArea className="h-[calc(100vh-25rem)] w-1/3 ">
      <div className="flex flex-col gap-2 p-2">
        <SortableContext
          items={fields.map((field) => field.name)}
          strategy={verticalListSortingStrategy}
        >
          {fields.map((field) => (
            <DraggableFieldCard key={field.name} field={field} />
          ))}
        </SortableContext>
      </div>
    </ScrollArea>
  );
}

export default DisplayFieldsScroll;
