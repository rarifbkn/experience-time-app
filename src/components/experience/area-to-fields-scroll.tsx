import { ScrollArea } from "@/components/ui/scroll-area";
import fields from "@/data/fields.json";
import FieldSimpleCard from "../field/field-simple-card";

function AreaToFieldsScroll() {
  console.log(fields);
  return (
    <ScrollArea className="h-[calc(100vh-30rem)]">
      <div className="flex flex-col gap-4 m-4">
        {fields.map((field) => (
          <FieldSimpleCard key={field._id} field={field} />
        ))}
      </div>
    </ScrollArea>
  );
}

export default AreaToFieldsScroll;
