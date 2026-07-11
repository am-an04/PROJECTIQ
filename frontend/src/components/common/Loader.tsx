import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      className="w-24 h-24 rounded-full border-4 border-cyan-500 border-t-transparent"
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        duration: 1,
        ease: "linear",
      }}
    />
  );
}