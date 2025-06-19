import { CreateFieldDTO } from "@/types/dtos/field";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { GripVertical } from "lucide-react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface Props {
  field: CreateFieldDTO;
}
function DraggableFieldCard({ field }: Props) {
  const { name, category } = field;
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: name,
    });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Card
      className="flex flex-row items-center gap-2 "
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    >
      <GripVertical className="hover:cursor-grab " />
      <CardContent className="flex flex-col gap-2">
        <CardTitle>{name}</CardTitle>
        <CardDescription>{category}</CardDescription>
      </CardContent>
    </Card>
  );
}

export default DraggableFieldCard;
