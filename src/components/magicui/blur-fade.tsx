import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface BlurFadeProps {
  children: React.ReactNode;
  delay?: number;
  inView?: boolean;
  className?: string;
  yOffset?: number;
}

export default function BlurFade({
  children,
  delay = 0,
  inView = false,
  yOffset = 10,
  className = "",
}: BlurFadeProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset, filter: "blur(10px)" }}
      animate={
        inView
          ? isInView
            ? { opacity: 1, y: -yOffset, filter: "blur(0px)" }
            : { opacity: 0, y: yOffset, filter: "blur(10px)" }
          : { opacity: 1, y: -yOffset, filter: "blur(0px)" }
      }
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
