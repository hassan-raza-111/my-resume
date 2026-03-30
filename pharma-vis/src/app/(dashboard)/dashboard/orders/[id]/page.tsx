import { FileText } from "lucide-react";

export default function Page() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-brand-950">Order Detail</h1>
        <p className="text-sm text-brand-600">Order information and status timeline</p>
      </div>
      <div className="rounded-xl border border-border bg-surface p-8 shadow-sm">
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="rounded-2xl bg-brand-100 p-4">
            <FileText className="h-8 w-8 text-brand-600" />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-brand-900">Order Detail</h3>
          <p className="mt-1 max-w-sm text-sm text-brand-500">
            This module is coming soon. The page structure and API routes are ready for implementation.
          </p>
          <div className="mt-6 flex gap-3">
            <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-medium text-brand-700">Planned</span>
            <span className="rounded-full bg-accent-100 px-3 py-1 text-xs font-medium text-accent-600">Phase 2+</span>
          </div>
        </div>
      </div>
    </div>
  );
}
