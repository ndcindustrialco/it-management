"use client";

import React, { useState, useEffect } from "react";
import { Plus, Search, Edit2, Trash2, Loader2, User, ChevronUp, ChevronDown } from "lucide-react";
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableHead, 
  TableRow, 
  TableCell 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/lib/i18n/LanguageContext";

interface Employee {
  id: string;
  employee_code: string;
  employee_name_th: string;
  employee_name_en?: string;
  gender?: string;
  department?: string;
  position?: string;
  work_location?: string;
  supervisor_name?: string;
  start_date?: string;
  end_date?: string;
  status?: string;
}

export default function EmployeesPage() {
  const { t, locale } = useTranslation();
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  // Filters & Sorting logic states
  const [filterStatus, setFilterStatus] = useState("ALL");
  const [filterDepartment, setFilterDepartment] = useState("ALL");
  const [sortConfig, setSortConfig] = useState<{ key: keyof Employee; direction: 'asc' | 'desc' }>({
    key: 'employee_name_th',
    direction: 'asc'
  });

  // Form State
  const [formData, setFormData] = useState({
    employee_code: "",
    employee_name_th: "",
    employee_name_en: "",
    gender: "MALE",
    department: "",
    position: "",
    work_location: "",
    supervisor_name: "",
    start_date: "",
    end_date: "",
    status: "ACTIVE"
  });

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/employees");
      const data = await res.json();
      if (Array.isArray(data)) setEmployees(data);
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSort = (key: keyof Employee) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const filteredEmployees = employees
    .filter(emp => {
      const searchLow = search.toLowerCase();
      const matchesSearch = emp.employee_name_th.toLowerCase().includes(searchLow) ||
                           (emp.employee_name_en || "").toLowerCase().includes(searchLow) ||
                           emp.employee_code.toLowerCase().includes(searchLow);
      
      const matchesStatus = filterStatus === "ALL" || emp.status === filterStatus;
      const matchesDepartment = filterDepartment === "ALL" || emp.department === filterDepartment;
      
      return matchesSearch && matchesStatus && matchesDepartment;
    })
    .sort((a, b) => {
      const aValue = (a as any)[sortConfig.key] || "";
      const bValue = (b as any)[sortConfig.key] || "";
      
      if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });

  const openModal = (employee: Employee | null = null) => {
    if (employee) {
      setSelectedEmployee(employee);
      setFormData({
        employee_code: employee.employee_code || "",
        employee_name_th: employee.employee_name_th || "",
        employee_name_en: employee.employee_name_en || "",
        gender: employee.gender || "MALE",
        department: employee.department || "",
        position: employee.position || "",
        work_location: employee.work_location || "",
        supervisor_name: employee.supervisor_name || "",
        start_date: employee.start_date ? new Date(employee.start_date).toISOString().split('T')[0] : "",
        end_date: employee.end_date ? new Date(employee.end_date).toISOString().split('T')[0] : "",
        status: employee.status || "ACTIVE"
      });
    } else {
      setSelectedEmployee(null);
      setFormData({
        employee_code: "",
        employee_name_th: "",
        employee_name_en: "",
        gender: "MALE",
        department: "",
        position: "",
        work_location: "",
        supervisor_name: "",
        start_date: "",
        end_date: "",
        status: "ACTIVE"
      });
    }
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      const url = selectedEmployee 
        ? `/api/employees/${selectedEmployee.id}` 
        : "/api/employees";
      const method = selectedEmployee ? "PATCH" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setIsModalOpen(false);
        fetchEmployees();
      }
    } catch (error) {
      console.error("Save error:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm(t('common.confirm_delete'))) return;
    try {
      await fetch(`/api/employees/${id}`, { method: "DELETE" });
      fetchEmployees();
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  const departments = Array.from(new Set(employees.map(e => e.department).filter(Boolean)));

  return (
    <div className="p-4 sm:p-6 space-y-6">
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-black text-[#0F1059] tracking-tighter uppercase leading-none flex items-center gap-3">
             <div className="h-12 w-12 rounded-2xl bg-[#0F1059] flex items-center justify-center text-white border border-[#0F1059]/10 shadow-sm">
                <User className="h-6 w-6" />
             </div>
             {t('employees.title')}
          </h1>
          <p className="text-[12px] font-medium text-zinc-500 uppercase tracking-widest mt-2">{t('employees.subtitle')}</p>
        </div>
        <Button onClick={() => openModal()} className="rounded-2xl bg-[#0F1059] hover:bg-black h-14 px-8 font-black uppercase tracking-widest text-[11px] transition-all shadow-xl shadow-[#0F1059]/10">
          <Plus className="mr-2 h-4 w-4" /> {t('employees.add_employee')}
        </Button>
      </header>

      {/* Filter Bar */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-center p-4 rounded-3xl border border-zinc-100 bg-white/50 shadow-sm font-sans uppercase">
        <div className="flex items-center gap-3 px-4 py-2 bg-zinc-50 rounded-2xl border border-zinc-100 group focus-within:border-[#0F1059]/30 transition-all col-span-1 lg:col-span-2">
             <Search className="h-4 w-4 text-zinc-400 group-focus-within:text-[#0F1059]" />
             <input 
                className="bg-transparent border-none outline-none text-[10px] font-black uppercase w-full"
                placeholder={t('employees.search_placeholder')}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
             />
        </div>
        
        <select 
          className="bg-zinc-50 border border-zinc-100 rounded-2xl px-4 py-2.5 text-[10px] font-black uppercase outline-none text-zinc-600 focus:border-[#0F1059]/30 cursor-pointer transition-all"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="ALL">{t('employees.all_status')}</option>
          <option value="ACTIVE">{t('employees.status_active')}</option>
          <option value="RESIGNED">{t('employees.status_resigned')}</option>
        </select>

        <select 
          className="bg-zinc-50 border border-zinc-100 rounded-2xl px-4 py-2.5 text-[10px] font-black uppercase outline-none text-zinc-600 focus:border-[#0F1059]/30 cursor-pointer transition-all"
          value={filterDepartment}
          onChange={(e) => setFilterDepartment(e.target.value)}
        >
          <option value="ALL">{t('employees.all_depts')}</option>
          {departments.map(dept => (
            <option key={dept} value={dept || ""}>{dept}</option>
          ))}
        </select>
      </div>

      <Card className="rounded-[40px] border-zinc-100 overflow-hidden bg-white/90">
        <div className="overflow-x-auto">
          <Table className="w-full text-left font-sans">
            <TableHeader className="bg-zinc-50/50">
              <TableRow className="border-none">
                <TableHead 
                   className="px-6 py-5 text-[10px] font-black text-[#0F1059] uppercase tracking-widest cursor-pointer hover:bg-zinc-100 transition-colors"
                   onClick={() => handleSort('employee_name_th')}
                >
                  <div className="flex items-center gap-1">
                    {t('employees.employee_info')}
                    {sortConfig.key === 'employee_name_th' && (sortConfig.direction === 'asc' ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />)}
                  </div>
                </TableHead>
                <TableHead 
                   className="px-4 py-5 text-[10px] font-black text-[#0F1059] uppercase tracking-widest cursor-pointer hover:bg-zinc-100 transition-colors"
                   onClick={() => handleSort('department')}
                >
                  <div className="flex items-center gap-1">
                    {t('employees.department')}
                    {sortConfig.key === 'department' && (sortConfig.direction === 'asc' ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />)}
                  </div>
                </TableHead>
                <TableHead className="px-4 py-5 text-[10px] font-black text-[#0F1059] uppercase tracking-widest">{t('employees.position')}</TableHead>
                <TableHead className="px-4 py-5 text-[10px] font-black text-[#0F1059] uppercase tracking-widest">{t('employees.gender')}</TableHead>
                <TableHead className="px-4 py-5 text-[10px] font-black text-[#0F1059] uppercase tracking-widest">{t('employees.supervisor')}</TableHead>
                <TableHead 
                   className="px-4 py-5 text-[10px] font-black text-[#0F1059] uppercase tracking-widest cursor-pointer hover:bg-zinc-100 transition-colors"
                   onClick={() => handleSort('start_date')}
                >
                  <div className="flex items-center gap-1">
                    {t('employees.start_date')}
                    {sortConfig.key === 'start_date' && (sortConfig.direction === 'asc' ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />)}
                  </div>
                </TableHead>
                <TableHead className="px-4 py-5 text-[10px] font-black text-[#0F1059] uppercase tracking-widest">{t('common.status')}</TableHead>
                <TableHead className="p-0"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-zinc-100">
              {isLoading ? (
                 Array.from({ length: 5 }).map((_, i) => (
                   <TableRow key={i}>
                     <TableCell colSpan={8} className="h-20 animate-pulse bg-zinc-50/10" />
                   </TableRow>
                 ))
              ) : filteredEmployees.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} className="px-6 py-20 text-center text-zinc-400 italic font-bold uppercase tracking-widest">
                      {t('employees.no_employees_found')}
                  </TableCell>
                </TableRow>
              ) : filteredEmployees.map((emp) => (
                <TableRow key={emp.id} className="hover:bg-zinc-50/50 transition-colors group">
                  <TableCell className="px-6 py-4 whitespace-nowrap">
                     <div className="font-bold text-[#0F1059] uppercase text-sm">{emp.employee_name_th}</div>
                     <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-tighter mt-0.5">
                       <span className="font-black text-[#0F1059]/60">{emp.employee_code}</span>
                       {emp.employee_name_en && <span className="ml-2 text-zinc-300">• {emp.employee_name_en}</span>}
                     </div>
                  </TableCell>
                  <TableCell className="px-4 py-4 whitespace-nowrap">
                     <div className="text-[11px] font-black text-zinc-700 uppercase tracking-tight">{emp.department || '-'}</div>
                     <div className="text-[9px] text-zinc-400 font-medium uppercase">{emp.work_location || '-'}</div>
                  </TableCell>
                  <TableCell className="px-4 py-4 whitespace-nowrap">
                     <Badge variant="secondary" className="rounded-lg text-[9px] font-black uppercase bg-zinc-100 border-none px-2.5 py-1 shadow-none text-zinc-500">{emp.position || '-'}</Badge>
                  </TableCell>
                  <TableCell className="px-4 py-4 whitespace-nowrap">
                     <span className={cn("text-[10px] font-black uppercase tracking-widest", 
                       emp.gender === "MALE" ? "text-blue-500" : emp.gender === "FEMALE" ? "text-pink-500" : "text-zinc-400"
                     )}>
                       {emp.gender === "MALE" ? (locale === 'th' ? 'ชาย' : 'M') : emp.gender === "FEMALE" ? (locale === 'th' ? 'หญิง' : 'F') : '-'}
                     </span>
                  </TableCell>
                  <TableCell className="px-4 py-4 whitespace-nowrap">
                     <span className="text-[10px] font-bold text-zinc-500 uppercase">{emp.supervisor_name || '-'}</span>
                  </TableCell>
                  <TableCell className="px-4 py-4 whitespace-nowrap">
                     <span className="text-[10px] font-bold text-zinc-500">
                       {emp.start_date ? new Date(emp.start_date).toLocaleDateString(locale === 'th' ? 'th-TH' : 'en-GB') : '-'}
                     </span>
                  </TableCell>
                  <TableCell className="px-4 py-4 whitespace-nowrap">
                     <Badge className={cn("rounded-lg text-[9px] font-black uppercase tracking-widest border-none shadow-none px-3 py-1", emp.status === "ACTIVE" ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-500")}>
                        {emp.status === "ACTIVE" ? t('employees.status_active') : t('employees.status_resigned')}
                     </Badge>
                  </TableCell>
                  <TableCell className="px-4 py-4 whitespace-nowrap text-right">
                     <div className="flex justify-end gap-1 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all">
                        <button 
                           onClick={() => openModal(emp)}
                           className="p-2.5 rounded-xl bg-white border border-zinc-100 text-zinc-400 hover:text-[#0F1059] transition-all shadow-sm"
                        >
                            <Edit2 className="w-4 h-4" />
                        </button>
                        <button 
                           onClick={() => handleDelete(emp.id)}
                           className="p-2.5 rounded-xl bg-white border border-zinc-100 text-zinc-400 hover:text-rose-600 transition-all shadow-sm"
                        >
                            <Trash2 className="w-4 h-4" />
                        </button>
                     </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={selectedEmployee ? t('employees.edit_title') : t('employees.new_title')}
      >
        <form onSubmit={handleSave} className="space-y-6 max-h-[80vh] overflow-y-auto pr-2 font-sans">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 px-1">
            <div className="space-y-1.5 focus-within:text-[#0F1059] transition-colors">
              <label className="text-[11px] font-black text-zinc-400 uppercase tracking-widest px-1">{t('employees.employee_code')}</label>
              <input 
                required
                className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3 text-sm font-black text-[#0F1059] outline-none focus:bg-white focus:border-[#0F1059]/30 transition-all shadow-sm"
                value={formData.employee_code}
                onChange={(e) => setFormData({...formData, employee_code: e.target.value})}
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] font-black text-zinc-400 uppercase tracking-widest px-1">{t('employees.gender')}</label>
              <select 
                className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3 text-sm font-bold outline-none focus:border-[#0F1059]/30 shadow-sm cursor-pointer transition-all"
                value={formData.gender}
                onChange={(e) => setFormData({...formData, gender: e.target.value})}
              >
                <option value="MALE">{t('employees.gender_male')}</option>
                <option value="FEMALE">{t('employees.gender_female')}</option>
                <option value="OTHER">{t('employees.gender_other')}</option>
              </select>
            </div>
            <div className="space-y-1.5 focus-within:text-[#0F1059] transition-colors col-span-2">
              <label className="text-[11px] font-black text-zinc-400 uppercase tracking-widest px-1">{t('employees.name_th')}</label>
              <input 
                required
                className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:bg-white focus:border-[#0F1059]/30 transition-all shadow-sm"
                value={formData.employee_name_th}
                onChange={(e) => setFormData({...formData, employee_name_th: e.target.value})}
              />
            </div>
            <div className="space-y-1.5 focus-within:text-[#0F1059] transition-colors col-span-2">
              <label className="text-[11px] font-black text-zinc-400 uppercase tracking-widest px-1">{t('employees.name_en')}</label>
              <input 
                className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:bg-white focus:border-[#0F1059]/30 transition-all shadow-sm"
                value={formData.employee_name_en}
                onChange={(e) => setFormData({...formData, employee_name_en: e.target.value})}
              />
            </div>
            <div className="space-y-1.5 focus-within:text-[#0F1059] transition-colors">
              <label className="text-[11px] font-black text-zinc-400 uppercase tracking-widest px-1">{t('employees.department')}</label>
              <input 
                className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:bg-white focus:border-[#0F1059]/30 transition-all shadow-sm"
                value={formData.department}
                onChange={(e) => setFormData({...formData, department: e.target.value})}
              />
            </div>
            <div className="space-y-1.5 focus-within:text-[#0F1059] transition-colors">
              <label className="text-[11px] font-black text-zinc-400 uppercase tracking-widest px-1">{t('employees.position')}</label>
              <input 
                className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:bg-white focus:border-[#0F1059]/30 transition-all shadow-sm"
                value={formData.position}
                onChange={(e) => setFormData({...formData, position: e.target.value})}
              />
            </div>
            <div className="space-y-1.5 focus-within:text-[#0F1059] transition-colors">
              <label className="text-[11px] font-black text-zinc-400 uppercase tracking-widest px-1">{t('employees.location')}</label>
              <input 
                className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:bg-white focus:border-[#0F1059]/30 transition-all shadow-sm"
                value={formData.work_location}
                onChange={(e) => setFormData({...formData, work_location: e.target.value})}
              />
            </div>
            <div className="space-y-1.5 focus-within:text-[#0F1059] transition-colors">
              <label className="text-[11px] font-black text-zinc-400 uppercase tracking-widest px-1">{t('employees.supervisor')}</label>
              <input 
                className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:bg-white focus:border-[#0F1059]/30 transition-all shadow-sm"
                value={formData.supervisor_name}
                onChange={(e) => setFormData({...formData, supervisor_name: e.target.value})}
              />
            </div>
            <div className="space-y-1.5 focus-within:text-[#0F1059] transition-colors">
              <label className="text-[11px] font-black text-zinc-400 uppercase tracking-widest px-1">{t('employees.start_date')}</label>
              <input 
                type="date"
                className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:bg-white focus:border-[#0F1059]/30 transition-all shadow-sm"
                value={formData.start_date}
                onChange={(e) => setFormData({...formData, start_date: e.target.value})}
              />
            </div>
            <div className="space-y-1.5 focus-within:text-[#0F1059] transition-colors">
              <label className="text-[11px] font-black text-zinc-400 uppercase tracking-widest px-1">{t('employees.end_date')}</label>
              <input 
                type="date"
                className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:bg-white focus:border-[#0F1059]/30 transition-all shadow-sm"
                value={formData.end_date}
                onChange={(e) => setFormData({...formData, end_date: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-2 px-1">
              <label className="text-[11px] font-black text-zinc-400 uppercase tracking-widest px-1">{t('employees.employment_status')}</label>
              <select 
                className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3 text-sm font-black text-[#0F1059] uppercase outline-none shadow-sm cursor-pointer transition-all"
                value={formData.status}
                onChange={(e) => setFormData({...formData, status: e.target.value})}
              >
                <option value="ACTIVE">{t('employees.status_active')}</option>
                <option value="RESIGNED">{t('employees.status_resigned')}</option>
              </select>
          </div>
          
          <div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
            <Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)} className="flex-1 h-12 rounded-xl text-[11px] font-black uppercase tracking-widest">
              {t('common.cancel')}
            </Button>
            <Button 
              type="submit" 
              disabled={isSaving}
              className="flex-1 h-12 rounded-xl bg-[#0F1059] hover:bg-black text-white text-[11px] font-black uppercase tracking-widest transition-all shadow-xl shadow-[#0F1059]/20"
            >
              {isSaving ? <Loader2 className="h-4 w-4 animate-spin" /> : t('common.save')}
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
