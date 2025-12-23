import PrimaryButton from "@/components/PrimaryButton";

const testimonials = [
  {
    quote:
      "Julie’s academic accomplishments and dual background in public accounting and non-profit service is an ideal blend for anyone seeking someone that will ensure maintenance of required recordkeeping but have an above average eye toward improvement and strategic planning. She was outstanding at explaining accounting concepts and requirements and earned a great deal of respect from all. Vendors adored her quick response time and thoroughness. I am confident Julie will fulfill your financial services needs and excel as your financial expert.",
    name: "Robert A. Woods, CPA, CGMA",
    title:
      "Former member of the Board of Directors of the Indiana Society of Certified Public Accountants",
  },
  {
    quote:
      "Acting as Accountant and Controller for me with three different businesses I’ve owned over the past 12 years, Julie is quick to respond and proactive with recommendations to streamline processes within my organizations. Julie has helped grow my businesses as well as save money by implementing best practices internally as well as externally with vendors, ultimately helping to increase my bottom line profit. She is very well versed with regulations within the State of Indiana from process to tax requirements, ensuring I stay in compliance and continue to grow. She has proven to be a quick study and is flexible with her abilities. Working outside the accounting realm, Julie even helped evaluate and determine which media markets to invest in and which to pull out of for one of my businesses running multi-million dollar radio and television commercials across the US and Canada. With the constant change, Julie met the challenges on time and helped garner the attention of major retailers. Julie was a strong part in helping us meet those retailers’ requirements and land these national retailer contracts. Julie’s understanding of processes has also helped develop better working relationships with banks and state-ran organizations. Recently, Julie assisted my business in receiving a PPP loan, allowing us to weather the storm during the pandemic. Julie worked directly with the bank and helped us throughout the process to approval. Thanks to Julie we are on pace to outperform our best year yet, all due to her persistence and understanding of processes.",
    name: "Erik Hurwick",
    title:
      "CEO of Hurwick Enterprises Incorporated & Founding Partner of Indiana Re-Entry Integration Services",
  },
  {
    quote:
      "Julie has always gone above and beyond the call of duty in helping me with my personal and business accounting and tax issues. I’m a very small business, and I often don’t have the time or the skill to successfully manage my books. I miss little things that turn into BIG things later. I became overwhelmed. Julie stepped in, took my mess, and made sense of it. Asking for help is so difficult but having Julie organize my business has made it possible for me to go out and provide the skill that people need from me. Now the State is happy. The IRS is happy. And I am extremely happy.",
    name: "Daniel Borud, RN",
    title: "CEO of Northern Lights Medical",
  },
  {
    quote:
      "Julie takes excellent care of all our accounting, including monthly account reconciliation, paying bills, payroll, audits for 401K and insurance yearly. She works directly with our bank to help with any issues we may have. Julie does a great job with continued education and stays on top of all the different taxes we have. Pro Plastics has employees in four different states, and she makes sure to stay on top of the different taxes for each state. Julie has continually went above and beyond for Pro Plastics. She has taken time to make sure wire transfers are done properly, even taking a check to the bank when the wire transfer was not able to be done online. We are blessed to work with Julie!",
    name: "Christy Nance",
    title: "Office Manager of Pro Plastics Sales & Service",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-20 md:space-y-24">
      {/* ABOUT / BIO */}
      <section className="rounded-3xl bg-white p-7 md:p-12 ring-1 ring-slate-900/5">
        <p className="text-sm font-semibold text-slate-600">About</p>

        {/* Float photo on desktop so text wraps like the original site */}
       <img
  src="/julie-riess.webp"
  alt="Julie L. Riess"
  className="
    w-[180px]
    rounded-xl
    shadow-sm
    ring-1 ring-slate-900/5
    mb-4
    md:float-right
    md:ml-8
    md:mt-0
  "
/>

        <h1 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
          Meet Julie L. Riess
        </h1>

<div className="mt-6 space-y-6 text-slate-700 leading-[1.75] max-w-[70ch]">          <p>
            Julie L. Riess, owner of Vandy Accounting Solutions, is a
            solutions-driven accountant focused on client satisfaction and
            relationship building, company growth evaluation and recommendations,
            financial process implementation, and attention to customizing
            services to meet individual client needs and objectives.
          </p>

          <p>
            Her approach is managerial-accounting focused, making her an
            innovative leader with over 20 years of experience and service
            offering strategic financial solutions.
          </p>

          <p>
            As a Fiscal and Corporate Controller for more than a decade, Julie
            knows the day-to-day needs organizations face. She fully understands
            the ins and outs, pluses and minuses, debits and credits of the
            financial realm because she has worked through them herself.
          </p>

          <p>
            Along with ample professional experience, Julie holds both a
            Master’s and Bachelor’s in Accounting. She has worked with medical
            and dental practices, attorney firms, HOAs, manufacturing,
            logistics/trucking, real estate, retail, restaurant and food
            services, federal and state grant-funded nonprofits, membership-based
            organizations, schools and many other industries.
          </p>

          <p className="font-semibold text-slate-900">
            Put Julie’s years of experience to work for you and your business.
          </p>

          <div className="pt-2">
            <PrimaryButton href="/contact">Request a quote</PrimaryButton>
          </div>
        </div>

        {/* clear float so following sections lay out correctly */}
        <div className="clear-both" />
      </section>

   {/* TESTIMONIALS */}
<section className="mt-20">
  <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
    Client testimonials
  </h2>
  <p className="mt-2 text-lg text-slate-600 max-w-[60ch]">
    Long-term partnerships built on trust, clarity, and results.
  </p>

  <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-start">
    {/* Testimonial 1 */}
    <blockquote className="rounded-2xl bg-slate-50 p-8 ring-1 ring-slate-200/60">
      <p className="text-slate-800 leading-relaxed">
        “Julie’s academic accomplishments and dual background in public accounting and
        non-profit service is an ideal blend for anyone seeking someone that will ensure
        maintenance of required recordkeeping but have an above average eye toward improvement
        and strategic planning. She was outstanding at explaining accounting concepts and
        requirements and earned a great deal of respect from all. Vendors adored her quick
        response time and thoroughness. I am confident Julie will fulfill your financial
        services needs and excel as your financial expert.”
      </p>
      <footer className="mt-5 text-sm text-slate-600">
        <span className="font-semibold text-slate-900">Robert A. Woods, CPA, CGMA</span>
        <br />
        Former member of the Board of Directors of the Indiana Society of Certified Public
        Accountants
      </footer>
    </blockquote>

    {/* Testimonial 2 */}
    <blockquote className="rounded-2xl bg-white p-8 ring-1 ring-slate-200/60">
      <p className="text-slate-800 leading-relaxed">
        “Acting as Accountant and Controller for me with three different businesses I’ve owned
        over the past 12 years, Julie is quick to respond and proactive with recommendations to
        streamline processes within my organizations. Julie has helped grow my businesses as well
        as save money by implementing best practices internally as well as externally with vendors,
        ultimately helping to increase my bottom line profit. She is very well versed with
        regulations within the State of Indiana… Julie assisted my business in receiving a PPP
        loan, allowing us to weather the storm during the pandemic.”
      </p>
      <footer className="mt-5 text-sm text-slate-600">
        <span className="font-semibold text-slate-900">
          Erik Hurwick, CEO of Hurwick Enterprises
        </span>
        <br />
        Founding Partner of Indiana Re-Entry Integration Services
      </footer>
    </blockquote>

    {/* Testimonial 3 */}
    <blockquote className="rounded-2xl bg-white p-8 ring-1 ring-slate-200/60">
      <p className="text-slate-800 leading-relaxed">
        “Julie has always gone above and beyond the call of duty in helping me with my personal
        and business accounting and tax issues. I’m a very small business, and I often don’t have
        the time or the skill to successfully manage my books… Julie stepped in, took my mess,
        and made sense of it… Now the State is happy. The IRS is happy. And I am extremely happy.”
      </p>
      <footer className="mt-5 text-sm text-slate-600">
        <span className="font-semibold text-slate-900">Daniel Borud, RN</span>
        <br />
        CEO of Northern Lights Medical
      </footer>
    </blockquote>

    {/* Testimonial 4 */}
    <blockquote className="rounded-2xl bg-slate-50 p-8 ring-1 ring-slate-200/60">
      <p className="text-slate-800 leading-relaxed">
        “Julie takes excellent care of all our accounting, including monthly account
        reconciliation, paying bills, payroll, audits for 401K and insurance yearly… Pro Plastics
        has employees in four different states, and she makes sure to stay on top of the different
        taxes for each state… We are blessed to work with Julie!”
      </p>
      <footer className="mt-5 text-sm text-slate-600">
        <span className="font-semibold text-slate-900">Christy Nance</span>
        <br />
        Office Manager of Pro Plastics Sales &amp; Service
      </footer>
    </blockquote>
  </div>
</section>

      {/* FINAL CTA (dark band, consistent with Home/Services) */}
      <section className="rounded-3xl bg-slate-900 p-10 md:p-14 text-white">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-white">
              Ready to make your accounting feel easier?
            </h3>
            <p className="mt-2 text-lg text-slate-200">
              Share what you need and we’ll recommend the right level of support.
            </p>
          </div>
          <PrimaryButton href="/contact">Contact us</PrimaryButton>
        </div>
      </section>
    </div>
  );
}