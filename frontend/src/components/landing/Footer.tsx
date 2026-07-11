import Container from "../ui/Container";
import Logo from "../ui/Logo";

export default function Footer() {
  return (
    <footer className="pt-60 pb-36"
  style={{
    marginTop: "100px",
    background: "black-500/20",
  }}>
      <Container>
        <div
          className="
            grid
            gap-12
            md:grid-cols-2
            lg:grid-cols-4
          "
        >
          {/* Brand */}

          <div>
            <Logo />

            <p
              className="
                mt-6
                leading-8
                text-slate-400
              "
            >
              ProjectIQ is an AI-powered platform that helps
              developers transform ideas into industry-ready
              software projects using intelligent recommendations,
              planning, architecture, evaluation, improvement,
              and analytics.
            </p>
          </div>

          {/* Product */}

          <div>
            <h3 className="text-xl font-semibold">
              Product
            </h3>

            <ul
              className="
                mt-6
                space-y-4
                text-slate-400
              "
            >
              <li className="cursor-pointer hover:text-cyan-400 transition">
                Features
              </li>

              <li className="cursor-pointer hover:text-cyan-400 transition">
                How It Works
              </li>

              <li className="cursor-pointer hover:text-cyan-400 transition">
                Pricing
              </li>

              <li className="cursor-pointer hover:text-cyan-400 transition">
                Roadmap
              </li>
            </ul>
          </div>

          {/* Resources */}

          <div>
            <h3 className="text-xl font-semibold">
              Resources
            </h3>

            <ul
              className="
                mt-6
                space-y-4
                text-slate-400
              "
            >
              <li className="cursor-pointer hover:text-cyan-400 transition">
                Documentation
              </li>

              <li className="cursor-pointer hover:text-cyan-400 transition">
                Blog
              </li>

              <li className="cursor-pointer hover:text-cyan-400 transition">
                FAQs
              </li>

              <li className="cursor-pointer hover:text-cyan-400 transition">
                Support
              </li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-xl font-semibold">
              Connect
            </h3>

            <div
              className="
                mt-6
                space-y-4
                text-slate-400
              "
            >
              <p className="cursor-pointer hover:text-cyan-400 transition">
                GitHub
              </p>

              <p className="cursor-pointer hover:text-cyan-400 transition">
                LinkedIn
              </p>

              <p className="cursor-pointer hover:text-cyan-400 transition">
                contact@projectiq.ai
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div
          className="
            mt-16
            border-t
            border-slate-800
            pt-8
            text-center
            text-slate-500
          "
        >
          © 2026 ProjectIQ. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
}