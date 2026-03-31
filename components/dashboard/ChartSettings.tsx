import React from 'react';
import { Button } from "@/components/ui/button";
import { Dropdown, DropdownItem } from "@/components/ui/dropdown";
import { Settings2, Clock, CheckCircle2, ArrowUpDown, TrendingUp, Filter, Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChartSettingsProps {
  chartKey: string;
  type: 'categorical' | 'trend' | 'department';
  config: any;
  updateChartConfig: (chart: string, updates: any) => void;
  options?: string[];
  deptSearch: string;
  setDeptSearch: (val: string) => void;
}

export const ChartSettings: React.FC<ChartSettingsProps> = ({
  chartKey,
  type,
  config,
  updateChartConfig,
  options,
  deptSearch,
  setDeptSearch
}) => {
  return (
    <Dropdown
      trigger={
        <Button variant="ghost" size="icon" className="h-7 w-7 rounded-lg hover:bg-zinc-100 text-zinc-400 transition-colors">
          <Settings2 className="h-4 w-4" />
        </Button>
      }
      className="w-64"
    >
      {type === 'trend' && (
        <div className="p-1">
          <div className="px-3 py-2 text-[10px] font-black text-zinc-400 uppercase tracking-widest border-b border-zinc-50 mb-1 flex items-center gap-2">
            <Clock className="h-3 w-3" /> ช่วงเวลา (Time Range)
          </div>
          {[3, 6, 12, 18, 24].map(m => (
            <DropdownItem key={m} onClick={() => updateChartConfig(chartKey, { months: m })} className={config.months === m ? "bg-zinc-50 font-bold text-blue-600" : ""}>
              <div className="flex items-center justify-between w-full">
                <span>{m} เดือนล่าสุด / Last {m} Months</span>
                {config.months === m && <CheckCircle2 className="h-3.5 w-3.5" />}
              </div>
            </DropdownItem>
          ))}
        </div>
      )}
      {type === 'categorical' && (
        <div className="p-1">
          <div className="px-3 py-2 text-[10px] font-black text-zinc-400 uppercase tracking-widest border-b border-zinc-50 mb-1 flex items-center gap-2">
            <ArrowUpDown className="h-3 w-3" /> เรียงลำดับ (Sort By)
          </div>
          <DropdownItem onClick={() => updateChartConfig(chartKey, { sort: 'value' })} className={config.sort === 'value' ? "bg-zinc-50 font-bold text-blue-600" : ""}>
            <div className="flex items-center justify-between w-full">
              <span>จำนวนงาน / Ticket Count</span>
              {config.sort === 'value' && <CheckCircle2 className="h-3.5 w-3.5" />}
            </div>
          </DropdownItem>
          <DropdownItem onClick={() => updateChartConfig(chartKey, { sort: 'name' })} className={config.sort === 'name' ? "bg-zinc-50 font-bold text-blue-600" : ""}>
            <div className="flex items-center justify-between w-full">
              <span>ตามตัวอักษร / Alphabetical</span>
              {config.sort === 'name' && <CheckCircle2 className="h-3.5 w-3.5" />}
            </div>
          </DropdownItem>
          
          <div className="px-3 py-2 text-[10px] font-black text-zinc-400 uppercase tracking-widest border-t border-b border-zinc-50 mt-2 mb-1 flex items-center gap-2">
            <TrendingUp className="h-3 w-3" /> ลำดับ (Order)
          </div>
          <DropdownItem onClick={() => updateChartConfig(chartKey, { order: 'desc' })} className={config.order === 'desc' ? "bg-zinc-50 font-bold text-blue-600" : ""}>
            <div className="flex items-center justify-between w-full">
              <span>มากไปน้อย / Descending</span>
              {config.order === 'desc' && <CheckCircle2 className="h-3.5 w-3.5" />}
            </div>
          </DropdownItem>
          <DropdownItem onClick={() => updateChartConfig(chartKey, { order: 'asc' })} className={config.order === 'asc' ? "bg-zinc-50 font-bold text-blue-600" : ""}>
            <div className="flex items-center justify-between w-full">
              <span>น้อยไปมาก / Ascending</span>
              {config.order === 'asc' && <CheckCircle2 className="h-3.5 w-3.5" />}
            </div>
          </DropdownItem>
          
          <div className="px-3 py-2 text-[10px] font-black text-zinc-400 uppercase tracking-widest border-t border-b border-zinc-50 mt-2 mb-1 flex items-center gap-2">
            <Filter className="h-3 w-3" /> แสดงผล (Display Limit)
          </div>
          {[5, 7, 10, 15, 'ALL'].map(l => (
            <DropdownItem key={l} onClick={() => updateChartConfig(chartKey, { limit: l })} className={config.limit === l ? "bg-zinc-50 font-bold text-blue-600" : ""}>
              <div className="flex items-center justify-between w-full">
                <span>{l === 'ALL' ? 'ทั้งหมด / Show All' : `แสดง ${l} รายการ / Top ${l}`}</span>
                {config.limit === l && <CheckCircle2 className="h-3.5 w-3.5" />}
              </div>
            </DropdownItem>
          ))}
        </div>
      )}
      {type === 'department' && (
        <div className="p-1">
          <div className="px-3 py-2 text-[10px] font-black text-zinc-400 uppercase tracking-widest border-b border-zinc-50 mb-1">
             ช่วงเวลา / Time Range
          </div>
          {[3, 6, 12].map(m => (
            <DropdownItem key={m} onClick={() => updateChartConfig(chartKey, { months: m })} className={config.months === m ? "bg-zinc-50 font-bold text-blue-600" : ""}>
              {m} เดือนล่าสุด / Last {m} Months
            </DropdownItem>
          ))}
          <div className="px-3 py-2 text-[10px] font-black text-zinc-400 uppercase tracking-widest border-t border-b border-zinc-50 mt-2 mb-1">
             กรองแผนก / Filter Departments
          </div>
          <div className="px-2 py-1">
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3 w-3 text-zinc-400" />
              <input 
                type="text" 
                placeholder="ค้นหาแผนก..." 
                value={deptSearch}
                onChange={(e) => setDeptSearch(e.target.value)}
                onClick={(e) => e.stopPropagation()}
                className="w-full pl-8 pr-3 py-1.5 bg-zinc-50 border border-zinc-100 rounded-lg text-[11px] outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
          </div>
          <div className="max-h-48 overflow-y-auto mt-1 custom-scrollbar">
            <DropdownItem onClick={() => updateChartConfig(chartKey, { selected: [] })} className={config.selected.length === 0 ? "bg-blue-50 text-blue-600 font-bold" : ""}>
              แสดงทั้งหมด / All Departments
            </DropdownItem>
            {options?.filter(d => d.toLowerCase().includes(deptSearch.toLowerCase())).map(dept => (
              <DropdownItem 
                key={dept} 
                onClick={(e: any) => {
                  e.stopPropagation();
                  const current = config.selected;
                  const next = current.includes(dept) ? current.filter((d: string) => d !== dept) : [...current, dept];
                  updateChartConfig(chartKey, { selected: next });
                }}
                className={config.selected.includes(dept) ? "bg-blue-50 text-blue-600 font-bold" : ""}
              >
                <div className="flex items-center gap-2 w-full">
                  <div className={cn("w-3.5 h-3.5 rounded border flex items-center justify-center transition-colors", config.selected.includes(dept) ? "bg-blue-500 border-blue-500 text-white" : "border-zinc-200")}>
                    {config.selected.includes(dept) && <CheckCircle2 className="h-2.5 w-2.5" />}
                  </div>
                  <span className="truncate">{dept}</span>
                </div>
              </DropdownItem>
            ))}
          </div>
        </div>
      )}
    </Dropdown>
  );
};
