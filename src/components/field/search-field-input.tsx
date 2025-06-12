import { Search } from "lucide-react";
import { useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Field } from "@/types/interfaces/Fields";
import useFieldsStore from "@/stores/useFieldsStore";
import CreateFieldDialog from "./create-field-dialog";
import { toast } from "sonner";

function SearchFieldInput() {
  const [open, setOpen] = useState(false);

  const { fieldsAdded, fields, addFields } = useFieldsStore();

  const handleSelectField = (field: Field) => {
    if (fieldsAdded.includes(field)) {
      toast.warning("Campo ya agregado");
      return;
    }
    addFields(field);
    setOpen(false);
    toast.success("Campo agregado");
  };
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-full justify-start">
          <Search className="mr-2 h-4 w-4" />
          Buscar
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0" side="bottom" align="start">
        <Command>
          <CommandInput placeholder="Buscar campo..." />
          <CommandList>
            <CommandEmpty>
              <CreateFieldDialog />
            </CommandEmpty>
            <CommandGroup>
              {fields?.map((field: Field) => (
                <CommandItem
                  key={field._id}
                  value={field.name}
                  onSelect={() => handleSelectField(field)}
                >
                  {field.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default SearchFieldInput;
