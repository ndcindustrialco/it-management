"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export function Modal({ isOpen, onClose, title, children, className, size = 'md' }: ModalProps) {
  // Prevent scroll when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-zinc-950/40 backdrop-blur-sm"
          />

          {/* Modal Content — slides up on mobile, scales in on desktop */}
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 350 }}
             className={cn(
               "relative w-full overflow-hidden",
               size === 'sm' && "sm:max-w-sm",
               size === 'md' && "sm:max-w-lg",
               size === 'lg' && "sm:max-w-2xl",
               size === 'xl' && "sm:max-w-4xl",
               size === 'full' && "sm:max-w-[95vw]",
               "rounded-t-3xl sm:rounded-3xl",
               "bg-white dark:bg-zinc-900 border border-zinc-100 shadow-sm dark:border-zinc-800",
               className
             )}
          >
            <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 px-5 sm:px-6 py-4">
              <h2 className="text-base sm:text-xl font-black text-zinc-900 dark:text-white tracking-tight leading-tight">
                {title}
              </h2>
              <button
                onClick={onClose}
                className="rounded-full p-2 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 transition-colors shrink-0"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4 sm:p-6 max-h-[82vh] overflow-y-auto">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
