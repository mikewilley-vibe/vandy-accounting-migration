export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="rounded-2xl border bg-white p-8">
        <h1 className="text-3xl font-bold tracking-tight">Home</h1>

        <div className="mt-8 space-y-6">
          <div>
            <h2 className="text-xl font-semibold">What We Do</h2>
            <p className="mt-2 text-slate-700">
              Vandy Accounting Solutions helps companies create an organized and informational approach to accounting and finance.
              Julie L. Riess, owner of Vandy Accounting Solutions, is at the helm, using industry-proven methods to help you develop
              a fiscal strategy for your business and ensure all your financial needs are met.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">What We Offer</h2>
            <p className="mt-2 text-slate-700">At Vandy Accounting Solutions, we deliver outstanding results by offering:</p>
            <ul className="mt-3 list-disc pl-6 text-slate-700">
              <li>Remote accounting &amp; bookkeeping services</li>
              <li>Convenient real-time access to your Quickbooks file</li>
              <li>ADP payroll partnership</li>
              <li>Closing and year-end financial record coordination</li>
              <li>Budget preparation</li>
            </ul>
          </div>

          <hr className="my-6" />

          <div>
            <h2 className="text-xl font-semibold">What Others Say</h2>
            <blockquote className="mt-3 rounded-xl border bg-slate-50 p-5 text-slate-800">
              <p>
                “Julie’s academic accomplishments and dual background in public accounting and non-profit service is an ideal blend for anyone
                seeking someone that will ensure maintenance of required recordkeeping but have an above average eye toward improvement and
                strategic planning. She was outstanding at explaining accounting concepts and requirements and earned a great deal of respect
                from all. Vendors adored her quick response time and thoroughness. I am confident Julie will fulfill your financial services needs
                and excel as your financial expert.”
              </p>
              <p className="mt-4 font-semibold">
                – Robert A. Woods, CPA, CGMA, Former member of the Board of Directors of the Indiana Society of Certified Public Accountants
              </p>
            </blockquote>

            <p className="mt-6 text-slate-700">
              Vandy Accounting Solutions is a proud Gold-certified Intuit QuickBooks ProAdvisor.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">How to Reach Us</h2>
            <p className="mt-2 text-slate-700">
              Vandy Accounting Solutions would love the opportunity to work with you. Reach out to us with an email or a call!
            </p>
            <p className="mt-3 text-slate-700">
              E: info@vandyaccounting.com <br />
              P: (317)490-6113 <br />
              7755 Shasta Drive, Indianapolis, IN 46217
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}