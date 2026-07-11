import { Link } from "react-router-dom";
import { Lock, Mail } from "lucide-react";

import Button from "../ui/Button";

export default function LoginForm() {
  return (
    <div className="flex min-h-[720px] items-center justify-center p-12">

      <div className="w-full max-w-md">

        <h1 className="text-4xl font-bold">
          Welcome Back
        </h1>

        <p className="mt-4 text-slate-400">
          Login to continue your ProjectIQ journey.
        </p>

        <form className="mt-10 space-y-6">

          {/* Email */}

          <div>

            <label className="mb-3 block text-sm font-medium text-slate-300">
              Email Address
            </label>

            <div
              className="
                flex
                h-14
                items-center
                rounded-2xl
                border
                border-slate-700
                bg-slate-800/60
                px-5
                transition
                duration-300
                focus-within:border-cyan-400
                focus-within:ring-2
                focus-within:ring-cyan-500/20
              "
            >

              <Mail
                size={20}
                className="text-slate-500"
              />

              <input
                type="email"
                placeholder="Enter your email"
                className="
                  w-full
                  bg-transparent
                  px-4
                  text-white
                  placeholder:text-slate-500
                  outline-none
                "
              />

            </div>

          </div>

          {/* Password */}

          <div>

            <label className="mb-3 block text-sm font-medium text-slate-300">
              Password
            </label>

            <div
              className="
                flex
                h-14
                items-center
                rounded-2xl
                border
                border-slate-700
                bg-slate-800/60
                px-5
                transition
                duration-300
                focus-within:border-cyan-400
                focus-within:ring-2
                focus-within:ring-cyan-500/20
              "
            >

              <Lock
                size={20}
                className="text-slate-500"
              />

              <input
                type="password"
                placeholder="••••••••"
                className="
                  w-full
                  bg-transparent
                  px-4
                  text-white
                  placeholder:text-slate-500
                  outline-none
                "
              />

            </div>

          </div>

          {/* Bottom */}

          <div className="flex items-center justify-between text-sm">

            <label className="flex items-center gap-2 text-slate-400">

              <input
                type="checkbox"
                className="accent-cyan-400"
              />

              Remember Me

            </label>

            <Link
              to="/forgot-password"
              className="text-cyan-400 hover:underline"
            >
              Forgot Password?
            </Link>

          </div>

          <Button className="w-full">
            Login
          </Button>

        </form>

        <p className="mt-8 text-center text-slate-400">

          Don't have an account?

          <Link
            to="/register"
            className="ml-2 text-cyan-400 hover:underline"
          >
            Register
          </Link>

        </p>

      </div>

    </div>
  );
}