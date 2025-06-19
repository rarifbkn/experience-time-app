import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import AreaToFieldsScroll from "./area-to-fields-scroll";
import SearchFieldInput from "@/components/field/search-field-input";
import useExperienceFormStore from "@/stores/useExperienceForm";
import { Button } from "../ui/button";
import { ExperienceFormSteps } from "@/types/enums/ExperienceFormSteps";

function CreateExperienceFieldCard() {
  const { setTab } = useExperienceFormStore();
  return (
    <Card>
      <CardHeader>
        <h1 className="text-2xl font-bold">Campos</h1>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <SearchFieldInput />
        <AreaToFieldsScroll />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          onClick={() => setTab(ExperienceFormSteps.INFO)}
        >
          Atrás
        </Button>
        <Button
          variant="default"
          onClick={() => setTab(ExperienceFormSteps.PREVIEW)}
        >
          Siguiente
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CreateExperienceFieldCard;
