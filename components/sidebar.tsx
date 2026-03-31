"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  LogOut, 
  X,
  ChevronRight,
  ShieldAlert
} from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/lib/i18n/LanguageContext";
import { ThemeSwitcher } from "./theme-switcher";

export function Sidebar({ isOpen, onClose }: { isOpen?: boolean; onClose?: () => void }) {
  const pathname = usePathname();
  const { data: session } = useSession();
  const { t, locale, setLocale } = useTranslation();
  const role = (session?.user as any)?.role || "user";

  const adminLinks = [
    { name: t('sidebar.dashboard'), href: "/" },
    { name: t('sidebar.approvals'), href: "/admin/approvals" },
    { name: t('sidebar.tickets'), href: "/admin/tickets" },
    { name: t('sidebar.borrowing'), href: "/admin/equipment-requests" },
    { name: t('sidebar.purchase_orders'), href: "/admin/purchase-orders",  },
    { name: t('sidebar.receiving'), href: "/admin/equipment-entry-lists" },
    { name: t('sidebar.inventory'), href: "/admin/inventory" },
    { name: t('sidebar.employees'), href: "/admin/employees" },
    { name: t('sidebar.users'), href: "/admin/users" },
    { name: t('sidebar.import'), href: "/admin/import" },
    { name: t('sidebar.logs'), href: "/admin/logs" },
  ];

  const userLinks = [
    { name: t('sidebar.dashboard'), href: "/" },
    { name: t('sidebar.my_requests'), href: "/user/my-requests" },
    { name: t('sidebar.borrow_equipment'), href: "/user/borrow" },
  ];

  const links = role === "admin" ? adminLinks : userLinks;

  const content = (
    <div className="flex h-full w-full flex-col bg-white border-r border-zinc-100 transition-colors duration-300">
      <div className="flex h-16 items-center px-6 justify-between border-b border-zinc-100 mb-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-[#0F1059] flex items-center justify-center text-white font-semibold text-sm">IT</div>
          <span className="text-lg font-semibold tracking-tight text-[#0F1059] uppercase transition-colors">Service Hub</span>
        </div>
        
        <div className="flex items-center gap-2">
            <ThemeSwitcher />
            <button 
                onClick={() => setLocale(locale === 'th' ? 'en' : 'th')}
                className="h-8 w-8 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center text-[10px] font-black text-[#0F1059] hover:bg-zinc-100 transition-all active:scale-95"
            >
                {locale === 'th' ? 'EN' : 'TH'}
            </button>
            <button onClick={onClose} className="lg:hidden p-2 text-[#ADB5BD] hover:text-[#0F1059] transition-colors">
               <X className="h-5 w-5" />
            </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-1">
        <p className="text-sm font-semibold text-[#ADB5BD] uppercase tracking-wide px-4 mb-4">{t('sidebar.main_menu')}</p>
        <div className="space-y-1.5 px-1">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => onClose?.()}
                className={cn(
                  "group flex items-center justify-between rounded-md px-4 py-3 text-sm font-normal transition-all duration-200",
                  isActive
                    ? "bg-[#E9ECEF] text-[#0F1059] border-[#E9ECEF]"
                    : "text-black/50 hover:bg-[#F8F9FA] hover:text-[#0F1059]"
                )}
              >
                <div className="flex items-center">
                    {link.name}
                </div>
                {isActive && <ChevronRight className="h-3 w-3 text-[#ADB5BD] transition-all" />}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="p-4 border-t border-zinc-100 space-y-4">
         <div className="px-4 py-3 rounded-2xl bg-[#F8F9FA] border border-zinc-100 shadow-sm flex items-center gap-3">
            <div className="flex-1 min-w-0">
               <p className="text-sm font-semibold text-[#0F1059] truncate">{(session?.user as any)?.employee_name_en || 'Internal Profile'}</p>
               <p className="text-sm font-normal text-[#ADB5BD] truncate uppercase mt-0.5 opacity-70 tracking-wide">{t('sidebar.authorized')}: {role}</p>
            </div>
         </div>
        <button
          onClick={() => signOut()}
          className="flex w-full items-center justify-center rounded-md px-4 py-3 text-sm font-semibold uppercase tracking-wide text-[#ADB5BD] hover:text-rose-600 hover:bg-rose-50 transition-all active:scale-95"
        >
          <LogOut className="mr-2 h-4 w-4" />
          {t('sidebar.logout')}
        </button>
      </div>
    </div>
  );

  return (
    <>
      <aside className="hidden lg:block w-64 shrink-0 fixed inset-y-0 left-0 z-30">
        {content}
      </aside>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="absolute inset-0 bg-zinc-950/20 backdrop-blur-[1px]"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}
              className="absolute inset-y-0 left-0 w-80 max-w-[85vw]"
            >
              {content}
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
