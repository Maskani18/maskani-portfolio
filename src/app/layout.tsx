import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Space_Mono, Inter } from "next/font/google";

import { Effects } from "@/components/layout/Effects.client";
import { SiteNav } from "@/components/layout/SiteNav.client";
import { SkipLink } from "@/components/layout/SkipLink";
import { TIER_SCRIPT } from "@/motion/runtime/tier-script";
import { profile } from "@/content/profile";
import { SmoothScroll } from "@/motion/runtime/smooth-scroll.client";
import { TraceLayer } from "@/systems/trace/TraceLayer.client";
import { CursorSystem } from "@/systems/cursor/CursorSystem.client";

import "./globals.css";

// Font Display: Rostex (Local File)
const rostex = localFont({
  src: "../fonts/rostex.ttf",
  variable: "--font-rostex",
  display: "swap",
});

// Font Mono: Space Mono (400, 700)
const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

// Font Body: Inter (Variable)
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maskani",
  description:
    "Fresh Graduate D4 Rekayasa Perangkat Lunak dari Politeknik Negeri Indramayu dengan pengalaman praktik di bidang IT Support, Software Quality Assurance, dan Frontend Development.",
  metadataBase: new URL("https://maskani-portfolio.vercel.app"),
};

export const viewport: Viewport = {
  themeColor: "#090B0D",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
  report,
}: Readonly<{
  children: React.ReactNode;
  report?: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${rostex.variable} ${spaceMono.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: TIER_SCRIPT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: profile.name,
              jobTitle: profile.fields.join(" · "),
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Politeknik Negeri Indramayu",
              },
              sameAs: [profile.linkedin],
            }),
          }}
        />
      </head>

      <body>
        <SmoothScroll />
        <Effects />
        <TraceLayer />
        <CursorSystem />
        <SkipLink />

        <header
          id="site-header"
          className="sticky top-0 z-[80] border-b border-hairline bg-[var(--color-void)]/75 backdrop-blur-[var(--nav-blur)]"
        >
          <SiteNav />
        </header>

        <main id="main" className="relative">
          {children}
          {report}
        </main>
      </body>
    </html>
  );
}
