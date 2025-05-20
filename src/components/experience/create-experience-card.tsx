import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import CreateExperienceForm from "@/components/experience/create-experience-form";

function CreateExperienceCard() {
  return (
    <Card>
      <CardHeader>
        <h1 className="text-2xl font-bold">Informacion de la experiencia</h1>
      </CardHeader>
      <CardContent>
        <CreateExperienceForm />
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}

export default CreateExperienceCard;
