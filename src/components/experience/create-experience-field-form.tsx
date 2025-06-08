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

function CreateExperienceFieldForm() {
  const form = useForm<CreateFieldFormSchemaType>({
    resolver: zodResolver(createFieldFormSchema),
    defaultValues: {
      name: "",
    },
  });

  const { isValid, isSubmitting } = form.formState;

  const onSubmit = (data: CreateFieldFormSchemaType) => {
    console.log(data);
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

export default CreateExperienceFieldForm;
