import { CreateFieldDTO } from "@/types/dtos/field";
import { ScrollArea } from "../ui/scroll-area";
import DraggableFieldCard from "./draggable-field-card";

interface Props {
  fields: CreateFieldDTO[];
}

function DisplayFieldsScroll({ fields }: Props) {
  return (
    <ScrollArea className="h-[calc(100vh-25rem)] w-1/3 ">
      <div className="flex flex-col gap-2 p-2">
        {fields.map((field) => (
          <DraggableFieldCard key={field.name} field={field} />
        ))}
      </div>
    </ScrollArea>
  );
}

export default DisplayFieldsScroll;
