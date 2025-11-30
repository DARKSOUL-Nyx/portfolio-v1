import { useEffect, useState, useRef } from "react";

const CYBER_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=[]{}|;:,.<>?";

export const useScramble = (targetText: string, speed: number = 30, trigger: boolean = true) => {
  const [text, setText] = useState(targetText);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // We expose a 'play' function so we can restart it manually if needed
  const play = () => {
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

      iterations += 1 / 3;
    }, speed);
  };

  // Watch the 'trigger'. If it turns true, START.
  useEffect(() => {
    if (trigger) {
      play();
    }
  }, [trigger]);

  return { text, scramble: play };
};