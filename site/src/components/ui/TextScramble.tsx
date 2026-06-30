import { useEffect, useState } from "react";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%";

export function TextScramble({ text, className = "" }: { text: string; className?: string }) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < iteration) return text[i];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join(""),
      );
      iteration += 0.5;
      if (iteration >= text.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, [text]);

  return <span className={className}>{display}</span>;
}
