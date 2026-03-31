import React from 'react';
import { Card } from "@/components/ui/card";
import { Package, ImageIcon } from "lucide-react";

interface InventoryStockProps {
  inventory: any[];
}

export const InventoryStock: React.FC<InventoryStockProps> = ({ inventory }) => {
  return (
    <Card className="rounded-2xl border-zinc-100 overflow-hidden flex flex-col bg-white">
      <div className="p-5 border-b border-zinc-50 flex items-center justify-between bg-zinc-50/10">
        <h2 className="text-[13px] font-black text-zinc-900 uppercase tracking-widest flex items-center gap-2">
          <Package className="h-4 w-4 text-indigo-500" /> สต็อกอุปกรณ์ไอที / IT Equipment Stock
        </h2>
      </div>
      <div className="p-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 bg-slate-50/50">
        {inventory.map((item, idx) => (
          <div key={idx} className="p-3 border border-zinc-100 rounded-xl bg-white flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all group">
            <div className="h-10 w-10 bg-indigo-50 rounded-full flex items-center justify-center mb-3 shadow-xs text-indigo-500 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all">
              {item.equipmentEntry?.purchaseOrder?.picture ? (
                <div className="rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200">
                  <img src={item.equipmentEntry.purchaseOrder.picture} alt="" className="w-full h-full object-cover hover:scale-125 transition-transform duration-700" />
                </div>
              ) : (
                <div className="rounded-2xl bg-zinc-50 flex items-center justify-center border border-dashed border-zinc-200 text-zinc-300">
                  <ImageIcon className="w-6 h-6" />
                </div>
              )}
            </div>
            <p className="text-[11px] font-black text-zinc-900 uppercase tracking-tight line-clamp-1 w-full" title={item.equipmentEntry?.list || 'Unknown'}>
              {item.equipmentEntry?.list || 'Unknown'}
            </p>
            <p className="text-[9px] font-bold text-zinc-400 mt-1 uppercase w-full truncate">
              {item.equipmentEntry?.brand_name || '-'}
            </p>
            <div className="mt-4 bg-zinc-50 w-full py-2 rounded-lg border border-zinc-100/50 group-hover:bg-indigo-50 transition-colors">
              <p className="text-[10px] font-black text-[#0F1059]">
                <span className="text-zinc-400 font-bold mr-1">คงเหลือ:</span>{item.remaining}
              </p>
            </div>
          </div>
        ))}
        {inventory.length === 0 && (
          <div className="col-span-full py-10 text-center flex flex-col items-center gap-2">
            <Package className="h-8 w-8 text-zinc-300" />
            <p className="text-zinc-400 text-[11px] font-bold uppercase tracking-wider">ไม่พบอุปกรณ์ในคลัง / No stock found</p>
          </div>
        )}
      </div>
    </Card>
  );
};
