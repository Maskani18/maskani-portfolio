// MASKANI — /projects → dialihkan ke /#projects (§3.1).

import { redirect } from "next/navigation";

export default function ProjectsIndex(): never {
  redirect("/#projects");
}
