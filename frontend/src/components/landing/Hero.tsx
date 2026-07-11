import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AiAssistant  from "../common/AiAssistant";
import Container from "../ui/Container";
import Button from "../ui/Button";
import HeroBadge from "./HeroBadge";
export default function Hero() {

  return (

    <section className="min-h-screen flex items-center">

      <Container>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <motion.div

            initial={{ opacity: 0, x: -60 }}

            animate={{ opacity: 1, x: 0 }}

            transition={{ duration: 1 }}

          >

            <HeroBadge />

            <h1 className="mt-8 text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight
">

              Build

              <span className="text-cyan-400">

                {" "}Smarter

              </span>

              <br />

              Software Projects

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-9 text-slate-300
">

              ProjectIQ transforms your ideas into complete

              software solutions using intelligent recommendation,

              planning, architecture generation, evaluation,

              improvement and analytics.

            </p>

            <div className="mt-12 flex flex-wrap gap-4">

              <Link to="/login">
                <Button
                  variant="outline"
                  className="w-28"
                >
                  Login
                </Button>
              </Link>

                <Link to="/register">
                  <Button
                    className="w-36"
                  >
                    Get Started
                  </Button>
                </Link>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div

            initial={{ opacity: 0, x: 60 }}

            animate={{ opacity: 1, x: 0 }}

            transition={{ duration: 1 }}

            className="flex justify-center"

          >

            <div className="relative">

    {/* Glow */}

    <div

        className="
        absolute
        inset-0
        rounded-full
        bg-cyan-400/20
        blur-[100px]
        "

    />

    {/* Circle */}

    <div

        className="
        relative
        w-[420px]
        h-[420px]
        rounded-full
        border
        border-cyan-400/20
        bg-slate-900/50
        backdrop-blur-xl
        flex
        items-center
        justify-center
        shadow-[0_0_80px_rgba(34,211,238,0.2)]
        "

    >

       <AiAssistant />

    </div>

</div>

          </motion.div>

        </div>

      </Container>

    </section>

  );

}