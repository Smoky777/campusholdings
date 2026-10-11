import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import lakeDusk from "@/assets/lake-dusk.jpg.asset.json";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/investments")({
  component: Investments,
  head: () => ({
    meta: [
      {
        title: "Investments | Campus Holding — Private Family Office, Geneva",
      },
      {
        name: "description",
        content:
          "CHF 3 billion in assets under management across more than 87 companies. Investing with a generational perspective — patient, selective, entrepreneurial and global.",
      },
      {
        property: "og:title",
        content:
          "Investments | Campus Holding — Private Family Office, Geneva",
      },
      {
        property: "og:description",
        content:
          "CHF 3B under management, 87+ companies. Investing with a generational perspective.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

/** Quietly counts from 0 to `to` when scrolled into view. */
function CountUp({
  to,
  decimals = 0,
  suffix = "",
  duration = 1800,
}: {
  to: number;
  decimals?: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setVal(to * eased);
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, duration]);

  return (
    <span ref={ref}>
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
}

function Investments() {
  const { lang } = useLang();
  const en = lang === "en";

  const principles = en
    ? [
        {
          title: "Long-Term",
          text: "No obligation to follow traditional fund cycles. We hold as long as the thesis holds.",
        },
        {
          title: "Selective",
          text: "A disciplined approach to capital allocation. We prefer to pass on nine and commit to one.",
        },
        {
          title: "Entrepreneurial",
          text: "Understanding businesses from an owner's perspective, not an observer's.",
        },
        {
          title: "Global",
          text: "Evaluating opportunities across markets and geographies, anchored in Geneva.",
        },
      ]
    : [
        {
          title: "Long terme",
          text: "Aucune obligation de suivre les cycles traditionnels des fonds. Nous gardons aussi longtemps que la thèse tient.",
        },
        {
          title: "Sélectif",
          text: "Une allocation de capital disciplinée. Nous préférons renoncer à neuf opportunités et nous engager dans une seule.",
        },
        {
          title: "Entrepreneurial",
          text: "Comprendre les entreprises du point de vue d'un propriétaire, pas d'un spectateur.",
        },
        {
          title: "Mondial",
          text: "Évaluer les opportunités à travers les marchés et les géographies, avec Genève pour ancrage.",
        },
      ];

  const sectors = en
    ? [
        {
          name: "Private Equity & Venture Capital",
          alt: "Private Equity & Capital-Risque",
          text: "Direct stakes in companies we back early and often keep for many years.",
          more: "We usually take a seat at the board and stay close to management.",
        },
        {
          name: "Healthcare & Life Sciences",
          alt: "Santé & Sciences du vivant",
          text: "The field where the family's roots run deepest.",
          more: "Three generations in medicine shaped the way we read science.",
        },
        {
          name: "Biotech",
          alt: "Biotechnologies",
          text: "Patient capital for science that is measured in decades, not quarters.",
          more: "We support programs we would be prepared to defend under our own name.",
        },
        {
          name: "Real Estate",
          alt: "Immobilier",
          text: "Considered holdings in Geneva and selected European cities.",
          more: "Buildings kept for decades, rarely sold, never traded.",
        },
        {
          name: "Deep Tech",
          alt: "Technologies de pointe",
          text: "Technologies that take time to become obvious.",
          more: "Hardware, materials, systems — fields where patience is the entry price.",
        },
        {
          name: "Public Markets",
          alt: "Marchés publics",
          text: "A small number of positions, held with the same discipline as the rest.",
          more: "Ownership by another means, nothing more — never a trading book.",
        },
        {
          name: "Technology",
          alt: "Technologie",
          text: "Platforms and tools that quietly change how things are done.",
          more: "Adopted when we understand them, ignored when we do not.",
        },
        {
          name: "Artificial Intelligence",
          alt: "Intelligence artificielle",
          text: "Applied where it genuinely creates value, never for its own sake.",
          more: "A tool inside our companies, not a thesis on its own.",
        },
        {
          name: "FinTech",
          alt: "Finance technologique",
          text: "Infrastructure for a more direct and transparent economy.",
          more: "Interesting where it serves the real economy, not speculation.",
        },
        {
          name: "Energy",
          alt: "Énergie",
          text: "Transition projects judged on a long horizon.",
          more: "Production, storage, efficiency — appraised over twenty years, not two.",
        },
      ]
    : [
        {
          name: "Private Equity & Venture Capital",
          alt: "Private Equity & Venture Capital",
          text: "Des participations directes dans des entreprises que nous soutenons tôt et gardons souvent longtemps.",
          more: "Nous prenons généralement un siège au conseil et restons proches de la direction.",
        },
        {
          name: "Santé & Sciences du vivant",
          alt: "Healthcare & Life Sciences",
          text: "Le domaine où les racines de la famille sont les plus profondes.",
          more: "Trois générations dans la médecine ont façonné notre lecture de la science.",
        },
        {
          name: "Biotech",
          alt: "Biotech",
          text: "Un capital patient pour une science qui se mesure en décennies, pas en trimestres.",
          more: "Nous soutenons des programmes que nous serions prêts à défendre sous notre propre nom.",
        },
        {
          name: "Immobilier",
          alt: "Real Estate",
          text: "Des avoirs choisis avec soin, à Genève et dans quelques villes européennes.",
          more: "Des bâtiments gardés pendant des décennies, rarement vendus, jamais spéculés.",
        },
        {
          name: "Deep Tech",
          alt: "Deep Tech",
          text: "Des technologies qui mettent du temps à devenir évidentes.",
          more: "Matériel, matériaux, systèmes — des domaines où la patience est le prix d'entrée.",
        },
        {
          name: "Marchés publics",
          alt: "Public Markets",
          text: "Un petit nombre de positions, gardées avec la même discipline que le reste.",
          more: "Une forme de propriété parmi d'autres, rien de plus — jamais un livre de trading.",
        },
        {
          name: "Technologie",
          alt: "Technology",
          text: "Des plateformes et des outils qui changent discrètement la façon de faire.",
          more: "Adoptées quand nous les comprenons, ignorées quand ce n'est pas le cas.",
        },
        {
          name: "Intelligence artificielle",
          alt: "Artificial Intelligence",
          text: "Appliquée là où elle crée réellement de la valeur, jamais pour elle-même.",
          more: "Un outil au sein de nos sociétés, pas une thèse en soi.",
        },
        {
          name: "FinTech",
          alt: "FinTech",
          text: "L'infrastructure d'une économie plus directe et plus transparente.",
          more: "Intéressante là où elle sert l'économie réelle, pas la spéculation.",
        },
        {
          name: "Énergie",
          alt: "Energy",
          text: "Des projets de transition jugés sur un horizon long.",
          more: "Production, stockage, efficacité — évalués sur vingt ans, pas deux.",
        },
      ];

  const avoid = en
    ? [
        {
          title: "Leverage",
          text: "We work with little debt. Complexity borrowed to amplify returns always ends up collecting its price — usually at the worst moment.",
        },
        {
          title: "Fashion",
          text: "Sectors that fill the news interest us least. What everyone can buy today, we cannot own with conviction.",
        },
        {
          title: "The exit clock",
          text: "We do not build in order to sell. A project designed for a buyer from day one rarely deserves one.",
        },
      ]
    : [
        {
          title: "L'effet de levier",
          text: "Nous travaillons avec peu de dette. La complexité empruntée pour amplifier les rendements finit toujours par se payer — au pire moment.",
        },
        {
          title: "La mode",
          text: "Les secteurs qui remplissent l'actualité nous intéressent le moins. Ce que tout le monde peut acheter aujourd'hui, nous ne pouvons pas le posséder avec conviction.",
        },
        {
          title: "L'horloge de sortie",
          text: "Nous ne construisons pas pour vendre. Un projet pensé pour un acheteur dès le premier jour en mérite rarement un.",
        },
      ];

  const process = en
    ? [
        {
          title: "Where we look",
          text: "Opportunities reach us through relationships built over decades — scientists, entrepreneurs, other families. We rarely respond to a pitch; we respond to people we know.",
        },
        {
          title: "Due diligence",
          text: "Technical, legal, financial and human review, carried out in-house and at our own pace. We would rather lose a few weeks than leave a question unanswered.",
        },
        {
          title: "The decision",
          text: "Only a handful of the opportunities we study ever reach this stage. When they do, the family decides alone — deliberately, without outside pressure.",
        },
        {
          title: "Commitment",
          text: "We invest our own capital, directly, and usually alongside the founders. There is no fund structure between us and the company.",
        },
        {
          title: "After the investment",
          text: "We behave as owners: present at the board, patient in difficulty, invisible in public.",
        },
      ]
    : [
        {
          title: "Là où nous regardons",
          text: "Les opportunités nous parviennent par des relations construites sur des décennies — des scientifiques, des entrepreneurs, d'autres familles. Nous répondons rarement à un pitch ; nous répondons à des gens que nous connaissons.",
        },
        {
          title: "La due diligence",
          text: "Un examen technique, juridique, financier et humain, mené en interne et à notre rythme. Nous préférons perdre quelques semaines que laisser une question sans réponse.",
        },
        {
          title: "La décision",
          text: "Seules une poignée des opportunités que nous étudions atteignent ce stade. Quand c'est le cas, la famille décide seule — délibérément, sans pression extérieure.",
        },
        {
          title: "L'engagement",
          text: "Nous investissons notre propre capital, en direct, le plus souvent aux côtés des fondateurs. Aucune structure de fonds ne s'interpose entre nous et l'entreprise.",
        },
        {
          title: "Après l'investissement",
          text: "Nous nous comportons en propriétaires : présents au conseil, patients dans la difficulté, invisibles en public.",
        },
      ];

  const diligenceQuestions = en
    ? [
        "Is the science — or the technology — sound?",
        "Do the numbers hold, year after year?",
        "Are the right people in place, and will they stay?",
        "And what is the risk we do not yet see?",
      ]
    : [
        "La science — ou la technologie — est-elle solide ?",
        "Les chiffres tiennent-ils, année après année ?",
        "Les bonnes personnes sont-elles en place, et resteront-elles ?",
        "Et quel est le risque que nous ne voyons pas encore ?",
      ];

  const contributions = en
    ? [
        {
          title: "A network",
          text: "Relationships across science, industry and finance, built over three generations. We open doors quietly, when it genuinely helps.",
        },
        {
          title: "Governance",
          text: "Structure and clarity, so decisions are made well — and can one day be explained to the next generation.",
        },
        {
          title: "Time",
          text: "No fund cycle, no exit clock. Projects are given the years they actually need.",
        },
        {
          title: "Discretion",
          text: "We do not announce our investments and we do not seek the spotlight. The companies we back speak for themselves.",
        },
      ]
    : [
        {
          title: "Un réseau",
          text: "Des relations dans la science, l'industrie et la finance, construites sur trois générations. Nous ouvrons des portes discrètement, quand c'est vraiment utile.",
        },
        {
          title: "La gouvernance",
          text: "De la structure et de la clarté, pour que les décisions soient bien prises — et puissent un jour être expliquées à la génération suivante.",
        },
        {
          title: "Du temps",
          text: "Pas de cycle de fonds, pas d'horloge de sortie. Les projets reçoivent les années dont ils ont réellement besoin.",
        },
        {
          title: "La discrétion",
          text: "Nous n'annonçons pas nos investissements et nous ne cherchons pas la lumière. Les sociétés que nous soutenons parlent d'elles-mêmes.",
        },
      ];

  const counterparts = en
    ? [
        {
          title: "Founders & entrepreneurs",
          text: "People building something that outlives them, who want an owner alongside them rather than a board of strangers.",
        },
        {
          title: "Scientists & research teams",
          text: "Long science needs patient capital — and people who understand why the timeline is long.",
        },
        {
          title: "Families & private institutions",
          text: "Like us, they think in generations. We co-invest where the values genuinely align.",
        },
      ]
    : [
        {
          title: "Fondateurs & entrepreneurs",
          text: "Ceux qui bâtissent quelque chose qui leur survivra, et qui cherchent un propriétaire à leurs côtés plutôt qu'un conseil d'inconnus.",
        },
        {
          title: "Scientifiques & équipes de recherche",
          text: "La science longue a besoin d'un capital patient — et de gens qui comprennent pourquoi le calendrier est long.",
        },
        {
          title: "Familles & institutions privées",
          text: "Comme nous, elles pensent en générations. Nous co-investissons là où les valeurs coïncident vraiment.",
        },
      ];

  const hallmarks = en
    ? [
        {
          title: "Permanent Capital",
          text: "No fund, no lifetime, no forced exit. Our capital belongs to the family and remains invested as long as it serves the project.",
        },
        {
          title: "Long-Term Horizon",
          text: "We measure results in decades, not quarters. Time is not a constraint on our decisions — it is one of our advantages.",
        },
        {
          title: "Ability to Support Entrepreneurs",
          text: "Founded by entrepreneurs, we speak their language and stand beside those who build — not only with money.",
        },
        {
          title: "Flexibility on Transaction Structure",
          text: "Acquisition, minority stake, joint venture, co-investment: the structure follows the project, never the reverse.",
        },
        {
          title: "Direct Investments & Co-Investments",
          text: "We invest directly and alongside families and institutions who share our values and our horizon.",
        },
      ]
    : [
        {
          title: "Capital permanent",
          text: "Pas de fonds, pas de durée de vie, pas de sortie imposée. Notre capital appartient à la famille et reste investi tant qu'il sert le projet.",
        },
        {
          title: "Horizon long terme",
          text: "Nous mesurons nos résultats en décennies, pas en trimestres. Le temps n'est pas une contrainte de nos décisions — il est l'un de nos avantages.",
        },
        {
          title: "Capacité d'accompagner les entrepreneurs",
          text: "Fondée par des entrepreneurs, nous parlons leur langue et restons aux côtés de ceux qui construisent — pas seulement avec du capital.",
        },
        {
          title: "Flexibilité sur la structure des transactions",
          text: "Rachat, participation minoritaire, coentreprise, co-investissement : la structure suit le projet, jamais l'inverse.",
        },
        {
          title: "Investissements directs et co-investissements",
          text: "Nous investissons en direct et aux côtés de familles et d'institutions qui partagent nos valeurs et notre horizon.",
        },
      ];

  return (
    <main>
      <PageHero
        image={lakeDusk.url}
        label={en ? "Investments" : "Investissements"}
        title={
          en ? (
            <>
              Investing with a
              <br />
              generational perspective.
            </>
          ) : (
            <>
              Investir avec une
              <br />
              perspective générationnelle.
            </>
          )
        }
        intro={
          en
            ? "We approach investment as long-term owners rather than short-term participants."
            : "Nous abordons l'investissement comme des propriétaires de long terme, et non comme des participants de court terme."
        }
      />

      {/* ————— PHILOSOPHY ————— */}
      <section className="mx-auto w-full max-w-7xl px-6 py-28 md:py-36 lg:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-3">
            <p className="label-caps text-accent">
              {en ? "Investment Philosophy" : "Philosophie d'Investissement"}
            </p>
            <p className="mt-3 text-xs text-muted-foreground">
              {en ? "Since 2008" : "Depuis 2008"}
            </p>
          </Reveal>
          <div className="md:col-span-9">
            <Reveal>
              <h2 className="max-w-2xl text-4xl font-medium leading-[1.15] md:text-5xl">
                {en
                  ? "Patient, independent, unconstrained."
                  : "Patiente, indépendante, affranchie."}
              </h2>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
                {en
                  ? "As a private family institution, we commit capital the way owners do — quietly, for decades, and only where we understand the business and the people behind it."
                  : "En tant qu'institution familiale privée, nous engageons notre capital comme le feraient des propriétaires — discrètement, pour des décennies, et uniquement là où nous comprenons l'entreprise et les personnes qui la portent."}
              </p>
            </Reveal>
            <div className="mt-16 grid gap-x-16 gap-y-12 sm:grid-cols-2">
              {principles.map((p, i) => (
                <Reveal key={p.title} delay={i * 90}>
                  <div className="group border-t border-foreground/20 pt-7 transition-colors duration-500 hover:border-accent">
                    <span className="label-caps text-xs text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="label-caps mt-5 text-[0.8rem]">{p.title}</h3>
                    <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                      {p.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ————— SCALE (dark, animated figures) ————— */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:py-32 lg:px-10">
          <div className="h-px w-16 bg-accent" />
          <Reveal>
            <p className="label-caps mt-8 text-accent">
              {en ? "Assets Under Management" : "Actifs Sous Gestion"}
            </p>
          </Reveal>
          <div className="mt-14 grid gap-y-12 md:grid-cols-3">
            <Reveal delay={100} className="border-t border-primary-foreground/15 pt-8 md:pr-10">
              <p className="font-serif text-6xl font-medium leading-none tracking-tight tabular-nums md:text-7xl">
                <CountUp to={3} decimals={1} suffix="B" />
                <span className="text-accent"> CHF</span>
              </p>
              <p className="label-caps mt-6 text-xs text-primary-foreground/70">
                {en ? "Assets under management" : "Actifs sous gestion"}
              </p>
            </Reveal>
            <Reveal delay={220} className="border-t border-primary-foreground/15 pt-8 md:pr-10">
              <p className="font-serif text-6xl font-medium leading-none tracking-tight tabular-nums md:text-7xl">
                <CountUp to={87} suffix="+" />
              </p>
              <p className="label-caps mt-6 text-xs text-primary-foreground/70">
                {en
                  ? "Companies and projects in portfolio"
                  : "Sociétés et projets en portefeuille"}
              </p>
            </Reveal>
            <Reveal delay={340} className="border-t border-primary-foreground/15 pt-8">
              <p className="font-serif text-6xl font-medium leading-none tracking-tight tabular-nums md:text-7xl">
                <CountUp to={10} />
              </p>
              <p className="label-caps mt-6 text-xs text-primary-foreground/70">
                {en ? "Fields of investment" : "Domaines d'investissement"}
              </p>
            </Reveal>
          </div>
          <Reveal delay={300}>
            <p className="mt-16 max-w-2xl text-base leading-relaxed text-primary-foreground/80 md:text-lg">
              {en
                ? "Today, our CHF 3 billion under management is invested across more than 87 companies and projects — each one held with the patience of a family and the attention of an owner."
                : "Aujourd'hui, nos 3 milliards de CHF sous gestion sont investis dans plus de 87 sociétés et projets — chacun porté avec la patience d'une famille et l'attention d'un propriétaire."}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ————— SECTORS ————— */}
      <section className="mx-auto w-full max-w-7xl px-6 py-28 md:py-36 lg:px-10">
        <Reveal>
          <p className="label-caps text-accent">
            {en ? "Where We Invest" : "Là Où Nous Investissons"}
          </p>
          <h2 className="mt-6 max-w-3xl text-4xl font-medium leading-[1.12] md:text-5xl lg:text-6xl">
            {en
              ? "We invest in projects that build the future."
              : "Nous investissons dans des projets qui construisent l'avenir."}
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
            {en
              ? "Our portfolio spans ten fields — from early-stage science to established infrastructure — selected one opportunity at a time, never by category."
              : "Notre portefeuille couvre dix domaines — de la science émergente aux infrastructures établies — choisis une opportunité à la fois, jamais par catégorie."}
          </p>
        </Reveal>
        <div className="mt-20 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((item, i) => (
            <Reveal key={item.name} delay={(i % 3) * 80}>
              <div className="group border-t border-foreground/20 pt-6 transition-[border-color,transform] duration-500 hover:-translate-y-1 hover:border-accent">
                <span className="label-caps text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 font-serif text-xl font-medium leading-snug md:text-2xl">
                  {item.name}
                </p>
                <p className="label-caps mt-1 text-[0.65rem] text-muted-foreground opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {item.alt}
                </p>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground/80">
                  {item.more}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ————— WHAT WE AVOID (dark) ————— */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:py-32 lg:px-10">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <Reveal>
                <div className="h-px w-16 bg-accent" />
                <p className="label-caps mt-8 text-accent">
                  {en ? "What We Avoid" : "Ce Que Nous Évitons"}
                </p>
                <h2 className="mt-6 text-3xl font-medium leading-[1.15] md:text-4xl">
                  {en
                    ? "What we refuse says as much as what we choose."
                    : "Ce que nous refusons en dit autant que ce que nous choisissons."}
                </h2>
                <p className="mt-6 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
                  {en
                    ? "These refusals have cost us opportunities over the years. They have never cost us the portfolio."
                    : "Ces refus nous ont coûté des opportunités au fil des ans. Ils ne nous ont jamais coûté le portefeuille."}
                </p>
              </Reveal>
            </div>
            <div className="md:col-span-8">
              {avoid.map((a, i) => (
                <Reveal key={a.title} delay={i * 80}>
                  <div className="flex flex-col gap-2 border-t border-primary-foreground/15 py-7 sm:flex-row sm:gap-10">
                    <span className="label-caps text-xs text-accent sm:w-16">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-serif text-lg font-medium sm:w-52">
                      {a.title}
                    </h3>
                    <p className="max-w-md text-sm leading-relaxed text-primary-foreground/70">
                      {a.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ————— HOW WE INVEST ————— */}
      <section className="border-t border-foreground/15 bg-secondary/50">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-24 md:grid-cols-12 md:py-32 lg:px-10">
          <div className="md:col-span-4">
            <Reveal>
              <p className="label-caps text-accent">
                {en ? "Our Strategy" : "Notre Stratégie"}
              </p>
              <h2 className="mt-6 text-3xl font-medium leading-[1.15] md:text-4xl">
                {en
                  ? "How we invest."
                  : "Comment nous investissons."}
              </h2>
              <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {en
                  ? "Every commitment follows the same quiet path. We take the time to understand before we decide — and once we decide, we stay."
                  : "Chaque engagement suit le même chemin tranquille. Nous prenons le temps de comprendre avant de décider — et une fois que nous avons décidé, nous restons."}
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-8">
            {process.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="group flex flex-col gap-2 border-t border-foreground/20 py-7 transition-colors duration-500 hover:border-accent sm:flex-row sm:gap-10">
                  <span className="label-caps text-xs text-accent sm:w-16">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-lg font-medium sm:w-52">
                    {s.title}
                  </h3>
                  <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                    {s.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="border-t border-foreground/15">
          <div className="mx-auto w-full max-w-7xl px-6 pb-24 md:pb-32 lg:px-10">
            <Reveal>
              <div className="mx-auto max-w-2xl border border-foreground/20 px-8 py-10 md:px-12">
                <p className="label-caps text-center text-xs text-accent">
                  {en ? "Due Diligence, in Practice" : "La Due Diligence, en Pratique"}
                </p>
                <ul className="mt-8 space-y-4">
                  {diligenceQuestions.map((q, i) => (
                    <li
                      key={q}
                      className="flex gap-4 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="font-serif text-accent">
                        {["I.", "II.", "III.", "IV."][i]}
                      </span>
                      {q}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 border-t border-foreground/15 pt-6 text-center text-xs leading-relaxed text-muted-foreground">
                  {en
                    ? "Four questions asked before every commitment — answered slowly, in-house, and never outsourced."
                    : "Quatre questions posées avant chaque engagement — auxquelles nous répondons lentement, en interne, sans jamais déléguer."}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ————— WHAT DEFINES OUR INVESTING — hairline grid ————— */}
      <section className="border-t border-foreground/15">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:py-32 lg:px-10">
          <Reveal>
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="label-caps text-accent">
                  {en ? "What Defines Us" : "Ce Qui Nous Définit"}
                </p>
                <h2 className="mt-6 max-w-2xl text-3xl font-medium leading-[1.15] md:text-4xl">
                  {en
                    ? "Five traits that shape every commitment."
                    : "Cinq traits qui façonnent chaque engagement."}
                </h2>
              </div>
              <p className="max-w-xs text-sm font-light leading-relaxed text-muted-foreground md:text-right">
                {en
                  ? "They are not options we switch on when convenient — they are the way the office is built."
                  : "Ce ne sont pas des options que l'on active quand c'est pratique — c'est la façon dont l'office est construit."}
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 border-l border-t border-foreground/15 md:grid-cols-2 lg:grid-cols-3">
            {hallmarks.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 80}>
                <div className="group h-full border-b border-r border-foreground/15 p-8 transition-colors duration-500 hover:bg-card md:p-10">
                  <span className="label-caps text-xs text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 font-serif text-xl font-medium leading-snug md:text-[1.3rem]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={160}>
              <div className="flex h-full flex-col justify-between border-b border-r border-foreground/15 bg-primary p-8 text-primary-foreground md:p-10">
                <span className="h-px w-8 bg-accent/60" aria-hidden />
                <p className="mt-8 font-serif text-lg font-light italic leading-relaxed md:text-xl">
                  {en
                    ? "One family, one capital — none of it ever subject to outside investors."
                    : "Une famille, un capital — jamais soumis à des investisseurs extérieurs."}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ————— MORE THAN CAPITAL ————— */}
      <section className="border-t border-foreground/15">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-24 md:grid-cols-12 md:py-32 lg:px-10">
          <div className="md:col-span-4">
            <Reveal>
              <p className="label-caps text-accent">
                {en ? "Beyond the Money" : "Plus Que du Capital"}
              </p>
              <h2 className="mt-6 text-3xl font-medium leading-[1.15] md:text-4xl">
                {en
                  ? "We bring more than capital."
                  : "Nous apportons plus que du capital."}
              </h2>
              <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {en
                  ? "Capital opens a door. What keeps a project alive over the years is everything around it — judgment, structure, patience, and people who stay."
                  : "Le capital ouvre une porte. Ce qui fait vivre un projet pendant des années, c'est tout ce qui l'entoure — le jugement, la structure, la patience, et des gens qui restent."}
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-8">
            {contributions.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <div className="group flex flex-col gap-2 border-t border-foreground/20 py-7 transition-colors duration-500 hover:border-accent sm:flex-row sm:gap-10">
                  <span className="label-caps text-xs text-accent sm:w-16">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-lg font-medium sm:w-52">
                    {c.title}
                  </h3>
                  <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                    {c.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ————— COUNTERPARTS ————— */}
      <section className="border-t border-foreground/15">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-24 md:grid-cols-12 md:py-32 lg:px-10">
          <div className="md:col-span-4">
            <Reveal>
              <p className="label-caps text-accent">
                {en ? "Who We Invest With" : "Avec Qui Nous Investissons"}
              </p>
              <h2 className="mt-6 text-3xl font-medium leading-[1.15] md:text-4xl">
                {en
                  ? "Alongside people, never against a benchmark."
                  : "Aux côtés de personnes, jamais contre un indice."}
              </h2>
              <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {en
                  ? "Our counterparts are few, and chosen with care. We commit when the people behind a project will still be there in ten years — because we will."
                  : "Nos contreparties sont peu nombreuses, et choisies avec soin. Nous nous engageons quand les personnes derrière un projet seront encore là dans dix ans — parce que nous le serons."}
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-8">
            {counterparts.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <div className="group flex flex-col gap-2 border-t border-foreground/20 py-7 transition-colors duration-500 hover:border-accent sm:flex-row sm:gap-10">
                  <span className="label-caps text-xs text-accent sm:w-16">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-lg font-medium sm:w-52">
                    {c.title}
                  </h3>
                  <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                    {c.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ————— QUOTE (dark) ————— */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto w-full max-w-4xl px-6 py-20 text-center md:py-24">
          <Reveal>
            <div className="mx-auto h-px w-16 bg-accent" />
            <p className="mt-10 font-serif text-2xl font-medium italic leading-relaxed md:text-3xl">
              {en
                ? "We do not chase what is fashionable. We stay where we are useful."
                : "Nous ne courons pas après ce qui est à la mode. Nous restons là où nous sommes utiles."}
            </p>
            <p className="label-caps mt-8 text-xs text-accent">
              {en
                ? "Campus Holding SA — Geneva, since 2008"
                : "Campus Holding SA — Genève, depuis 2008"}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ————— CLOSING ————— */}
      <section className="border-t border-foreground/15">
        <div className="mx-auto w-full max-w-4xl px-6 py-24 text-center md:py-32">
          <Reveal>
            <p className="font-serif text-2xl font-medium leading-relaxed md:text-3xl">
              {en
                ? "Capital is only ever a means. What matters is what it builds, and for whom."
                : "Le capital n'est jamais qu'un moyen. Ce qui compte, c'est ce qu'il construit, et pour qui."}
            </p>
            <p className="label-caps mt-8 text-[0.65rem] text-muted-foreground">
              {en
                ? "Campus Holding SA — Avenue Giuseppe-Motta 31-33, 1202 Geneva"
                : "Campus Holding SA — Avenue Giuseppe-Motta 31-33, 1202 Genève"}
            </p>
            <div className="mt-10 flex items-center justify-center gap-8">
              <a
                href="/family-office"
                className="label-caps story-link text-xs text-accent"
              >
                {en ? "Discover our approach" : "Découvrir notre approche"}
              </a>
              <span className="h-3 w-px bg-foreground/25" />
              <a href="/contact" className="label-caps story-link text-xs text-accent">
                {en ? "Speak with us" : "Nous écrire"}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
