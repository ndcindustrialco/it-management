"use client";

import React, { useState } from "react";
import { 
  FileBox, 
  Users, 
  FileText, 
  Download, 
  Upload, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Box,
  LayoutGrid
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { exportToCSV } from "@/lib/export-utils";
import { useTranslation } from "@/lib/i18n/LanguageContext";

type ImportType = "PURCHASE_ORDER" | "REQUEST" | "EMPLOYEE_USER";

interface ImportStatus {
  success: boolean;
  message: string;
  count?: number;
}

export default function ImportPage() {
  const { t } = useTranslation();
  const [selectedType, setSelectedType] = useState<ImportType | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [status, setStatus] = useState<ImportStatus | null>(null);

  const importOptions = [
    {
      id: "PURCHASE_ORDER" as ImportType,
      title: t('import.po_title'),
      thTitle: t('import.po_th_title'),
      description: t('import.po_desc'),
      icon: Box,
      color: "blue",
      template: [
        { 
          list: "MacBook Pro M2", 
          detail: "Apple MacBook Pro M2 13-inch 8/256GB", 
          quantity: 10, 
          reason_order: "For New Employee", 
          buyer: "Admin",
          status: "PENDING",
          reviewer: "Reviewer Name",
          approver: "Approver Name",
          date_order: "2024-03-25"
        }
      ]
    },
    {
      id: "REQUEST" as ImportType,
      title: t('import.request_title'),
      thTitle: t('import.request_th_title'),
      description: t('import.request_desc'),
      icon: FileText,
      color: "amber",
      template: [
        {
          request_code: "REQ20240325-001",
          employee_code: "EMP001",
          type_request: "Software",
          description: "ติดตั้ง Microsoft Office",
          reason: "เพื่อใช้ทำงานในแผนก",
          category: "SOFTWARE",
          priority: "MEDIUM",
          status: "OPEN"
        }
      ]
    },
    {
      id: "EMPLOYEE_USER" as ImportType,
      title: t('import.employee_user_title'),
      thTitle: t('import.employee_user_th_title'),
      description: t('import.employee_user_desc'),
      icon: Users,
      color: "emerald",
      template: [
        {
          employee_code: "EMP001",
          employee_name_th: "สมชาย ใจดี",
          employee_name_en: "Somchai Jaidee",
          gender: "M",
          position: "Manager",
          department: "IT",
          work_location: "Head Office",
          username: "somchai.j",
          password: "password123",
          role: "user"
        }
      ]
    }
  ];

  const handleDownloadTemplate = (typeId: ImportType) => {
    const option = importOptions.find(o => o.id === typeId);
    if (option) {
      exportToCSV(option.template as any[], `template_${typeId.toLowerCase()}`);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setStatus(null);
    }
  };

  const handleUpload = async () => {
    if (!file || !selectedType) return;

    setIsUploading(true);
    setStatus(null);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("type", selectedType);

    try {
      const res = await fetch("/api/admin/import", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      if (res.ok) {
        setStatus({
          success: true,
          message: result.message || "Import completed successfully",
          count: result.count
        });
        setFile(null);
        // Clear input
        const fileInput = document.getElementById("file-upload") as HTMLInputElement;
        if (fileInput) fileInput.value = "";
      } else {
        setStatus({
          success: false,
          message: result.error || "Failed to import data"
        });
      }
    } catch (error) {
      setStatus({
        success: false,
        message: "An error occurred during upload"
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="p-4 sm:p-6 space-y-6 animate-in fade-in duration-700">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
        <div className="space-y-4">
          <Badge variant="outline" className="rounded-lg px-2.5 py-1 text-[10px] font-black uppercase tracking-widest border-[#0F1059]/10 text-[#0F1059] bg-[#0F1059]/5">
            {t('import.subtitle')}
          </Badge>
          <div className="space-y-1 font-sans">
            <h1 className="text-4xl sm:text-5xl font-black text-[#0F1059] tracking-tighter uppercase leading-none flex items-center gap-4">
               <div className="h-14 w-14 rounded-3xl bg-[#0F1059] flex items-center justify-center text-white shadow-xl shadow-[#0F1059]/30 transform -rotate-3">
                  <Upload className="h-7 w-7" />
               </div>
               {t('import.title')}
            </h1>
            <p className="text-xs font-black text-zinc-400 uppercase tracking-[0.3em] flex items-center gap-2 mt-2">
              <Zap className="h-4 w-4 text-amber-500 fill-current" /> 
              {t('import.hub_subtitle')}
            </p>
          </div>
        </div>
      </header>

      {/* Import Type Selection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-sans">
        {importOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => {
              setSelectedType(option.id);
              setStatus(null);
              setFile(null);
            }}
            className={cn(
              "group relative overflow-hidden rounded-[40px] border-2 p-8 text-left transition-all duration-500 hover:scale-[1.02] active:scale-95",
              selectedType === option.id 
                ? "border-[#0F1059] bg-[#0F1059] text-white shadow-2xl shadow-[#0F1059]/30" 
                : "border-zinc-100 bg-white hover:border-[#0F1059]/30 hover:shadow-xl hover:shadow-[#0F1059]/5"
            )}
          >
            <div className={cn(
              "h-16 w-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 transform group-hover:rotate-12 shadow-sm",
              selectedType === option.id ? "bg-white/20" : "bg-zinc-50 border border-zinc-100"
            )}>
              <option.icon className={cn(
                "h-8 w-8",
                selectedType === option.id ? "text-white" : "text-[#0F1059]"
              )} />
            </div>

            <div className="space-y-1">
              <h3 className={cn(
                "text-[10px] font-black uppercase tracking-widest",
                selectedType === option.id ? "text-white/60" : "text-zinc-400"
              )}>
                {option.thTitle}
              </h3>
              <p className="text-xl font-black tracking-tight uppercase leading-none">
                {option.title}
              </p>
            </div>

            <p className={cn(
              "mt-4 text-[13px] font-medium leading-relaxed opacity-80",
              selectedType === option.id ? "text-white" : "text-zinc-500"
            )}>
              {option.description}
            </p>

            <div className={cn(
              "mt-10 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest",
              selectedType === option.id ? "text-white" : "text-[#0F1059]"
            )}>
              <span className="flex-1">{t('import.select_category')}</span>
              <ArrowRight className="h-4 w-4" />
            </div>

            {/* Background Accent */}
            <div className={cn(
              "absolute -right-8 -bottom-8 h-40 w-40 rounded-full blur-3xl transition-opacity duration-1000",
              selectedType === option.id ? "bg-white/10 opacity-100" : "bg-zinc-100 opacity-0 group-hover:opacity-100"
            )} />
          </button>
        ))}
      </div>

      {/* Action Center */}
      {selectedType && (
        <Card className="rounded-[56px] border-none bg-zinc-50/50 p-2 overflow-hidden shadow-sm animate-in slide-in-from-bottom-10 duration-700">
          <div className="bg-white rounded-[48px] border border-zinc-100 shadow-sm p-8 sm:p-14 space-y-14 font-sans">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="space-y-1">
                 <div className="flex items-center gap-5">
                    <div className="h-14 w-14 rounded-3xl bg-zinc-900 flex items-center justify-center text-white shadow-lg">
                       <LayoutGrid className="h-7 w-7" />
                    </div>
                    <div>
                       <h2 className="text-3xl font-black text-zinc-900 tracking-tighter uppercase leading-none">{t('import.workflow')}</h2>
                       <p className="text-[11px] font-black text-zinc-400 uppercase tracking-widest mt-2">{t('import.step_by_step')} {selectedType.split('_').join(' ').toLowerCase()}</p>
                    </div>
                 </div>
              </div>
              
              <Button
                onClick={() => handleDownloadTemplate(selectedType)}
                variant="outline"
                className="h-16 px-10 rounded-3xl border-2 border-zinc-100 hover:border-[#0F1059] hover:text-[#0F1059] font-black uppercase tracking-widest text-[11px] transition-all group shrink-0"
              >
                <Download className="mr-3 h-5 w-5 text-[#0F1059] group-hover:animate-bounce" /> 
                {t('import.download_csv')}
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
              {/* Upload Zone */}
              <div className="lg:col-span-3 space-y-8">
                <div className="relative group">
                  <input
                    type="file"
                    id="file-upload"
                    accept=".csv"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="file-upload"
                    className={cn(
                      "flex flex-col items-center justify-center w-full min-h-[350px] border-4 border-dashed rounded-[48px] cursor-pointer transition-all duration-700",
                      file 
                        ? "border-emerald-500/30 bg-emerald-50/30 shadow-2xl shadow-emerald-500/5 scale-[1.01]" 
                        : "border-zinc-100 bg-zinc-50/50 hover:bg-zinc-50 hover:border-[#0F1059]/20 hover:shadow-xl hover:shadow-[#0F1059]/5"
                    )}
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6 px-10 text-center">
                      <div className={cn(
                        "h-24 w-24 rounded-4xl flex items-center justify-center mb-8 transition-all duration-700 shadow-xl",
                        file ? "bg-emerald-500 text-white shadow-emerald-200" : "bg-white text-zinc-200 shadow-zinc-200 group-hover:scale-110 group-hover:text-[#0F1059] group-hover:shadow-[#0F1059]/10"
                      )}>
                        {file ? <FileBox className="h-12 w-12" /> : <Upload className="h-12 w-12" />}
                      </div>
                      
                      {file ? (
                        <div className="space-y-3">
                          <p className="text-xl font-black text-zinc-900 uppercase tracking-tight">{file.name}</p>
                          <Badge className="bg-emerald-500 hover:bg-emerald-500 text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border-none">
                             {(file.size / 1024).toFixed(2)} KB • READY TO SYNC
                          </Badge>
                        </div>
                      ) : (
                        <div className="space-y-6">
                          <div className="space-y-2">
                            <p className="text-xl font-black text-zinc-900 uppercase tracking-tight">{t('import.click_browse')}</p>
                            <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{t('import.csv_only')}</p>
                          </div>
                          <div className="flex justify-center gap-3">
                             <Badge variant="outline" className="rounded-xl text-[10px] font-black uppercase bg-white border-zinc-100 px-3 py-1 color-zinc-400">UTF-8 ENCODED</Badge>
                             <Badge variant="outline" className="rounded-xl text-[10px] font-black uppercase bg-white border-zinc-100 px-3 py-1 color-zinc-400">MAX 10MB</Badge>
                          </div>
                        </div>
                      )}
                    </div>
                  </label>
                </div>

                <Button
                  disabled={!file || isUploading}
                  onClick={handleUpload}
                  className={cn(
                    "w-full h-24 rounded-[32px] text-lg font-black uppercase tracking-[0.3em] transition-all duration-500 shadow-2xl",
                    file ? "bg-[#0F1059] hover:bg-black text-white shadow-[#0F1059]/30" : "bg-zinc-100 text-zinc-300 shadow-none border border-zinc-50"
                  )}
                >
                  {isUploading ? (
                    <div className="flex items-center gap-5">
                      <Loader2 className="h-7 w-7 animate-spin" />
                      <span>{t('import.syncing')}</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-5">
                      <ShieldCheck className="h-7 w-7" />
                      <span>{t('import.execute_mass')}</span>
                    </div>
                  )}
                </Button>
              </div>

              {/* Status & Feedback */}
              <div className="lg:col-span-2 flex flex-col justify-center">
                {!status ? (
                  <div className="space-y-10">
                     <div className="space-y-6">
                        <h3 className="text-[11px] font-black text-zinc-400 uppercase tracking-[0.4em] pl-2">{t('import.compliance_title')}</h3>
                        <div className="space-y-4">
                           {[
                              "Ensure all required columns are present in the CSV.",
                              "Check for duplicate unique identifiers before uploading.",
                              "Date formats should follow ISO (YYYY-MM-DD) for best results.",
                              "Employee codes must exist when importing requests."
                           ].map((check, i) => (
                              <div key={i} className="flex items-start gap-5 p-5 rounded-3xl bg-zinc-50/50 border border-zinc-100 group hover:border-[#0F1059]/20 transition-all">
                                 <div className="h-6 w-6 rounded-full border-2 border-zinc-200 shrink-0 mt-0.5 flex items-center justify-center text-[10px] font-black text-zinc-300 group-hover:border-[#0F1059] group-hover:text-[#0F1059] transition-all">
                                    {i + 1}
                                 </div>
                                 <p className="text-[13px] font-medium text-zinc-500 italic opacity-80 leading-snug">{check}</p>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
                ) : (
                  <div className={cn(
                    "rounded-[48px] p-12 border-2 transition-all duration-700 animate-in zoom-in-95 shadow-2xl",
                    status.success 
                      ? "bg-emerald-50/50 border-emerald-100 text-emerald-900 shadow-emerald-500/5" 
                      : "bg-rose-50/50 border-rose-100 text-rose-900 shadow-rose-500/5"
                  )}>
                    <div className="flex flex-col items-center text-center space-y-8">
                      <div className={cn(
                        "h-24 w-24 rounded-[2.5rem] flex items-center justify-center shadow-2xl",
                        status.success ? "bg-emerald-500 text-white shadow-emerald-200" : "bg-rose-500 text-white shadow-rose-200"
                      )}>
                        {status.success ? <CheckCircle2 className="h-12 w-12" /> : <AlertCircle className="h-12 w-12" />}
                      </div>
                      
                      <div className="space-y-3">
                        <h3 className="text-3xl font-black uppercase tracking-tighter leading-none">
                          {status.success ? t('import.import_verified') : t('import.execution_failed')}
                        </h3>
                        {status.count !== undefined && (
                          <Badge className="bg-emerald-600 hover:bg-emerald-600 text-[11px] font-black uppercase tracking-widest px-4 py-2 rounded-xl mb-3 shadow-lg shadow-emerald-600/20">
                             {status.count} RECORDS PROCESSED
                          </Badge>
                        )}
                        <p className={cn(
                          "text-[14px] font-bold uppercase tracking-widest leading-relaxed opacity-70",
                          status.success ? "text-emerald-700" : "text-rose-700"
                        )}>
                          {status.message}
                        </p>
                      </div>
                      
                      <Button
                         variant="ghost"
                         onClick={() => setStatus(null)}
                         className={cn(
                           "h-14 px-10 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] transition-all bg-white shadow-sm border border-zinc-100",
                           status.success ? "text-emerald-600 hover:bg-emerald-50" : "text-rose-600 hover:bg-rose-50"
                         )}
                      >
                         {t('import.dismiss_restart')}
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
