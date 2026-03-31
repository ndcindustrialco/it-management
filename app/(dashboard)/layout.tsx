"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { Sidebar } from "@/components/sidebar";
import { 
  Menu, 
  Bell, 
  Search, 
  User, 
  Settings,
  ChevronDown
} from "lucide-react";
import { Dropdown, DropdownItem } from "@/components/ui/dropdown";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeSwitcher } from "@/components/theme-switcher";

 export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [employee, setEmployee] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployee = async () => {
      const empId = (session?.user as any)?.employeeId;
      if (!empId) {
        setLoading(false);
        return;
      }
      try {
        const res = await fetch(`/api/employees/${empId}`);
        const data = await res.json();
        setEmployee(data);
      } catch (error) {
        console.error("Fetch employee error:", error);
      } finally {
        setLoading(false);
      }
    };
    if (session) fetchEmployee();
  }, [session]);

  return (
    <div className="flex min-h-screen bg-[#F8F9FA] transition-colors duration-300 font-sans relative">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Offset the main area by the fixed sidebar width on lg+ screens */}
      <main className="flex-1 flex flex-col min-w-0 lg:pl-64">
        <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b bg-white px-8 border-zinc-100 shadow-sm">
          <div className="flex items-center gap-4">
             <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden p-2 -ml-1 text-[#ADB5BD] hover:text-[#0F1059] transition-all rounded-md active:bg-[#F8F9FA]">
                <Menu className="h-6 w-6" />
             </button>
              <div className="hidden lg:block">
                 <h2 className="text-xs font-black text-zinc-400 uppercase tracking-widest leading-none mb-1">ภาพรวม / Overview</h2>
                 <p className="text-lg font-black text-[#0F1059] leading-none uppercase">หน้าแรก / Dashboard</p>
              </div>
          </div>

          <div className="flex items-center gap-6">
             <div className="flex items-center gap-2">
                <ThemeSwitcher />
                <LanguageSwitcher />
             </div>
             <div className="w-px h-3 bg-zinc-200 mx-0.5 hidden md:block" />

             <div className="flex items-center gap-4 group cursor-pointer">
                <div className="text-right hidden sm:block">
                   <p className="text-sm font-black text-zinc-900 leading-none mb-1 uppercase tracking-tight">
                      {employee?.employee_name_th || session?.user?.name || "System Member"}
                   </p>
                   <div className="flex items-center justify-end gap-2">
                      <Badge variant="secondary" className="rounded-lg h-5 text-[9px] font-black uppercase bg-[#0F1059]/5 text-[#0F1059] border-none">
                         ID: {employee?.employee_code || "---"}
                      </Badge>
                      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-tighter">
                         {employee?.department || "No Dept"}
                      </span>
                   </div>
                </div>

                <div className="h-12 w-12 rounded-2xl bg-linear-to-br from-[#0F1059] to-[#2B2D8E] flex items-center justify-center text-white border-2 border-white group-hover:scale-105 transition-all duration-300">
                   <User className="h-5 w-5" />
                </div>
             </div>
          </div>
        </header>

        {/* Full-width content area — no fixed max-width */}
        <div className="flex-1 w-full p-6 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
