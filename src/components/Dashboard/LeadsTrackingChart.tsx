import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, Calendar as CalendarIcon } from 'lucide-react';

interface ChartData {
  month: string;
  closedWon: number;
  closedLost: number;
}

const leadsTrackingData: ChartData[] = [
  { month: 'March', closedWon: 88, closedLost: 65 },
  { month: 'April', closedWon: 25, closedLost: 38 },
  { month: 'May', closedWon: 62, closedLost: 95 },
  { month: 'June', closedWon: 80, closedLost: 8 },
  { month: 'July', closedWon: 85, closedLost: 42 },
  { month: 'August', closedWon: 30, closedLost: 98 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-card p-2 shadow-sm">
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col space-y-1">
            <span className="text-[0.70rem] uppercase text-muted-foreground">{label}</span>
            <div className="flex items-center">
                <div className="w-2.5 h-2.5 rounded-full bg-teal-500 mr-2"/>
                <span className="font-bold text-muted-foreground">{`Won: ${payload[0].value}`}</span>
            </div>
            <div className="flex items-center">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500 mr-2"/>
                <span className="font-bold text-muted-foreground">{`Lost: ${payload[1].value}`}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

const LeadsTrackingChart: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <CardTitle>Leads tracking</CardTitle>
            <div className="flex items-baseline gap-4 mt-2">
                <p className="text-3xl font-bold">680 <span className="text-base font-normal text-muted-foreground">total closed</span></p>
                <p className="text-3xl font-bold">70 <span className="text-base font-normal text-muted-foreground">total lost</span></p>
            </div>
          </div>
          <Button variant="outline">
            <CalendarIcon className="mr-2 h-4 w-4" />
            Last 6 months
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={leadsTrackingData} margin={{ top: 5, right: 20, left: -10, bottom: 20 }}>
              <defs>
                <linearGradient id="colorWon" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#14b8a6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
              <XAxis dataKey="month" tickLine={false} axisLine={false} dy={10} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
              <YAxis tickLine={false} axisLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'hsl(var(--border))', strokeWidth: 1, strokeDasharray: '3 3' }} />
              <Area type="monotone" dataKey="closedWon" stroke="#14b8a6" strokeWidth={2} fillOpacity={1} fill="url(#colorWon)" name="Closed won" dot={{ r: 4, fill: '#14b8a6', stroke: 'hsl(var(--card))', strokeWidth: 2 }} activeDot={{ r: 6 }} />
              <Line type="monotone" dataKey="closedLost" stroke="#ef4444" strokeWidth={2} name="Closed lost" dot={{ r: 4, fill: '#ef4444', stroke: 'hsl(var(--card))', strokeWidth: 2 }} activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center gap-4 mt-4">
            <div className="flex items-center text-sm text-muted-foreground">
                <span className="w-3 h-3 rounded-sm bg-teal-500 mr-2"></span>
                Closed won
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
                <span className="w-3 h-3 rounded-sm bg-red-500 mr-2"></span>
                Closed lost
            </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeadsTrackingChart;
