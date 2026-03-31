import React from 'react';
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { 
  Ticket, 
  Package, 
  CheckCircle2, 
  TrendingUp, 
  Activity, 
  AlertCircle,
  Clock,
  ArrowUpRight
} from "lucide-react";

interface StatsGridProps {
  isAdmin: boolean;
  filteredRequests: any[];
  inventory: any[];
  resolutionRate: number;
  dateFilter: string;
  session: any;
}

export const StatsGrid: React.FC<StatsGridProps> = ({
  isAdmin,
  filteredRequests,
  inventory,
  resolutionRate,
  dateFilter,
  session
}) => {
  type StatCardData = {
    label: string;
    value: string | number;
    icon: any;
    sub: React.ReactNode;
    color: string;
    isGauge?: boolean;
  };

  const adminStats: StatCardData[] = [
    { 
      label: "รายการแจ้งซ่อม / Active Tickets", 
      value: filteredRequests.filter(r => r.status !== 'CLOSED').length, 
      icon: Ticket, 
      sub: <div className="flex items-center gap-1.5"><TrendingUp className="h-3 w-3 text-rose-500" /><span className="text-zinc-400 font-semibold uppercase tracking-wider text-[10px]">กำลังดำเนินการ / Pending</span></div>, 
      color: "blue" 
    },
    { 
      label: "สต็อกต่ำ / Inventory Alert", 
      value: inventory.filter(i => i.remaining < 3).length, 
      icon: Package, 
      sub: <div className="flex items-center gap-1.5"><AlertCircle className="h-3 w-3 text-amber-500" /><span className="text-zinc-400 font-semibold uppercase tracking-wider text-[10px]">ใกล้หมด / Low stock</span></div>, 
      color: "amber" 
    },
    { 
      label: "เป้าหมายเดือนนี้ / Resolution KPI", 
      value: resolutionRate, 
      isGauge: true, 
      icon: CheckCircle2, 
      sub: <div className="flex items-center gap-1.5"><TrendingUp className="h-3 w-3 text-emerald-500" /><span className="text-zinc-400 font-semibold uppercase tracking-wider text-[10px]">ปิดงาน / Resolved</span></div>, 
      color: "emerald" 
    },
    {
      label: "รายการใหม่ / Total Requests", 
      value: filteredRequests.length, 
      icon: TrendingUp, 
      sub: <div className="flex items-center gap-1.5"><Activity className="h-3 w-3 text-blue-500" /><span className="text-zinc-400 font-semibold uppercase tracking-wider text-[10px]">{dateFilter === "ALL" ? "ทั้งหมด / All Time" : "ในเดือนนี้ / This Period"}</span></div>, 
      color: "rose"
    },
  ];

  const userStats: StatCardData[] = [
    { label: "แจ้งซ่อมของฉัน / My Active Tickets", value: filteredRequests.filter(r => r.userId === session?.user?.id && r.status !== 'RESOLVED' && r.status !== 'CLOSED').length, icon: Ticket, sub: "กำลังดำเนินการ / In-progress", color: "blue" },
    { label: "รายการที่ปิดแล้ว / Closed Tasks", value: filteredRequests.filter(r => r.userId === session?.user?.id && (r.status === 'RESOLVED' || r.status === 'CLOSED')).length, icon: CheckCircle2, sub: "เรียบร้อย / Resolved", color: "emerald" },
    { label: "รอการตรวจสอบ / Wait for Review", value: filteredRequests.filter(r => r.userId === session?.user?.id && r.status === 'OPEN').length, icon: Clock, sub: "รอดำเนินการ / Pending", color: "amber" },
    { label: "รายการสำคัญ / Urgent items", value: filteredRequests.filter(r => r.userId === session?.user?.id && r.priority === 'HIGH').length, icon: AlertCircle, sub: "ต้องการความสนใจ / Attention", color: "rose" },
  ];

  const statsToUse = isAdmin ? adminStats : userStats;

  return (
    <div className={cn("grid gap-3", isAdmin ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 " : "grid-cols-2 sm:grid-cols-2 lg:grid-cols-4")}>
      {statsToUse.map((stat, i) => (
        <Card key={i} className="group relative overflow-hidden p-5 border-zinc-100 rounded-2xl hover:border-[#0F1059]/20 hover:-translate-y-0.5 transition-all duration-500 bg-white">
          <div className={cn(
            "absolute -right-3 -top-3 w-20 h-20 rounded-full opacity-[0.03] group-hover:scale-150 transition-transform duration-700",
            stat.color === 'blue' ? "bg-blue-600" : stat.color === 'amber' ? "bg-amber-600" : stat.color === 'emerald' ? "bg-emerald-600" : stat.color === 'indigo' ? "bg-indigo-600" : "bg-rose-600"
          )} />

          <div className="flex justify-between items-start mb-3">
            <div className={cn(
              "p-2.5 rounded-xl",
              stat.color === 'blue' ? "bg-blue-50 text-blue-600" : stat.color === 'amber' ? "bg-amber-50 text-amber-600" : stat.color === 'emerald' ? "bg-emerald-50 text-emerald-600" : stat.color === 'indigo' ? "bg-indigo-50 text-indigo-600" : "bg-rose-50 text-rose-600"
            )}>
              <stat.icon className="h-5.5 w-5.5" />
            </div>
            <ArrowUpRight className="h-3.5 w-3.5 text-zinc-200 group-hover:text-zinc-900 transition-colors" />
          </div>

          <div className="flex justify-between items-end gap-2">
            <div className="space-y-0.5">
              <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block">{stat.label}</span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl font-bold tracking-tight text-zinc-900">{stat.isGauge ? `${stat.value}%` : stat.value}</span>
                <span className="hidden sm:block shrink-0">{stat.sub}</span>
              </div>
            </div>

            {stat.isGauge && (
              <div className="relative flex items-center justify-center h-12 w-12 shrink-0 group-hover:scale-110 transition-transform duration-500">
                <svg className="transform -rotate-90 w-12 h-12">
                  <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-zinc-50" />
                  <circle 
                    cx="24" 
                    cy="24" 
                    r="22" 
                    stroke="currentColor" 
                    strokeWidth="4" 
                    fill="transparent" 
                    strokeDasharray={2 * Math.PI * 22} 
                    strokeDashoffset={(2 * Math.PI * 22) - ((stat.value as number) / 100) * (2 * Math.PI * 22)} 
                    className={cn("transition-all duration-1500 ease-out", (stat.value as number) >= 80 ? 'text-emerald-500' : (stat.value as number) >= 50 ? 'text-amber-500' : 'text-rose-500')} 
                    strokeLinecap="round" 
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Activity className={cn("h-3.5 w-3.5", (stat.value as number) >= 80 ? "text-emerald-500" : (stat.value as number) >= 50 ? "text-amber-500" : "text-rose-500")} />
                </div>
              </div>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
};
