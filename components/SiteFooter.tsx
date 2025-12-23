import SocialLinks from "@/components/SocialLinks";

export default function SiteFooter() {
  return (
    <footer className="mt-6 border-t border-slate-200/70">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="text-sm font-semibold text-slate-900">Connect</div>
        <div className="mt-3">
          <SocialLinks size="md" />
        </div>
      </div>
    </footer>
  );
}