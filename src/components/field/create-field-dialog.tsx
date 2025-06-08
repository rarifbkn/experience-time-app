import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import CreateExperienceFieldForm from "@/components/experience/create-experience-field-form";

function CreateFieldDialog() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="outline">Agregar campo</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Crear campo</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <CreateExperienceFieldForm />
      </DialogContent>
    </Dialog>
  );
}

export default CreateFieldDialog;
