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
import { ExperienceAuth } from "@/services/experience.services";
import { useLocation } from "wouter";

function FormToLoginForm() {
  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginUserSchema),
    defaultValues: {
      token: "",
    },
  });

  const { isValid, isSubmitting } = form.formState;

  const [location, navigate] = useLocation();

  //logica del formulario
  const onSubmit = async (data: LoginSchemaType) => {
    const response = await ExperienceAuth(data.token);
    if (response) {
      form.reset();
      navigate(`/experience/${response._id}`);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="token"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ID</FormLabel>
              <FormControl>
                <Input placeholder="ID" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" disabled={!isValid || isSubmitting}>
          Ingresar al formulario
        </Button>
      </form>
    </Form>
  );
}

export default FormToLoginForm;
