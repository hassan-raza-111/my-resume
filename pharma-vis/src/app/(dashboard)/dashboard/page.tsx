import {
  ShoppingCart,
  Users,
  Stethoscope,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Package,
  MapPin,
  Clock,
} from "lucide-react";

const stats = [
  {
    title: "Total Sales (MTD)",
    value: "PKR 2,450,000",
    change: "+12.5%",
    trend: "up" as const,
    icon: TrendingUp,
    iconBg: "bg-emerald-100 text-emerald-600",
    border: "border-l-emerald-500",
  },
  {
    title: "Total Orders",
    value: "342",
    change: "+8.2%",
    trend: "up" as const,
    icon: ShoppingCart,
    iconBg: "bg-brand-100 text-brand-600",
    border: "border-l-brand-500",
  },
  {
    title: "Active Reps",
    value: "48",
    change: "Online now",
    trend: "up" as const,
    icon: Users,
    iconBg: "bg-violet-100 text-violet-600",
    border: "border-l-violet-500",
  },
  {
    title: "Doctors Visited",
    value: "186 / 250",
    change: "74.4% coverage",
    trend: "up" as const,
    icon: Stethoscope,
    iconBg: "bg-accent-100 text-accent-600",
    border: "border-l-accent-500",
  },
];

const recentOrders = [
  { id: "ORD-2847", outlet: "City Pharmacy", rep: "Ahmed Khan", amount: "PKR 45,200", status: "Approved" },
  { id: "ORD-2846", outlet: "MedPlus Store", rep: "Sara Ali", amount: "PKR 32,800", status: "Pending" },
  { id: "ORD-2845", outlet: "Health First", rep: "Usman Raza", amount: "PKR 28,500", status: "Dispatched" },
  { id: "ORD-2844", outlet: "Care Pharmacy", rep: "Fatima Noor", amount: "PKR 51,000", status: "Delivered" },
  { id: "ORD-2843", outlet: "Life Chemist", rep: "Bilal Shah", amount: "PKR 19,750", status: "Pending" },
];

const statusColors: Record<string, string> = {
  Approved: "bg-brand-100 text-brand-700",
  Pending: "bg-accent-100 text-accent-600",
  Dispatched: "bg-violet-100 text-violet-700",
  Delivered: "bg-emerald-100 text-emerald-700",
};

const topReps = [
  { name: "Ahmed Khan", territory: "Lahore East", sales: "PKR 420,000", visits: 42, rank: 1 },
  { name: "Sara Ali", territory: "Karachi South", sales: "PKR 385,000", visits: 38, rank: 2 },
  { name: "Usman Raza", territory: "Islamabad", sales: "PKR 352,000", visits: 35, rank: 3 },
  { name: "Fatima Noor", territory: "Faisalabad", sales: "PKR 298,000", visits: 31, rank: 4 },
];

const activities = [
  { text: "Ahmed Khan checked in at City Hospital", time: "2 min ago", icon: MapPin },
  { text: "New order #ORD-2847 placed by Sara Ali", time: "15 min ago", icon: Package },
  { text: "Bilal Shah completed 5 visits today", time: "1 hr ago", icon: Stethoscope },
  { text: "Order #ORD-2840 delivered to MedPlus", time: "2 hr ago", icon: ShoppingCart },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-brand-950">Dashboard</h1>
        <p className="text-sm text-brand-600">
          Welcome back! Here&apos;s your sales overview for today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className={`rounded-xl border border-border border-l-4 ${stat.border} bg-surface p-5 shadow-sm transition-shadow hover:shadow-md`}
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-brand-600">{stat.title}</p>
              <div className={`rounded-xl p-2.5 ${stat.iconBg}`}>
                <stat.icon className="h-4 w-4" />
              </div>
            </div>
            <p className="mt-3 text-2xl font-bold text-brand-950">
              {stat.value}
            </p>
            <div className="mt-2 flex items-center gap-1 text-xs font-medium">
              {stat.trend === "up" ? (
                <ArrowUpRight className="h-3.5 w-3.5 text-emerald-500" />
              ) : (
                <ArrowDownRight className="h-3.5 w-3.5 text-red-500" />
              )}
              <span className="text-emerald-600">{stat.change}</span>
              <span className="text-brand-400">vs last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Sales Trend — takes 2 columns */}
        <div className="rounded-xl border border-border bg-surface p-6 shadow-sm lg:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-brand-950">
                Sales Trend
              </h2>
              <p className="text-sm text-brand-500">
                Monthly revenue overview
              </p>
            </div>
            <div className="flex gap-1 rounded-lg bg-brand-100 p-1">
              <button className="rounded-md bg-brand-600 px-3 py-1 text-xs font-medium text-white">
                Monthly
              </button>
              <button className="rounded-md px-3 py-1 text-xs font-medium text-brand-600 hover:bg-brand-200">
                Weekly
              </button>
              <button className="rounded-md px-3 py-1 text-xs font-medium text-brand-600 hover:bg-brand-200">
                Daily
              </button>
            </div>
          </div>
          {/* Chart placeholder with decorative bars */}
          <div className="mt-6 flex h-52 items-end justify-between gap-3 rounded-xl bg-brand-50 p-6">
            {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 50, 95].map(
              (h, i) => (
                <div key={i} className="flex flex-1 flex-col items-center gap-2">
                  <div
                    className="w-full rounded-t-md bg-linear-to-t from-brand-600 to-brand-400 transition-all hover:from-brand-700 hover:to-brand-500"
                    style={{ height: `${h}%` }}
                  />
                  <span className="text-[10px] text-brand-400">
                    {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][i]}
                  </span>
                </div>
              )
            )}
          </div>
        </div>

        {/* Order Status */}
        <div className="rounded-xl border border-border bg-surface p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-brand-950">
            Order Status
          </h2>
          <p className="text-sm text-brand-500">Current month breakdown</p>

          <div className="mt-6 flex flex-col items-center">
            {/* Donut placeholder */}
            <div className="relative flex h-40 w-40 items-center justify-center rounded-full border-16 border-brand-500 border-t-accent-500 border-r-emerald-500 border-b-violet-400">
              <div className="text-center">
                <p className="text-2xl font-bold text-brand-950">342</p>
                <p className="text-xs text-brand-500">Total</p>
              </div>
            </div>
            <div className="mt-6 grid w-full grid-cols-2 gap-3">
              {[
                { label: "Pending", count: 45, color: "bg-accent-500" },
                { label: "Approved", count: 128, color: "bg-brand-500" },
                { label: "Dispatched", count: 87, color: "bg-violet-400" },
                { label: "Delivered", count: 82, color: "bg-emerald-500" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <div className={`h-2.5 w-2.5 rounded-full ${item.color}`} />
                  <span className="text-xs text-brand-600">
                    {item.label}{" "}
                    <span className="font-semibold text-brand-900">
                      {item.count}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Recent Orders — 2 columns */}
        <div className="rounded-xl border border-border bg-surface p-6 shadow-sm lg:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-brand-950">
                Recent Orders
              </h2>
              <p className="text-sm text-brand-500">Latest 5 orders</p>
            </div>
            <button className="rounded-lg border border-brand-200 px-3 py-1.5 text-xs font-medium text-brand-600 transition-colors hover:bg-brand-100">
              View All
            </button>
          </div>
          <div className="mt-4 overflow-hidden rounded-lg border border-border">
            <table className="w-full text-left text-sm">
              <thead className="bg-brand-50 text-xs uppercase text-brand-600">
                <tr>
                  <th className="px-4 py-3 font-semibold">Order ID</th>
                  <th className="px-4 py-3 font-semibold">Outlet</th>
                  <th className="px-4 py-3 font-semibold">Rep</th>
                  <th className="px-4 py-3 font-semibold">Amount</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {recentOrders.map((order) => (
                  <tr
                    key={order.id}
                    className="transition-colors hover:bg-brand-50/50"
                  >
                    <td className="px-4 py-3 font-medium text-brand-900">
                      {order.id}
                    </td>
                    <td className="px-4 py-3 text-brand-700">{order.outlet}</td>
                    <td className="px-4 py-3 text-brand-700">{order.rep}</td>
                    <td className="px-4 py-3 font-medium text-brand-900">
                      {order.amount}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${statusColors[order.status]}`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Top Reps */}
          <div className="rounded-xl border border-border bg-surface p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-brand-950">
              Top Reps
            </h2>
            <p className="text-sm text-brand-500">This month</p>
            <div className="mt-4 space-y-3">
              {topReps.map((rep) => (
                <div
                  key={rep.name}
                  className="flex items-center gap-3 rounded-lg border border-border p-3 transition-colors hover:bg-brand-50"
                >
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white ${
                      rep.rank === 1
                        ? "bg-accent-500"
                        : rep.rank === 2
                          ? "bg-brand-400"
                          : rep.rank === 3
                            ? "bg-brand-600"
                            : "bg-brand-300"
                    }`}
                  >
                    #{rep.rank}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-brand-900">
                      {rep.name}
                    </p>
                    <p className="text-[11px] text-brand-500">
                      {rep.territory}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-brand-900">
                      {rep.sales}
                    </p>
                    <p className="text-[11px] text-brand-500">
                      {rep.visits} visits
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activity Feed */}
          <div className="rounded-xl border border-border bg-surface p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-brand-950">
              Live Activity
            </h2>
            <p className="text-sm text-brand-500">Recent field updates</p>
            <div className="mt-4 space-y-4">
              {activities.map((activity, i) => (
                <div key={i} className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
                    <activity.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm text-brand-800">{activity.text}</p>
                    <div className="mt-0.5 flex items-center gap-1 text-[11px] text-brand-400">
                      <Clock className="h-3 w-3" />
                      {activity.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
