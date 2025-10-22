// app/pricing/page.jsx
import Link from "next/link";

function CheckIcon({ className, ...props }) {
  const combinedClassName = ["h-4 w-4 flex-none", className].filter(Boolean).join(" ");

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={combinedClassName} {...props}>
      <path
        fill="currentColor"
        d="M9.55 16.2a1 1 0 0 1-1.41 0l-3.34-3.34a1 1 0 1 1 1.41-1.42l2.63 2.63 8.24-8.24a1 1 0 1 1 1.41 1.41L9.55 16.2Z"
      />
    </svg>
  );
}

const features = {
  free: [
    "Current conditions for 1 location",
    "24-hour hourly forecast",
    "5-day outlook",
    "Light & dark theme",
  ],
  pro: [
    "Unlimited saved locations",
    "Severe weather alerts",
    "10-day outlook + radar layer",
    "Air quality & UV index",
    "Email/push notifications",
  ],
  team: [
    "All Pro features",
    "Shared favorites & roles",
    "Usage analytics dashboard",
    "Priority support (SLA)",
    "Early access to new layers",
  ],
};

export default function Pricing() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-6xl px-6 py-24">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            Pricing
          </p>
          <h1 className="mt-6 text-4xl font-bold sm:text-5xl">
            Simple, transparent plans
          </h1>
          <p className="mt-4 text-base text-slate-400 sm:text-lg">
            Start free. Upgrade anytime. All plans include real-time weather data and a beautiful,
            fast dashboard.
          </p>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-slate-800 px-3 py-1 text-xs text-slate-400">
            <span>Monthly billing</span>
            <span className="hidden text-slate-600 sm:inline">•</span>
            <span className="rounded-full bg-sky-500/10 px-2 py-0.5 font-semibold text-sky-300 ring-1 ring-inset ring-sky-500/30">
              Save 2 months with yearly
            </span>
          </div>
        </div>

        {/* Plans */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
          {/* Free */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 shadow-lg">
            <div>
              <h2 className="text-xl font-semibold">Free</h2>
              <p className="mt-1 text-sm text-slate-400">
                Great for trying the app and casual checks.
              </p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-sm text-slate-400">/mo</span>
              </div>
            </div>

            <ul className="mt-6 space-y-3">
              {features.free.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckIcon className="text-sky-400" />
                  <span className="text-sm text-slate-300">{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                href="/signup"
                className="inline-flex w-full items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
              >
                Get started
              </Link>
            </div>
          </div>

          {/* Pro (Most Popular) */}
          <div className="relative rounded-2xl border border-sky-700/40 bg-slate-900 p-6 shadow-xl shadow-sky-500/10 ring-1 ring-sky-500/30">
            <div className="absolute -top-3 right-6">
              <span className="rounded-full bg-sky-500 px-3 py-1 text-xs font-semibold text-white shadow-lg shadow-sky-500/40">
                Most Popular
              </span>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Pro</h2>
              <p className="mt-1 text-sm text-slate-400">
                Power features for enthusiasts and daily planning.
              </p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-bold">$6</span>
                <span className="text-sm text-slate-400">/mo</span>
              </div>
              <p className="mt-1 text-xs text-slate-500">or $60/year</p>
            </div>

            <ul className="mt-6 space-y-3">
              {features.pro.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckIcon className="text-sky-400" />
                  <span className="text-sm text-slate-300">{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                href="/checkout?plan=pro"
                className="inline-flex w-full items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/40 transition hover:bg-sky-400"
              >
                Upgrade to Pro
              </Link>
            </div>
          </div>

          {/* Team */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 shadow-lg">
            <div>
              <h2 className="text-xl font-semibold">Team</h2>
              <p className="mt-1 text-sm text-slate-400">
                Share locations and insights across your group.
              </p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-bold">$15</span>
                <span className="text-sm text-slate-400">/mo</span>
              </div>
              <p className="mt-1 text-xs text-slate-500">per team (up to 5 users)</p>
            </div>

            <ul className="mt-6 space-y-3">
              {features.team.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckIcon className="text-sky-400" />
                  <span className="text-sm text-slate-300">{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
              >
                Talk to us
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mx-auto mt-20 max-w-3xl">
          <h3 className="text-center text-2xl font-semibold">Frequently asked</h3>
          <div className="mt-6 divide-y divide-slate-800/80 rounded-2xl border border-slate-800 bg-slate-900/40">
            <details className="group p-6 open:bg-slate-900/60">
              <summary className="flex cursor-pointer list-none items-center justify-between text-left text-slate-200">
                Do you offer a free trial for Pro?
                <span className="ml-6 text-slate-500 transition group-open:rotate-180">⌄</span>
              </summary>
              <p className="mt-3 text-sm text-slate-400">
                Yes — you can try Pro free for 7 days. Cancel anytime from Settings.
              </p>
            </details>
            <details className="group p-6 open:bg-slate-900/60">
              <summary className="flex cursor-pointer list-none items-center justify-between text-left text-slate-200">
                Can I switch plans later?
                <span className="ml-6 text-slate-500 transition group-open:rotate-180">⌄</span>
              </summary>
              <p className="mt-3 text-sm text-slate-400">
                Absolutely. Upgrading or downgrading takes effect immediately and your billing
                prorates automatically.
              </p>
            </details>
            <details className="group p-6 open:bg-slate-900/60">
              <summary className="flex cursor-pointer list-none items-center justify-between text-left text-slate-200">
                Which locations are supported?
                <span className="ml-6 text-slate-500 transition group-open:rotate-180">⌄</span>
              </summary>
              <p className="mt-3 text-sm text-slate-400">
                Global coverage via major weather providers. If a location isn’t available,
                suggest it and we’ll add it quickly.
              </p>
            </details>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/40 transition hover:bg-sky-400"
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
