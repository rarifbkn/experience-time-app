import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { toast } from "sonner";

interface DeleteAlertProps {
  link: string;
}

function DeleteAlert({ link }: DeleteAlertProps) {
  const handleDelete = async () => {
    console.log(link);
    await fetch(link, {
      method: "DELETE",
    })
      .then(() => {
        toast.success("Campo eliminado");
      })
      .catch((error) => {
        toast.error("Error al eliminar el campo", error);
      })
      .finally(() => {
        console.log("Campo eliminado");
      });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive" size="icon">
          <Trash />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Eliminar campo</DialogTitle>
          <DialogDescription>
            ¿Estas seguro de eliminar este campo?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="destructive" onClick={handleDelete}>
              Eliminar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteAlert;
