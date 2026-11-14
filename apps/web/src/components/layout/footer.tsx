import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="text-xl font-bold text-slate-900">
              TechMock<span className="text-indigo-600">AI</span>
            </Link>

            <p className="mt-4 max-w-md text-sm leading-7 text-slate-500">
              Nền tảng giả lập phỏng vấn kỹ thuật tích hợp AI, giúp bạn rèn
              luyện kỹ năng lập trình, nâng cao tư duy và tự tin chinh phục cơ
              hội nghề nghiệp.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">Khám phá</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-500">
              <li>
                <Link href="#features" className="hover:text-indigo-600">
                  Tính năng
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:text-indigo-600">
                  Cách hoạt động
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-indigo-600">
                  Bảng giá
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">Hỗ trợ</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-500">
              <li>
                <Link href="#faq" className="hover:text-indigo-600">
                  Câu hỏi thường gặp
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:support@techmockai.com"
                  className="hover:text-indigo-600"
                >
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-6 text-center text-sm text-slate-400">
          © 2026 TechMock AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
