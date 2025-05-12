import DownloadFilesFromForm from "@/components/auth/download-info-card";
import LoginFormCard from "@/components/auth/login-form-card";
import AuthLayout from "@/components/layout/authLayout";
function Login() {
  return (
    <AuthLayout
      title="iniciar sesion"
      subtitle="Accede con tus credenciales"
      urlRedirect="/register"
      textRedirect="Registrarse"
    >
      <div className="flex justify-between gap-4">
        <LoginFormCard />
        <DownloadFilesFromForm />
      </div>
    </AuthLayout>
  );
}

export default Login;
