// MASKANI — Button (§8.3).
// Dua varian, target ≥48px. Bisa jadi <a> (href) atau <button> (onClick).

import type { JSX } from "react";

type CommonProps = {
  variant?: "primary" | "secondary";
  className?: string;
  children: React.ReactNode;
};

export type ButtonLinkProps = CommonProps & {
  href: string;
  external?: boolean;
  onClick?: never;
  "aria-disabled"?: boolean;
};

export type ButtonActionProps = CommonProps & {
  href?: never;
  external?: never;
  onClick: () => void;
  "aria-disabled"?: boolean;
};

export type ButtonProps = ButtonLinkProps | ButtonActionProps;

const BASE =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 text-ui font-medium transition-colors duration-[var(--dur-fast)] ease-[var(--ease-out)]";

const VARIANT: Record<"primary" | "secondary", string> = {
  primary:
    "bg-accent text-on-accent hover:bg-accent-hover active:bg-accent-hover",
  secondary:
    "border border-hairline-strong text-text-1 hover:border-accent hover:text-accent",
};

export function Button(props: ButtonProps): JSX.Element {
  const { variant = "primary", className = "", children } = props;
  const cls = `${BASE} ${VARIANT[variant]} ${className}`.trim();

  if ("href" in props && props.href !== undefined) {
    const { href, external } = props;
    return (
      <a
        href={href}
        rel={external ? "noopener noreferrer" : undefined}
        target={external ? "_blank" : undefined}
        aria-disabled={props["aria-disabled"]}
        className={cls}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={props.onClick}
      aria-disabled={props["aria-disabled"]}
      className={cls}
    >
      {children}
    </button>
  );
}
