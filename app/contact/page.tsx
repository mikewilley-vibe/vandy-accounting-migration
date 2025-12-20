export default function ContactPage() {
  return (
    <section className="rounded-2xl border bg-white p-8">
      <h1 className="text-3xl font-bold tracking-tight">Contact</h1>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div className="text-slate-700">
          <h2 className="text-xl font-semibold text-slate-900">Get in touch</h2>

          <p className="mt-3">
            Vandy Accounting Solutions, LLC <br />
            7755 Shasta Drive, Indianapolis, IN 46217
          </p>

          <p className="mt-3">
            P: (317) 490-6113 <br />
            E: info@vandyaccounting.com
          </p>

          <p className="mt-5">
            Connect with us on Facebook &amp; LinkedIn!
          </p>

          {/* TODO: swap these links with the exact URLs you want to promote */}
          <div className="mt-3 flex gap-3">
            <a className="underline underline-offset-4 hover:opacity-80" href="#" rel="noreferrer">
              Facebook
            </a>
            <a className="underline underline-offset-4 hover:opacity-80" href="#" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Placeholder form (wire to whatever you’ll use later: Formspree/Resend/etc.) */}
        <form className="rounded-2xl border bg-slate-50 p-6">
          <div className="text-sm font-semibold text-slate-900">Send a message</div>

          <label className="mt-4 block text-sm text-slate-700">
            Name
            <input className="mt-1 w-full rounded-xl border px-3 py-2" name="name" />
          </label>

          <label className="mt-4 block text-sm text-slate-700">
            Email
            <input className="mt-1 w-full rounded-xl border px-3 py-2" name="email" type="email" />
          </label>

          <label className="mt-4 block text-sm text-slate-700">
            Message
            <textarea className="mt-1 w-full rounded-xl border px-3 py-2" name="message" rows={5} />
          </label>

          <button
            type="submit"
            className="mt-5 w-full rounded-xl px-4 py-2 text-sm font-semibold"
            style={{ background: "hsl(var(--brand))", color: "hsl(var(--brand-foreground))" }}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}