import React, { useState, useEffect, useRef, useCallback } from "react";
import { PROFILE } from "../data/portfolioData";
import { Cursor } from "./Common";

export function ContactTerminal() {
  const [history, setHistory] = useState([
    { type: "sys", text: "mahrukh@portfolio:~$ type 'help' to see available commands" },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [history]);

  const run = useCallback((raw) => {
    const cmd = raw.trim();
    if (!cmd) return;
    const lower = cmd.toLowerCase();
    let out = [];

    if (lower === "help") {
      out = [
        "available commands:",
        "  whoami       — who is mah rukh?",
        "  contact      — get in touch",
        "  socials      — linkedin / github",
        "  skills       — top stack, quick view",
        "  sudo hire mahrukh",
        "  clear        — clear the terminal",
      ];
    } else if (lower === "whoami") {
      out = ["mah_rukh — flutter dev & full-stack (MERN) engineer, based in Islamabad, PK."];
    } else if (lower === "contact") {
      out = [`email: ${PROFILE.email}`, `phone: ${PROFILE.phone}`, `location: ${PROFILE.location}`];
    } else if (lower === "socials") {
      out = [`linkedin: ${PROFILE.linkedin}`, `github: ${PROFILE.github}`];
    } else if (lower === "skills") {
      out = ["flutter · dart · react · node.js · firebase · mongodb · mvvm"];
    } else if (lower === "sudo hire mahrukh") {
      out = ["[sudo] password accepted.", "spinning up onboarding... done.", "welcome aboard. she'll bring the coffee, you bring the specs."];
    } else if (lower === "clear") {
      setHistory([]);
      return;
    } else {
      out = [`command not found: ${cmd} — type 'help'`];
    }

    setHistory((h) => [...h, { type: "in", text: cmd }, ...out.map((t) => ({ type: "out", text: t }))]);
  }, []);

  return (
    <div className="rc-terminal" onClick={() => document.getElementById("rc-term-input")?.focus()}>
      <div className="rc-terminal-bar">
        <span className="rc-dot rc-dot-r" /><span className="rc-dot rc-dot-y" /><span className="rc-dot rc-dot-g" />
        <span className="rc-terminal-title">mahrukh@portfolio: ~/contact</span>
      </div>
      <div className="rc-terminal-body" ref={scrollRef}>
        {history.map((l, i) => (
          <div key={i} className={`rc-term-line rc-term-${l.type}`}>
            {l.type === "in" && <span className="rc-term-prompt">$ </span>}
            {l.text}
          </div>
        ))}
        <div className="rc-term-line rc-term-in">
          <span className="rc-term-prompt">$ </span>
          <input
            id="rc-term-input"
            className="rc-term-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") { run(input); setInput(""); }
            }}
            spellCheck={false}
            autoComplete="off"
            aria-label="Terminal command input"
          />
          <Cursor />
        </div>
      </div>
    </div>
  );
}
