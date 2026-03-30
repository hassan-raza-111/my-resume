"use client";

import { Bell, Search, ChevronDown, Calendar } from "lucide-react";

export function Topbar() {
  const today = new Date().toLocaleDateString("en-PK", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-border bg-surface px-6">
      {/* Left: Search */}
      <div className="flex items-center gap-2 rounded-xl border border-border bg-brand-50 px-4 py-2.5 transition-colors focus-within:border-brand-400 focus-within:ring-2 focus-within:ring-brand-200">
        <Search className="h-4 w-4 text-brand-500" />
        <input
          type="text"
          placeholder="Search doctors, orders, reps..."
          className="w-72 bg-transparent text-sm text-brand-900 outline-none placeholder:text-brand-400"
        />
      </div>

      {/* Right side */}
      <div className="flex items-center gap-2">
        {/* Date */}
        <div className="mr-2 hidden items-center gap-2 text-sm text-brand-700 lg:flex">
          <Calendar className="h-4 w-4 text-brand-500" />
          <span>{today}</span>
        </div>

        {/* Divider */}
        <div className="mx-1 hidden h-8 w-px bg-border lg:block" />

        {/* Notifications */}
        <button className="relative rounded-xl p-2.5 text-brand-700 transition-colors hover:bg-brand-100">
          <Bell className="h-5 w-5" />
          <span className="absolute right-2 top-2 flex h-4 w-4 items-center justify-center rounded-full bg-accent-500 text-[9px] font-bold text-white">
            5
          </span>
        </button>

        {/* User menu */}
        <button className="flex items-center gap-3 rounded-xl px-3 py-2 transition-colors hover:bg-brand-100">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-br from-brand-500 to-brand-700 text-sm font-bold text-white shadow-md shadow-brand-200">
            AU
          </div>
          <div className="hidden text-left md:block">
            <p className="text-sm font-semibold text-brand-900">Admin User</p>
            <p className="text-[11px] text-brand-600">Head Office</p>
          </div>
          <ChevronDown className="hidden h-4 w-4 text-brand-400 md:block" />
        </button>
      </div>
    </header>
  );
}
