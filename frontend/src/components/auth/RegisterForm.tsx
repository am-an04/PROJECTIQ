import { Link } from "react-router-dom";
import { Mail, Lock, User } from "lucide-react";

import Button from "../ui/Button";

export default function RegisterForm() {
  return (
    <div className="flex min-h-[720px] items-center justify-center p-12">
      <div className="w-full max-w-md">

        <h1 className="text-4xl font-bold">
          Create Account
        </h1>

        <p className="mt-4 text-slate-400">
          Join ProjectIQ and start building industry-ready software projects.
        </p>

        <form className="mt-10 space-y-6">

          {/* Full Name */}

          <div>
            <label className="mb-2 block text-sm font-medium">
              Full Name
            </label>

            <div className="flex h-14 items-center rounded-2xl border border-slate-700 bg-slate-800/60 px-5">
              <User size={20} className="text-slate-500" />

              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-transparent px-4 outline-none"
              />
            </div>
          </div>

          {/* Email */}

          <div>
            <label className="mb-2 block text-sm font-medium">
              Email
            </label>

            <div className="flex h-14 items-center rounded-2xl border border-slate-700 bg-slate-800/60 px-5">
              <Mail size={20} className="text-slate-500" />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent px-4 outline-none"
              />
            </div>
          </div>

          {/* Password */}

          <div>
            <label className="mb-2 block text-sm font-medium">
              Password
            </label>

            <div className="flex h-14 items-center rounded-2xl border border-slate-700 bg-slate-800/60 px-5">
              <Lock size={20} className="text-slate-500" />

              <input
                type="password"
                placeholder="Password"
                className="w-full bg-transparent px-4 outline-none"
              />
            </div>
          </div>

          <Button className="w-full">
            Create Account
          </Button>

        </form>

        <p className="mt-8 text-center text-slate-400">
          Already have an account?

          <Link
            to="/login"
            className="ml-2 text-cyan-400 hover:underline"
          >
            Login
          </Link>

        </p>

      </div>
    </div>
  );
}