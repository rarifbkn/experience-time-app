import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog";
import EditFieldForm from "./edit-field-form";

function EditAlert() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <Pencil />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar campo</DialogTitle>
          <DialogDescription>
            ¿Estas seguro de editar este campo?
          </DialogDescription>
        </DialogHeader>
        <EditFieldForm />
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="default">Editar</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default EditAlert;
