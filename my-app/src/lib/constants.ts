export const APP_NAME = "Pharma FFSMS";
export const APP_DESCRIPTION = "Pharma Field Force Sales Management System";

export const USER_ROLES = {
  ADMIN: "ADMIN",
  REGIONAL_MANAGER: "REGIONAL_MANAGER",
  AREA_SALES_MANAGER: "AREA_SALES_MANAGER",
  MEDICAL_REP: "MEDICAL_REP",
  DISTRIBUTOR: "DISTRIBUTOR",
  PHARMA_CLIENT: "PHARMA_CLIENT",
} as const;

export const ROLE_LABELS: Record<string, string> = {
  ADMIN: "Head Office / Admin",
  REGIONAL_MANAGER: "Regional Manager",
  AREA_SALES_MANAGER: "Area Sales Manager",
  MEDICAL_REP: "Medical Sales Rep",
  DISTRIBUTOR: "Distributor",
  PHARMA_CLIENT: "Pharma Company",
};

export const ORDER_STATUS_COLORS: Record<string, string> = {
  DRAFT: "bg-brand-100 text-brand-700",
  PENDING: "bg-accent-100 text-accent-600",
  APPROVED: "bg-brand-100 text-brand-700",
  DISPATCHED: "bg-violet-100 text-violet-700",
  DELIVERED: "bg-emerald-100 text-emerald-700",
  CANCELLED: "bg-red-100 text-red-700",
  RETURNED: "bg-orange-100 text-orange-700",
};

export const VISIT_STATUS_COLORS: Record<string, string> = {
  PLANNED: "bg-brand-100 text-brand-700",
  CHECKED_IN: "bg-accent-100 text-accent-600",
  COMPLETED: "bg-emerald-100 text-emerald-700",
  MISSED: "bg-red-100 text-red-700",
  CANCELLED: "bg-brand-100 text-brand-600",
};

export const EXPENSE_CATEGORIES = [
  "FUEL",
  "FOOD",
  "HOTEL",
  "TRANSPORT",
  "OTHER",
] as const;

export const DOCTOR_CATEGORIES = ["A_PLUS", "A", "B", "C"] as const;

export const DOCTOR_CATEGORY_LABELS: Record<string, string> = {
  A_PLUS: "A+",
  A: "A",
  B: "B",
  C: "C",
};

export const TERRITORY_LEVELS: Record<number, string> = {
  1: "Region",
  2: "Area",
  3: "Zone",
};

export const SIDEBAR_NAV = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "LayoutDashboard",
  },
  {
    title: "Field Force",
    icon: "Users",
    children: [
      { title: "Reps", href: "/dashboard/field-force" },
      { title: "Doctors", href: "/dashboard/field-force/doctors" },
      { title: "Visits / DCR", href: "/dashboard/field-force/visits" },
      { title: "Samples", href: "/dashboard/field-force/samples" },
      { title: "Call Plans", href: "/dashboard/field-force/call-plans" },
    ],
  },
  {
    title: "Orders",
    icon: "ShoppingCart",
    children: [
      { title: "All Orders", href: "/dashboard/orders" },
      { title: "Approvals", href: "/dashboard/orders/approvals" },
      { title: "Returns", href: "/dashboard/orders/returns" },
    ],
  },
  {
    title: "Distribution",
    icon: "Truck",
    children: [
      { title: "Overview", href: "/dashboard/distribution" },
      { title: "Primary Orders", href: "/dashboard/distribution/primary" },
      { title: "Secondary Orders", href: "/dashboard/distribution/secondary" },
      { title: "Stock", href: "/dashboard/distribution/stock" },
      { title: "Invoices", href: "/dashboard/distribution/invoices" },
      { title: "Payments", href: "/dashboard/distribution/payments" },
    ],
  },
  {
    title: "Routes & RTM",
    icon: "MapPin",
    children: [
      { title: "Routes", href: "/dashboard/routes" },
      { title: "Territories", href: "/dashboard/routes/territories" },
      { title: "PJP", href: "/dashboard/routes/pjp" },
      { title: "Outlets", href: "/dashboard/routes/outlets" },
    ],
  },
  {
    title: "Live Tracking",
    href: "/dashboard/live-tracking",
    icon: "Radar",
  },
  {
    title: "Merchandising",
    icon: "Store",
    children: [
      { title: "Shelf Audits", href: "/dashboard/merchandising/audits" },
      { title: "Planograms", href: "/dashboard/merchandising/planograms" },
      { title: "Competitors", href: "/dashboard/merchandising/competitors" },
    ],
  },
  {
    title: "Analytics",
    icon: "BarChart3",
    children: [
      { title: "Dashboard", href: "/dashboard/analytics" },
      { title: "Sales KPIs", href: "/dashboard/analytics/sales" },
      { title: "Rep Performance", href: "/dashboard/analytics/reps" },
      { title: "Products", href: "/dashboard/analytics/products" },
      { title: "Reports", href: "/dashboard/analytics/reports" },
    ],
  },
  {
    title: "HR & Attendance",
    icon: "ClipboardList",
    children: [
      { title: "Attendance", href: "/dashboard/hr/attendance" },
      { title: "Expenses", href: "/dashboard/hr/expenses" },
      { title: "Leaves", href: "/dashboard/hr/leaves" },
      { title: "Tours", href: "/dashboard/hr/tours" },
    ],
  },
  {
    title: "Settings",
    icon: "Settings",
    children: [
      { title: "Users", href: "/dashboard/settings/users" },
      { title: "Roles", href: "/dashboard/settings/roles" },
      { title: "Products", href: "/dashboard/settings/products" },
      { title: "Territories", href: "/dashboard/settings/territories" },
      { title: "Notifications", href: "/dashboard/settings/notifications" },
      { title: "Integrations", href: "/dashboard/settings/integrations" },
      { title: "Audit Logs", href: "/dashboard/settings/audit-logs" },
    ],
  },
] as const;
