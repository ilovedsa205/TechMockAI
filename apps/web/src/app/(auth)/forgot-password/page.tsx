import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ForgotPasswordPage() {
  return (
    <div className="w-full max-w-md">
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5 sm:p-10">
        {/* ICON */}
        <div className="mb-8 text-center">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-indigo-50 text-2xl font-bold text-indigo-600">
            T
          </div>

          <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900">
            Quên mật khẩu?
          </h1>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            Đừng lo lắng! Hãy nhập địa chỉ email đã đăng ký. Chúng tôi sẽ hướng
            dẫn bạn khôi phục mật khẩu.
          </p>
        </div>

        {/* EMAIL FORM */}
        <form className="space-y-5">
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

          <Button
            type="submit"
            className="h-12 w-full rounded-xl bg-indigo-600 text-base font-semibold hover:bg-indigo-700"
          >
            Gửi yêu cầu khôi phục
          </Button>
        </form>

        {/* BACK TO LOGIN */}
        <div className="mt-8 border-t border-slate-100 pt-6 text-center">
          <Link
            href="/login"
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
          >
            ← Quay lại đăng nhập
          </Link>
        </div>
      </div>

      <p className="mt-6 text-center text-xs leading-6 text-slate-400">
        TechMock AI luôn bảo vệ thông tin và tài khoản của bạn.
      </p>
    </div>
  );
}
