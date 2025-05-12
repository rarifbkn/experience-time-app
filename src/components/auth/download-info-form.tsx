import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginUserSchema } from "@/types/Request/LoginForm";
import { LoginSchemaType } from "@/types/Request/LoginForm";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";

function DownloadInfoForm() {
  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginUserSchema),
    defaultValues: {
      token: "",
    },
  });

  const { isValid, isSubmitting } = form.formState;

  //logica del formulario
  const onSubmit = (data: LoginSchemaType) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="token"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Token</FormLabel>
              <FormControl>
                <Input placeholder="Token" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" disabled={!isValid || isSubmitting}>
          Descargar archivos
        </Button>
      </form>
    </Form>
  );
}

export default DownloadInfoForm;
