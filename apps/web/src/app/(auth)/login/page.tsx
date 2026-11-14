import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <div className="w-full max-w-md">
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5 sm:p-10">
        <div className="mb-8 text-center">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-indigo-50 text-2xl font-bold text-indigo-600">
            T
          </div>

          <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900">
            Chào mừng trở lại!
          </h1>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            Đăng nhập để tiếp tục hành trình chinh phục phỏng vấn kỹ thuật.
          </p>
        </div>

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

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-sm font-semibold text-slate-700"
              >
                Mật khẩu
              </label>

              <Link
                href="/forgot-password"
                className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
              >
                Quên mật khẩu?
              </Link>
            </div>

            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Nhập mật khẩu"
              autoComplete="current-password"
              required
              className="h-12"
            />
          </div>

          <Button
            type="submit"
            className="h-12 w-full rounded-xl bg-indigo-600 text-base font-semibold hover:bg-indigo-700"
          >
            Đăng nhập
          </Button>
        </form>

        <div className="mt-8 border-t border-slate-100 pt-6 text-center">
          <p className="text-sm text-slate-500">
            Chưa có tài khoản?{" "}
            <Link
              href="/register"
              className="font-semibold text-indigo-600 hover:text-indigo-700"
            >
              Đăng ký ngay
            </Link>
          </p>
        </div>
      </div>

      <p className="mt-6 text-center text-xs leading-6 text-slate-400">
        Bằng việc tiếp tục, bạn đồng ý với các điều khoản sử dụng và chính sách
        bảo mật của TechMock AI.
      </p>
    </div>
  );
}
