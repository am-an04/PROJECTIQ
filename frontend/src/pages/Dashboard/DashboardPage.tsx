import DashboardLayout from "../../layouts/DashboardLayout";
import Sidebar from "../../components/dashboard/Sidebar/Sidebar";
import Header from "../../components/dashboard/Header/Header";
import WelcomeBanner from "../../components/dashboard/Welcome/WelcomeBanner";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <Sidebar />

      <div className="flex flex-1 flex-col">

        <Header />

        <main className="space-y-8 p-8">

          <WelcomeBanner />

        </main>

      </div>

    </DashboardLayout>
  );
}