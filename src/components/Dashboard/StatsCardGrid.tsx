import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HelpCircle } from 'lucide-react';

interface ReasonStat {
  percentage: number;
  reason: string;
}

const reasonsData: ReasonStat[] = [
  { percentage: 40, reason: 'The proposal is unclear' },
  { percentage: 20, reason: 'However venture pursuit' },
  { percentage: 10, reason: 'Other' },
  { percentage: 30, reason: 'The proposal is unclear' }, // Note: Image shows this twice, replicating here
];

interface OtherStat {
  value: string;
  label: string;
  hasIcon?: boolean;
}

const otherData: OtherStat[] = [
  { value: '900', label: 'total leads count' },
  { value: '12', label: 'days in average to convert lead' },
  { value: '30', label: 'inactive leads', hasIcon: true },
];

const StatsCardGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Reasons for leads lost Card */}
      <Card>
        <CardHeader>
          <CardTitle>Reasons of leads lost</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            {reasonsData.map((stat, index) => (
              <div key={index}>
                <p className="text-4xl font-bold">{stat.percentage}%</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.reason}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Other data Card */}
      <Card>
        <CardHeader>
          <CardTitle>Other data</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-6">
            {otherData.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-bold flex items-center">
                    {stat.value}
                    {stat.hasIcon && <HelpCircle className="h-4 w-4 text-muted-foreground ml-2" />}
                </p>
                <p className="text-sm text-muted-foreground mt-1 whitespace-pre-line">{stat.label}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsCardGrid;
