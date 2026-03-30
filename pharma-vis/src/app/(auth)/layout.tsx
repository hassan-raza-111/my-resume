export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Left — Branding panel */}
      <div className="hidden w-1/2 flex-col justify-between bg-brand-950 p-12 lg:flex">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600">
              <svg
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <span className="text-xl font-bold text-white">Pharma FFSMS</span>
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold leading-tight text-white">
            Field Force
            <br />
            <span className="text-brand-400">Sales Management</span>
            <br />
            System
          </h1>
          <p className="mt-4 max-w-md text-brand-300">
            Manage your pharmaceutical field operations — doctor visits, order
            booking, distribution, and analytics — all in one platform.
          </p>
        </div>
        <p className="text-sm text-brand-600">
          Version 1.0 &middot; 2026
        </p>
      </div>

      {/* Right — Form area */}
      <div className="flex flex-1 items-center justify-center bg-brand-50 p-8">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}
