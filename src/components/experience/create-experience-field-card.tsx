import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import AreaToFieldsScroll from "./area-to-fields-scroll";
import SearchFieldInput from "@/components/field/search-field-input";

function CreateExperienceFieldCard() {
  return (
    <Card>
      <CardHeader>
        <h1 className="text-2xl font-bold">Campos</h1>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <SearchFieldInput />
        <AreaToFieldsScroll />
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}

export default CreateExperienceFieldCard;
