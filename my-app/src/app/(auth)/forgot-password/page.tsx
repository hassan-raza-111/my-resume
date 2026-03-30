import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <div>
      <div className="rounded-2xl border border-border bg-surface p-8 shadow-sm">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-brand-950">Reset Password</h1>
          <p className="mt-1 text-sm text-brand-600">
            Enter your email and we&apos;ll send you a reset link
          </p>
        </div>

        <form className="space-y-4">
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

          <button
            type="submit"
            className="w-full rounded-xl bg-brand-600 py-3 text-sm font-semibold text-white shadow-md shadow-brand-200 transition-all hover:bg-brand-700 hover:shadow-lg active:scale-[0.98]"
          >
            Send Reset Link
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link
            href="/login"
            className="text-sm font-medium text-brand-600 hover:text-brand-800"
          >
            Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
