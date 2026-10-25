import type { Project } from "@/content/types";
import { sidalekas } from "./sidalekas";
import { kmetric } from "./kmetric";

export const projects = [
  sidalekas,
  kmetric,
] as const satisfies readonly Project[];

export type ProjectSlug = (typeof projects)[number]["slug"];
