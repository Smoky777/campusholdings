import { createFileRoute } from "@tanstack/react-router";
import lakeMorges from "@/assets/lake-morges.jpg.asset.json";
import lakeArzier from "@/assets/lake-arzier.jpg.asset.json";
import ernesto from "@/assets/ernesto-square.jpg.asset.json";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ArrowLink } from "@/components/ArrowLink";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About | Campus Holding — Private Family Office, Geneva" },
      {
        name: "description",
        content:
          "Founded in Geneva in 2008, Campus Holding SA is a private Swiss family office serving one family — what it does, whom it serves, and the story behind it.",
      },
      {
        property: "og:title",
        content: "About | Campus Holding — Private Family Office, Geneva",
      },
      {
        property: "og:description",
        content:
          "Founded in Geneva in 2008. A private Swiss family office serving one family, across generations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function About() {
  const { lang } = useLang();
  const en = lang === "en";

  const markers = en
    ? [
        { value: "2008", label: "Founded in Geneva" },
        { value: "18+", label: "Years of stewardship" },
        { value: "1", label: "Family served" },
        { value: "Geneva", label: "Head office" },
      ]
    : [
        { value: "2008", label: "Fondée à Genève" },
        { value: "18+", label: "Années de gestion" },
        { value: "1", label: "Famille servie" },
        { value: "Genève", label: "Siège social" },
      ];

  const purposes = en
    ? [
        {
          title: "Stewardship",
          text: "We administer and develop the interests of one family — its holdings, its governance and its commitments — with a perspective measured in generations.",
          sub: "Concretely: board work, oversight of holdings, and the quiet administration that keeps a private structure sound year after year.",
        },
        {
          title: "Long-term capital",
          text: "The family's own capital, invested patiently across companies, projects and real assets. No outside investors, no funds, no products.",
          sub: "Holding periods are measured in decades. Decisions are taken for the next generation of owners, not for the next quarter.",
        },
        {
          title: "Continuity",
          text: "We structure what should outlive us: ownership, values and the ability to pass things on intact. Discretion is not a preference; it is a duty.",
          sub: "Succession planning, governance documents and family agreements are prepared long before they are ever needed.",
        },
      ]
    : [
        {
          title: "Gestion",
          text: "Nous administrons et développons les intérêts d'une seule famille — ses participations, sa gouvernance et ses engagements — avec une perspective qui se mesure en générations.",
          sub: "Concrètement : des mandats d'administration, le suivi des participations et l'administration discrète qui maintient une structure privée saine, année après année.",
        },
        {
          title: "Capital de long terme",
          text: "Le capital propre de la famille, investi avec patience dans des sociétés, des projets et des actifs réels. Aucun investisseur tiers, aucun fonds, aucun produit.",
          sub: "Les durées de détention se mesurent en décennies. Les décisions se prennent pour la prochaine génération, non pour le prochain trimestre.",
        },
        {
          title: "Continuité",
          text: "Nous structurons ce qui doit nous survivre : la propriété, les valeurs et la capacité de transmettre intact. La discrétion n'est pas une préférence ; c'est un devoir.",
          sub: "La planification successorale, les documents de gouvernance et les accords familiaux sont préparés longtemps avant d'être nécessaires.",
        },
      ];

  const seronoMilestones = en
    ? [
        {
          year: "1906",
          text: "Serono is founded in Rome as a small pharmacological institute. Its earliest work focuses on extracts used in anaemia therapies.",
        },
        {
          year: "1935",
          text: "Pietro Bertarelli, Ernesto and Dona's grandfather, is appointed managing director. A family's connection to the company begins — one that will span three generations.",
        },
        {
          year: "1965",
          text: "His son Fabio Bertarelli takes the helm. He pioneers fertility treatments based on hormone research and, in the 1970s, moves the company to Geneva.",
        },
        {
          year: "1996",
          text: "Ernesto Bertarelli becomes chief executive. He steers the company from classical pharmaceuticals into biotechnology, and it rises to become one of the three largest biotechnology companies in the world.",
        },
        {
          year: "2006 · 2007",
          text: "The family agrees to sell Serono to the German group Merck KGaA. The agreement, signed in September 2006 and closed in January 2007, values the company at CHF 16.6 billion — one of the largest transactions in European biotechnology at the time. The business continues today as Merck Serono, headquartered in Geneva.",
        },
      ]
    : [
        {
          year: "1906",
          text: "Serono est fondée à Rome comme un petit institut médico-pharmacologique. Ses premiers travaux portent sur des extraits utilisés dans les traitements de l'anémie.",
        },
        {
          year: "1935",
          text: "Pietro Bertarelli, grand-père d'Ernesto et de Dona, est nommé directeur général. Commence alors le lien d'une famille avec cette société — un lien qui traversera trois générations.",
        },
        {
          year: "1965",
          text: "Son fils Fabio Bertarelli prend la direction. Il est pionnier des traitements de la fertilité issus de la recherche sur les hormones et, dans les années 1970, transfère la société à Genève.",
        },
        {
          year: "1996",
          text: "Ernesto Bertarelli devient directeur général. Il oriente la société de la pharmacie classique vers la biotechnologie, et elle devient l'une des trois plus grandes entreprises de biotechnologie au monde.",
        },
        {
          year: "2006 · 2007",
          text: "La famille accepte de vendre Serono au groupe allemand Merck KGaA. L'accord, signé en septembre 2006 et conclu en janvier 2007, valorise la société à 16,6 milliards de francs suisses — l'une des plus grandes opérations de la biotechnologie européenne à l'époque. L'activité continue aujourd'hui sous le nom de Merck Serono, dont le siège reste à Genève.",
        },
      ];

  const milestones = en
    ? [
        {
          year: "1998",
          text: "On the death of their father, Ernesto and his sister Dona inherit the family's stake in Serono.",
        },
        {
          year: "2003 · 2007",
          text: "With Alinghi, the team he founded in 2000, he wins the America's Cup twice — first for Europe in its 152-year history, then successfully defends the title in Valencia.",
        },
        {
          year: "2008",
          text: "He founds Campus Holding SA in Geneva: a private office to structure the family's interests for the long term.",
        },
      ]
    : [
        {
          year: "1998",
          text: "Au décès de leur père, Ernesto et sa sœur Dona héritent de la participation familiale dans Serono.",
        },
        {
          year: "2003 · 2007",
          text: "Avec Alinghi, l'équipe qu'il fonde en 2000, il remporte deux fois la Coupe de l'America — la première victoire européenne de l'histoire de la compétition, puis il conserve le titre à Valence.",
        },
        {
          year: "2008",
          text: "Il crée Campus Holding SA à Genève : un office privé pour structurer les intérêts de la famille sur le long terme.",
        },
      ];

  return (
    <main>
      <PageHero
        image={lakeMorges.url}
        label={en ? "About" : "À Propos"}
        title={
          en ? (
            <>
              Founded in Geneva,
              <br />
              in 2008.
            </>
          ) : (
            <>
              Fondée à Genève,
              <br />
              en 2008.
            </>
          )
        }
        intro={
          en
            ? "Campus Holding SA is a private Swiss family office. For eighteen years, its sole purpose has been the stewardship of one family's interests — nothing more, and deliberately nothing public."
            : "Campus Holding SA est un family office privé suisse. Depuis dix-huit ans, son unique raison d'être est la gestion des intérêts d'une seule famille — rien de plus, et volontairement rien de public."
        }
      />

      {/* ————— WHAT WE DO ————— */}
      <section className="mx-auto w-full max-w-7xl px-6 py-16 md:py-20 lg:px-10">
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-3">
            <p className="label-caps text-accent">
              {en ? "What the company does" : "Ce que fait la société"}
            </p>
          </Reveal>
          <div className="md:col-span-9">
            <Reveal>
              <h2 className="max-w-2xl font-serif text-3xl font-medium leading-tight md:text-4xl">
                {en
                  ? "One family. One office. A single mandate, held since 2008."
                  : "Une famille. Un office. Un mandat unique, porté depuis 2008."}
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              {purposes.map((p, i) => (
                <Reveal key={p.title} delay={i * 60}>
                  <p className="label-caps text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-serif text-xl">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                    {p.text}
                  </p>
                  <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
                    {p.sub}
                  </p>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-10">
              <p className="max-w-2xl border-l-2 border-accent/50 pl-5 text-sm leading-relaxed text-foreground/70">
                {en
                  ? "The office does not offer services to the public, does not manage third-party assets and does not solicit investments. It is not a bank, not a fund and not an adviser."
                  : "L'office n'offre pas de services au public, ne gère pas d'actifs tiers et ne sollicite pas d'investissements. Ce n'est ni une banque, ni un fonds, ni un conseil."}
              </p>
            </Reveal>
          </div>
        </div>

        {/* markers strip */}
        <Reveal className="mt-12">
          <div className="grid grid-cols-2 gap-y-8 border-y border-border py-8 sm:grid-cols-4">
            {markers.map((m) => (
              <div key={m.label} className="text-center sm:text-left">
                <p className="font-serif text-3xl text-accent md:text-4xl">
                  {m.value}
                </p>
                <p className="label-caps mt-2 text-xs text-muted-foreground">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ————— THE OFFICE, IN SHORT — ink blue band ————— */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto w-full max-w-6xl px-6 py-14 md:py-20 lg:px-8">
          <Reveal>
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
                  {en ? "The Office, in Short" : "L'Office, En Bref"}
                </h2>
                <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.15em] text-primary-foreground/50">
                  {en ? "L'office, en bref" : "The office, in short"}
                </p>
              </div>
              <p className="max-w-xs text-sm font-light leading-relaxed text-primary-foreground/60 md:text-right">
                {en
                  ? "Eighteen years, one mandate. What it means, reduced to three sentences."
                  : "Dix-huit ans, un mandat. Ce que cela signifie, réduit à trois phrases."}
              </p>
            </div>
          </Reveal>
          <div className="grid gap-10 border-t border-primary-foreground/15 pt-12 md:grid-cols-3">
            {(en
              ? [
                  {
                    title: "One family",
                    text: "The office serves a single beneficiary family. There is no client list, and there never will be one.",
                  },
                  {
                    title: "One mandate",
                    text: "Everything the office does falls under a single mandate: steward the family's interests for the long term.",
                  },
                  {
                    title: "No clock",
                    text: "No deadlines owed to outside investors, no exit horizon. Time is treated as an ally, not a pressure.",
                  },
                ]
              : [
                  {
                    title: "Une seule famille",
                    text: "L'office sert une seule famille bénéficiaire. Il n'y a pas de clientèle, et il n'y en aura jamais.",
                  },
                  {
                    title: "Un seul mandat",
                    text: "Tout ce que fait l'office relève d'un mandat unique : gérer les intérêts de la famille sur le long terme.",
                  },
                  {
                    title: "Aucune horloge",
                    text: "Aucune échéance envers des investisseurs tiers, aucun horizon de sortie. Le temps est un allié, non une pression.",
                  },
                ]
            ).map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="border-l border-primary-foreground/15 pl-6">
                  <span className="block h-px w-8 bg-accent/60" aria-hidden />
                  <h3 className="mt-6 font-serif text-xl font-light text-primary-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-primary-foreground/70">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ————— SERONO ————— */}
      <section className="border-t border-border">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 md:py-20 lg:px-10">
          <div className="grid gap-10 md:grid-cols-12">
            <Reveal className="md:col-span-4">
              <p className="label-caps text-accent">
                {en ? "Before the office" : "Avant l'office"}
              </p>
              <h2 className="mt-5 font-serif text-3xl font-medium leading-tight md:text-4xl">
                Serono
                <br />
                <span className="text-foreground/60">1906 – 2007</span>
              </h2>
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-foreground/70">
                {en
                  ? "A century of life sciences, carried by one family over three generations — from a small Roman institute to one of the world's leading biotechnology companies."
                  : "Un siècle de sciences du vivant, porté par une même famille sur trois générations — d'un petit institut romain à l'une des grandes entreprises de biotechnologie mondiales."}
              </p>
            </Reveal>
            <div className="md:col-span-8">
              <Reveal>
                <div className="max-w-2xl space-y-5 text-base leading-relaxed text-foreground/80">
                  <p>
                    {en
                      ? "Serono began in Rome in 1906 as a modest pharmacological institute. Over the decades it became a pioneer of hormonal and fertility medicine, and under the Bertarelli family it grew into a global biotechnology group employing thousands of people and developing treatments in fertility, multiple sclerosis, growth and oncology."
                      : "Serono naît à Rome en 1906 comme un modeste institut médico-pharmacologique. Au fil des décennies, elle devient pionnière de la médecine hormonale et de la fertilité, et, sous l'impulsion de la famille Bertarelli, se développe en un groupe mondial de biotechnologie employant des milliers de personnes et développant des traitements en fertilité, sclérose en plaques, croissance et oncologie."}
                  </p>
                  <p>
                    {en
                      ? "By the 2000s, three generations had carried the company from Rome to Geneva and onto the New York Stock Exchange. In 2006, the family concluded that the next chapter of Serono belonged with a larger industrial group — and chose Merck KGaA, a German family company whose own history also spans generations."
                      : "Au début des années 2000, trois générations ont porté la société de Rome à Genève et jusqu'à la Bourse de New York. En 2006, la famille conclut que le prochain chapitre de Serono appartenait à un groupe industriel plus large — et choisit Merck KGaA, une entreprise familiale allemande dont l'histoire traverse, elle aussi, plusieurs générations."}
                  </p>
                  <p>
                    {en
                      ? "Serono's story is not recalled for its size alone. It taught the family how a company is built over decades, how it is handed over between generations — and what it means, when the time comes, to let go of something one has carried. Those lessons are the quiet foundation of the office created in 2008."
                      : "L'histoire de Serono n'est pas rappelée pour sa seule taille. Elle a appris à la famille comment une société se construit sur des décennies, comment elle se transmet entre générations — et ce que signifie, le moment venu, laisser partir ce que l'on a porté. Ces leçons sont le fondement discret de l'office créé en 2008."}
                  </p>
                </div>
              </Reveal>

              <div className="mt-10 border-t border-border">
                {seronoMilestones.map((m) => (
                  <Reveal key={m.year}>
                    <div className="grid grid-cols-1 gap-2 border-b border-border py-5 sm:grid-cols-12 sm:gap-6">
                      <p className="font-serif text-lg text-accent sm:col-span-3">
                        {m.year}
                      </p>
                      <p className="text-sm leading-relaxed text-foreground/75 sm:col-span-9">
                        {m.text}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal className="mt-8">
                <p className="max-w-2xl border-l-2 border-accent/50 pl-5 text-sm leading-relaxed text-foreground/70">
                  {en
                    ? "The sale of Serono in 2007 is what made the creation of Campus Holding SA possible the following year — the proceeds became the family capital the office has stewarded ever since."
                    : "La vente de Serono en 2007 est ce qui a rendu possible, l'année suivante, la création de Campus Holding SA — le produit de cette vente est devenu le capital familial que l'office gère depuis."}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ————— THE FOUNDER ————— */}
      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 md:py-20 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-5">
              <div className="overflow-hidden">
                <img
                  src={ernesto.url}
                  alt={en ? "Ernesto Bertarelli" : "Ernesto Bertarelli"}
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                  width={1280}
                  height={960}
                />
              </div>
              <p className="label-caps mt-4 text-xs text-muted-foreground">
                {en ? "Ernesto Bertarelli — Founder" : "Ernesto Bertarelli — Fondateur"}
              </p>
            </Reveal>
            <div className="lg:col-span-7">
              <Reveal>
                <p className="label-caps text-accent">
                  {en ? "The founder" : "Le fondateur"}
                </p>
                <h2 className="mt-5 font-serif text-3xl font-medium leading-tight md:text-4xl">
                  {en
                    ? "An entrepreneur's inheritance, turned into an institution."
                    : "Un héritage d'entrepreneur, devenu une institution."}
                </h2>
                <div className="mt-6 max-w-2xl space-y-5 text-base leading-relaxed text-foreground/80">
                  <p>
                    {en
                      ? "Ernesto Bertarelli grew up in a family deeply rooted in the life sciences. Serono, developed by three generations of the Bertarelli family, became the setting for his own leadership: from 1996, he guided the company's transformation into a global biotechnology leader, before its acquisition by Merck KGaA was completed in 2007."
                      : "Ernesto Bertarelli a grandi dans une famille profondément ancrée dans les sciences du vivant. Serono, développée par trois générations de la famille Bertarelli, est devenue le cadre de son propre engagement : dès 1996, il guide la transformation de l'entreprise en leader mondial de la biotechnologie, avant la finalisation de son acquisition par Merck KGaA en 2007."}
                  </p>
                  <p>
                    {en
                      ? "Beyond industry, he founded the Alinghi sailing team in 2000 — winner of the America's Cup in 2003 and 2007 — an experience that shaped his conviction that results come from teams, patience and high standards, not shortcuts."
                      : "Au-delà de l'industrie, il fonde en 2000 l'équipe de voile Alinghi — victorieuse de la Coupe de l'America en 2003 et 2007 — une expérience qui a forgé sa conviction : les résultats viennent des équipes, de la patience et de l'exigence, jamais des raccourcis."}
                  </p>
                  <p>
                    {en
                      ? "In 2008, he created Campus Holding SA in Geneva to bring the family's interests under one private structure — built to preserve, govern and transmit, not to be seen."
                      : "En 2008, il crée Campus Holding SA à Genève pour réunir les intérêts de la famille sous une structure privée unique — conçue pour préserver, gouverner et transmettre, non pour être vue."}
                  </p>
                </div>
              </Reveal>

              <div className="mt-10 border-t border-border">
                {milestones.map((m) => (
                  <Reveal key={m.year}>
                    <div className="grid grid-cols-1 gap-2 border-b border-border py-5 sm:grid-cols-12 sm:gap-6">
                      <p className="font-serif text-lg text-accent sm:col-span-3">
                        {m.year}
                      </p>
                      <p className="text-sm leading-relaxed text-foreground/75 sm:col-span-9">
                        {m.text}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal className="mt-8">
                <p className="max-w-2xl text-xs leading-relaxed text-muted-foreground">
                  {en
                    ? "The ventures above belong to the broader Bertarelli family story and are not activities of Campus Holding SA, whose mandate is strictly private."
                    : "Les projets mentionnés ci-dessus appartiennent à l'histoire plus large de la famille Bertarelli et ne sont pas des activités de Campus Holding SA, dont le mandat est strictement privé."}
                </p>
                <div className="mt-5">
                  <ArrowLink to="/family">
                    {en ? "The family's story" : "L'histoire de la famille"}
                  </ArrowLink>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ————— WHAT THE OFFICE HANDLES ————— */}
      <section className="mx-auto w-full max-w-7xl px-6 py-16 md:py-20 lg:px-10">
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="label-caps text-accent">
                {en ? "Scope" : "Périmètre"}
              </p>
              <h2 className="mt-4 font-serif text-3xl font-medium leading-tight md:text-4xl">
                {en ? "What the Office Handles" : "Ce Que Gère l'Office"}
              </h2>
            </div>
            <p className="hidden max-w-xs text-right text-sm font-light leading-relaxed text-muted-foreground md:block">
              {en
                ? "Six responsibilities, all internal — none of them is a service offered to anyone else."
                : "Six responsabilités, toutes internes — aucune n'est un service offert à qui d'autre."}
            </p>
          </div>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 border-l border-t border-accent/20 md:grid-cols-2 lg:grid-cols-3">
          {(en
            ? [
                {
                  title: "Holdings & governance",
                  text: "The ownership structures, holding companies and board mandates through which the family's interests are held — kept aligned, documented and current.",
                },
                {
                  title: "Investments",
                  text: "A concentrated portfolio of companies and projects, held directly, financed without leverage and reviewed with patience rather than frequency.",
                },
                {
                  title: "Real assets",
                  text: "Property and tangible assets owned by the family, managed with the same horizon as the operating businesses.",
                },
                {
                  title: "Philanthropy",
                  text: "The family's charitable commitments — structured, funded and supported over time, without seeking visibility.",
                },
                {
                  title: "The next generation",
                  text: "Preparing the transmission of assets, responsibilities and values, so that what was built continues beyond its founders.",
                },
                {
                  title: "The office itself",
                  text: "Its people, its procedures and its independence — deliberately small, permanently discreet.",
                },
              ]
            : [
                {
                  title: "Participations & gouvernance",
                  text: "Les structures de détention, sociétés holding et mandats d'administration par lesquels les intérêts de la famille sont portés — alignés, documentés et tenus à jour.",
                },
                {
                  title: "Investissements",
                  text: "Un portefeuille concentré de sociétés et de projets, détenu en direct, financé sans levier et suivi avec patience plutôt qu'avec fréquence.",
                },
                {
                  title: "Actifs réels",
                  text: "Les immeubles et actifs tangibles détenus par la famille, gérés avec le même horizon que les sociétés opérationnelles.",
                },
                {
                  title: "Philanthropie",
                  text: "Les engagements caritatifs de la famille — structurés, financés et soutenus dans la durée, sans recherche de visibilité.",
                },
                {
                  title: "La génération suivante",
                  text: "Préparer la transmission des actifs, des responsabilités et des valeurs, afin que ce qui a été construit perdure au-delà de ses fondateurs.",
                },
                {
                  title: "L'office lui-même",
                  text: "Ses collaborateurs, ses procédures et son indépendance — volontairement restreint, discrètement permanent.",
                },
              ]
          ).map((d, i) => (
            <Reveal key={d.title} delay={(i % 3) * 80}>
              <div className="h-full border-b border-r border-accent/20 p-8 transition-colors duration-500 hover:bg-card md:p-10">
                <span className="text-[10px] font-medium tracking-widest text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-serif text-xl font-light leading-snug">
                  {d.title}
                </h3>
                <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
                  {d.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ————— ONE FAMILY, ONE MANDATE ————— */}
      <section className="border-t border-border">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 md:py-20 lg:px-10">
          <div className="grid gap-10 md:grid-cols-12">
            <Reveal className="md:col-span-5">
              <h2 className="font-serif text-3xl font-medium leading-tight md:text-4xl">
                {en
                  ? "One family, one mandate — for as long as it takes."
                  : "Une famille, un mandat — pour le temps qu'il faudra."}
              </h2>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-foreground/70">
                {en
                  ? "Campus Holding SA was registered in Geneva in 2008 and has served the same family ever since. There is no client list, no products and nothing to subscribe to. The office exists so that decisions about the family's assets are taken calmly, close to the family, and with no clock other than its own."
                  : "Campus Holding SA est inscrite à Genève depuis 2008 et sert depuis la même famille. Il n'y a ni clientèle, ni produits, ni rien à souscrire. L'office existe pour que les décisions concernant le patrimoine familial soient prises avec calme, près de la famille, et sans autre horloge que la sienne."}
              </p>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-foreground/70">
                {en
                  ? "The company is a société anonyme under Swiss law, wholly held by the family. Its legal details — registered office, commercial register and identification numbers — are published on the Legal Notice page."
                  : "La société est une société anonyme de droit suisse, détenue par la famille. Ses mentions légales — siège, registre du commerce et numéros d'identification — sont publiées sur la page Mentions Légales."}
              </p>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-foreground/70">
                {en
                  ? "Nothing here is improvised. Mandates, delegations and decision paths are written down; meetings are few and short; and what matters is discussed directly within the family. The office's size — a handful of people — is a choice, not a constraint: it keeps judgement close and information closer."
                  : "Rien n'est improvisé ici. Mandats, délégations et circuits de décision sont écrits ; les réunions sont rares et courtes ; ce qui compte se discute directement au sein de la famille. La taille de l'office — une poignée de personnes — est un choix, non une contrainte : elle garde le jugement proche et l'information plus près encore."}
              </p>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                <ArrowLink to="/legal-notice">
                  {en ? "Legal Notice" : "Mentions Légales"}
                </ArrowLink>
                <ArrowLink to="/contact">
                  {en ? "Write to us" : "Nous écrire"}
                </ArrowLink>
              </div>
            </Reveal>
            <Reveal delay={80} className="md:col-span-7">
              <div className="border-t border-border">
                {[
                  en
                    ? "Wholly family-held — no partners, no outside capital, no co-investors."
                    : "Détenue entièrement par la famille — aucun associé, aucun capital extérieur, aucun co-investisseur.",
                  en
                    ? "One beneficiary family — decisions are taken with it, not for a market."
                    : "Une seule famille bénéficiaire — les décisions se prennent avec elle, non pour un marché.",
                  en
                    ? "A small, permanent team — the same people, year after year."
                    : "Une équipe restreinte et permanente — les mêmes personnes, année après année.",
                  en
                    ? "Discretion by default — the office speaks about its work to almost no one, including within its own industry."
                    : "Discrétion par défaut — l'office ne parle de son travail à presque personne, y compris dans son propre milieu.",
                  en
                    ? "Long holding periods — assets are kept for decades; selling is the exception, not the rhythm."
                    : "Durées de détention longues — les actifs sont gardés des décennies ; vendre est l'exception, non le rythme.",
                  en
                    ? "Registered in Geneva since 2008 — eighteen years of continuous stewardship."
                    : "Inscrite à Genève depuis 2008 — dix-huit ans de gestion continue.",
                ].map((line, i) => (
                  <div
                    key={i}
                    className="flex items-baseline gap-6 border-b border-border py-5"
                  >
                    <span className="font-serif text-sm text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm leading-relaxed text-foreground/80">
                      {line}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ————— LOCATION ————— */}
      <section className="border-t border-border">
        <div className="grid min-h-[60vh] lg:grid-cols-2">
          <div className="relative min-h-[40vh]">
            <img
              src={lakeArzier.url}
              alt={en ? "Lake Geneva seen from the heights" : "Le Léman vu depuis les hauteurs"}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              width={1600}
              height={1200}
            />
          </div>
          <div className="flex items-center bg-secondary/40">
            <div className="px-6 py-16 lg:px-16 lg:py-20">
              <Reveal>
                <p className="label-caps text-accent">
                  {en ? "Location" : "Localisation"}
                </p>
                <h2 className="mt-5 font-serif text-4xl font-medium leading-tight md:text-5xl">
                  {en ? "Geneva" : "Genève"}
                  <br />
                  Switzerland
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-foreground/75">
                  Avenue Giuseppe-Motta 31-33
                  <br />
                  1202 Genève
                </p>
                <p className="mt-5 max-w-sm text-sm leading-relaxed text-foreground/60">
                  {en
                    ? "A small team works from the head office, coordinating the family's investments, governance and philanthropic activities."
                    : "Une équipe restreinte travaille depuis le siège, coordonnant les investissements, la gouvernance et les activités philanthropiques de la famille."}
                </p>
                <p className="mt-4 max-w-sm text-sm font-light leading-relaxed text-foreground/60">
                  {en
                    ? "Geneva was chosen as the office's home for good reasons: its stability, its international character and its long tradition of private institutions — and because the family's history in the city goes back to the 1970s, when Serono moved its headquarters here."
                    : "Genève a été choisie comme siège pour de bonnes raisons : sa stabilité, son caractère international et sa longue tradition d'institutions privées — et parce que l'histoire de la famille dans la ville remonte aux années 1970, lorsque Serono y a transféré son siège."}
                </p>
                <div className="mt-8">
                  <ArrowLink to="/contact">
                    {en ? "Contact" : "Contact"}
                  </ArrowLink>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
