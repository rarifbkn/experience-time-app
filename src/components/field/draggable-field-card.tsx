import { CreateFieldDTO } from "@/types/dtos/field";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { GripVertical } from "lucide-react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

interface Props {
  field: CreateFieldDTO;
}
function DraggableFieldCard({ field }: Props) {
  const { name, category } = field;
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: name,
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <Card
      className="flex flex-row items-center gap-2 "
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    >
      <GripVertical />
      <CardContent className="flex flex-col gap-2">
        <CardTitle>{name}</CardTitle>
        <CardDescription>{category}</CardDescription>
      </CardContent>
    </Card>
  );
}

export default DraggableFieldCard;
