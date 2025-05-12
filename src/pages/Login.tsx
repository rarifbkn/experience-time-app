import AuthLayout from "@/components/layout/authLayout";
import LoginUserForm from "@/components/auth/login-user-form";

function Login() {
  return (
    <AuthLayout
      title="iniciar sesion"
      subtitle="Accede con tus credenciales"
      urlRedirect="/register"
      textRedirect="Registrarse"
    >
      <LoginUserForm />
    </AuthLayout>
  );
}

export default Login;
