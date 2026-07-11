import AuthLayout from "../../layouts/AuthLayout";
import AuthIllustration from "../../components/auth/AuthIllustartion";
import LoginForm from "../../components/auth/LoginForm";

export default function LoginPage() {
  return (
    <AuthLayout>
      <AuthIllustration />
      <LoginForm />
    </AuthLayout>
  );
}