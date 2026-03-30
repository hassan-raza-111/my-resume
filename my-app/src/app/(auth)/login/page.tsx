export default function LoginPage() {
  return (
    <div>
      {/* Mobile logo */}
      <div className="mb-8 flex items-center gap-3 lg:hidden">
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
        <span className="text-xl font-bold text-brand-900">Pharma FFSMS</span>
      </div>

      <div className="rounded-2xl border border-border bg-surface p-8 shadow-sm">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-brand-950">Welcome back</h1>
          <p className="mt-1 text-sm text-brand-600">
            Sign in to your account to continue
          </p>
        </div>

        <form className="space-y-4">
          {/* Email */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-brand-800">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full rounded-xl border border-border bg-brand-50 px-4 py-3 text-sm text-brand-900 outline-none transition-colors placeholder:text-brand-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-200"
            />
          </div>

          {/* Password */}
          <div>
            <div className="mb-1.5 flex items-center justify-between">
              <label className="text-sm font-medium text-brand-800">
                Password
              </label>
              <a
                href="/forgot-password"
                className="text-xs font-medium text-brand-600 hover:text-brand-800"
              >
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-xl border border-border bg-brand-50 px-4 py-3 text-sm text-brand-900 outline-none transition-colors placeholder:text-brand-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-200"
            />
          </div>

          {/* Remember me */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="remember"
              className="h-4 w-4 rounded border-brand-300 accent-brand-600"
            />
            <label
              htmlFor="remember"
              className="text-sm text-brand-700"
            >
              Remember me for 30 days
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-xl bg-brand-600 py-3 text-sm font-semibold text-white shadow-md shadow-brand-200 transition-all hover:bg-brand-700 hover:shadow-lg active:scale-[0.98]"
          >
            Sign In
          </button>
        </form>
      </div>

      <p className="mt-6 text-center text-xs text-brand-500">
        Pharma Field Force Sales Management System &middot; v1.0
      </p>
    </div>
  );
}
