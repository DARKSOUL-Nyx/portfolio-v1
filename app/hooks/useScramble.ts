// app/hooks/useScramble.ts
import { useEffect, useState, useRef } from "react";

const CYBER_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=[]{}|;:,.<>?";

export const useScramble = (targetText: string, speed: number = 30) => {
  const [text, setText] = useState(targetText);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scramble = () => {
    let iterations = 0;

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setText((prev) =>
        targetText
          .split("")
          .map((letter, index) => {
            if (index < iterations) {
              return targetText[index];
            }
            return CYBER_CHARS[Math.floor(Math.random() * CYBER_CHARS.length)];
          })
          .join("")
      );

      if (iterations >= targetText.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }

      iterations += 1 / 3; // Controls how fast the real letters reveal
    }, speed);
  };

  return { text, scramble };
};