"use client";

// MASKANI — Copy Email + Open Email (§7.2, §7.3, A-07).
//
// Email TIDAK ADA di HTML server (K-18). Dirakit di client setelah hydration.
// Hydration flag pakai useSyncExternalStore (SSR: false, client: true) agar
// tidak ada hydration mismatch DAN tidak ada setState di dalam effect.
// Clipboard API → state success/failure. Timer 2400ms, satu timer aktif.

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { LiveRegion } from "@/components/ui/LiveRegion";
import { profile } from "@/content/profile";

type State = "idle" | "success" | "failure";

const RESET_MS = 2400;

// Flag hydration: false saat SSR, true setelah client mount.
// Tidak pernah memicu re-render loop.
function subscribeNoop(): () => void {
  return () => {};
}
function getSnapshot(): boolean {
  return true;
}
function getServerSnapshot(): boolean {
  return false;
}

export function ContactActions() {
  const hydrated = useSyncExternalStore(
    subscribeNoop,
    getSnapshot,
    getServerSnapshot,
  );
  const [state, setState] = useState<State>("idle");
  const [announce, setAnnounce] = useState("");
  const timer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current !== null) window.clearTimeout(timer.current);
    };
  }, []);

  const email = hydrated
    ? `${profile.emailParts.local}@${profile.emailParts.domain}`
    : null;
  const mailto = email ? `mailto:${email}` : null;

  function resetTimer(): void {
    if (timer.current !== null) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      setState("idle");
      setAnnounce("");
      timer.current = null;
    }, RESET_MS);
  }

  async function copy(): Promise<void> {
    if (!email) return;
    let ok = false;
    try {
      await navigator.clipboard.writeText(email);
      ok = true;
    } catch {
      ok = false;
    }
    if (ok) {
      setState("success");
      setAnnounce("Email copied to clipboard.");
      resetTimer();
      return;
    }
    setState("failure");
    setAnnounce("Couldn't copy. Use Open email or select the address below.");
    resetTimer();
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-3">
        <Button onClick={copy} variant="primary" className="min-w-[12rem]">
          {state === "success" ? (
            <>
              <Icon name="check" size={18} />
              Email copied
            </>
          ) : (
            <>
              <Icon name="copy" size={18} />
              Copy email
            </>
          )}
        </Button>

        {mailto ? (
          <Button href={mailto} variant="secondary">
            <Icon name="mail" size={18} />
            Open email
          </Button>
        ) : (
          <span
            aria-hidden="true"
            className="inline-flex min-h-12 items-center gap-2 rounded-md border border-hairline-strong px-5 text-ui font-medium text-text-2"
          >
            <Icon name="mail" size={18} />
            Open email
          </span>
        )}
      </div>

      {state === "failure" && email ? (
        <p className="max-w-[62ch] text-body text-text-2">
          {announce} You can select the address below:
          <br />
          <span className="mt-2 inline-block font-mono text-meta uppercase text-text-1 select-all">
            {email}
          </span>
        </p>
      ) : null}

      <LiveRegion>{announce}</LiveRegion>
    </div>
  );
}
