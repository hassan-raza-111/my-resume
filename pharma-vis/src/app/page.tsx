import Link from "next/link";
import {
  Activity,
  MapPin,
  ShoppingCart,
  BarChart3,
  Users,
  Truck,
  Stethoscope,
  ClipboardCheck,
  Radar,
  Store,
  Shield,
  Smartphone,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Globe,
  Clock,
  ChevronRight,
} from "lucide-react";

// ─── Navbar ──────────────────────────────────────────────
function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-brand-100/50 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600">
            <Activity className="h-5 w-5 text-white" />
          </div>
          <div>
            <span className="text-lg font-bold text-brand-950">
              Pharma FFSMS
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm font-medium text-brand-700 transition-colors hover:text-brand-950"
          >
            Features
          </a>
          <a
            href="#modules"
            className="text-sm font-medium text-brand-700 transition-colors hover:text-brand-950"
          >
            Modules
          </a>
          <a
            href="#stats"
            className="text-sm font-medium text-brand-700 transition-colors hover:text-brand-950"
          >
            Why Us
          </a>
          <a
            href="#testimonial"
            className="text-sm font-medium text-brand-700 transition-colors hover:text-brand-950"
          >
            Testimonials
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="rounded-lg px-4 py-2 text-sm font-medium text-brand-700 transition-colors hover:bg-brand-100"
          >
            Sign In
          </Link>
          <Link
            href="/login"
            className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-brand-200 transition-all hover:bg-brand-700 hover:shadow-lg"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}

// ─── Hero ────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-950 pb-20 pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-brand-700 blur-3xl" />
        <div className="absolute -bottom-20 right-0 h-80 w-80 rounded-full bg-brand-600 blur-3xl" />
        <div className="absolute right-1/3 top-1/4 h-64 w-64 rounded-full bg-accent-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-700 bg-brand-900/60 px-4 py-1.5 text-sm text-brand-300 backdrop-blur-sm">
              <Zap className="h-3.5 w-3.5 text-accent-400" />
              Salesflo-Inspired Platform
            </div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Complete{" "}
              <span className="text-brand-400">Field Force</span>
              <br />
              Sales Management
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-brand-300">
              Manage your pharmaceutical field operations — doctor visits, order
              booking, distribution tracking, and business analytics — all from
              one powerful platform.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-900/40 transition-all hover:bg-brand-400 hover:shadow-xl"
              >
                Open Dashboard
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#modules"
                className="inline-flex items-center gap-2 rounded-xl border border-brand-600 px-6 py-3.5 text-sm font-semibold text-brand-300 transition-all hover:border-brand-400 hover:text-white"
              >
                Explore Modules
              </Link>
            </div>
            {/* Trust badges */}
            <div className="mt-10 flex items-center gap-6 border-t border-brand-800 pt-6">
              {[
                { label: "Field Reps", value: "500+" },
                { label: "Orders/Day", value: "1,200+" },
                { label: "Uptime", value: "99.9%" },
              ].map((badge) => (
                <div key={badge.label}>
                  <p className="text-2xl font-bold text-white">{badge.value}</p>
                  <p className="text-xs text-brand-400">{badge.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Dashboard preview card */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl border border-brand-700/50 bg-brand-900/50 p-2 shadow-2xl backdrop-blur-sm">
              <div className="rounded-xl bg-brand-950 p-6">
                {/* Mini dashboard mockup */}
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-accent-400" />
                  <div className="h-3 w-3 rounded-full bg-emerald-400" />
                  <div className="ml-4 h-5 w-48 rounded bg-brand-800" />
                </div>
                {/* Stats row */}
                <div className="mb-4 grid grid-cols-3 gap-3">
                  {[
                    { label: "Sales", value: "PKR 2.4M", color: "bg-brand-600" },
                    { label: "Orders", value: "342", color: "bg-emerald-600" },
                    { label: "Reps", value: "48", color: "bg-accent-500" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="rounded-lg border border-brand-700 bg-brand-900 p-3"
                    >
                      <p className="text-xs text-brand-400">{s.label}</p>
                      <p className="mt-1 text-lg font-bold text-white">
                        {s.value}
                      </p>
                      <div className={`mt-2 h-1.5 w-3/4 rounded-full ${s.color}`} />
                    </div>
                  ))}
                </div>
                {/* Chart bars */}
                <div className="rounded-lg border border-brand-700 bg-brand-900 p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-xs text-brand-400">Revenue Trend</p>
                    <p className="text-xs font-medium text-brand-300">
                      +12.5%
                    </p>
                  </div>
                  <div className="flex items-end gap-2 pt-2">
                    {[35, 50, 40, 65, 55, 70, 85, 60, 75, 90, 70, 95].map(
                      (h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t bg-linear-to-t from-brand-600 to-brand-400"
                          style={{ height: `${h}px` }}
                        />
                      )
                    )}
                  </div>
                </div>
                {/* Table rows */}
                <div className="mt-4 space-y-2">
                  {[1, 2, 3].map((row) => (
                    <div
                      key={row}
                      className="flex items-center gap-3 rounded-lg bg-brand-900 p-2.5"
                    >
                      <div className="h-6 w-6 rounded-full bg-brand-700" />
                      <div className="h-3 flex-1 rounded bg-brand-800" />
                      <div className="h-3 w-16 rounded bg-brand-700" />
                      <div className="h-5 w-14 rounded-full bg-brand-600" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-6 rounded-xl border border-brand-700 bg-brand-900 p-3 shadow-xl backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20">
                  <CheckCircle className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Order Delivered
                  </p>
                  <p className="text-xs text-brand-400">City Pharmacy — 2m ago</p>
                </div>
              </div>
            </div>
            {/* Floating badge 2 */}
            <div className="absolute -right-4 top-8 rounded-xl border border-brand-700 bg-brand-900 p-3 shadow-xl backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-500/20">
                  <MapPin className="h-5 w-5 text-accent-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Rep Checked In
                  </p>
                  <p className="text-xs text-brand-400">
                    Ahmed K. — City Hospital
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Features ────────────────────────────────────────────
const features = [
  {
    icon: Radar,
    title: "Real-Time GPS Tracking",
    description:
      "Track your field reps live on the map. Verify visit locations with GPS check-in/check-out.",
    color: "bg-brand-100 text-brand-600",
  },
  {
    icon: Stethoscope,
    title: "Doctor Call Reporting",
    description:
      "Digital DCR — record detailing, samples, feedback, and prescription behavior for every visit.",
    color: "bg-violet-100 text-violet-600",
  },
  {
    icon: ShoppingCart,
    title: "Mobile Order Booking",
    description:
      "Book orders on-the-go with auto-applied schemes, real-time pricing, and offline support.",
    color: "bg-accent-100 text-accent-600",
  },
  {
    icon: BarChart3,
    title: "BI Analytics Dashboard",
    description:
      "Sales KPIs, territory heatmaps, rep leaderboards, and custom reports — all in real time.",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: Truck,
    title: "Distribution Management",
    description:
      "Primary & secondary orders, stock visibility, invoices, and payment tracking in one place.",
    color: "bg-sky-100 text-sky-600",
  },
  {
    icon: Shield,
    title: "Role-Based Access",
    description:
      "6 user roles with granular permissions — from admin to field rep to distributor portal.",
    color: "bg-rose-100 text-rose-600",
  },
];

function Features() {
  return (
    <section id="features" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Why Choose Us
          </p>
          <h2 className="mt-2 text-3xl font-bold text-brand-950 sm:text-4xl">
            Everything You Need to Run
            <br />
            <span className="text-brand-600">Field Sales Operations</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-brand-600">
            From daily doctor visits to monthly analytics — manage your entire
            pharmaceutical sales pipeline with one integrated system.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border bg-white p-6 transition-all hover:border-brand-300 hover:shadow-lg hover:shadow-brand-100"
            >
              <div
                className={`inline-flex rounded-xl p-3 ${feature.color} transition-transform group-hover:scale-110`}
              >
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-brand-950">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Modules ─────────────────────────────────────────────
const modules = [
  {
    icon: Users,
    title: "Field Force Management",
    tag: "Core",
    items: [
      "Doctor/Clinic master database",
      "GPS check-in/check-out",
      "Visit planning & call lists",
      "Sample distribution tracking",
      "Doctor call reporting (DCR)",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Order Management",
    tag: "Core",
    items: [
      "Mobile order booking",
      "Auto discount schemes",
      "Order approval workflow",
      "Status tracking pipeline",
      "Return order management",
    ],
  },
  {
    icon: Truck,
    title: "Distribution (DMS)",
    tag: "Core",
    items: [
      "Primary & secondary orders",
      "Distributor stock visibility",
      "Invoice generation",
      "Payment tracking",
      "Credit limit management",
    ],
  },
  {
    icon: MapPin,
    title: "Route-to-Market",
    tag: "Core",
    items: [
      "Territory mapping",
      "Route optimization",
      "Permanent Journey Plans",
      "Geo-tagged outlets",
      "Channel-specific RTM",
    ],
  },
  {
    icon: Store,
    title: "Merchandising",
    tag: "High",
    items: [
      "Shelf photo audits",
      "Planogram compliance",
      "Share of shelf tracking",
      "Out-of-stock alerts",
      "Competitor monitoring",
    ],
  },
  {
    icon: BarChart3,
    title: "BI & Analytics",
    tag: "High",
    items: [
      "Sales KPI dashboards",
      "Territory heatmaps",
      "Rep performance cards",
      "Custom report builder",
      "Excel/PDF export",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "HR & Attendance",
    tag: "High",
    items: [
      "GPS-based attendance",
      "Expense claim management",
      "Leave management",
      "Tour program approval",
      "Incentive calculation",
    ],
  },
  {
    icon: Shield,
    title: "Admin & Config",
    tag: "Core",
    items: [
      "User & role management",
      "Product/SKU master",
      "Territory hierarchy",
      "ERP integrations",
      "Audit logs & security",
    ],
  },
];

const tagColors: Record<string, string> = {
  Core: "bg-brand-100 text-brand-700",
  High: "bg-accent-100 text-accent-600",
};

function Modules() {
  return (
    <section id="modules" className="bg-brand-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Complete System
          </p>
          <h2 className="mt-2 text-3xl font-bold text-brand-950 sm:text-4xl">
            8 Powerful Modules
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-brand-600">
            Each module is a complete unit that integrates seamlessly with the
            rest of the system.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((mod) => (
            <div
              key={mod.title}
              className="group rounded-2xl border border-border bg-white p-6 transition-all hover:border-brand-300 hover:shadow-lg hover:shadow-brand-100"
            >
              <div className="flex items-start justify-between">
                <div className="rounded-xl bg-brand-100 p-2.5 text-brand-600 transition-transform group-hover:scale-110">
                  <mod.icon className="h-5 w-5" />
                </div>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${tagColors[mod.tag]}`}
                >
                  {mod.tag}
                </span>
              </div>
              <h3 className="mt-4 text-base font-semibold text-brand-950">
                {mod.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {mod.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-brand-600"
                  >
                    <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Stats / Why Us ──────────────────────────────────────
const statsData = [
  {
    icon: Smartphone,
    value: "Offline + Online",
    label: "Order booking works even without internet",
  },
  {
    icon: Globe,
    value: "Multi-Language",
    label: "Urdu & English support for field teams",
  },
  {
    icon: Clock,
    value: "< 3 Seconds",
    label: "App load time for instant field access",
  },
  {
    icon: Users,
    value: "1,000+",
    label: "Concurrent users supported with ease",
  },
];

function Stats() {
  return (
    <section id="stats" className="bg-brand-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-400">
              Built for Scale
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              Enterprise-Grade
              <br />
              <span className="text-brand-400">Performance & Security</span>
            </h2>
            <p className="mt-4 max-w-lg text-brand-300">
              Designed with microservices architecture, role-based security, and
              cloud hosting — ready for thousands of field reps across multiple
              regions.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "SSL/TLS encryption — data at rest & in transit",
                "Role-based access control (RBAC) for 6 user types",
                "Complete audit trail — every action is logged",
                "99.9% uptime with automated daily backups",
                "GDPR-compliant data handling",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 shrink-0 text-brand-400" />
                  <span className="text-sm text-brand-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {statsData.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-brand-800 bg-brand-900/60 p-6 backdrop-blur-sm transition-all hover:border-brand-600"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-700">
                  <stat.icon className="h-5 w-5 text-brand-300" />
                </div>
                <p className="mt-4 text-xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-brand-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Workflow ────────────────────────────────────────────
const steps = [
  {
    step: "01",
    title: "Rep Opens App",
    description: "Marks attendance via GPS, sees today's call plan and route.",
  },
  {
    step: "02",
    title: "Visits Doctor",
    description:
      "Checks in at location, does detailing, records feedback and samples.",
  },
  {
    step: "03",
    title: "Books Order",
    description:
      "Visits pharmacy, selects products, scheme auto-applies, submits order.",
  },
  {
    step: "04",
    title: "Manager Monitors",
    description:
      "Real-time dashboard shows team location, visits, and order pipeline.",
  },
  {
    step: "05",
    title: "Order Fulfilled",
    description:
      "Distributor receives, dispatches, delivers — full tracking to pharmacy.",
  },
  {
    step: "06",
    title: "Analytics Updated",
    description:
      "BI dashboard refreshes — sales trends, KPIs, and reports ready.",
  },
];

function Workflow() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            How It Works
          </p>
          <h2 className="mt-2 text-3xl font-bold text-brand-950 sm:text-4xl">
            A Day in the Field
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-brand-600">
            From morning attendance to evening analytics — the complete daily
            flow of a medical sales rep.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.step} className="relative">
              <div className="rounded-2xl border border-border bg-white p-6 transition-all hover:border-brand-300 hover:shadow-lg hover:shadow-brand-100">
                <span className="text-3xl font-extrabold text-brand-200">
                  {step.step}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-brand-950">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-600">
                  {step.description}
                </p>
              </div>
              {i < steps.length - 1 && i % 3 !== 2 && (
                <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 lg:block">
                  <ChevronRight className="h-5 w-5 text-brand-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonial ─────────────────────────────────────────
function Testimonial() {
  return (
    <section id="testimonial" className="bg-brand-50 py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="flex justify-center gap-1">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star
              key={s}
              className="h-5 w-5 fill-accent-400 text-accent-400"
            />
          ))}
        </div>
        <blockquote className="mt-6 text-2xl font-medium leading-relaxed text-brand-900 sm:text-3xl">
          &ldquo;This system transformed our field operations. Our reps are 40%
          more productive, order accuracy improved by 95%, and management finally
          has real-time visibility into the entire sales pipeline.&rdquo;
        </blockquote>
        <div className="mt-8 flex items-center justify-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-lg font-bold text-white">
            MR
          </div>
          <div className="text-left">
            <p className="font-semibold text-brand-950">Muhammad Rashid</p>
            <p className="text-sm text-brand-600">
              National Sales Director — PharmaCorp
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA ─────────────────────────────────────────────────
function CTA() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-brand-950 px-8 py-16 text-center sm:px-16">
          {/* Decorations */}
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-brand-700/30 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-brand-600/30 blur-3xl" />

          <div className="relative">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to Transform Your
              <br />
              <span className="text-brand-400">Field Sales Operations?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-brand-300">
              Start managing your field force, orders, and distribution with a
              single platform. Get up and running in weeks, not months.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-brand-900/40 transition-all hover:bg-brand-400 hover:shadow-xl"
              >
                Open Dashboard
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center gap-2 rounded-xl border border-brand-600 px-8 py-4 text-sm font-semibold text-brand-300 transition-all hover:border-brand-400 hover:text-white"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────
function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600">
                <Activity className="h-4 w-4 text-white" />
              </div>
              <span className="text-base font-bold text-brand-950">
                Pharma FFSMS
              </span>
            </div>
            <p className="mt-3 text-sm text-brand-600">
              Complete Field Force Sales Management System for the pharmaceutical
              industry.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-brand-950">Product</h4>
            <ul className="mt-3 space-y-2">
              {["Features", "Modules", "Pricing", "Roadmap"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-brand-600 hover:text-brand-900"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-brand-950">Company</h4>
            <ul className="mt-3 space-y-2">
              {["About", "Contact", "Careers", "Blog"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-brand-600 hover:text-brand-900"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-brand-950">Legal</h4>
            <ul className="mt-3 space-y-2">
              {["Privacy Policy", "Terms of Service", "Security", "GDPR"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-brand-600 hover:text-brand-900"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-brand-500">
            &copy; 2026 Pharma FFSMS. All rights reserved.
          </p>
          <p className="text-sm text-brand-400">Version 1.0</p>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Modules />
      <Workflow />
      <Stats />
      <Testimonial />
      <CTA />
      <Footer />
    </>
  );
}
