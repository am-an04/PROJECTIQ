import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import Loader from "../../components/common/Loader";
import EngineStatus from "../../components/common/EngineStatus";

export default function SplashPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 4500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#050816] flex items-center justify-center">

      <div className="text-center">

        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="text-7xl font-bold text-cyan-400"
        >
          PROJECT IQ
        </motion.h1>

        <motion.p
          className="mt-6 text-gray-400 text-xl"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.8,
          }}
        >
          Initializing AI Engines...
        </motion.p>

        <div className="mt-10 flex justify-center">

          <Loader />

        </div>

        <div className="mt-12 space-y-4">

          <EngineStatus
            title="Recommendation Engine"
            delay={1}
          />

          <EngineStatus
            title="Planning Engine"
            delay={1.4}
          />

          <EngineStatus
            title="Architecture Engine"
            delay={1.8}
          />

          <EngineStatus
            title="Evaluation Engine"
            delay={2.2}
          />

          <EngineStatus
            title="Improvement Engine"
            delay={2.6}
          />

          <EngineStatus
            title="Analytics Engine"
            delay={3}
          />

        </div>
      </div>
    </div>
  );
}