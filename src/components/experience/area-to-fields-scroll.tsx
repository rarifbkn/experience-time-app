import { ScrollArea } from "@/components/ui/scroll-area";
import useFieldsStore from "@/stores/useFieldsStore";
import FieldSimpleCard from "../field/field-simple-card";

function AreaToFieldsScroll() {
  const { fieldsAdded } = useFieldsStore();
  return (
    <ScrollArea className="h-[calc(100vh-30rem)]">
      <div className="flex flex-col gap-4 m-4">
        {fieldsAdded.map((field) => (
          <FieldSimpleCard key={field.name} field={field} />
        ))}
      </div>
    </ScrollArea>
  );
}

export default AreaToFieldsScroll;
