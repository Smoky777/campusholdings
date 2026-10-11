import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import heroLake from "@/assets/hero-lake.jpg";
import laboratory from "@/assets/laboratory.jpg";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/responsibility")({
  component: Responsibility,
  head: () => ({
    meta: [
      {
        title: "Responsibility | Campus Holding — Private Family Office, Geneva",
      },
      {
        name: "description",
        content:
          "Looking beyond generations. Philanthropy, science and research, environment, communities and responsible ownership.",
      },
      {
        property: "og:title",
        content:
          "Responsibility | Campus Holding — Private Family Office, Geneva",
      },
      {
        property: "og:description",
        content:
          "Looking beyond generations — philanthropy, science, environment, communities and responsible ownership.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Responsibility() {
  const { lang } = useLang();
  const en = lang === "en";

  const commitments = en
    ? [
        {
          title: "Philanthropy",
          alt: "Philanthropie",
          text: "Supporting philanthropic initiatives close to the family's values, with the same discretion applied to all of its activities.",
          detail:
            "The family gives quietly. Causes are chosen for their substance, not their visibility — a cause is supported because it matters, not because it photographs well. Support is sustained over years rather than announced once, and the family does not seek recognition for what it gives.",
        },
        {
          title: "Science & Research",
          alt: "Science & Recherche",
          text: "Encouraging scientific research and innovation, in particular in the life sciences.",
          detail:
            "Research takes time — often more time than markets allow. The family has lived this from the inside, across three generations in the life sciences, and it backs work whose results may only be measured in decades. Patience, here, is not a constraint. It is the point.",
        },
        {
          title: "Environment",
          alt: "Environnement",
          text: "Contributing to the conservation of natural environments and to a responsible relationship with nature.",
          detail:
            "From the lake to the mountains, the landscapes that shaped the family are treated as something held in trust, not owned. The lake, the forest, the Alps — these are not assets on a balance sheet. They are what the next generation should find intact.",
        },
        {
          title: "Communities",
          alt: "Communautés",
          text: "Supporting social initiatives in the communities where the family lives and operates.",
          detail:
            "Geneva is home. Commitments here are local, personal and long-standing — built on relationships rather than programmes, and on people whose names never appear in a press release. Where the family's companies operate, the same care applies to the people around them.",
        },
        {
          title: "Responsible Ownership",
          alt: "Propriété responsable",
          text: "Exercising ownership responsibly across all holdings, with a long-term perspective.",
          detail:
            "Every company in the portfolio is expected to be run properly: sound governance, fair treatment of people, and decisions that can be defended years later. Ownership is not extraction. It is a duty to leave each company stronger than it was found.",
        },
      ]
    : [
        {
          title: "Philanthropie",
          alt: "Philanthropy",
          text: "Soutenir des initiatives philanthropiques proches des valeurs de la famille, avec la même discrétion appliquée à l'ensemble de ses activités.",
          detail:
            "La famille donne discrètement. Les causes sont choisies pour leur substance, non pour leur visibilité — une cause est soutenue parce qu'elle compte, pas parce qu'elle fait belle image. Le soutien se poursuit pendant des années plutôt que d'être annoncé une fois, et la famille ne cherche pas de reconnaissance pour ce qu'elle donne.",
        },
        {
          title: "Science & Recherche",
          alt: "Science & Research",
          text: "Encourager la recherche scientifique et l'innovation, en particulier dans les sciences du vivant.",
          detail:
            "La recherche prend du temps — souvent plus que les marchés n'en accordent. La famille l'a vécu de l'intérieur, sur trois générations dans les sciences du vivant, et elle soutient des travaux dont les résultats ne se mesurent parfois qu'en décennies. La patience n'est pas ici une contrainte : c'est le principe même.",
        },
        {
          title: "Environnement",
          alt: "Environment",
          text: "Contribuer à la conservation des milieux naturels et à une relation responsable avec la nature.",
          detail:
            "Du lac aux montagnes, les paysages qui ont façonné la famille sont traités comme un bien reçu en dépôt, non comme une propriété. Le lac, la forêt, les Alpes — tout cela ne figure dans aucun bilan. C'est simplement ce que la génération suivante doit retrouver intact.",
        },
        {
          title: "Communautés",
          alt: "Communities",
          text: "Soutenir des initiatives sociales dans les communautés où la famille vit et agit.",
          detail:
            "Genève est chez nous. Les engagements y sont locaux, personnels et anciens — fondés sur des relations plutôt que sur des programmes, et sur des personnes dont les noms n'apparaissent dans aucun communiqué. Là où les sociétés de la famille opèrent, la même attention va aux gens qui les entourent.",
        },
        {
          title: "Propriété responsable",
          alt: "Responsible Ownership",
          text: "Exercer la propriété de manière responsable sur l'ensemble des participations, avec une perspective de long terme.",
          detail:
            "Chaque société du portefeuille doit être dirigée correctement : gouvernance saine, traitement équitable des personnes, et décisions que l'on peut encore défendre des années plus tard. Être propriétaire n'est pas prélever. C'est le devoir de laisser chaque société plus forte qu'on ne l'a trouvée.",
        },
      ];

  const principles = en
    ? [
        {
          title: "Discretion first",
          text: "Commitments are made to be kept, not to be seen. The family does not seek recognition for what it gives, and most of what it supports will never carry its name.",
        },
        {
          title: "Measured in decades",
          text: "Responsibility is not a campaign. It is a posture, held consistently, year after year — through good years and difficult ones alike, without a start date or an end date.",
        },
        {
          title: "Close to what we know",
          text: "The family engages where it understands — science, nature, and the community around it. Understanding a cause deeply is the only way to support it honestly.",
        },
      ]
    : [
        {
          title: "La discrétion d'abord",
          text: "Les engagements sont faits pour être tenus, pas pour être vus. La famille ne cherche pas de reconnaissance pour ce qu'elle donne, et l'essentiel de ce qu'elle soutiendra ne portera jamais son nom.",
        },
        {
          title: "Mesuré en décennies",
          text: "La responsabilité n'est pas une campagne. C'est une posture, maintenue avec constance, année après année — dans les bonnes années comme dans les difficiles, sans date de début ni date de fin.",
        },
        {
          title: "Proche de ce que nous connaissons",
          text: "La famille s'engage là où elle comprend — la science, la nature, et la communauté qui l'entoure. Comprendre une cause en profondeur est la seule manière de la soutenir honnêtement.",
        },
      ];

  const restraint = en
    ? [
        "No annual responsibility report. No sustainability labels. No campaigns.",
        "No foundation announcements, no galas, no naming rights.",
        "No commitments made for the calendar — only ones made for the long run.",
        "No distinction between how the family behaves in public and how its companies are run.",
      ]
    : [
        "Aucun rapport annuel de responsabilité. Aucun label. Aucune campagne.",
        "Aucune annonce de fondation, aucun gala, aucun nom apposé sur une façade.",
        "Aucun engagement pris pour le calendrier — seulement des engagements pris pour durer.",
        "Aucune différence entre la manière dont la famille se conduit en public et la manière dont ses sociétés sont dirigées.",
      ];

  return (
    <main>
      <PageHero
        image={heroLake}
        label={en ? "Responsibility" : "Responsabilité"}
        title={
          en ? (
            <>
              Looking beyond
              <br />
              generations.
            </>
          ) : (
            <>
              Regarder au-delà
              <br />
              des générations.
            </>
          )
        }
        intro={
          en
            ? "Wealth carries responsibility. Our commitments reflect the family's long-standing engagement with science, nature and community."
            : "Le patrimoine porte des responsabilités. Nos engagements reflètent l'engagement de longue date de la famille envers la science, la nature et la communauté."
        }
      />

      {/* ————— OPENING STATEMENT ————— */}
      <section className="mx-auto w-full max-w-7xl px-6 py-16 md:py-20 lg:px-10">
        <div className="grid gap-8 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <div className="h-px w-14 bg-accent" />
            <p className="label-caps mt-6 text-accent">
              {en ? "Our conviction" : "Notre conviction"}
            </p>
          </Reveal>
          <Reveal delay={120} className="md:col-span-8">
            <h2 className="font-serif text-3xl font-medium leading-snug md:text-4xl">
              {en
                ? "What a family keeps is not measured only in assets. It is measured in what it leaves standing."
                : "Ce qu'une famille garde ne se mesure pas seulement en actifs. Cela se mesure à ce qu'elle laisse debout."}
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <p className="text-base leading-relaxed text-muted-foreground">
                {en
                  ? "Responsibility at Campus Holding is not a separate activity, reported once a year. It runs through the way the family invests, the way its companies are governed, and the way it engages with the world around it."
                  : "La responsabilité chez Campus Holding n'est pas une activité à part, relatée une fois par an. Elle traverse la façon dont la famille investit, dont ses sociétés sont gouvernées, et dont elle s'engage avec le monde qui l'entoure."}
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                {en
                  ? "The family's commitments long predate the company itself. When Campus Holding was founded in Geneva in 2008, this posture was simply carried into it — quietly, without a strategy document, because it had never been anything else."
                  : "Les engagements de la famille précèdent largement la société elle-même. Lorsque Campus Holding a été fondée à Genève en 2008, cette posture a simplement été poursuivie — sans document de stratégie, parce qu'elle n'a jamais été autre chose."}
              </p>
            </div>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground/80">
              {en
                ? "Five commitments structure this posture. None of them is new. None of them was designed."
                : "Cinq engagements structurent cette posture. Aucun n'est nouveau. Aucun n'a été conçu."}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ————— FIVE COMMITMENTS ————— */}
      <section className="border-t border-border">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 md:py-20 lg:px-10">
          <Reveal>
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <p className="label-caps text-accent">
                {en ? "Five commitments" : "Cinq engagements"}
              </p>
              <p className="text-sm text-muted-foreground/70">
                {en
                  ? "Held since long before they were written down."
                  : "Tenus bien avant d'avoir été écrits."}
              </p>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {commitments.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 100}>
                <div className="flex h-full flex-col bg-background p-7 md:p-8">
                  <div className="flex items-baseline justify-between">
                    <span className="font-serif text-sm text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xs text-muted-foreground/60">
                      {s.alt}
                    </span>
                  </div>
                  <h3 className="mt-5 font-serif text-2xl font-medium leading-tight">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm font-medium leading-relaxed">
                    {s.text}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {s.detail}
                  </p>
                </div>
              </Reveal>
            ))}
            {/* closing cell */}
            <Reveal delay={200}>
              <div className="flex h-full flex-col justify-between bg-primary p-7 text-primary-foreground md:p-8">
                <p className="font-serif text-2xl font-medium leading-snug">
                  {en
                    ? "None of this is new. It has simply always been done this way."
                    : "Rien de tout cela n'est nouveau. Cela a simplement toujours été fait ainsi."}
                </p>
                <p className="mt-8 text-xs text-primary-foreground/60">
                  Campus Holding SA — {en ? "Geneva, since 2008" : "Genève, depuis 2008"}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ————— IMAGE INTERLUDE ————— */}
      <section className="relative overflow-hidden">
        <img
          src={laboratory}
          alt={en ? "Scientific research" : "Recherche scientifique"}
          className="h-[50vh] w-full object-cover"
          loading="lazy"
          width={1600}
          height={1200}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
        <div className="absolute bottom-10 left-0 w-full">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
            <Reveal>
              <p className="label-caps text-foreground/80">
                {en ? "Science & Innovation" : "Science & Innovation"}
              </p>
              <p className="mt-3 max-w-xl font-serif text-2xl font-medium leading-snug md:text-3xl">
                {en
                  ? "Supporting research that outlasts us."
                  : "Soutenir une recherche qui nous survivra."}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ————— WHAT WE DO NOT DO ————— */}
      <section className="border-b border-border bg-secondary/30">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 md:py-20 lg:px-10">
          <div className="grid gap-8 md:grid-cols-12">
            <Reveal className="md:col-span-4">
              <div className="h-px w-14 bg-accent" />
              <p className="label-caps mt-6 text-accent">
                {en ? "What we choose not to do" : "Ce que nous choisissons de ne pas faire"}
              </p>
              <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {en
                  ? "Restraint is part of the posture. A few things, deliberately, never happen here."
                  : "La retenue fait partie de la posture. Certaines choses, délibérément, n'arrivent jamais ici."}
              </p>
            </Reveal>
            <Reveal delay={120} className="md:col-span-8">
              <ul className="divide-y divide-border border-y border-border">
                {restraint.map((r) => (
                  <li
                    key={r}
                    className="flex items-baseline gap-4 py-4 text-sm leading-relaxed md:text-base"
                  >
                    <span className="font-serif text-sm text-accent">—</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ————— HOW WE APPROACH IT ————— */}
      <section className="border-b border-border">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 md:py-20 lg:px-10">
          <Reveal>
            <p className="label-caps text-accent">
              {en ? "How we approach it" : "Notre manière de faire"}
            </p>
          </Reveal>
          <div className="mt-10 grid gap-x-16 gap-y-10 md:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 120}>
                <div className="border-t border-foreground/20 pt-6">
                  <h3 className="font-serif text-xl font-medium leading-snug">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ————— CLOSING ————— */}
      <section className="mx-auto w-full max-w-7xl px-6 py-16 md:py-20 lg:px-10">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto h-px w-14 bg-accent" />
            <p className="mt-8 font-serif text-2xl font-medium leading-snug md:text-3xl">
              {en
                ? "Responsibility is not what we say. It is what remains when we are no longer in the room."
                : "La responsabilité n'est pas ce que nous disons. C'est ce qui reste lorsque nous ne sommes plus dans la pièce."}
            </p>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              {en
                ? "If these words resonate with your own work — a research project, a conservation effort, a local initiative — you are welcome to write to us."
                : "Si ces mots résonnent avec votre propre travail — un projet de recherche, un effort de conservation, une initiative locale — vous pouvez nous écrire."}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
              <Link
                to="/family"
                className="story-link text-foreground"
              >
                {en ? "Our family" : "Notre famille"}
              </Link>
              <Link
                to="/contact"
                className="story-link text-muted-foreground"
              >
                {en ? "Write to us" : "Nous écrire"}
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
