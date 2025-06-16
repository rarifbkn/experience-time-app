import {
  createFieldFormSchema,
  CreateFieldFormSchemaType,
} from "@/types/Request/CreateFieldForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";
import useExperienceFormStore from "@/stores/useExperienceForm";

function CreateFieldForm() {
  const form = useForm<CreateFieldFormSchemaType>({
    resolver: zodResolver(createFieldFormSchema),
    defaultValues: {
      name: "",
      category: "",
    },
  });

  const { isValid, isSubmitting } = form.formState;

  const { addField } = useExperienceFormStore();

  const onSubmit = (data: CreateFieldFormSchemaType) => {
    addField(data);
    form.reset();
    toast.success("Campo agregado exitosamente");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder="Nombre" {...field} />
              </FormControl>
              <FormDescription>Nombre del campo</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Categoria</FormLabel>
              <FormControl>
                <Input placeholder="Categoria" {...field} />
              </FormControl>
              <FormDescription>Categoria del campo</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={!isValid || isSubmitting}>
          {isSubmitting ? (
            <LoaderCircle className="animate-spin mr-2 h-4 w-4" />
          ) : null}
          Guardar
        </Button>
      </form>
    </Form>
  );
}

export default CreateFieldForm;
