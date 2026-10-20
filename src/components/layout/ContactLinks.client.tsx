"use client";

import { useSyncExternalStore } from "react";
import { Mail } from "lucide-react";
import { profile } from "@/content/profile";

function subscribeNoop(): () => void {
  return () => {};
}
function getSnapshot(): boolean {
  return true;
}
function getServerSnapshot(): boolean {
  return false;
}

export function ContactEmail() {
  const hydrated = useSyncExternalStore(
    subscribeNoop,
    getSnapshot,
    getServerSnapshot,
  );
  const email = hydrated
    ? `${profile.emailParts.local}@${profile.emailParts.domain}`
    : "Memuat...";
  const mailto = hydrated ? `mailto:${email}` : "#";

  return (
    <a href={mailto} className="group flex items-center gap-4">
      <div className="flex size-12 shrink-0 items-center justify-center rounded-md border border-accent/50 bg-accent/5 text-accent transition-colors group-hover:border-accent group-hover:bg-accent/20">
        <Mail size={20} />
      </div>
      <div className="flex flex-col">
        <span className="font-mono text-xs uppercase tracking-widest text-accent">
          Email
        </span>
        <span className="text-base font-medium text-text-1 transition-colors group-hover:text-accent">
          {email}
        </span>
      </div>
    </a>
  );
}
