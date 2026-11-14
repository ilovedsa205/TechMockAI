import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function RegisterPage() {
  return (
    <div className="w-full max-w-md">
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5 sm:p-10">
        {/* HEADER */}
        <div className="mb-8 text-center">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-indigo-50 text-2xl font-bold text-indigo-600">
            T
          </div>

          <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900">
            Tạo tài khoản
          </h1>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            Tham gia TechMock AI và bắt đầu hành trình chinh phục phỏng vấn kỹ
            thuật.
          </p>
        </div>

        {/* REGISTER FORM */}
        <form className="space-y-4">
          {/* FULL NAME */}
          <div className="space-y-2">
            <label
              htmlFor="fullName"
              className="text-sm font-semibold text-slate-700"
            >
              Họ và tên
            </label>

            <Input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Nguyễn Văn A"
              autoComplete="name"
              required
              className="h-12"
            />
          </div>

          {/* EMAIL */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-slate-700"
            >
              Địa chỉ Email
            </label>

            <Input
              id="email"
              name="email"
              type="email"
              placeholder="example@email.com"
              autoComplete="email"
              required
              className="h-12"
            />
          </div>

          {/* PASSWORD */}
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-sm font-semibold text-slate-700"
            >
              Mật khẩu
            </label>

            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Tạo mật khẩu"
              autoComplete="new-password"
              minLength={8}
              required
              className="h-12"
            />

            <p className="text-xs text-slate-400">
              Mật khẩu nên có ít nhất 8 ký tự.
            </p>
          </div>

          {/* CONFIRM PASSWORD */}
          <div className="space-y-2">
            <label
              htmlFor="confirmPassword"
              className="text-sm font-semibold text-slate-700"
            >
              Xác nhận mật khẩu
            </label>

            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Nhập lại mật khẩu"
              autoComplete="new-password"
              minLength={8}
              required
              className="h-12"
            />
          </div>

          {/* TERMS */}
          <div className="flex items-start gap-3 pt-2">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="mt-1 size-4 cursor-pointer accent-indigo-600"
            />

            <label htmlFor="terms" className="text-sm leading-6 text-slate-500">
              Tôi đồng ý với{" "}
              <Link
                href="/terms"
                className="font-semibold text-indigo-600 hover:text-indigo-700"
              >
                Điều khoản sử dụng
              </Link>{" "}
              và{" "}
              <Link
                href="/privacy"
                className="font-semibold text-indigo-600 hover:text-indigo-700"
              >
                Chính sách bảo mật
              </Link>{" "}
              của TechMock AI.
            </label>
          </div>

          {/* SUBMIT */}
          <Button
            type="submit"
            className="h-12 w-full rounded-xl bg-indigo-600 text-base font-semibold hover:bg-indigo-700"
          >
            Tạo tài khoản
          </Button>
        </form>

        {/* LOGIN LINK */}
        <div className="mt-8 border-t border-slate-100 pt-6 text-center">
          <p className="text-sm text-slate-500">
            Bạn đã có tài khoản?{" "}
            <Link
              href="/login"
              className="font-semibold text-indigo-600 hover:text-indigo-700"
            >
              Đăng nhập ngay
            </Link>
          </p>
        </div>
      </div>

      <p className="mt-6 text-center text-xs leading-6 text-slate-400">
        Bắt đầu hành trình phát triển kỹ năng cùng TechMock AI.
      </p>
    </div>
  );
}
