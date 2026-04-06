"use client";

import { useState, useEffect } from "react";
import { Drawer } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Loader2, Key, Mail, Lock, ShieldCheck, User } from "lucide-react";
import { useTranslation } from "@/lib/i18n/LanguageContext";
import { CredentialInput } from "@/lib/validations/credential";
import { EmployeeSearchSelect, Employee } from "@/components/employee-search-select";
import { cn } from "@/lib/utils";

const ACCOUNT_TYPES = ["EMAIL", "FILE_SHARE", "VPN", "ERP", "SOFTWARE", "OTHER"];

interface CredentialDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: CredentialInput) => Promise<void>;
  initialData?: CredentialInput | null;
  employees: Employee[];
}

export function CredentialDrawer({
  isOpen,
  onClose,
  onSubmit,
  initialData,
  employees,
}: CredentialDrawerProps) {
  const { t } = useTranslation();
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState<CredentialInput>({
    employeeId: "",
    account_type: [],
    username: "",
    password: "",
    email_address: "",
    remarks: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({
        employeeId: "",
        account_type: [],
        username: "",
        password: "",
        email_address: "",
        remarks: "",
      });
    }
  }, [initialData, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      await onSubmit(formData);
      onClose();
    } catch (error) {
      console.error("Save error:", error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      title={initialData ? t("credentials.edit_credential") : t("credentials.add_credential")}
      size="lg"
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 pb-24 font-sans">
        <div className="space-y-6">
          {/* Section: Assignment */}
          <div className="space-y-4">
             <div className="flex items-center gap-2 text-slate-900 font-bold border-b border-slate-100 pb-2">
                <User className="h-4 w-4 text-primary" />
                <span className="text-sm">Account Assignment</span>
             </div>
             <div className="space-y-1.5">
               <label className="text-xs font-semibold text-slate-500">{t("credentials.employee")}</label>
               <EmployeeSearchSelect
                 value={formData.employeeId}
                 onChange={(val) => {
                   const emp = employees.find(e => e.employee_name_th === val || e.id === val);
                   setFormData({ ...formData, employeeId: emp?.id || "" });
                 }}
                 employees={employees}
                 placeholder={t("credentials.search_placeholder")}
               />
             </div>
          </div>

          {/* Section: Account Types */}
          <div className="space-y-4">
             <div className="flex items-center gap-2 text-slate-900 font-bold border-b border-slate-100 pb-2">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span className="text-sm">Account System Types</span>
             </div>
             <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {ACCOUNT_TYPES.map((type) => {
                  const isSelected = formData.account_type.includes(type);
                  return (
                    <button
                      key={type}
                      type="button"
                      onClick={() => {
                        const current = [...formData.account_type];
                        if (isSelected) {
                          setFormData({ ...formData, account_type: current.filter(t => t !== type) });
                        } else {
                          setFormData({ ...formData, account_type: [...current, type] });
                        }
                      }}
                      className={cn(
                        "px-3 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-tight transition-all text-center border",
                        isSelected 
                          ? "bg-primary text-white border-primary shadow-sm" 
                          : "bg-white text-slate-500 border-slate-200 hover:border-slate-300"
                      )}
                    >
                      {t(`credentials.account_types.${type}`)}
                    </button>
                  );
                })}
             </div>
          </div>

          {/* Section: Credentials */}
          <div className="space-y-4">
             <div className="flex items-center gap-2 text-slate-900 font-bold border-b border-slate-100 pb-2">
                <Lock className="h-4 w-4 text-primary" />
                <span className="text-sm">Login Information</span>
             </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                   <label className="text-xs font-semibold text-slate-500">{t("credentials.username")}</label>
                   <div className="relative">
                      <Key className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                      <input
                        required
                        className="w-full bg-white border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-sm font-bold text-slate-700 outline-none focus:border-primary/50 transition-all"
                        value={formData.username}
                        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                        placeholder="e.g. user.name"
                      />
                   </div>
                </div>

                <div className="space-y-1.5 focus-within:text-emerald-600">
                   <label className="text-xs font-semibold text-slate-500">{t("credentials.password")}</label>
                   <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                      <input
                        required
                        type="text"
                        className="w-full bg-emerald-50/20 border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-sm font-bold text-slate-700 outline-none focus:border-emerald-500/50 transition-all font-mono"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        placeholder="••••••••"
                      />
                   </div>
                   <p className="text-[10px] font-medium text-slate-400 italic">Self-encrypting AES-256 enabled</p>
                </div>

                <div className="space-y-1.5 md:col-span-2">
                   <label className="text-xs font-semibold text-slate-500">{t("credentials.email_address")}</label>
                   <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                      <input
                        type="email"
                        className="w-full bg-white border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-sm font-medium text-slate-700 outline-none focus:border-primary/50 transition-all"
                        value={formData.email_address || ""}
                        onChange={(e) => setFormData({ ...formData, email_address: e.target.value })}
                        placeholder="employee@ndc.co.th"
                      />
                   </div>
                </div>

                <div className="space-y-1.5 md:col-span-2">
                   <label className="text-xs font-semibold text-slate-500">{t("credentials.remarks")}</label>
                   <textarea
                     rows={3}
                     className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 outline-none focus:border-primary/50 transition-all resize-none"
                     value={formData.remarks || ""}
                     onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
                     placeholder="Additional information, permissions, etc."
                   />
                </div>
             </div>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-4">
          <Button type="button" variant="ghost" onClick={onClose} className="flex-1 h-11 rounded-lg font-bold border border-slate-200">
            {t("common.cancel")}
          </Button>
          <Button 
            type="submit" 
            disabled={isSaving || !formData.employeeId}
            className="flex-1 h-11 rounded-lg bg-primary hover:bg-primary/90 text-white font-bold transition-all shadow-md active:scale-95"
          >
            {isSaving ? <Loader2 className="h-4 w-4 animate-spin" /> : t("common.save")}
          </Button>
        </div>
      </form>
    </Drawer>
  );
}
