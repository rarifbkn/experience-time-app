import AuthLayout from "@/components/layout/authLayout";

function Register() {
  return (
    <AuthLayout
      title="Registro"
      subtitle="Crea una cuenta"
      urlRedirect="/login"
      textRedirect="Iniciar sesion"
    >
      <div>Wua</div>
    </AuthLayout>
  );
}

export default Register;
