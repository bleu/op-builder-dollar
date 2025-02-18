import { ProjectList } from "@/components/yield-page-components/project-list";
import { TopSection } from "@/components/yield-page-components/top-section";

export default function YieldPage() {
  return (
    <div className="my-20 md:pt-20 pt-4 space-y-16 max-w-[760px] mx-auto px-4">
      <TopSection />
      <ProjectList />
    </div>
  );
}
