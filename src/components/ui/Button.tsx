import type { JSX } from "react";

export type ButtonProps = {
  variant?: "primary" | "secondary";
  className?: string;
  magnetic?: boolean; // Properti baru
  children: React.ReactNode;
} & (
  | {
      href: string;
      external?: boolean;
      onClick?: never;
      "aria-disabled"?: boolean;
    }
  | {
      href?: never;
      external?: never;
      onClick: () => void;
      "aria-disabled"?: boolean;
    }
);

const BASE =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 text-ui font-medium transition-colors duration-[var(--dur-fast)] ease-[var(--ease-out)]";
const VARIANT: Record<"primary" | "secondary", string> = {
  primary:
    "bg-accent text-on-accent hover:bg-accent-hover active:bg-accent-hover",
  secondary:
    "border border-hairline-strong text-text-1 hover:border-accent hover:text-accent",
};

export function Button(props: ButtonProps): JSX.Element {
  const {
    variant = "primary",
    className = "",
    magnetic = false,
    children,
  } = props;
  const cls = `${BASE} ${VARIANT[variant]} ${className}`.trim();

  // Tambahkan data-magnetic jika prop true
  const magAttr = magnetic ? { "data-magnetic": "" } : {};

  if ("href" in props && props.href !== undefined) {
    const { href, external } = props;
    return (
      <a
        href={href}
        rel={external ? "noopener noreferrer" : undefined}
        target={external ? "_blank" : undefined}
        aria-disabled={props["aria-disabled"]}
        className={cls}
        {...magAttr}
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
      {...magAttr}
    >
      {children}
    </button>
  );
}
