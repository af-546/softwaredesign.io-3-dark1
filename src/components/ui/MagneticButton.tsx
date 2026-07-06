import { useRef, type ReactNode, type MouseEvent } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";

function useMagnetic(strength: number) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 320, damping: 22 });
  const springY = useSpring(y, { stiffness: 320, damping: 22 });

  const handleMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * strength);
    y.set((e.clientY - rect.top - rect.height / 2) * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { ref, springX, springY, handleMove, handleLeave };
}

export function MagneticButton({
  children,
  className = "",
  onClick,
  strength = 0.28,
  type = "button",
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  strength?: number;
  type?: "button" | "submit";
}) {
  const { ref, springX, springY, handleMove, handleLeave } = useMagnetic(strength);

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="inline-block"
    >
      <button
        type={type}
        className={className}
        onClick={onClick}
        data-cursor="pointer"
      >
        {children}
      </button>
    </motion.div>
  );
}

export function MagneticLink({
  children,
  to,
  className = "",
  strength = 0.22,
  onClick,
}: {
  children: ReactNode;
  to: string;
  className?: string;
  strength?: number;
  onClick?: () => void;
}) {
  const { ref, springX, springY, handleMove, handleLeave } = useMagnetic(strength);

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="inline-block"
    >
      <Link to={to} className={className} onClick={onClick} data-cursor="pointer">
        {children}
      </Link>
    </motion.div>
  );
}

export function TiltCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(y, { stiffness: 260, damping: 24 });
  const rotateY = useSpring(x, { stiffness: 260, damping: 24 });

  const handleMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 14);
    rotateX.set(-py * 14);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
