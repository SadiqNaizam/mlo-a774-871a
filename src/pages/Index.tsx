import React from 'react';
import FunnelStatSection from '@/components/Dashboard/FunnelStatSection';
import LeadsTrackingChart from '@/components/Dashboard/LeadsTrackingChart';
import StatsCardGrid from '@/components/Dashboard/StatsCardGrid';
import MainAppLayout from '@/components/layout/MainAppLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

/**
 * Renders the main dashboard page, which serves as the primary overview for leads tracking.
 * It utilizes a tabbed interface to potentially switch between different data views,
 * with the "Leads" view being the default.
 *
 * The page is composed of several high-level organism components:
 * - `FunnelStatSection`: Displays funnel counts and lead sources.
 * - `LeadsTrackingChart`: Shows a time-series chart of won vs. lost leads.
 * - `StatsCardGrid`: Presents key statistics about lost leads and other miscellaneous data.
 *
 * The entire page is wrapped in the `MainAppLayout` to provide the consistent
 * sidebar and header structure.
 */
const DashboardPage: React.FC = () => {
  return (
    <MainAppLayout>
      <Tabs defaultValue="leads" className="w-full">
        <TabsList className="grid w-full max-w-[200px] grid-cols-2">
          <TabsTrigger value="sales">Sales</TabsTrigger>
          <TabsTrigger value="leads">Leads</TabsTrigger>
        </TabsList>

        <TabsContent value="sales">
          <div className="flex h-96 items-center justify-center rounded-lg border border-dashed bg-card">
            <p className="text-muted-foreground">Sales Data & Analytics will be displayed here.</p>
          </div>
        </TabsContent>

        <TabsContent value="leads" className="mt-4">
          <div className="flex flex-col gap-6">
            <FunnelStatSection />
            <LeadsTrackingChart />
            <StatsCardGrid />
          </div>
        </TabsContent>
      </Tabs>
    </MainAppLayout>
  );
};

export default DashboardPage;
