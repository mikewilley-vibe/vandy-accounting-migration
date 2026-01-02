import Link from "next/link";

type Tone = "light" | "dark";

export default function ServiceCard({
  href,
  title,
  desc,
  icon,
  tone = "light",
}: {
  href: string;
  title: string;
  desc: string;
  icon?: React.ReactNode;
  tone?: Tone;
}) {
  const isDark = tone === "dark";

  return (
    <Link
      href={href}
      className={[
        "group block rounded-2xl p-6 transition",
        isDark
          ? "bg-white/5 ring-1 ring-white/10 hover:bg-white/7"
          : "bg-white ring-1 ring-slate-200/70 hover:shadow-sm hover:-translate-y-[1px]",
      ].join(" ")}
    >
      <div className="flex items-start gap-3">
        {icon ? (
          <div
            className={[
              "mt-0.5 rounded-xl p-2 ring-1",
              isDark
                ? "bg-white/5 ring-white/10 text-white/80"
                : "bg-slate-50 ring-slate-200/60 text-slate-700",
            ].join(" ")}
          >
            {icon}
          </div>
        ) : null}

        <div>
          <div
            className={[
              "text-lg font-semibold",
              isDark ? "text-white" : "text-slate-900",
            ].join(" ")}
          >
            {title}
          </div>

          <p className={["mt-2 leading-relaxed", isDark ? "text-white/75" : "text-slate-600"].join(" ")}>
            {desc}
          </p>

          <div className={["mt-4 text-sm font-semibold underline underline-offset-4", isDark ? "text-white/85" : "text-slate-900"].join(" ")}>
            Learn more →
          </div>
        </div>
      </div>
    </Link>
  );
}