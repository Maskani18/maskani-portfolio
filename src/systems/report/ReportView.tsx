import Image from "next/image";
import { Building2, Calendar, User } from "lucide-react";

import type { Project } from "@/content/types";
import { Icon } from "@/components/ui/Icon";

export function ReportView({ project }: { project: Project }) {
  const mainShot = project.screenshots?.[0];
  const otherShots = project.screenshots?.slice(1) || [];

  if (!mainShot) return null;

  return (
    <article className="relative w-full bg-void pb-24 pt-8">
      <div className="mx-auto w-full max-w-[1400px] px-[var(--gutter)]">
        {/* Navigasi Atas (Tanpa Tombol Kembali) */}
        <div className="mb-12 flex items-center justify-end border-b border-hairline pb-6">
          <div className="hidden items-center gap-4 lg:flex">
            <div className="h-px w-12 bg-hairline" />
            <span className="font-mono text-meta uppercase tracking-widest text-text-3">
              MASKANI
            </span>
            <div className="h-px w-12 bg-hairline" />
          </div>
        </div>

        {/* Header Project */}
        <header className="mb-16">
          <p className="font-mono text-sm uppercase text-accent">
            / Project {project.index}
          </p>

          <h1 className="mt-4 font-display text-[clamp(2.5rem,6vw,6rem)] uppercase leading-none text-text-1">
            {project.title}
          </h1>

          <p className="mt-4 text-xl text-text-2 md:text-3xl">
            {project.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6 font-mono text-sm uppercase text-text-3">
            <span className="flex items-center gap-2">
              <Building2 size={16} className="text-accent" />
              {project.org}
            </span>

            <span className="flex items-center gap-2">
              <Calendar size={16} className="text-accent" />
              {project.period}
            </span>

            <span className="flex items-center gap-2">
              <User size={16} className="text-accent" />
              {project.role}
            </span>
          </div>
        </header>

        {/* Galeri Utama */}
        <section className="mb-16">
          <div className="mb-4 flex items-center justify-between font-mono text-meta uppercase">
            <span className="text-accent">
              {mainShot.id} {mainShot.title}
            </span>
            <span className="text-text-3">Tampilan Utama</span>
          </div>

          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[var(--radius-md)] border border-hairline bg-surface-1 p-4">
            <Image
              src={mainShot.src}
              alt={mainShot.alt}
              fill
              sizes="(min-width: 1024px) 80vw, 100vw"
              className="object-contain"
              priority
            />
          </div>
        </section>

        {/* Grid Konten */}
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="flex flex-col gap-12">
            {/* Tentang Proyek */}
            <section>
              <h2 className="mb-4 flex items-center gap-4 font-display text-2xl uppercase">
                Tentang Proyek
                <span className="h-px w-12 bg-accent" />
              </h2>

              <p className="text-body leading-relaxed text-text-2">
                {project.context.short}
              </p>
            </section>

            {/* Fitur Utama */}
            <section>
              <h2 className="mb-6 flex items-center gap-4 font-display text-2xl uppercase">
                Fitur Utama
                <span className="h-px w-12 bg-accent" />
              </h2>

              <div className="grid grid-cols-2 gap-6">
                {project.features?.map((f) => (
                  <div key={f.title} className="flex flex-col gap-2">
                    <div className="flex size-10 items-center justify-center rounded-md border border-hairline bg-surface-1 text-accent">
                      <Icon name="check" size={20} />
                    </div>

                    <p className="text-sm font-semibold text-text-1">
                      {f.title}
                    </p>

                    <p className="text-xs text-text-3">{f.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Tech Stack */}
            <section>
              <h2 className="mb-4 flex items-center gap-4 font-display text-2xl uppercase">
                Tech Stack
                <span className="h-px w-12 bg-accent" />
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

          {/* Galeri Tambahan dan Detail Peran */}
          <div className="flex flex-col gap-8">
            {otherShots.map((shot) => (
              <div key={shot.id} className="flex flex-col gap-3">
                <div className="flex items-center gap-2 font-mono text-xs uppercase text-accent">
                  <span>{shot.id}</span>
                  <span>{shot.title}</span>
                </div>

                <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-hairline bg-surface-2 p-1">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-contain"
                  />
                </div>

                <p className="text-sm text-text-3">{shot.description}</p>
              </div>
            ))}

            {/* Detail Peran */}
            <div className="mt-4 rounded-lg border border-hairline bg-surface-1 p-6">
              <h3 className="mb-4 font-mono text-sm uppercase text-accent">
                Detail Peran
              </h3>

              <ul className="flex flex-col gap-3">
                {project.roleDetails?.map((detail, i) => (
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
    </article>
  );
}
