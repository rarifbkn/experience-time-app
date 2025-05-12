import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FormToLoginForm from "@/components/auth/form-to-login-form";

function LoginFormCard() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Ingresar a la encuesta</CardTitle>
        <CardDescription>Ingresa el token de autenticación</CardDescription>
      </CardHeader>
      <CardContent>
        <FormToLoginForm />
      </CardContent>
    </Card>
  );
}

export default LoginFormCard;
