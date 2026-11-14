import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionHeading } from "@/components/common/section-heading";

const features = [
  {
    number: "01",
    title: "AI Interview Mentor",
    description:
      "Mô phỏng người phỏng vấn bằng AI, đặt câu hỏi phù hợp với vị trí và cấp độ ứng tuyển.",
  },
  {
    number: "02",
    title: "Coding Challenge",
    description:
      "Thực hành giải thuật và lập trình trong môi trường Code Editor chuyên nghiệp.",
  },
  {
    number: "03",
    title: "AI Evaluation",
    description:
      "Phân tích câu trả lời, đánh giá tư duy, kiến thức chuyên môn và đề xuất cải thiện.",
  },
  {
    number: "04",
    title: "Interview History",
    description:
      "Theo dõi lịch sử phỏng vấn, kết quả và tiến trình phát triển năng lực của bạn.",
  },
  {
    number: "05",
    title: "Personalized Learning",
    description:
      "Nhận gợi ý luyện tập dựa trên điểm mạnh và những kỹ năng còn thiếu.",
  },
  {
    number: "06",
    title: "Realistic Experience",
    description:
      "Luyện tập theo quy trình phỏng vấn kỹ thuật thực tế của doanh nghiệp.",
  },
];

const steps = [
  {
    number: "01",
    title: "Thiết lập mục tiêu",
    description: "Chọn vị trí ứng tuyển, cấp độ và chủ đề muốn luyện tập.",
  },
  {
    number: "02",
    title: "Bắt đầu phỏng vấn",
    description: "Trải nghiệm buổi phỏng vấn mô phỏng cùng AI.",
  },
  {
    number: "03",
    title: "Nhận đánh giá",
    description: "Xem phân tích chi tiết về câu trả lời và kỹ năng lập trình.",
  },
  {
    number: "04",
    title: "Cải thiện năng lực",
    description: "Luyện tập theo đề xuất để tiến bộ qua từng buổi.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-white">
          <div className="pointer-events-none absolute -right-40 -top-40 size-[500px] rounded-full bg-indigo-100/60 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -left-40 size-[400px] rounded-full bg-violet-100/50 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:py-32">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
                <span className="size-2 rounded-full bg-indigo-600" />
                Nền tảng luyện phỏng vấn với AI
              </div>

              <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Chinh phục phỏng vấn kỹ thuật cùng{" "}
                <span className="text-indigo-600">AI thông minh</span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
                Luyện tập phỏng vấn lập trình trong môi trường mô phỏng thực tế.
                Nhận đánh giá chuyên sâu, cải thiện kỹ năng và tự tin bước vào
                những cơ hội nghề nghiệp tiếp theo.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:bg-indigo-700"
                >
                  Bắt đầu luyện tập <span className="ml-2">→</span>
                </Link>

                <Link
                  href="#features"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-7 py-3.5 font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Khám phá tính năng
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-500">
                <span>✓ Luyện tập linh hoạt</span>
                <span>✓ Đánh giá bằng AI</span>
                <span>✓ Theo dõi tiến bộ</span>
              </div>
            </div>

            {/* HERO PREVIEW */}
            <div className="relative">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl shadow-indigo-900/10 sm:p-7">
                <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Interview Session
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Frontend Developer · Junior
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    ● Simulation
                  </span>
                </div>

                <div className="mt-6 rounded-xl bg-slate-950 p-5 text-white">
                  <div className="flex items-center gap-2 text-sm text-indigo-300">
                    <span className="flex size-8 items-center justify-center rounded-lg bg-indigo-500/20">
                      AI
                    </span>
                    AI Interviewer
                  </div>

                  <p className="mt-4 text-base leading-7 text-slate-200">
                    Bạn có thể giải thích sự khác nhau giữa
                    <span className="font-semibold text-indigo-300">
                      {" "}
                      useState
                    </span>{" "}
                    và{" "}
                    <span className="font-semibold text-indigo-300">
                      useEffect
                    </span>{" "}
                    trong React không?
                  </p>

                  <div className="mt-5 rounded-lg border border-white/10 bg-white/5 p-3 text-xs text-slate-400">
                    Câu hỏi 03 / 10
                  </div>
                </div>

                <div className="mt-5">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-700">
                      Your answer
                    </span>
                    <span className="text-xs text-slate-400">
                      Text response
                    </span>
                  </div>

                  <div className="min-h-24 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-400">
                    Nhập câu trả lời của bạn tại đây...
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-slate-400">
                      AI-powered interview
                    </span>
                    <span className="rounded-lg bg-indigo-600 px-4 py-2 text-xs font-semibold text-white">
                      Gửi câu trả lời
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-5 hidden rounded-xl border border-slate-200 bg-white p-4 shadow-xl sm:block">
                <p className="text-xs text-slate-500">AI Feedback</p>
                <p className="mt-1 text-xl font-bold text-emerald-600">
                  Excellent!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="bg-slate-50 px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Core Features"
              title="Mọi công cụ bạn cần để chinh phục phỏng vấn"
              description="TechMock AI kết hợp mô phỏng phỏng vấn, thực hành lập trình và đánh giá thông minh trong cùng một nền tảng."
            />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.number}
                  className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-900/5"
                >
                  <div className="flex size-12 items-center justify-center rounded-xl bg-indigo-50 text-sm font-bold text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
                    {feature.number}
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="bg-white px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="How It Works"
              title="Bắt đầu chỉ với 4 bước đơn giản"
              description="Một quy trình luyện tập rõ ràng giúp bạn từng bước nâng cao năng lực phỏng vấn."
            />

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => (
                <div key={step.number} className="relative">
                  <p className="text-4xl font-extrabold text-indigo-100">
                    {step.number}
                  </p>
                  <h3 className="mt-5 font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING PLACEHOLDER */}
        <section id="pricing" className="bg-slate-50 px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Flexible Plans"
              title="Lựa chọn hành trình luyện tập phù hợp"
              description="Các gói sử dụng sẽ được thiết kế để đáp ứng nhu cầu từ người mới bắt đầu đến ứng viên có kinh nghiệm."
            />

            <div className="mx-auto max-w-2xl rounded-2xl border border-indigo-100 bg-white p-8 text-center shadow-sm">
              <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-indigo-50 text-2xl">
                ✦
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Các gói dịch vụ đang được hoàn thiện
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                Chúng tôi đang xây dựng các lựa chọn phù hợp với từng nhu cầu
                luyện tập và phát triển kỹ năng.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-indigo-700 px-6 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Sẵn sàng cho buổi phỏng vấn tiếp theo?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-indigo-100">
              Bắt đầu luyện tập ngay hôm nay để biến kiến thức thành sự tự tin
              và sẵn sàng cho cơ hội nghề nghiệp của bạn.
            </p>
            <Link
              href="/register"
              className="mt-8 inline-flex rounded-xl bg-white px-7 py-3.5 font-semibold text-indigo-700 transition hover:bg-indigo-50"
            >
              Bắt đầu miễn phí →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
