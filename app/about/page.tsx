export default function AboutPage() {
  return (
    <section className="rounded-2xl border bg-white p-8">
      <h1 className="text-3xl font-bold tracking-tight">About</h1>

      <div className="mt-8 space-y-5 text-slate-700">
        <p>
          Julie L. Riess, owner of Vandy Accounting Solutions, is a solutions-driven accountant focused on client satisfaction and relationship
          building, company growth evaluation and recommendations, financial process implementation, and attention to customizing services to meet
          individual client needs and objectives. Her approach is managerial accounting focused, making her an innovative leader with over 20 years
          of experience and service offering strategic financial solutions.
        </p>

        <p>
          As a Fiscal and Corporate Controller for more than a decade, Julie knows the day-to-day needs organizations face. She fully understand the
          ins and outs, pluses and minuses, debits and credits, of the financial realm, because she’s worked through them herself. Along with ample
          professional experience, Julie holds both a Master’s and Bachelor’s in Accounting.
        </p>

        <p>
          Julie’s many years doing outsourced accounting for various businesses brings to the client a broad financial knowledge and vast professional
          experience. Julie has worked with medical and dental practices, attorney firms, HOAs, manufacturing, logistics/trucking, real estate, retail,
          restaurant and food services, federal and state grant-funded nonprofits, membership-based organizations, schools and many other industries.
          Vandy Accounting Solutions is proud to work with various businesses and would be happy to work with yours.
        </p>

        <p>
          Put Julie’s years of experience to work for you and your business at Vandy Accounting Solutions!
        </p>

        <h2 className="pt-3 text-xl font-semibold text-slate-900">Services Offered</h2>
        <p>Vandy Accounting Solutions delivers outstanding results by offering:</p>
        <ul className="list-disc pl-6">
          <li>Remote accounting &amp; bookkeeping services</li>
          <li>Convenient real-time access to your Quickbooks file</li>
          <li>ADP payroll partnership</li>
          <li>Closing and year-end financial record coordination</li>
          <li>Budget preparation</li>
        </ul>

        <p>Vandy Accounting Solutions is your outsourced accounting solution!</p>
        <p>Vandy Accounting Solutions is a proud Gold-certified Intuit QuickBooks ProAdvisor.</p>

        <h2 className="pt-3 text-xl font-semibold text-slate-900">Client Testimonials</h2>
        <blockquote className="rounded-xl border bg-slate-50 p-5 text-slate-800">
          <p>
            “Julie’s academic accomplishments and dual background in public accounting and non-profit service is an ideal blend for anyone seeking
            someone that will ensure maintenance of required recordkeeping but have an above average eye toward improvement and strategic planning.
            She was outstanding at explaining accounting concepts and requirements and earned a great deal of respect from all. Vendors adored her
            quick response time and thoroughness. I am confident Julie will fulfill your financial services needs and excel as your financial expert.”
          </p>
          <p className="mt-4 font-semibold">
            – Robert A. Woods, CPA, CGMA, former member of the Board of Directors of the Indiana Society of Certified Public Accountants
          </p>
        </blockquote>
      </div>
    </section>
  );
}