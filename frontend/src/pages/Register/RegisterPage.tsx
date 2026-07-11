import AuthLayout from "../../layouts/AuthLayout";
import AuthIllustration from "../../components/auth/AuthIllustartion";
import RegisterForm from "../../components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <AuthLayout>
      <AuthIllustration />
      <RegisterForm />
    </AuthLayout>
  );
}