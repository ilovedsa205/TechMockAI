import Link from "next/link";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen flex-col bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-18 max-w-7xl items-center px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex size-10 items-center justify-center rounded-xl bg-indigo-600 text-lg font-bold text-white">
              T
            </div>

            <span className="text-xl font-bold tracking-tight text-slate-900">
              TechMock<span className="text-indigo-600">AI</span>
            </span>
          </Link>
        </div>
      </header>

      <div className="flex flex-1 items-center justify-center px-6 py-12">
        {children}
      </div>

      <footer className="border-t border-slate-200 bg-white py-5 text-center text-sm text-slate-500">
        © 2026 TechMock AI. All rights reserved.
      </footer>
    </main>
  );
}
