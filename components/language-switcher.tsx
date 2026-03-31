"use client";

import { useTranslation } from "@/lib/i18n/LanguageContext";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation();

  return (
    <div className="flex items-center gap-1 bg-zinc-100/80 p-1 rounded-full border border-zinc-200 shadow-sm backdrop-blur-sm">
      <button
        onClick={() => setLocale("th")}
        className={cn(
          "relative px-3 py-1.5 rounded-full text-[10px] font-black tracking-widest transition-all duration-300",
          locale === "th" 
            ? "text-[#0F1059]" 
            : "text-zinc-400 hover:text-zinc-600"
        )}
      >
        {locale === "th" && (
          <motion.div
            layoutId="active-lang"
            className="absolute inset-0 bg-white rounded-full shadow-sm"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span className="relative z-10">TH</span>
      </button>
      <div className="w-px h-3 bg-zinc-200 mx-0.5" />
      <button
        onClick={() => setLocale("en")}
        className={cn(
          "relative px-3 py-1.5 rounded-full text-[10px] font-black tracking-widest transition-all duration-300",
          locale === "en" 
            ? "text-[#0F1059]" 
            : "text-zinc-400 hover:text-zinc-600"
        )}
      >
        {locale === "en" && (
          <motion.div
            layoutId="active-lang"
            className="absolute inset-0 bg-white rounded-full shadow-sm"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span className="relative z-10">EN</span>
      </button>
    </div>
  );
}
