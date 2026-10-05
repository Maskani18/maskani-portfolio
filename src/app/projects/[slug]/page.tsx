// MASKANI — Report kanonik (§6.2). Static via generateStaticParams (BR-12).

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { JSX } from "react";

import { MonoTag } from "@/components/ui/MonoTag";
import { ReportStepper } from "@/components/ui/ReportStepper.client";
import { projects } from "@/content/projects";
import { PROJECT_STEP_ORDER } from "@/content/types";
import type { ProjectStepKey } from "@/content/types";

type Params = { slug: string };

const STEP_LABEL: Record<ProjectStepKey, string> = {
  context: "Context",
  problem: "Problem",
  role: "Role",
  approach: "Approach",
  implementation: "Implementation",
  verification: "Verification",
  result: "Result",
  stack: "Stack",
};

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
    title: `${project.title} — Case Report`,
    description: project.context.short,
    alternates: { canonical: `/projects/${project.slug}` },
  };
}

export default async function ProjectReportPage({
  params,
}: {
  params: Promise<Params>;
}): Promise<JSX.Element> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const steps = PROJECT_STEP_ORDER.filter((key) => project.steps[key] !== null);

  return (
    <article className="px-[var(--gutter)] pb-32 pt-16 md:pt-24">
      <div className="mx-auto w-full max-w-[var(--container-max)]">
        <Link
          href="/#projects"
          className="font-mono text-meta uppercase text-text-3 transition-colors duration-[var(--dur-fast)] hover:text-accent"
        >
          ← Back to Projects
        </Link>

        <header className="mt-12 border-b border-hairline pb-10">
          <MonoTag>{project.index}</MonoTag>
          <h1 className="mt-6 font-display text-d2 text-text-1">
            {project.title}
          </h1>
          <div className="mt-6 grid gap-4 font-mono text-meta uppercase text-text-2 md:grid-cols-3">
            <p>{project.role}</p>
            <p>{project.period}</p>
            <p>{project.stack.join(" · ")}</p>
          </div>
        </header>

        <div className="mt-16 grid gap-16 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <ReportStepper steps={steps} labels={STEP_LABEL} />
          </aside>

          <div className="flex flex-col gap-16 lg:col-span-9">
            {steps.map((key, i) => {
              const value = project.steps[key];
              if (value === null) return null;
              return (
                <section
                  key={key}
                  id={`step-${key}`}
                  aria-labelledby={`step-${key}-heading`}
                  className="scroll-mt-[calc(var(--nav-height)+var(--nav-offset))]"
                >
                  <MonoTag number={String(i + 1).padStart(2, "0")}>
                    {STEP_LABEL[key]}
                  </MonoTag>
                  <h2
                    id={`step-${key}-heading`}
                    className="mt-4 font-display text-d3 text-text-1"
                  >
                    {STEP_LABEL[key]}
                  </h2>
                  <p className="mt-6 max-w-[62ch] text-body text-text-2">
                    {value}
                  </p>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </article>
  );
}
