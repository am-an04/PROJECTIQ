import { Link } from "react-router-dom";
import Container from "../ui/Container";
import Logo from "../ui/Logo";
import Button from "../ui/Button";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 backdrop-blur-xl bg-[#050816]/70">
      <Container>
        <nav className="h-20 flex items-center justify-between">

          <Logo />

          <ul className="hidden lg:flex items-center gap-10 text-sm text-gray-300">

            <li className="cursor-pointer hover:text-cyan-400 transition">
              Features
            </li>

            <li className="cursor-pointer hover:text-cyan-400 transition">
              How It Works
            </li>

            <li className="cursor-pointer hover:text-cyan-400 transition">
              About
            </li>

            <li className="cursor-pointer hover:text-cyan-400 transition">
              Pricing
            </li>

            <li className="cursor-pointer hover:text-cyan-400 transition">
              Contact
            </li>

          </ul>

          <div className="flex items-center gap-3">

            <Link to="/login">
              <Button
                 variant="outline"
                  className="w-28">
                 Login
              </Button>
            </Link>

              <Button
                  className="w-36">
                  Get Started
              </Button>

          </div>

        </nav>
      </Container>
    </header>
  );
}