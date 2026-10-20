import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { JSX } from "react";

import { projects } from "@/content/projects";
import { Icon } from "@/components/ui/Icon";

// --- IKON FITUR UTAMA ---
const FeatureIcon = ({ name }: { name: string }) => {
  const icons: Record<string, JSX.Element> = {
    user: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    database: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    shield: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    bell: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
    monitor: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect width="20" height="14" x="2" y="3" rx="2" />
        <line x1="8" x2="16" y1="21" y2="21" />
        <line x1="12" x2="12" y1="17" y2="21" />
      </svg>
    ),
  };
  return icons[name] || icons.monitor;
};

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} — Detail Project`,
    description: project.context.short,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<Params>;
}): Promise<JSX.Element> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const mainShot = project.screenshots[0];
  const otherShots = project.screenshots.slice(1);

  if (!mainShot) notFound();

  return (
    <article className="min-h-screen bg-void pb-32 pt-8 md:pt-16">
      <div className="mx-auto w-full max-w-[1400px] px-[var(--gutter)]">
        {/* Navigasi Atas */}
        <div className="mb-12 flex items-center justify-between border-b border-hairline pb-6">
          <Link
            href="/#projects"
            className="flex items-center gap-2 font-mono text-meta uppercase text-text-3 transition-colors hover:text-accent"
          >
            <Icon name="arrow-right" size={16} className="rotate-180" /> Kembali
            ke Projects
          </Link>
          <div className="hidden items-center gap-4 lg:flex">
            <div className="h-px w-12 bg-hairline" />
            <span className="font-mono text-meta uppercase tracking-widest text-text-3">
              MASKANI
            </span>
            <div className="h-px w-12 bg-hairline" />
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* SIDEBAR KIRI */}
          <aside className="hidden lg:col-span-2 lg:block">
            <div className="sticky top-32 flex flex-col gap-6 border-l border-hairline pl-6">
              <Link
                href={`/projects/${project.slug}`}
                className="group flex items-center gap-3"
              >
                <span className="size-2 rounded-full bg-accent" />
                <div className="flex flex-col">
                  <span className="font-mono text-xs text-text-3">
                    {project.index}
                  </span>
                  <span className="font-mono text-sm uppercase text-text-1 transition-colors group-hover:text-accent">
                    {project.title}
                  </span>
                </div>
              </Link>

              <Link
                href="/#projects"
                className="group flex items-center gap-3 opacity-40 transition-opacity hover:opacity-100"
              >
                <span className="size-2 rounded-full bg-text-3 transition-colors group-hover:bg-accent" />
                <span className="font-mono text-sm uppercase text-text-3 transition-colors group-hover:text-text-1">
                  02 Portofolio
                </span>
              </Link>

              <Link
                href="/#projects"
                className="group flex items-center gap-3 opacity-40 transition-opacity hover:opacity-100"
              >
                <span className="size-2 rounded-full bg-text-3 transition-colors group-hover:bg-accent" />
                <span className="font-mono text-sm uppercase text-text-3 transition-colors group-hover:text-text-1">
                  03 Lainnya
                </span>
              </Link>
            </div>
          </aside>

          {/* KONTEN UTAMA */}
          <div className="flex flex-col gap-16 lg:col-span-10">
            {/* Header Project */}
            <header className="flex flex-col gap-8 md:flex-row md:justify-between">
              <div className="flex flex-col gap-4">
                <p className="font-mono text-sm uppercase text-accent">
                  / Project {project.index}
                </p>
                <h1 className="font-display text-[clamp(2.5rem,6vw,6rem)] uppercase leading-none text-text-1">
                  {project.title}
                </h1>
                <p className="text-xl text-text-2 md:text-3xl">
                  {project.subtitle}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-6 font-mono text-meta uppercase text-text-3">
                  <div className="flex items-center gap-2">
                    <svg
                      className="size-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    {project.org}
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="size-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                      <path d="M16 2v4M8 2v4M3 10h18" />
                    </svg>
                    {project.period}
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="size-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    {project.role}
                  </div>
                </div>
              </div>
            </header>

            {/* Galeri Screenshot Utama (Dikecilkan) */}
            <section className="flex flex-col gap-4">
              <div className="mx-auto flex w-full max-w-4xl items-center justify-between font-mono text-meta uppercase">
                <span className="text-accent">
                  {mainShot.id} {mainShot.title}
                </span>
                <span className="text-text-3">Tampilan Halaman Utama</span>
              </div>

              {/* max-w-4xl membatasi lebar gambar agar tidak terlalu besar */}
              <div className="relative mx-auto aspect-[16/9] w-full max-w-4xl overflow-hidden rounded-[var(--radius-md)] border border-hairline bg-surface-1 p-2 md:p-4">
                <div className="relative h-full w-full overflow-hidden rounded-sm">
                  <Image
                    src={mainShot.src}
                    alt={mainShot.alt}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </section>

            {/* Grid 2 Kolom: Kiri Teks, Kanan Fitur & Screenshot */}
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Kolom Kiri */}
              <div className="flex flex-col gap-12">
                <section>
                  <h2 className="mb-4 flex items-center gap-4 font-display text-2xl uppercase">
                    Tentang Proyek <span className="h-px w-12 bg-accent" />
                  </h2>
                  <p className="text-body text-text-2 leading-relaxed">
                    {project.context.short}
                  </p>
                </section>

                <section>
                  <h2 className="mb-6 flex items-center gap-4 font-display text-2xl uppercase">
                    Fitur Utama <span className="h-px w-12 bg-accent" />
                  </h2>
                  <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
                    {project.features.map((f) => (
                      <div key={f.title} className="flex flex-col gap-3">
                        <div className="flex size-12 items-center justify-center rounded-md bg-surface-1 text-accent border border-hairline">
                          {/* Ikon disesuaikan dengan narasi */}
                          <FeatureIcon name={f.icon} />
                        </div>
                        <p className="text-sm font-semibold text-text-1 leading-tight">
                          {f.title}
                        </p>
                        <p className="text-xs text-text-3 leading-tight">
                          {f.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 flex items-center gap-4 font-display text-2xl uppercase">
                    Tech Stack <span className="h-px w-12 bg-accent" />
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-hairline px-4 py-1.5 font-mono text-meta uppercase text-text-2"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </section>
              </div>

              {/* Kolom Kanan */}
              <div className="flex flex-col gap-8">
                {/* Screenshot 2 & 3 */}
                <div className="flex flex-col gap-12">
                  {otherShots.map((shot) => (
                    <div key={shot.id} className="flex flex-col gap-4">
                      <div className="flex items-center gap-3 font-mono text-sm uppercase text-accent">
                        <span className="flex size-8 items-center justify-center rounded-full bg-accent/10 border border-accent/20">
                          {shot.id}
                        </span>
                        <span className="text-lg text-text-1">
                          {shot.title}
                        </span>
                        <span className="text-text-3 ml-auto">
                          Tampilan {shot.title}
                        </span>
                      </div>

                      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[var(--radius-md)] border border-hairline bg-surface-1 p-2 md:p-4">
                        <div className="relative h-full w-full overflow-hidden rounded-sm">
                          <Image
                            src={shot.src}
                            alt={shot.alt}
                            fill
                            className="object-contain"
                            sizes="(min-width: 1024px) 60vw, 100vw"
                          />
                        </div>
                      </div>

                      <p className="text-base text-text-2 leading-relaxed">
                        {shot.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Detail Peran */}
                <div className="mt-4 rounded-lg border border-hairline bg-surface-1 p-6">
                  <h3 className="mb-4 font-mono text-sm uppercase text-accent">
                    Detail Peran
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {project.roleDetails.map((detail, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-text-2"
                      >
                        <span className="mt-1.5 size-1.5 shrink-0 rotate-45 bg-accent" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 border-l-2 border-accent pl-4">
                    <p className="italic text-text-3">
                      &ldquo;{project.closingQuote}&rdquo;
                    </p>
                    <p className="mt-2 font-display text-text-1">— Maskani</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
