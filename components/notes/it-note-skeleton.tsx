"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function ItNoteSkeleton() {
  return (
    <div className="space-y-4">
      {/* Desktop Skeleton */}
      <div className="hidden lg:block bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-slate-50/50 border-slate-200">
              <TableHead className="w-[40%] py-3 px-4"><Skeleton className="h-3 w-32" /></TableHead>
              <TableHead className="w-[20%] py-3 px-4"><Skeleton className="h-3 w-16 mx-auto" /></TableHead>
              <TableHead className="w-[25%] py-3 px-4"><Skeleton className="h-3 w-24 mx-auto" /></TableHead>
              <TableHead className="w-[15%] py-3 px-4 text-right"><Skeleton className="h-3 w-10 ml-auto" /></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[...Array(5)].map((_, i) => (
              <TableRow key={i} className="border-slate-100">
                <TableCell className="py-3 px-4">
                  <div className="flex flex-col gap-2">
                    <Skeleton className="h-4 w-48" />
                    <div className="flex gap-1.5 pt-1">
                      <Skeleton className="h-4 w-20 rounded-lg" />
                      <Skeleton className="h-4 w-24 rounded-lg" />
                    </div>
                  </div>
                </TableCell>
                <TableCell className="py-3 px-4 text-center">
                   <Skeleton className="h-8 w-8 mx-auto rounded-lg" />
                   <Skeleton className="h-2 w-12 mx-auto mt-1" />
                </TableCell>
                <TableCell className="py-3 px-4 flex flex-col items-center justify-center gap-1.5 h-[72px]">
                   <Skeleton className="h-3 w-20" />
                   <Skeleton className="h-3 w-24" />
                </TableCell>
                <TableCell className="py-3 px-4 text-right">
                  <Skeleton className="h-9 w-9 ml-auto rounded-lg" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile Skeleton */}
      <div className="lg:hidden grid grid-cols-1 gap-3">
        {[...Array(3)].map((_, i) => (
          <Card key={i} className="rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <CardContent className="p-4 space-y-4">
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-5 w-3/4" />
                  <div className="flex gap-2">
                    <Skeleton className="h-4 w-16 rounded-lg" />
                    <Skeleton className="h-4 w-20 rounded-lg" />
                  </div>
                </div>
                <Skeleton className="h-9 w-9 rounded-lg" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Skeleton className="h-10 w-full rounded-lg" />
                <Skeleton className="h-10 w-full rounded-lg" />
              </div>
              <div className="pt-3 border-t border-slate-50 flex justify-between">
                <Skeleton className="h-3 w-20" />
                <Skeleton className="h-3 w-20" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
