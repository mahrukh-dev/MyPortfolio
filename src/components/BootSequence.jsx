import React, { useState, useEffect, useRef } from "react";
import { BOOT_LINES } from "../data/portfolioData";
import { Cursor } from "./Common";

export function BootSequence({ onDone }) {
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [doneLines, setDoneLines] = useState([]);
  const finishing = useRef(false);

  useEffect(() => {
    if (lineIdx >= BOOT_LINES.length) {
      if (!finishing.current) {
        finishing.current = true;
        const t = setTimeout(onDone, 500);
        return () => clearTimeout(t);
      }
      return;
    }
    const current = BOOT_LINES[lineIdx];
    if (charIdx < current.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), 14);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setDoneLines((d) => [...d, current]);
      setLineIdx((i) => i + 1);
      setCharIdx(0);
    }, 160);
    return () => clearTimeout(t);
  }, [lineIdx, charIdx, onDone]);

  return (
    <div className="rc-boot" onClick={onDone}>
      <div className="rc-boot-inner">
        {doneLines.map((l, i) => (
          <div key={i} className="rc-boot-line">{l}</div>
        ))}
        {lineIdx < BOOT_LINES.length && (
          <div className="rc-boot-line">
            {BOOT_LINES[lineIdx].slice(0, charIdx)}
            <Cursor />
          </div>
        )}
        <div className="rc-boot-skip">click / press any key to skip</div>
      </div>
    </div>
  );
}
