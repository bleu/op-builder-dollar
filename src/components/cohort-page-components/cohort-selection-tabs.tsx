import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { ActiveCohortMembers } from "./active-cohort-members";
import { EligibleProducts } from "./eligible-products";

export const CohortSelectionTabs = () => {
  return (
    <Tabs defaultValue="active" className="w-full">
      <TabsList className="w-full gap-1 mb-10">
        <TabsTrigger
          value="active"
          className="w-full rounded-r-none rounded-l-xl"
        >
          Active Cohort
        </TabsTrigger>
        <TabsTrigger
          value="eligible"
          className="w-full rounded-l-none rounded-r-xl"
        >
          Eligible Products
        </TabsTrigger>
      </TabsList>
      <TabsContent value="active">
        <ActiveCohortMembers />
      </TabsContent>
      <TabsContent value="eligible">
        <EligibleProducts />
      </TabsContent>
    </Tabs>
  );
};
