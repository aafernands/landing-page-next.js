import Link from "next/link";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-slate-950 text-slate-100">
            <section className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-6 py-24 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                    Error 404
                </p>
                <h1 className="mt-6 text-4xl font-bold sm:text-5xl">
                    Page Not Found
                </h1>
                <p className="mt-4 text-base text-slate-400 sm:text-lg">
                    Sorry, we can’t find the page you are looking for. It might have been
                    removed, renamed, or never existed in the first place.
                </p>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/40 transition hover:bg-sky-400"
                    >
                        Back to home
                    </Link>
                    <Link
                        href="/features"
                        className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
                    >
                        See Features
                    </Link>
                </div>
            </section>
        </main>
    );
}
