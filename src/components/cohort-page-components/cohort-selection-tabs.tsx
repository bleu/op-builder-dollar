import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { ActiveCohortMembers } from "./active-cohort-members";

export const CohortSelectionTabs = () => {
  return (
    <Tabs defaultValue="active" className="w-full">
      <TabsList className="w-full gap-1">
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
      <TabsContent value="active" className="mt-10">
        <ActiveCohortMembers />
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  );
};
