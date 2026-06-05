const pricing = [
  {
    name: "MVP Pre-Commercial",
    price: "Up to €600",
    description:
      "A simple pre-commercial MVP for testing one core idea before investing in a full product.",
    fit: [
      "Founders with a new app idea",
      "Founders without a technical co-founder",
      "People who need an early demo",
      "Validating one main idea",
      "Pitching to early users, partners, or small investors",
    ],
    deliverables: [
      {
        title: "Product & Planning",
        items: [
          "MVP scope clarification",
          "Main feature definition",
          "Simple user flow",
          "Page/screen structure",
          "Feature priority: what to build first and what to postpone",
        ],
      },
      {
        title: "Design",
        items: [
          "5-8 core screens",
          "Basic but clean UI",
          "Basic responsive layout",
          "Simple design system: colors, typography, buttons, cards",
        ],
      },
      {
        title: "Development",
        items: [
          "Flutter app or web app starter",
          "Basic Firebase setup",
          "Basic Firebase Auth",
          "Basic Firestore database",
          "1 main core workflow",
          "List/detail page",
          "Simple create/edit data",
          "Basic dashboard",
        ],
      },
      {
        title: "Handover",
        items: ["Preview/demo link or local build", "Short documentation", "Basic next-step roadmap"],
      },
    ],
  },
  {
    name: "Ready Commercial MVP Product",
    price: "Starting from €1.999",
    description:
      "A more complete MVP product for founders who want a cleaner, more usable version ready for commercial validation.",
    fit: [
      "Founders who already have a prototype",
      "Founders who already have a rough MVP",
      "Small businesses that need a usable digital product",
      "Demo for potential customers",
      "Pilot project",
      "Early paying users",
      "Ready for commercial validation",
    ],
    deliverables: [
      {
        title: "Product & Strategy",
        items: [
          "Product audit / MVP review",
          "Scope refinement",
          "Feature prioritization",
          "User journey improvement",
          "Commercial launch roadmap",
          "Commercial-readiness checklist",
        ],
      },
      {
        title: "Design",
        items: [
          "10-15 screens",
          "Polished UI design",
          "Improved UX structure",
          "Responsive app/web layout",
          "Cleaner design system",
          "Simple onboarding flow",
          "Basic empty states, loading states, and error states",
        ],
      },
      {
        title: "Development",
        items: [
          "Flutter app or web app",
          "Firebase Auth",
          "Firestore database structure",
          "2 core workflows",
          "User profile/settings",
          "Basic admin/dashboard",
          "Create/read/update/delete data",
          "Light file/image upload if needed",
          "Basic analytics setup",
          "Better navigation structure",
          "Commercial-ready deployment / preview link",
        ],
      },
      {
        title: "Handover",
        items: ["Documentation handover", "Feature roadmap", "2 revision rounds", "Light bug fixing before handover"],
      },
    ],
  },
];

const portfolio = [
  {
    name: "Route2Kolleg",
    type: "Studienkolleg preparation app",
    image: "/portfolio/route2kolleg.svg",
    imageLabel: "Route2Kolleg image placeholder",
    description:
      "Deutsch, C-Test/Lückentest, mock tests, and Typkurs-specific practice for T-Kurs, M-Kurs, W-Kurs, G-Kurs, and S-Kurs.",
  },
  {
    name: "Route2DE",
    type: "Guidance platform",
    image: "/portfolio/route2de.svg",
    imageLabel: "Route2DE image placeholder",
    description: "A simple decision-support concept for migration pathways to Germany.",
  },
  {
    name: "Route2Tip",
    type: "Travel and diaspora platform",
    image: "/portfolio/route2tip.svg",
    imageLabel: "Route2Tip image placeholder",
    description:
      "A community-driven platform connecting travelers with people who want to send, receive, or request items across countries.",
  },
];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#f9f4f1] text-brand-text">
      <header className="mx-auto grid max-w-[1160px] grid-cols-3 items-center px-5 py-8 sm:px-8">
        <a href="#top" className="justify-self-start text-4xl font-semibold text-[#dba5b0]">
          alhami
        </a>

        <nav className="hidden justify-self-center rounded-full border border-white/80 bg-white/70 p-1 text-sm font-medium text-brand-muted shadow-card backdrop-blur md:flex">
          {["All", "Pricing", "Work"].map((item) => (
            <a
              key={item}
              href={item === "All" ? "#top" : item === "Work" ? "#work" : "#pricing"}
              className="rounded-full px-5 py-3 transition hover:bg-white hover:text-brand-text"
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href="mailto:Alhamikhalfi@gmail.com"
          className="justify-self-end text-sm font-medium tracking-wide text-brand-muted transition hover:text-brand-primary"
        >
          Contact
        </a>
      </header>

      <section id="top" className="mx-auto max-w-[1160px] px-5 pb-16 pt-10 sm:px-8">
        <div className="grid auto-rows-min gap-4 md:grid-cols-6 lg:grid-cols-12">
          <article className="flex min-h-[304px] flex-col justify-end rounded-lg border border-white/80 bg-white/70 p-8 shadow-soft backdrop-blur md:col-span-4 lg:col-span-5">
            <p className="max-w-xl text-2xl font-medium leading-relaxed text-brand-muted lg:text-3xl">
              I help people build their{" "}
              <span className="font-semibold text-brand-text">Digital Product</span> with AI.
              I help people who have an idea but need help turning it into something real.
            </p>
          </article>

          <article className="relative min-h-[304px] overflow-hidden rounded-lg border border-white/80 bg-[#eef3ff] p-7 shadow-card md:col-span-2 lg:col-span-3">
            <p className="text-sm font-semibold text-brand-primary">MVP Pre-Commercial</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight">Up to €600</h2>
            <p className="mt-4 leading-7 text-brand-muted">Simple MVP for testing one core idea.</p>
            <a
              href="#pricing"
              className="absolute bottom-6 right-6 grid size-11 place-items-center rounded-full bg-white text-xl shadow-card transition hover:text-brand-primary"
              aria-label="View pricing"
            >
              ↗
            </a>
          </article>

          <article className="min-h-[304px] overflow-hidden rounded-lg border border-white/80 bg-white/70 shadow-soft backdrop-blur md:col-span-6 lg:col-span-4">
            <div className="h-full min-h-[304px]">
              <img
                src={`${basePath}${portfolio[2].image}`}
                alt={portfolio[2].imageLabel}
                className="h-full min-h-[304px] w-full object-cover opacity-85"
              />
            </div>
          </article>

          <article className="flex min-h-[150px] flex-col justify-between rounded-lg border border-white/80 bg-[#fff8df] p-7 shadow-card md:col-span-3 lg:col-span-4">
            <p className="text-sm font-semibold text-[#9b7423]">Method</p>
            <h2 className="text-2xl font-semibold leading-tight">AI speed, human product review.</h2>
          </article>

          <article className="flex min-h-[150px] flex-col justify-between rounded-lg border border-white/80 bg-[#eef8f1] p-7 shadow-card md:col-span-3 lg:col-span-4">
            <p className="text-sm font-semibold text-[#3f7b57]">Stack</p>
            <h2 className="text-2xl font-semibold leading-tight">Flutter, web apps, Firebase.</h2>
          </article>

          <article className="flex min-h-[150px] flex-col justify-between rounded-lg border border-white/80 bg-white/70 p-7 shadow-card backdrop-blur md:col-span-6 lg:col-span-4">
            <p className="text-sm font-semibold text-brand-primary">Timeline</p>
            <h2 className="text-2xl font-semibold leading-tight">Simple MVPs in focused short sprints.</h2>
          </article>

          <PricingWidget
            item={pricing[1]}
            anchorId="pricing"
            className="md:col-span-6 lg:col-span-6"
          />

          <PortfolioWidget
            item={portfolio[0]}
            anchorId="work"
            className="md:col-span-3 lg:col-span-3"
          />

          <PortfolioWidget item={portfolio[1]} className="md:col-span-3 lg:col-span-3" />

          <PricingWidget item={pricing[0]} className="md:col-span-6 lg:col-span-6" />

          <article
            id="contact"
            className="rounded-lg border border-white/80 bg-brand-text p-7 text-white shadow-soft md:col-span-6 lg:col-span-6"
          >
            <div className="grid gap-7 md:grid-cols-[0.85fr_1.15fr] md:items-start">
              <div>
                <p className="text-sm font-semibold text-white/60">Contact</p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight">
                  Have an idea? I can help build the first version.
                </h2>
                <p className="mt-4 text-sm leading-6 text-white/65">
                  Send a short note. The form opens your email app with the message prepared.
                </p>
              </div>

              <form
                action="mailto:Alhamikhalfi@gmail.com"
                method="post"
                encType="text/plain"
                className="space-y-3"
              >
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/55">
                    Name
                  </span>
                  <input
                    name="name"
                    required
                    className="mt-2 w-full rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/35"
                    placeholder="Your name"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/55">
                    Email
                  </span>
                  <input
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/35"
                    placeholder="you@email.com"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/55">
                    Idea
                  </span>
                  <textarea
                    name="idea"
                    rows={4}
                    required
                    className="mt-2 w-full resize-none rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/35"
                    placeholder="What do you want to build?"
                  />
                </label>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-white px-5 py-3 text-sm font-semibold text-brand-text transition hover:bg-[#eef3ff]"
                >
                  Send message
                </button>
              </form>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

function PricingWidget({
  item,
  anchorId,
  className = "",
}: {
  item: (typeof pricing)[number];
  anchorId?: string;
  className?: string;
}) {
  return (
    <article
      id={anchorId}
      className={`rounded-lg border border-white/80 bg-white/72 p-7 shadow-soft backdrop-blur ${className}`}
    >
      <p className="text-sm font-semibold text-brand-primary">{item.name}</p>
      <h2 className="mt-3 text-3xl font-semibold leading-tight">{item.price}</h2>
      <p className="mt-4 text-sm leading-6 text-brand-muted">{item.description}</p>
      <details className="mt-5 rounded-lg border border-brand-border bg-[#fbfaf8] p-4">
        <summary className="cursor-pointer text-sm font-semibold">View package details</summary>
        <div className="mt-5 space-y-5">
          <PricingList title="Best for" items={item.fit} />
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-primary">
              What you get
            </h4>
            <div className="mt-4 grid gap-5 md:grid-cols-2">
              {item.deliverables.map((group) => (
                <PricingList key={group.title} title={group.title} items={group.items} />
              ))}
            </div>
          </div>
        </div>
      </details>
    </article>
  );
}

function PortfolioWidget({
  item,
  anchorId,
  className = "",
}: {
  item: (typeof portfolio)[number];
  anchorId?: string;
  className?: string;
}) {
  return (
    <article
      id={anchorId}
      className={`overflow-hidden rounded-lg border border-white/80 bg-white/72 shadow-soft backdrop-blur ${className}`}
    >
      <div className="aspect-[3/2] bg-white">
        <img
          src={`${basePath}${item.image}`}
          alt={item.imageLabel}
          className="h-full w-full object-cover opacity-85"
        />
      </div>
      <div className="p-6">
        <p className="text-sm font-semibold text-brand-primary">{item.type}</p>
        <h2 className="mt-2 text-2xl font-semibold">{item.name}</h2>
        <p className="mt-3 text-sm leading-6 text-brand-muted">{item.description}</p>
      </div>
    </article>
  );
}

function PricingList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-brand-text">{title}</h4>
      <ul className="mt-3 space-y-2 text-sm leading-6 text-brand-muted">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-success" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
