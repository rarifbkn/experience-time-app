import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import CreateFieldForm from "./create-field-form";

function CreateFieldDialog() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="outline">
          <Plus />
          Agregar campo
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Crear campo</DialogTitle>
          <DialogDescription> Agrega un nuevo campo </DialogDescription>
        </DialogHeader>
        <CreateFieldForm />
      </DialogContent>
    </Dialog>
  );
}

export default CreateFieldDialog;
