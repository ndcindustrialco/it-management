"use client";

import React, { useState } from 'react';
import { ShieldCheck, LayoutDashboard, Download, Loader2 } from "lucide-react";
import { useTranslation } from "@/lib/i18n/LanguageContext";
import { Button } from '@/components/ui/button';
import { toPng } from 'html-to-image';

interface DashboardHeaderProps {
  isAdmin: boolean;
  dateFilter: string;
  setDateFilter: (val: string) => void;
  monthOptions: string[];
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  isAdmin,
  dateFilter,
  setDateFilter,
  monthOptions
}) => {
  const { t, locale } = useTranslation();
  const [isExporting, setIsExporting] = useState(false);

  const handleExportDashboard = async () => {
    // We want to export the main dashboard container
    const dashboardElement = document.querySelector('.animate-in.fade-in.duration-1000') as HTMLElement;
    if (!dashboardElement) return;

    setIsExporting(true);
    try {
      // Hide buttons and dropdowns during export
      const elementsToHide = document.querySelectorAll('button, select, .dropdown-trigger');
      elementsToHide.forEach(el => (el as HTMLElement).style.opacity = '0');

      const dataUrl = await toPng(dashboardElement, {
        backgroundColor: '#f9fafb',
        cacheBust: true,
        pixelRatio: 2
      });

      // Restore elements
      elementsToHide.forEach(el => (el as HTMLElement).style.opacity = '1');

      const link = document.createElement('a');
      link.download = `IT_Dashboard_Report_${new Date().toISOString().split('T')[0]}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Export failed', err);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
      <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between w-full">
        <div className="space-y-1">
          <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] flex items-center gap-2">
            {isAdmin ? <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" /> : <LayoutDashboard className="h-3.5 w-3.5 text-blue-500" />}
            {isAdmin ? t('dashboard.admin_title') : t('dashboard.user_title')}
          </p>
          <h1 className="text-2xl font-black text-[#0F1059] uppercase tracking-tighter leading-none mt-1">
            {isAdmin ? "IT Performance Console" : "Service Overview"}
          </h1>
        </div>

        <div className="flex items-center gap-3 mt-4 sm:mt-0">
          <div className="flex items-center gap-1.5 bg-zinc-50 p-1 rounded-2xl border border-zinc-100 h-11 shadow-sm overflow-hidden min-w-[200px]">
            <select 
              value={dateFilter} 
              onChange={(e) => setDateFilter(e.target.value)}
              className="h-full w-full bg-white text-zinc-700 text-[10px] font-black uppercase tracking-widest px-4 rounded-xl border border-zinc-100 outline-none cursor-pointer focus:ring-2 focus:ring-[#0F1059]/10 transition-all font-sans"
            >
              <option value="ALL">{t('dashboard.all_time')}</option>
              {monthOptions.map(m => {
                const [year, month] = m.split('-');
                const date = new Date(parseInt(year), parseInt(month) - 1);
                const label = date.toLocaleDateString(locale === 'th' ? 'th-TH' : 'en-GB', { month: 'long', year: 'numeric' });
                return <option key={m} value={m}>{label}</option>;
              })}
            </select>
          </div>

          {isAdmin && (
            <Button 
              onClick={handleExportDashboard} 
              disabled={isExporting}
              className="h-11 rounded-2xl bg-[#0F1059] hover:bg-black text-white text-[10px] font-black uppercase tracking-widest px-6 transition-all shadow-lg shadow-[#0F1059]/10"
            >
              {isExporting ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Download className="h-4 w-4 mr-2" />}
              {t('common.export')}
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};
