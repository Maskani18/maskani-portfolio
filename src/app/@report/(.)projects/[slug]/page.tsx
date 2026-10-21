import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { ReportView } from "@/systems/report/ReportView";
import { ReportModal } from "@/systems/report/ReportModal.client";

type Params = { slug: string };

export default async function InterceptedReportPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <ReportModal>
      <ReportView project={project} />
    </ReportModal>
  );
}
