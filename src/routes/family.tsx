import { createFileRoute } from "@tanstack/react-router";
import geneva from "@/assets/geneva.jpg";
import alinghiPhoto from "@/assets/alinghi-valencia.asset.json";
import sailingPhoto from "@/assets/sailing-quiet.asset.json";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ArrowLink } from "@/components/ArrowLink";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/family")({
  component: Family,
  head: () => ({
    meta: [
      { title: "Our Family & Alinghi | Campus Holding — Geneva" },
      {
        name: "description",
        content:
          "Discover the entrepreneurial story of Ernesto Bertarelli: Serono, Alinghi's two America's Cup victories and a family commitment to science and the sea.",
      },
      { property: "og:title", content: "Our Family & Alinghi | Campus Holding — Geneva" },
      {
        property: "og:description",
        content: "The story of Ernesto Bertarelli, Alinghi and a family heritage of entrepreneurship, sailing and science.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Family() {
  const { lang } = useLang();
  const en = lang === "en";

  const timeline = en
    ? [
        { year: "1996", title: "A new chapter at Serono", text: "Ernesto Bertarelli becomes CEO of Serono, the life-sciences company developed over three generations of his family. He guides its development into a biotechnology leader." },
        { year: "2000", title: "Alinghi takes shape", text: "He brings together a sailing team to compete for the America's Cup under the colours of the Société Nautique de Genève." },
        { year: "2003", title: "A historic first", text: "Alinghi wins the America's Cup in Auckland, becoming the first European team to win the competition." },
        { year: "2007", title: "The title defended", text: "Alinghi successfully defends the America's Cup in Valencia. The same year marks the completion of Serono's sale to Merck KGaA." },
        { year: "2008", title: "Campus Holding SA is founded", text: "The family establishes Campus Holding SA in Geneva — its private family office, created eighteen years ago to preserve and pass on what has been built." },
      ]
    : [
        { year: "1996", title: "Un nouveau chapitre chez Serono", text: "Ernesto Bertarelli devient directeur général de Serono, une entreprise de sciences du vivant développée par trois générations de sa famille. Il accompagne son développement dans la biotechnologie." },
        { year: "2000", title: "Naissance d'Alinghi", text: "Il réunit une équipe de voile pour disputer la Coupe de l'America sous les couleurs de la Société Nautique de Genève." },
        { year: "2003", title: "Une première historique", text: "Alinghi remporte la Coupe de l'America à Auckland et devient la première équipe européenne à gagner la compétition." },
        { year: "2007", title: "Le titre conservé", text: "Alinghi conserve la Coupe de l'America à Valence. Cette année marque également la finalisation de la vente de Serono à Merck KGaA." },
        { year: "2008", title: "Création de Campus Holding SA", text: "La famille crée Campus Holding SA à Genève — son family office privé, fondé il y a dix-huit ans pour préserver et transmettre ce qui a été construit." },
      ];

  const values = en
    ? [
        { title: "Entrepreneurship", text: "Turning ideas into lasting initiatives." },
        { title: "Collective spirit", text: "Bringing different talents together around a shared ambition." },
        { title: "Responsibility", text: "Looking beyond the immediate result." },
        { title: "Independence", text: "Keeping the freedom to think for the long term." },
        { title: "Continuity", text: "Passing on more than an enterprise." },
      ]
    : [
        { title: "Entrepreneuriat", text: "Transformer des idées en projets durables." },
        { title: "Esprit d'équipe", text: "Réunir des talents différents autour d'une ambition commune." },
        { title: "Responsabilité", text: "Regarder au-delà du résultat immédiat." },
        { title: "Indépendance", text: "Garder la liberté de penser à long terme." },
        { title: "Continuité", text: "Transmettre plus qu'une entreprise." },
      ];

  const mandates = en
    ? [
        { title: "Unity", text: "One house for the family's affairs: a single point of stability, owned by the family alone." },
        { title: "Long term", text: "Decisions are taken on a horizon measured in generations, free from outside pressure." },
        { title: "Governance", text: "Written principles for how decisions are prepared, taken and passed on — so continuity never rests on one person." },
        { title: "Preservation", text: "Protecting what exists comes before pursuing what is new." },
        { title: "Discretion", text: "A private institution by design. Its work is quiet, and it stays that way." },
        { title: "Transmission", text: "Preparing the next generation to carry both the assets and the responsibilities that come with them." },
      ]
    : [
        { title: "L'unité", text: "Une seule maison pour les affaires de la famille : un point d'équilibre stable, détenu par la seule famille." },
        { title: "Le long terme", text: "Les décisions se prennent sur un horizon qui se mesure en générations, à l'abri des pressions extérieures." },
        { title: "La gouvernance", text: "Des principes écrits pour préparer, prendre et transmettre les décisions — afin que la continuité ne repose jamais sur une seule personne." },
        { title: "La préservation", text: "Protéger ce qui existe avant de poursuivre ce qui est nouveau." },
        { title: "La discrétion", text: "Une institution privée par construction. Son travail est discret, et le reste." },
        { title: "La transmission", text: "Préparer la génération suivante à porter à la fois les actifs et les responsabilités qui les accompagnent." },
      ];

  return (
    <main>
      <PageHero
        image={geneva}
        label={en ? "Our Family" : "Notre Famille"}
        title={en ? <>A story of people,<br />ideas and conviction.</> : <>Une histoire de rencontres,<br />d'idées et de conviction.</>}
        intro={en
          ? "From life sciences in Geneva to the open sea, the Bertarelli family's story is one of enterprise, teamwork and a lasting sense of responsibility."
          : "Des sciences du vivant à Genève jusqu'au large, l'histoire de la famille Bertarelli est faite d'entrepreneuriat, d'esprit d'équipe et de responsabilité."}
      >
        <div className="mt-10 flex justify-end">
          <p className="label-caps text-primary-foreground/70">{en ? "Lake Geneva · Geneva" : "Lac Léman · Genève"}</p>
        </div>
      </PageHero>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-32 lg:px-10">
        <Reveal className="grid gap-10 border-b border-border pb-16 md:grid-cols-12 md:gap-16 md:pb-24">
          <p className="label-caps text-accent md:col-span-3">{en ? "The beginning" : "Aux origines"}</p>
          <div className="md:col-span-9">
            <h2 className="max-w-4xl font-serif text-4xl leading-[1.13] md:text-5xl lg:text-6xl">
              {en ? "An entrepreneurial heritage, shaped in Geneva." : "Un héritage entrepreneurial, ancré à Genève."}
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
              {en
                ? "Ernesto Bertarelli grew up within a family closely connected to the life sciences. Serono, developed by three generations of the family, became the setting for a new generation of leadership: he took the helm in 1996 and helped lead its transformation into a global biotechnology company."
                : "Ernesto Bertarelli a grandi dans une famille étroitement liée aux sciences du vivant. Serono, développée par trois générations de la famille, a ouvert la voie à une nouvelle génération : il en prend la direction en 1996 et contribue à en faire une entreprise mondiale de biotechnologie."}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
              {en
                ? "That experience — building teams, backing research and thinking beyond a single generation — informs the family's outlook today. Campus Holding SA is the family's private office; the ventures described here are part of the broader Bertarelli family story, not activities of Campus Holding SA."
                : "Cette expérience — fédérer des équipes, soutenir la recherche et voir au-delà d'une génération — éclaire encore la vision familiale. Campus Holding SA est le family office privé de la famille ; les projets présentés ici appartiennent à l'histoire plus large des Bertarelli et ne sont pas des activités de Campus Holding SA."}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 pt-16 md:grid-cols-12 md:items-end md:gap-12 md:pt-24">
          <Reveal className="md:col-span-7">
            <div className="aspect-[4/3] overflow-hidden bg-muted md:aspect-[5/4]">
              <img src={sailingPhoto.url} alt={en ? "A sailboat on still water" : "Voilier sur une eau calme"} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <p className="label-caps mt-3 text-muted-foreground">{en ? "On the water · An enduring connection" : "Sur l'eau · Un lien durable"}</p>
          </Reveal>
          <Reveal className="md:col-span-5 md:pb-8">
            <p className="label-caps text-accent">{en ? "Beyond business" : "Au-delà de l'entreprise"}</p>
            <h2 className="mt-5 font-serif text-3xl leading-tight md:text-4xl lg:text-5xl">
              {en ? "The same spirit, a different horizon." : "Le même esprit, un autre horizon."}
            </h2>
            <p className="mt-6 max-w-md leading-8 text-muted-foreground">
              {en
                ? "Sailing is another expression of this outlook. On the water, preparation matters, decisions are shared and no victory belongs to one person alone. Those principles gave rise to Alinghi."
                : "La voile exprime autrement cette vision. Sur l'eau, la préparation compte, les décisions se partagent et aucune victoire ne repose sur une seule personne. C'est dans cet esprit qu'est né Alinghi."}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-10">
          <Reveal className="grid gap-8 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-5">
              <p className="label-caps text-accent">{en ? "Alinghi · The sailing story" : "Alinghi · L'aventure de la voile"}</p>
              <h2 className="mt-6 font-serif text-5xl leading-[1.06] md:text-6xl lg:text-7xl">Alinghi.</h2>
              <p className="mt-7 max-w-md text-base leading-8 text-primary-foreground/75">
                {en
                  ? "Created by Ernesto Bertarelli in 2000, Alinghi brought together sailors, designers and engineers to pursue a singular goal: winning the America's Cup. The team raced for the Société Nautique de Genève."
                  : "Créé par Ernesto Bertarelli en 2000, Alinghi a réuni marins, architectes navals et ingénieurs autour d'un objectif commun : remporter la Coupe de l'America. L'équipe représentait la Société Nautique de Genève."}
              </p>
              <p className="mt-5 max-w-md text-base leading-8 text-primary-foreground/75">
                {en
                  ? "It won in Auckland in 2003 — the first European team to do so — then successfully defended the trophy in Valencia in 2007. A Swiss story told on an international stage."
                  : "Elle l'a remportée à Auckland en 2003 — une première pour une équipe européenne — puis a défendu son titre à Valence en 2007. Une histoire suisse portée sur la scène internationale."}
              </p>
            </div>
            <figure className="md:col-span-7">
              <img src={alinghiPhoto.url} alt={en ? "Alinghi sailing team and yacht in Valencia during the 2007 America's Cup" : "Équipage et voilier Alinghi à Valence lors de la Coupe de l'America 2007"} className="aspect-[4/3] w-full object-cover object-center" loading="lazy" />
              <figcaption className="label-caps mt-3 text-primary-foreground/60">{en ? "Alinghi · Valencia, 2007" : "Alinghi · Valence, 2007"}</figcaption>
            </figure>
          </Reveal>
          <div className="mt-16 grid border-t border-primary-foreground/20 pt-8 sm:grid-cols-2 md:mt-20">
            <Reveal className="pb-8 sm:border-r sm:border-primary-foreground/20 sm:pr-10">
              <span className="font-serif text-5xl md:text-6xl">2003</span>
              <p className="mt-2 text-sm text-primary-foreground/70">{en ? "First European victory · Auckland" : "Première victoire européenne · Auckland"}</p>
            </Reveal>
            <Reveal className="border-t border-primary-foreground/20 pt-8 sm:border-t-0 sm:pl-10 sm:pt-0">
              <span className="font-serif text-5xl md:text-6xl">2007</span>
              <p className="mt-2 text-sm text-primary-foreground/70">{en ? "The Cup defended · Valencia" : "La Coupe conservée · Valence"}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-32 lg:px-10">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-4">
            <p className="label-caps text-accent">{en ? "A few milestones" : "Quelques étapes"}</p>
            <h2 className="mt-6 font-serif text-4xl leading-[1.12] md:text-5xl">{en ? "From ideas to institutions." : "Des idées aux institutions."}</h2>
            <p className="mt-6 max-w-sm leading-7 text-muted-foreground">{en ? "A selection of moments from the Bertarelli family story, spanning science, sport and research." : "Quelques moments de l'histoire de la famille Bertarelli, entre science, sport et recherche."}</p>
          </Reveal>
          <div className="md:col-span-8">
            {timeline.map((event, i) => (
              <Reveal key={event.year} delay={i * 60}>
                <div className="grid grid-cols-[4.5rem_1fr] gap-5 border-t border-border py-7 sm:grid-cols-[7rem_1fr] sm:gap-8 md:py-9">
                  <p className="font-serif text-xl text-accent md:text-2xl">{event.year}</p>
                  <div>
                    <h3 className="font-serif text-2xl leading-tight md:text-3xl">{event.title}</h3>
                    <p className="mt-3 max-w-lg text-sm leading-7 text-muted-foreground md:text-base">{event.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-10">
          <Reveal className="grid gap-10 md:grid-cols-12 md:gap-16">
            <p className="label-caps text-accent md:col-span-3">{en ? "Looking ahead" : "Regarder devant"}</p>
            <div className="md:col-span-9">
              <h2 className="max-w-3xl font-serif text-4xl leading-[1.12] md:text-5xl">{en ? "Curiosity is part of the inheritance." : "La curiosité fait partie de l'héritage."}</h2>
              <div className="mt-12 grid gap-x-12 border-t border-border sm:grid-cols-2">
                <div className="border-b border-border py-8 sm:pr-4">
                  <p className="font-serif text-3xl text-accent">1998</p>
                  <h3 className="mt-3 font-serif text-xl leading-tight">{en ? "Bertarelli Foundation" : "Fondation Bertarelli"}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {en
                      ? "Marine conservation and life-sciences research, supported across borders."
                      : "Protection des océans et recherche en sciences du vivant, soutenues au-delà des frontières."}
                  </p>
                </div>
                <div className="border-b border-border py-8 sm:border-b-0 sm:pl-4">
                  <p className="font-serif text-3xl text-accent">2008</p>
                  <h3 className="mt-3 font-serif text-xl leading-tight">{en ? "Campus Holding SA" : "Campus Holding SA"}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {en
                      ? "The family's private institution, established in Geneva to preserve what has been built and prepare what comes next."
                      : "L'institution privée de la famille, établie à Genève pour préserver ce qui a été construit et préparer la suite."}
                  </p>
                </div>
              </div>
              <p className="mt-8 max-w-2xl text-sm leading-7 text-muted-foreground">
                {en
                  ? "These initiatives reflect the family's wider commitments, independently of the family office."
                  : "Ces initiatives témoignent d'engagements familiaux plus larges, distincts du family office."}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-10">
          <Reveal>
            <p className="label-caps text-accent">{en ? "What endures" : "Ce qui demeure"}</p>
            <h2 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.12] md:text-5xl">{en ? "The values behind the story." : "Les valeurs derrière cette histoire."}</h2>
          </Reveal>
          <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 60}>
                <div className="border-t border-primary-foreground/20 pt-6">
                  <span className="label-caps text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-5 font-serif text-xl leading-tight">{value.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-primary-foreground/65">{value.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-10">
          <Reveal className="grid gap-8 md:grid-cols-12 md:gap-12">
            <p className="label-caps text-accent md:col-span-3">
              {en ? "Campus Holding SA · Since 2008" : "Campus Holding SA · Depuis 2008"}
            </p>
            <div className="md:col-span-9">
              <h2 className="max-w-3xl font-serif text-4xl leading-[1.12] md:text-5xl">
                {en
                  ? "A house created in Geneva, built for the long term."
                  : "Une maison créée à Genève, conçue pour durer."}
              </h2>
              <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                {en
                  ? "Campus Holding SA was created in Geneva in 2008 to give the family a stable, private structure for the years ahead. Eighteen years on, its purpose is unchanged: to preserve what has been built, support those who build it and prepare what comes next. It is not a bank, a fund or an adviser."
                  : "Campus Holding SA a été créée à Genève en 2008 pour donner à la famille une structure stable et privée, tournée vers l'avenir. Dix-huit ans plus tard, sa raison d'être demeure : préserver ce qui a été construit, soutenir ceux qui construisent et préparer la suite. Ce n'est ni une banque, ni un fonds, ni un conseil."}
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid border-t border-border md:mt-20 sm:grid-cols-2 lg:grid-cols-3">
            {mandates.map((mandate, i) => (
              <Reveal key={mandate.title} delay={i * 60}>
                <div className="h-full py-8 pr-6">
                  <span className="label-caps text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-4 font-serif text-2xl leading-tight">{mandate.title}</h3>
                  <p className="mt-3 max-w-xs text-sm leading-7 text-muted-foreground">{mandate.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="flex flex-col items-start justify-between gap-8 border-t border-border pt-10 md:flex-row md:items-center">
            <p className="font-serif text-3xl italic leading-snug md:text-4xl">
              Stewardship across generations.
            </p>
            <ArrowLink to="/family-office">
              {en ? "Inside the family office" : "Le family office en détail"}
            </ArrowLink>
          </Reveal>
        </div>
      </section>
    </main>
  );
}