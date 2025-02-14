import { ProjectList } from "@/components/yield-page-components/project-list";
import { TopSection } from "@/components/yield-page-components/top-section";

export default function YieldPage() {
  const totalYield = 400000.45;

  return (
    <div className="md:my-20 my-4 space-y-16">
      <TopSection />
      <ProjectList totalYield={totalYield} />
    </div>
  );
}
