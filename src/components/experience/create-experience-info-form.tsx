import {
  CreateExperienceFormSchema,
  CreateExperienceFormSchemaType,
} from "@/types/Request/CreateExperienceForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { HOURS_LIST, MINUTES_LIST } from "@/utils/constants";
import useExperienceFormStore from "@/stores/useExperienceForm";
import { toast } from "sonner";

function CreateExperienceForm() {
  const form = useForm<CreateExperienceFormSchemaType>({
    resolver: zodResolver(CreateExperienceFormSchema),
    defaultValues: {
      title: "",
      description: "",
      expireAt: new Date(),
      expireHour: "00",
      expireMinute: "00",
      token: crypto.randomUUID(),
    },
  });

  const { setExperienceForm } = useExperienceFormStore();
  const onSubmit = (data: CreateExperienceFormSchemaType) => {
    setExperienceForm(data);
    toast.success("Experiencia agregada exitosamente");
  };

  const { isValid, isSubmitting } = form.formState;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Titulo</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descripción</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="expireAt"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Fecha de expiración</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Seleccionar fecha</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date()}
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="mt-2 grid grid-cols-2 gap-2">
            <FormField
              control={form.control}
              name="expireHour"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Hora de expiración</FormLabel>
                  <FormControl>
                    <Select
                      value={field.value?.toString().padStart(2, "0") || "00"}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar hora" />
                      </SelectTrigger>
                      <SelectContent>
                        {HOURS_LIST.map((hour) => (
                          <SelectItem
                            key={hour}
                            value={hour.toString().padStart(2, "0")}
                          >
                            {hour.toString().padStart(2, "0")}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="expireMinute"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Minuto de expiración</FormLabel>
                  <FormControl>
                    <Select
                      value={field.value?.toString().padStart(2, "0") || "00"}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar minuto" />
                      </SelectTrigger>
                      <SelectContent>
                        {MINUTES_LIST.map((minute) => (
                          <SelectItem
                            key={minute}
                            value={minute.toString().padStart(2, "0")}
                          >
                            {minute.toString().padStart(2, "0")}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <Button type="submit" disabled={!isValid || isSubmitting}>
          {isSubmitting ? "Creando experiencia..." : "Crear experiencia"}
        </Button>
      </form>
    </Form>
  );
}

export default CreateExperienceForm;
