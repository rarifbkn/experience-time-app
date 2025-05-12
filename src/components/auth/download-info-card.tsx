import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DownloadInfoForm from "@/components/auth/download-info-form";

function DownloadFilesFromForm() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Descargar archivos</CardTitle>
        <CardDescription>Ingresa el token de autenticación</CardDescription>
      </CardHeader>
      <CardContent>
        <DownloadInfoForm />
      </CardContent>
    </Card>
  );
}

export default DownloadFilesFromForm;
