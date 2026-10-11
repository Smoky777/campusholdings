import { createFileRoute, Link } from "@tanstack/react-router";
import sailing from "@/assets/team-sailing.jpg.asset.json";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/team")({
  component: Team,
  head: () => ({
    meta: [
      { title: "Our Team | Campus Holding SA, Geneva" },
      { name: "description", content: "Meet the founder of Campus Holding SA and explore the team's work in Geneva." },
      { property: "og:title", content: "Our Team | Campus Holding SA, Geneva" },
      { property: "og:description", content: "Ernesto Bertarelli founded Campus Holding SA in 2008. Explore the people and work behind the private family office." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const roles = [
  {
    en: "Chief Financial Officer", abbr: "CFO", fr: "Directeur financier", name: "Philippe Gutenberg",
    focus: { en: "Accounts, reporting and treasury", fr: "Comptes, reporting et trésorerie" },
    detail: {
      en: "Closes the accounts of the holding and of each participation, watches liquidity, and prepares the reporting the family relies on before any significant decision.",
      fr: "Clôture les comptes de la holding et de chaque participation, surveille la liquidité et prépare le reporting sur lequel la famille s'appuie avant toute décision significative.",
    },
  },
  {
    en: "Chief Strategy Officer", abbr: "CSO", fr: "Directeur de la stratégie", name: "Thomas Blum",
    focus: { en: "Long-term direction of the holdings", fr: "Cap de long terme des participations" },
    detail: {
      en: "Looks further out than the current year: where each holding is heading, which questions deserve the family's attention now, and which can wait another season.",
      fr: "Regarde plus loin que l'année en cours : la direction de chaque participation, les questions qui méritent l'attention de la famille dès maintenant, et celles qui peuvent attendre une saison de plus.",
    },
  },
  {
    en: "Chief Investment Officer", abbr: "CIO", fr: "Directeur des investissements", name: "Andreas Richter",
    focus: { en: "Allocation across the ten domains", fr: "Allocation sur les dix domaines" },
    detail: {
      en: "Allocates the family's capital across the ten domains, weighing every new opportunity against the mandate of permanent capital and a horizon measured in decades.",
      fr: "Répartit le capital de la famille sur les dix domaines, en pesant chaque nouvelle opportunité à l'aune du mandat de capital permanent et d'un horizon qui se mesure en décennies.",
    },
  },
  {
    en: "Chief Technology Officer", abbr: "CTO", fr: "Directeur de la technologie", name: "Daniel Rochat",
    focus: { en: "Systems, data and security", fr: "Systèmes, données et sécurité" },
    detail: {
      en: "Protects the information the family holds and keeps the office's systems deliberately simple, private and dependable — technology here serves discretion, never the reverse.",
      fr: "Protège les informations détenues par la famille et garde les systèmes de l'office délibérément simples, privés et fiables — la technologie sert ici la discrétion, jamais l'inverse.",
    },
  },
  {
    en: "Chief Legal Officer", abbr: "CLO", fr: "Directeur juridique", name: "Nathan Bernasconi",
    focus: { en: "Contracts, structures and counsel", fr: "Contrats, structures et conseil" },
    detail: {
      en: "Drafts and reviews the contracts behind every transaction, keeps the holding structures sound across jurisdictions, and coordinates outside counsel when a question exceeds the house.",
      fr: "Rédige et relit les contrats derrière chaque transaction, maintient des structures de holding solides à travers les juridictions et coordonne les conseils externes lorsqu'une question dépasse la maison.",
    },
  },
  {
    en: "Portfolio Manager", abbr: "PM", fr: "Gestion de portefeuille", name: "Christophe S. Rosenberg",
    focus: { en: "Positions, sizing and follow-through", fr: "Positions, tailles et suivi" },
    detail: {
      en: "Follows the positions day after day — sizing, documentation, covenants — with the quiet discipline of knowing when to act, when to add, and when to simply hold.",
      fr: "Suit les positions jour après jour — dimensionnement, documentation, covenants — avec la discipline tranquille de savoir quand agir, quand renforcer, et quand simplement attendre.",
    },
  },
  {
    en: "Investment Analyst", abbr: "IA", fr: "Analyse des investissements", name: "Simon Ferretti",
    focus: { en: "Research behind each decision", fr: "La recherche derrière chaque décision" },
    detail: {
      en: "Builds the file behind each decision — markets, counterparties, structures, downside — the research that makes a case clear long before it reaches the family.",
      fr: "Construit le dossier derrière chaque décision — marchés, contreparties, structures, risque de perte — la recherche qui rend un dossier clair bien avant qu'il n'arrive à la famille.",
    },
  },
  {
    en: "Relationship Manager", abbr: "RM", fr: "Gestion des relations", name: "Alexandre Riva",
    focus: { en: "Counterparties and standing partners", fr: "Contreparties et partenaires de longue date" },
    detail: {
      en: "Maintains the office's standing relationships — banks, advisers, brokers, specialists — built over years of working together and worth more than any single transaction.",
      fr: "Entretient les relations établies de l'office — banques, conseils, courtiers, spécialistes — construites au fil des années de travail commun et qui valent plus que n'importe quelle transaction.",
    },
  },
  {
    en: "Investor Relations", abbr: "IR", fr: "Relations investisseurs", name: "Franck Lemann",
    focus: { en: "Co-investors in selected situations", fr: "Co-investisseurs sur certaines situations" },
    detail: {
      en: "Is the point of contact for the families and institutions that co-invest alongside Campus in selected situations — few, chosen, and kept informed in the same plain language.",
      fr: "Est l'interlocuteur des familles et institutions qui co-investissent aux côtés de Campus sur certaines situations — rares, choisies, et tenues informées dans le même langage simple.",
    },
  },
  {
    en: "Head of Real Estate", abbr: "RE", fr: "Direction immobilière", name: "Sophie Monti",
    focus: { en: "Buildings held for the long term", fr: "Immeubles détenus dans la durée" },
    detail: {
      en: "Oversees the buildings the family holds directly — acquisitions, works, tenants — with the patience real estate demands and an eye on what will still stand in fifty years.",
      fr: "Suit les immeubles détenus en direct par la famille — acquisitions, travaux, locataires — avec la patience qu'exige l'immobilier et le regard sur ce qui tiendra encore dans cinquante ans.",
    },
  },
  {
    en: "Compliance", abbr: "CO", fr: "Conformité", name: "David Keller",
    focus: { en: "Rules respected, records kept", fr: "Règles respectées, archives tenues" },
    detail: {
      en: "Makes sure the office meets every obligation — filings, registers, records, declarations — and that nothing is left to chance or to memory.",
      fr: "Veille à ce que l'office honore chaque obligation — déclarations, registres, archives — et que rien n'est laissé au hasard ni à la mémoire.",
    },
  },
  {
    en: "Executive Assistant", abbr: "EA", fr: "Assistance de direction", name: "Celine Muller",
    focus: { en: "The office's memory and calendar", fr: "La mémoire et l'agenda de l'office" },
    detail: {
      en: "Holds the calendar, the travel and the flow of dossiers that keep the chairman's desk in order — the operational memory of the office, and often its first word to the outside world.",
      fr: "Tient l'agenda, les déplacements et le flux de dossiers qui maintiennent le bureau du président en ordre — la mémoire opérationnelle de l'office, et souvent son premier mot vers l'extérieur.",
    },
  },
];

function Team() {
  const { lang } = useLang();
  const en = lang === "en";

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[360px] overflow-hidden md:min-h-[460px]">
        <img src={sailing.url} alt={en ? "Sailboats crossing open water" : "Voiliers traversant la mer"} className="absolute inset-0 h-full w-full object-cover object-center grayscale" />
        <div className="absolute inset-0 bg-foreground/55" />
        <div className="relative mx-auto flex min-h-[360px] max-w-7xl flex-col justify-end px-6 pb-12 pt-28 text-primary-foreground md:min-h-[460px] md:pb-16 lg:px-10">
          <p className="text-xs font-medium uppercase tracking-widest">Campus Holding SA / Genève</p>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl font-normal leading-tight md:text-6xl">
            {en ? "Our team" : "Notre équipe"}
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-12 md:grid-cols-12 md:gap-10 md:py-16 lg:px-10">
        <div className="md:col-span-3">
          <p className="text-sm font-medium">{en ? "The office" : "Le bureau"}</p>
        </div>
        <div className="md:col-span-9">
          <h2 className="max-w-3xl font-serif text-2xl font-medium leading-snug md:text-3xl">
            {en ? "Fifteen people, one mandate." : "Quinze personnes, un seul mandat."}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {en
              ? "Founded in Geneva in 2008 by Ernesto Bertarelli, Campus Holding SA serves the interests of one family. The work spans investments, operations and the day-to-day stewardship of a private office — carried by a small team that knows each other well."
              : "Fondée à Genève en 2008 par Ernesto Bertarelli, Campus Holding SA est au service d'une seule famille. Son travail couvre les investissements, les opérations et la gestion quotidienne d'un bureau privé — porté par une équipe resserrée qui se connaît bien."}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {en
              ? "Each role on this page carries a real responsibility. The descriptions below set out what each person actually does — the substance of the work, not the title. All fifteen places now carry a name, confirmed by the family."
              : "Chaque fonction présentée sur cette page porte une responsabilité réelle. Les descriptions ci-dessous disent ce que chaque personne fait concrètement — la substance du travail, non l'intitulé. Les quinze places portent désormais un nom, confirmé par la famille."}
          </p>
        </div>
      </section>

      {/* Founder — featured */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-12 md:py-16 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-5">
            <h2 className="font-serif text-2xl font-medium md:text-3xl">{en ? "The founder" : "Le fondateur"}</h2>
            <p className="text-sm text-muted-foreground">{en ? "Geneva · Since 2008" : "Genève · Depuis 2008"}</p>
          </div>

          <div className="py-10 md:py-14">
            <div className="flex flex-col justify-center border-l border-foreground/30 pl-6 md:pl-8">
              <p className="text-xs font-medium text-muted-foreground">01 / {en ? "Chairman and Founder" : "Président et fondateur"}</p>
              <h3 className="mt-3 font-serif text-3xl font-medium md:text-4xl">Ernesto Bertarelli</h3>
              <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
                {en
                  ? "Ernesto Bertarelli founded Campus Holding SA in 2008. His experience spans the life sciences, through the family company Serono, and sailing, through Alinghi. The family office is a separate institution, created to look after the family's interests over time."
                  : "Ernesto Bertarelli a fondé Campus Holding SA en 2008. Son parcours traverse les sciences du vivant, avec l'entreprise familiale Serono, et la voile, avec Alinghi. Le family office est une institution distincte, créée pour veiller sur les intérêts de la famille dans la durée."}
              </p>
              <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
                {en
                  ? "He chairs the office and takes part in every significant decision. Around him, a small team covers the functions a private institution needs — no more, no less."
                  : "Il préside l'office et prend part à chaque décision significative. Autour de lui, une équipe resserrée couvre les fonctions nécessaires à une institution privée — ni plus, ni moins."}
              </p>
              <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
                {en
                  ? "The same instinct that shaped Serono over three generations and carried Alinghi to two America's Cups runs through the office: assemble capable people, give them a clear mandate, and let the work speak. The team is recruited on judgement and discretion first — everything else can be taught."
                  : "Le même instinct qui a façonné Serono sur trois générations et porté Alinghi vers deux Coupes de l'America traverse l'office : réunir des personnes capables, leur donner un mandat clair, et laisser le travail parler. L'équipe est recrutée d'abord sur le jugement et la discrétion — tout le reste s'apprend."}
              </p>
              <Link to="/about" className="story-link mt-6 w-fit text-sm text-foreground">
                {en ? "Read about the founder" : "Découvrir le fondateur"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The family inside the office — Joseph Bertarelli, COO */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-12 md:py-16 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-5">
            <h2 className="font-serif text-2xl font-medium md:text-3xl">{en ? "The family inside the office" : "La famille au cœur de l'office"}</h2>
            <p className="text-sm text-muted-foreground">{en ? "Fourth generation" : "Quatrième génération"}</p>
          </div>

          <div className="grid gap-10 py-10 md:grid-cols-12 md:gap-12 md:py-14">
            <div className="md:col-span-4">
              <p className="text-xs font-medium text-muted-foreground">02 / {en ? "Chief Operating Officer" : "Directeur des opérations"}</p>
              <h3 className="mt-3 font-serif text-3xl font-medium md:text-4xl">Joseph Bertarelli</h3>
              <ul className="mt-10 space-y-5 border-l border-border pl-6">
                <li>
                  <p className="text-sm font-medium">Pietro Bertarelli</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {en ? "Serono — managing director from 1935" : "Serono — directeur général dès 1935"}
                  </p>
                </li>
                <li>
                  <p className="text-sm font-medium">Fabio Bertarelli</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {en ? "Serono — at the head from 1965, a global biotechnology group" : "Serono — à la direction dès 1965, un groupe de biotechnologie mondial"}
                  </p>
                </li>
                <li>
                  <p className="text-sm font-medium">Dona Bertarelli</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {en ? "Serono — co-owner from 1998" : "Serono — co-propriétaire dès 1998"}
                  </p>
                </li>
                <li>
                  <p className="text-sm font-medium">Joseph Bertarelli</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {en ? "Campus Holding SA — Chief Operating Officer" : "Campus Holding SA — Directeur des opérations"}
                  </p>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center md:col-span-8">
              <p className="max-w-xl leading-relaxed text-muted-foreground">
                {en
                  ? "Joseph Bertarelli is the grandson of Fabio Bertarelli, who took the lead of Serono in 1965 and established it as a biotechnology group of worldwide significance, and the son of Dona Bertarelli. He belongs to the fourth generation of a family whose enterprise, begun in pharmacy more than a century ago, has been passed down ever since."
                  : "Joseph Bertarelli est le petit-fils de Fabio Bertarelli, qui a pris la direction de Serono en 1965 et en a fait un groupe de biotechnologie de portée mondiale, et le fils de Dona Bertarelli. Il appartient à la quatrième génération d'une famille dont l'entreprise, née dans la pharmacie il y a plus d'un siècle, se transmet depuis sans interruption."}
              </p>
              <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
                {en
                  ? "He grew up in a family where enterprise and sailing have long been two expressions of the same temperament — read the conditions, commit fully, look after the crew."
                  : "Il a grandi dans une famille où l'entreprise et la voile sont depuis longtemps deux expressions d'un même tempérament — lire les conditions, s'engager pleinement, veiller sur l'équipage."}
              </p>
              <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
                {en
                  ? "As Chief Operating Officer, he carries the day-to-day running of the office — priorities, cadence, coordination between functions — so that the family's affairs advance without friction. His place in the office also carries a meaning no title expresses: continuity, in the most literal sense."
                  : "En qualité de directeur des opérations, il porte la conduite quotidienne de l'office — priorités, rythme, coordination entre les fonctions — afin que les affaires de la famille avancent sans friction. Sa place dans l'office porte aussi un sens qu'aucun titre n'exprime : la continuité, au sens le plus littéral."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team entries — editorial passages, no grid */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-12 md:py-16 lg:px-10">
          <div className="flex flex-wrap items-baseline justify-between gap-3 pb-8">
            <h2 className="font-serif text-2xl font-medium md:text-3xl">{en ? "The team" : "L'équipe"}</h2>
            <p className="text-sm text-muted-foreground">{en ? "Names confirmed by the family" : "Noms confirmés par la famille"}</p>
          </div>

          <div className="mt-2 border-t border-border">
            {roles.map((role, index) => (
              <article
                key={index}
                className="grid gap-5 border-b border-border py-10 md:grid-cols-12 md:gap-8 md:py-12"
              >
                <div className="flex items-baseline gap-5 md:col-span-5">
                  <span className="shrink-0 font-serif text-sm text-muted-foreground/70">
                    {String(index + 3).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif text-3xl font-normal leading-tight md:text-4xl">
                      {role.name}
                    </h3>
                    <p className="mt-1.5 text-[15px] font-medium tracking-wide text-foreground/75">
                      {en ? role.en : role.fr}
                      <span className="ml-2 font-serif text-xs font-normal tracking-widest text-muted-foreground/70">
                        {role.abbr}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="md:col-span-6 md:col-start-6 md:pt-1">
                  <p className="text-base font-medium leading-snug">
                    {en ? role.focus.en : role.focus.fr}
                  </p>
                  <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                    {en ? role.detail.en : role.detail.fr}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Desks — how the roles fit together */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-12 md:py-16 lg:px-10">
          <div className="flex flex-wrap items-baseline justify-between gap-3 pb-8">
            <h2 className="font-serif text-2xl font-medium md:text-3xl">{en ? "Three desks, one office" : "Trois pupitres, un office"}</h2>
            <p className="text-sm text-muted-foreground">{en ? "How the roles fit together" : "Comment les fonctions s'articulent"}</p>
          </div>
          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            <div className="border-t-2 border-foreground/20 pt-6">
              <h3 className="text-base font-medium">{en ? "The investment desk" : "Le pupitre des investissements"}</h3>
              <p className="mt-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">CIO · PM · IA</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {en
                  ? "The desk where every new opportunity begins. The analyst builds the file, the portfolio manager follows what is held, and the CIO weighs the whole against the mandate. Nothing reaches the family before the desk has done its work — and nothing is declined without a reason written down."
                  : "Le pupitre où commence toute nouvelle opportunité. L'analyste construit le dossier, le gestionnaire de portefeuille suit ce qui est détenu, et le CIO pèse l'ensemble à l'aune du mandat. Rien n'arrive à la famille avant que le pupitre n'ait fait son travail — et rien n'est décliné sans raison écrite."}
              </p>
            </div>
            <div className="border-t-2 border-foreground/20 pt-6">
              <h3 className="text-base font-medium">{en ? "The stewardship desk" : "Le pupitre de la surveillance"}</h3>
              <p className="mt-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">CSO · CLO · RE · RM · IR</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {en
                  ? "The desk that looks after what is already owned: the direction of each holding, the contracts that hold the structures together, the buildings, and the relationships — with banks, advisers and co-investors — that took years to build and a moment to lose."
                  : "Le pupitre qui veille sur ce qui est déjà détenu : la direction de chaque participation, les contrats qui tiennent les structures, les immeubles, et les relations — avec les banques, les conseils et les co-investisseurs — qui ont demandé des années à construire et un instant à perdre."}
              </p>
            </div>
            <div className="border-t-2 border-foreground/20 pt-6">
              <h3 className="text-base font-medium">{en ? "The operations desk" : "Le pupitre des opérations"}</h3>
              <p className="mt-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">COO · CFO · CTO · CO · EA</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {en
                  ? "The desk the other two stand on: accounts closed on time, systems that hold, obligations met, records kept. Unremarkable by design — in a private institution, the best measure of this work is that nothing ever seems to go wrong."
                  : "Le pupitre sur lequel s'appuient les deux autres : des comptes clôturés à temps, des systèmes qui tiennent, des obligations honorées, des archives tenues. Sans éclat par choix — dans une institution privée, la meilleure mesure de ce travail est que rien ne semble jamais mal tourner."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dark band */}
      <section className="bg-foreground text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3 md:py-20 lg:px-10">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest opacity-70">{en ? "How we work" : "Notre manière"}</p>
            <h2 className="mt-4 font-serif text-2xl font-medium leading-snug md:text-3xl">
              {en ? "Small on purpose." : "Petit, volontairement."}
            </h2>
          </div>
          <p className="leading-relaxed opacity-90 md:pt-9">
            {en
              ? "Fifteen people is a choice, not a limitation. Decisions move quickly because few people need to make them. Everyone in the room knows the whole picture, and everyone is accountable for their part of it."
              : "Quinze personnes, c'est un choix, pas une limite. Les décisions avancent vite parce que peu de gens doivent les prendre. Chacun dans la pièce connaît l'ensemble du tableau, et chacun répond de sa partie."}
          </p>
          <p className="leading-relaxed opacity-90 md:pt-9">
            {en
              ? "When a question exceeds the team — a tax matter in another jurisdiction, a specialist due diligence — the office calls on outside counsel it has known for years. The relationship stays; the invoice changes."
              : "Lorsqu'une question dépasse l'équipe — une question fiscale dans une autre juridiction, une due diligence spécialisée — l'office fait appel à des conseils externes qu'il connaît depuis des années. La relation reste ; la facture change."}
          </p>
        </div>
      </section>

      {/* Closing */}
      <section className="border-t border-border">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-12 md:grid-cols-12 md:gap-10 md:py-16 lg:px-10">
          <h2 className="font-serif text-2xl font-medium md:col-span-4 md:text-3xl">{en ? "What brings us together" : "Ce qui nous réunit"}</h2>
          <div className="md:col-span-8">
            <p className="max-w-2xl leading-relaxed text-muted-foreground">
              {en
                ? "The work cuts across investment decisions, company oversight and the practical responsibilities of a family office. Some questions are handled in-house; others call for independent legal, tax or specialist advice. The important part is knowing who is accountable for each decision."
                : "Le travail couvre les décisions d'investissement, le suivi des participations et les responsabilités concrètes d'un bureau familial. Certaines questions se traitent en interne ; d'autres exigent un avis juridique, fiscal ou spécialisé indépendant. L'essentiel est de savoir qui répond de chaque décision."}
            </p>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              {en
                ? "What the fifteen have in common is not a background but a manner: long tenures, plain speech, and the habit of treating the family's affairs as if they were their own. That is what holds the office together, and what a title alone never conveys."
                : "Ce que les quinze ont en commun n'est pas un parcours mais une manière : des anciennetés longues, une parole simple, et l'habitude de traiter les affaires de la famille comme si elles étaient les leurs. C'est ce qui tient l'office ensemble, et ce qu'un titre seul ne dit jamais."}
            </p>
            <Link to="/contact" className="story-link mt-6 inline-block text-sm text-foreground">
              {en ? "Contact us" : "Nous contacter"}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
