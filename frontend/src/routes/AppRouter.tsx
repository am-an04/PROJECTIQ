import {

  BrowserRouter,

  Routes,

  Route,

} from "react-router-dom";

import SplashPage
from "../pages/Splash/SplashPage";

import LandingPage
from "../pages/Landing/LandingPage";

import LoginPage
from "../pages/Login/LoginPage";

import RegisterPage
from "../pages/Register/RegisterPage";
import DashboardPage from "../pages/Dashboard/DashboardPage";
export default function AppRouter() {

  return (

    <BrowserRouter>

      <Routes>

        <Route

          path="/"

          element={<SplashPage />}

        />

        <Route

          path="/home"

          element={<LandingPage />}

        />

        <Route

          path="/login"

          element={<LoginPage />}

        />

        <Route

          path="/register"

          element={<RegisterPage />}

        />
        
        <Route
          path="/dashboard"
          element={<DashboardPage />}
        />
      </Routes>

    </BrowserRouter>

  );

}