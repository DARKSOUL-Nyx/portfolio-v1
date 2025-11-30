"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const BootSequence = ({ onComplete }: { onComplete: () => void }) => {
    const [text, setText] = useState<string[]>([]);

    const lines = [
        "> ESTABLISHING SECURE CONNECTION...",
        "> BYPASSING FIREWALL [OK]",
        "> MOUNTING KERNEL: DARK_SOUL",
        "> SYSTEM READY."
    ];

    useEffect(() => {
        let lineIndex = 0;

        const interval = setInterval(() => {
            if (lineIndex < lines.length) {
                setText((prev) => [...prev, lines[lineIndex]]);
                lineIndex++;
            } else {
                clearInterval(interval);
                setTimeout(onComplete, 500); // Tell parent we are done
            }
        }, 600); // Speed of each line appearing

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="font-mono text-xs md:text-sm text-neon-cyan/70 h-24 flex flex-col justify-end pb-4">
            {text.map((line, i) => (
                <div key={i}>{line}</div>
            ))}
            <div className="flex items-center">
                <span className="text-neon-purple mr-2">{">"}</span>
                <span className="w-2 h-4 bg-neon-cyan cursor-blink"></span>
            </div>
        </div>
    );
};

export default BootSequence;