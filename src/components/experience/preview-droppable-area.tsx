import { CreateFieldDTO } from "@/types/dtos/field";
import { useDroppable } from "@dnd-kit/core";

interface Props {
  fields: CreateFieldDTO[];
}

function PreviewDroppableArea({ fields }: Props) {
  const { setNodeRef, isOver } = useDroppable({
    id: "unique-id",
  });
  return (
    <div>
      <h1>Area para responder</h1>
      <div ref={setNodeRef} className="border rounded-2xl h-full"></div>
    </div>
  );
}

export default PreviewDroppableArea;
