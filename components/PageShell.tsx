// components/PageShell.tsx
export default function PageShell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "mx-auto max-w-6xl space-y-10 px-6 py-10 md:space-y-14 md:py-14",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
