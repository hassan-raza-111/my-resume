"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  Truck,
  MapPin,
  Radar,
  Store,
  BarChart3,
  ClipboardList,
  Settings,
  ChevronDown,
  ChevronRight,
  Activity,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SIDEBAR_NAV } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  LayoutDashboard,
  Users,
  ShoppingCart,
  Truck,
  MapPin,
  Radar,
  Store,
  BarChart3,
  ClipboardList,
  Settings,
};

export function Sidebar() {
  const pathname = usePathname();
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  function toggleMenu(title: string) {
    setOpenMenus((prev) => ({ ...prev, [title]: !prev[title] }));
  }

  return (
    <aside className="fixed inset-y-0 left-0 z-30 flex w-64 flex-col bg-sidebar-bg">
      {/* Logo */}
      <div className="flex h-16 items-center gap-3 border-b border-sidebar-border px-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600">
          <Activity className="h-5 w-5 text-white" />
        </div>
        <div>
          <span className="text-base font-bold tracking-tight text-white">
            Pharma FFSMS
          </span>
          <p className="text-[10px] font-medium uppercase tracking-widest text-brand-400">
            Sales Management
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sidebar-scroll flex-1 overflow-y-auto px-3 py-4">
        <ul className="space-y-0.5">
          {SIDEBAR_NAV.map((item) => {
            const Icon = iconMap[item.icon] ?? LayoutDashboard;

            if ("children" in item && item.children) {
              const isOpen = openMenus[item.title] ?? false;
              const isChildActive = item.children.some((child) =>
                pathname.startsWith(child.href)
              );

              return (
                <li key={item.title}>
                  <button
                    onClick={() => toggleMenu(item.title)}
                    className={cn(
                      "flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-[13px] font-medium transition-all duration-150",
                      isChildActive
                        ? "bg-sidebar-hover text-white"
                        : "text-sidebar-text-muted hover:bg-sidebar-hover/60 hover:text-white"
                    )}
                  >
                    <span className="flex items-center gap-3">
                      <Icon className="h-[18px] w-[18px]" />
                      {item.title}
                    </span>
                    {isOpen ? (
                      <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                    ) : (
                      <ChevronRight className="h-3.5 w-3.5 opacity-60" />
                    )}
                  </button>
                  {isOpen && (
                    <ul className="mt-1 ml-[18px] space-y-0.5 border-l-2 border-sidebar-border pl-4">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className={cn(
                              "block rounded-md px-3 py-2 text-[13px] transition-all duration-150",
                              pathname === child.href
                                ? "bg-brand-600 font-semibold text-white shadow-md shadow-brand-900/30"
                                : "text-sidebar-text-muted hover:bg-sidebar-hover/60 hover:text-white"
                            )}
                          >
                            {child.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            }

            const href = "href" in item ? item.href : "#";
            return (
              <li key={item.title}>
                <Link
                  href={href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition-all duration-150",
                    pathname === href
                      ? "bg-brand-600 text-white shadow-md shadow-brand-900/30"
                      : "text-sidebar-text-muted hover:bg-sidebar-hover/60 hover:text-white"
                  )}
                >
                  <Icon className="h-[18px] w-[18px]" />
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom section */}
      <div className="border-t border-sidebar-border p-4">
        <div className="flex items-center gap-3 rounded-lg bg-sidebar-hover/50 px-3 py-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white">
            A
          </div>
          <div className="flex-1 truncate">
            <p className="truncate text-sm font-medium text-white">
              Admin User
            </p>
            <p className="text-[11px] text-sidebar-text-muted">Head Office</p>
          </div>
          <div className="h-2 w-2 rounded-full bg-emerald-400" />
        </div>
      </div>
    </aside>
  );
}
