import { ScrollArea } from "@/components/ui/scroll-area";
import FieldSimpleCard from "../field/field-simple-card";
import useExperienceFormStore from "@/stores/useExperienceForm";

function AreaToFieldsScroll() {
  const { Fields } = useExperienceFormStore();
  return (
    <ScrollArea className="h-[calc(100vh-30rem)]">
      <div className="flex flex-col gap-4 m-4">
        {Fields.map((field) => (
          <FieldSimpleCard key={field.name} field={field} />
        ))}
      </div>
    </ScrollArea>
  );
}

export default AreaToFieldsScroll;
