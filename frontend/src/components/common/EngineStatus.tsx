import { motion } from "framer-motion";

interface Props {
  title: string;
  delay: number;
}

export default function EngineStatus({
  title,
  delay,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -20,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        delay,
      }}
      className="flex gap-3 items-center text-lg"
    >
      <div className="w-3 h-3 rounded-full bg-green-400" />

      <span>{title}</span>
    </motion.div>
  );
}