import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';

interface FunnelStage {
  name: string;
  count: number;
  value: number;
  duration: string;
  color: string;
}

const funnelData: FunnelStage[] = [
  { name: 'Discovery', count: 200, value: 200, duration: '2 days', color: 'bg-red-400' },
  { name: 'Qualified', count: 100, value: 100, duration: '2 days', color: 'bg-yellow-400' },
  { name: 'In conversation', count: 50, value: 100, duration: '5 days', color: 'bg-slate-700' },
  { name: 'Negotiations', count: 20, value: 50, duration: '8 days', color: 'bg-green-400' },
  { name: 'Closed won', count: 20, value: 50, duration: '10 days', color: 'bg-purple-500' },
];

interface SourceData {
  name: string;
  value: number;
  percentage: number;
  color: string;
}

const sourceData: SourceData[] = [
  { name: 'Clutch', value: 3000, percentage: 50, color: '#F87171' }, // red-400
  { name: 'Behance', value: 1000, percentage: 40, color: '#FBBF24' }, // amber-400
  { name: 'Instagram', value: 1000, percentage: 10, color: '#34D399' }, // emerald-400
  { name: 'Dribbble', value: 1000, percentage: 10, color: '#60A5FA' }, // blue-400
];

const totalFunnelCount = funnelData.reduce((sum, item) => sum + item.count, 0);

const FunnelStatSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Funnel Count Card */}
      <Card>
        <CardHeader>
          <CardTitle>Funnel count</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-5xl font-bold">600 <span className="text-lg font-normal text-muted-foreground">active leads</span></div>
          <div className="mt-4 flex h-2 w-full rounded-full overflow-hidden">
            {funnelData.map(stage => (
              <div key={stage.name} className={stage.color} style={{ width: `${(stage.count / totalFunnelCount) * 100}%` }} />
            ))}
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            {funnelData.map(stage => (
              <li key={stage.name} className="grid grid-cols-[1fr_auto_auto] items-center gap-4">
                <div className="flex items-center">
                  <span className={`h-2.5 w-2.5 rounded-full mr-2 ${stage.color}`}></span>
                  <span className="text-muted-foreground">{stage.name}</span>
                </div>
                <span className="font-medium">$ {stage.value}</span>
                <span className="text-muted-foreground justify-self-end">{stage.duration}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Sources Card */}
      <Card>
        <CardHeader>
          <CardTitle>Sources</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col sm:flex-row items-center gap-6">
          <div className="w-48 h-48 flex-shrink-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Tooltip
                  contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))' }}
                  labelStyle={{ color: 'hsl(var(--card-foreground))' }}
                  itemStyle={{ color: 'hsl(var(--card-foreground))' }}
                />
                <Pie data={sourceData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={2}>
                  {sourceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="w-full space-y-2 text-sm">
            {sourceData.map(source => (
              <li key={source.name} className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: source.color }}></span>
                <span className="text-muted-foreground">{source.name}</span>
                <span className="font-medium">$ {source.value.toLocaleString()}</span>
                <span className="text-muted-foreground justify-self-end">{source.percentage}%</span>
              </li>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FunnelStatSection;
