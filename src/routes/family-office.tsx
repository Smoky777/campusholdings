import { createFileRoute } from "@tanstack/react-router";
import mistLake from "@/assets/mist-lake-geneva.asset.json";
import { Reveal } from "@/components/Reveal";
import { ArrowLink } from "@/components/ArrowLink";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/family-office")({
  component: FamilyOffice,
  head: () => ({
    meta: [
      {
        title: "Family Office | Campus Holding — Private Family Office, Geneva",
      },
      {
        name: "description",
        content:
          "A family office built for generations. Wealth stewardship, family governance, investment oversight, direct investments, next generation and philanthropy.",
      },
      {
        property: "og:title",
        content: "Family Office | Campus Holding — Private Family Office, Geneva",
      },
      {
        property: "og:description",
        content:
          "A family office built for generations — wealth stewardship, governance, investment oversight and philanthropy.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function FamilyOffice() {
  const { lang } = useLang();
  const en = lang === "en";

  const domains = en
    ? [
        {
          title: "Wealth Stewardship",
          alt: "Gestion patrimoniale",
          text: "A consolidated, current view of the family's assets, commitments and obligations — maintained quietly, shared with no one outside the family.",
        },
        {
          title: "Family Governance",
          alt: "Gouvernance familiale",
          text: "Clear structures for family decisions: who decides, who is consulted, how differences of view are resolved without friction.",
        },
        {
          title: "Investment Oversight",
          alt: "Supervision des investissements",
          text: "Independent supervision of the managers and mandates that work for the family — measured, questioned, renewed when they no longer serve.",
        },
        {
          title: "Direct Investments",
          alt: "Investissements directs",
          text: "Positions taken directly in companies, real estate and projects the family understands and intends to hold for decades.",
        },
        {
          title: "Next Generation",
          alt: "Nouvelle génération",
          text: "Preparing those who will one day carry the responsibility: education, real experience, and duties shared progressively.",
        },
        {
          title: "Philanthropy",
          alt: "Philanthropie",
          text: "Causes chosen by the family, supported with the same rigour and the same discretion as everything else.",
        },
      ]
    : [
        {
          title: "Gestion patrimoniale",
          alt: "Wealth Stewardship",
          text: "Une vision consolidée et à jour des actifs, des engagements et des obligations de la famille — tenue en silence, partagée avec personne d'autre.",
        },
        {
          title: "Gouvernance familiale",
          alt: "Family Governance",
          text: "Des structures claires pour les décisions familiales : qui décide, qui est consulté, comment les désaccords se résolvent sans friction.",
        },
        {
          title: "Supervision des investissements",
          alt: "Investment Oversight",
          text: "Une supervision indépendante des gérants et mandats qui travaillent pour la famille — mesurée, questionnée, renouvelée quand il le faut.",
        },
        {
          title: "Investissements directs",
          alt: "Direct Investments",
          text: "Des positions prises directement dans des sociétés, de l'immobilier et des projets que la famille comprend et garde pour des décennies.",
        },
        {
          title: "Nouvelle génération",
          alt: "Next Generation",
          text: "Préparer celles et ceux qui porteront la responsabilité un jour : formation, expérience réelle, responsabilités partagées progressivement.",
        },
        {
          title: "Philanthropie",
          alt: "Philanthropy",
          text: "Des causes choisies par la famille, soutenues avec la même rigueur et la même discrétion que tout le reste.",
        },
      ];

  const principles = en
    ? [
        {
          title: "Discretion",
          text: "We keep things quiet. Most of our work will never be seen, and that is how it should be.",
        },
        {
          title: "Independence",
          text: "We answer to no one but the family — no products to sell, no commissions to chase.",
        },
        {
          title: "Patience",
          text: "We think in decades. A decision that only looks good this quarter was probably the wrong one.",
        },
        {
          title: "Alignment",
          text: "There is one family, one office and one interest. Everyone here sits on the same side of the table.",
        },
      ]
    : [
        {
          title: "Discrétion",
          text: "Nous gardons les choses discrètes. L'essentiel de notre travail ne se verra jamais, et c'est ainsi que cela doit être.",
        },
        {
          title: "Indépendance",
          text: "Nous ne répondons qu'à la famille — aucun produit à vendre, aucune commission à rechercher.",
        },
        {
          title: "Patience",
          text: "Nous pensons en décennies. Une décision qui ne tient que ce trimestre était probablement la mauvaise.",
        },
        {
          title: "Alignement",
          text: "Il y a une famille, un office et un seul intérêt. Tout le monde ici est du même côté de la table.",
        },
      ];

  return (
    <main>
      {/* ————— HERO — centred, tighter, markers on a hairline ————— */}
      <section className="flex min-h-[62vh] flex-col items-center justify-center px-6 pb-14 pt-24">
        <div className="mx-auto w-full max-w-4xl text-center">
          <Reveal>
            <div className="mb-8 inline-block border-y border-accent/40 px-8 py-2">
              <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-accent">
                {en ? "Established 2008" : "Fondée en 2008"}
              </span>
            </div>
            <h1 className="font-serif text-4xl font-light leading-[1.14] tracking-tight text-foreground md:text-6xl">
              {en
                ? "A family office, in the quiet sense of the word."
                : "Un family office, dans le sens le plus discret du mot."}
            </h1>
            <p className="mt-6 text-base font-light italic tracking-tight text-muted-foreground md:text-lg">
              {en
                ? "Un family office, dans le sens le plus discret du mot."
                : "A family office, in the quiet sense of the word."}
            </p>
            <div className="mx-auto mt-12 flex max-w-md items-center justify-between border-t border-accent/20 pt-5 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              <span>{en ? "One family" : "Une famille"}</span>
              <span className="h-3 w-px bg-accent/30" aria-hidden />
              <span>{en ? "Geneva" : "Genève"}</span>
              <span className="h-3 w-px bg-accent/30" aria-hidden />
              <span>{en ? "18+ years" : "18 ans et plus"}</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ————— THE MANDATE — bronze hairline on the left ————— */}
      <section className="mx-auto w-full max-w-6xl px-6 py-14 md:py-20 lg:px-8">
        <div className="grid gap-10 border-l border-accent/20 pl-8 md:pl-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <h2 className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
                {en ? "The Mandate" : "Le Mandat"}
              </h2>
              <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground/70">
                {en ? "Le Mandat" : "The Mandate"}
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal delay={120}>
              <p className="max-w-2xl text-2xl font-light leading-[1.5] text-foreground md:text-[1.7rem]">
                {en
                  ? "Campus Holding SA exists for a single purpose: to serve one family, over a horizon measured in generations rather than quarters."
                  : "Campus Holding SA n'a qu'une raison d'être : servir une seule famille, sur un horizon qui se mesure en générations plutôt qu'en trimestres."}
              </p>
              <p className="mt-7 max-w-2xl leading-relaxed text-muted-foreground">
                {en
                  ? "Created in Geneva in 2008, the office centralises the family's financial and non-financial interests, structures its decisions and prepares their transmission. To be clear about what we are not: we are not a bank, not a fund and not an adviser. We manage no money for third parties and sell nothing to anyone."
                  : "Créée à Genève en 2008, l'office centralise les intérêts financiers et non financiers de la famille, structure ses décisions et prépare leur transmission. Précisons ce que nous ne sommes pas : ni une banque, ni un fonds, ni un conseil. Nous ne gérons aucun capital pour des tiers et ne vendons rien à personne."}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ————— SIX DOMAINS — hairline grid, bronze numbers ————— */}
      <section className="mx-auto w-full max-w-6xl px-6 py-14 md:py-20 lg:px-8">
        <Reveal>
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <h2 className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
                {en ? "Our Domains" : "Nos Domaines"}
              </h2>
              <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground/70">
                {en ? "Nos Domaines" : "Our Domains"}
              </p>
            </div>
            <p className="hidden max-w-xs text-right text-sm font-light leading-relaxed text-muted-foreground md:block">
              {en
                ? "Six areas, one mandate — everything the office does serves the same horizon."
                : "Six domaines, un seul mandat — tout ce que fait l'office sert le même horizon."}
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 border-l border-t border-accent/20 md:grid-cols-2 lg:grid-cols-3">
          {domains.map((domain, i) => (
            <Reveal key={domain.title} delay={(i % 3) * 80}>
              <div className="group h-full border-b border-r border-accent/20 p-8 transition-colors duration-500 hover:bg-card md:p-10">
                <span className="text-[10px] font-medium tracking-widest text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-serif text-xl font-light leading-snug text-foreground md:text-[1.3rem]">
                  {domain.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{domain.alt}</p>
                <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
                  {domain.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ————— WHAT WE ARE NOT — ink blue band ————— */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto w-full max-w-6xl px-6 py-14 md:py-20 lg:px-8">
          <Reveal>
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
                  {en ? "What We Are Not" : "Ce Que Nous Ne Sommes Pas"}
                </h2>
                <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.15em] text-primary-foreground/50">
                  {en ? "Ce que nous ne sommes pas" : "What we are not"}
                </p>
              </div>
              <p className="max-w-xs text-sm font-light leading-relaxed text-primary-foreground/60 md:text-right">
                {en
                  ? "Because these words are used loosely, we prefer to be precise."
                  : "Comme ces mots sont galvaudés, nous préférons être précis."}
              </p>
            </div>
          </Reveal>
          <div className="grid gap-10 border-t border-primary-foreground/15 pt-12 md:grid-cols-2">
            {(en
              ? [
                  {
                    title: "Not a bank",
                    text: "We hold no deposits and sell no products. No client list, no front office, no targets to meet.",
                  },
                  {
                    title: "Not an adviser",
                    text: "We give no counsel to third parties. Our judgement exists to serve one family only.",
                  },
                ]
              : [
                  {
                    title: "Ni une banque",
                    text: "Nous ne détenons aucun dépôt et ne vendons aucun produit. Pas de clientèle, pas de front office, aucun objectif commercial.",
                  },
                  {
                    title: "Ni un conseil",
                    text: "Nous ne conseillons aucun tiers. Notre jugement n'existe que pour servir une seule famille.",
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

      {/* ————— HOW WE WORK — four principles, bronze ticks ————— */}
      <section className="bg-secondary/50">
        <div className="mx-auto w-full max-w-6xl px-6 py-14 md:py-20 lg:px-8">
        <Reveal>
          <div className="mb-12">
            <h2 className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
              {en ? "How We Work" : "Notre Manière de Travailler"}
            </h2>
            <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground/70">
              {en ? "Notre manière de travailler" : "How We Work"}
            </p>
          </div>
        </Reveal>
        <div className="grid gap-12 border-t border-accent/15 pt-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-14">
          {principles.map((principle, i) => (
            <Reveal key={principle.title} delay={i * 80}>
              <div>
                <span className="block h-px w-8 bg-accent/40" aria-hidden />
                <h3 className="mt-6 font-serif text-lg text-foreground">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
                  {principle.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <div className="mx-auto mt-16 max-w-2xl text-center">
            <span className="mx-auto block h-px w-12 bg-accent/50" aria-hidden />
            <blockquote className="mt-8 font-serif text-2xl font-light italic leading-[1.5] text-foreground md:text-[1.7rem]">
              {en
                ? "The best decision for the family is rarely the loudest one — it is the one that still looks right twenty years from now."
                : "La meilleure décision pour la famille est rarement la plus visible — c'est celle qui restera juste dans vingt ans."}
            </blockquote>
          </div>
        </Reveal>
        </div>
      </section>

      {/* ————— HEADQUARTERS — full-bleed photo background ————— */}
      <section className="relative overflow-hidden bg-foreground text-background">
        <img
          src={mistLake.url}
          alt={en ? "Mist over Lake Geneva" : "Brume sur le lac Léman"}
          className="absolute inset-0 h-full w-full object-cover opacity-50"
          loading="lazy"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/55 to-foreground/25"
          aria-hidden
        />
        <div className="relative mx-auto w-full max-w-6xl px-6 py-16 md:py-24 lg:px-8">
          <Reveal>
            <h2 className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
              {en ? "Headquarters" : "Siège Social"}
            </h2>
            <p className="mt-7 font-serif text-3xl font-light leading-tight tracking-tight text-background md:text-4xl">
              Campus Holding SA
            </p>
            <address className="mt-5 text-lg font-light not-italic leading-loose text-background/85">
              Avenue Giuseppe-Motta 31-33
              <br />
              1202 {en ? "Geneva" : "Genève"}
              <br />
              {en ? "Switzerland" : "Suisse"}
            </address>
            <p className="mt-5 max-w-sm text-sm font-light leading-relaxed text-background/70">
              {en
                ? "In the heart of the international district — a quiet, discreet setting for work measured in generations."
                : "Au cœur du quartier international — un cadre calme et discret pour un travail qui se mesure en générations."}
            </p>
            <div className="mt-9">
              <ArrowLink to="/about" onDark>
                {en ? "About Campus Holding" : "À propos de Campus Holding"}
              </ArrowLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ————— CLOSING ————— */}
      <section className="border-t border-accent/10 px-6 py-16 text-center md:py-20">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="font-serif text-3xl font-light leading-[1.35] tracking-tight text-foreground md:text-4xl">
              {en
                ? "One family. One long-term perspective."
                : "Une famille. Une perspective de long terme."}
            </h2>
            <p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted-foreground">
              {en
                ? "If your institution wishes to reach the office, we welcome considered enquiries."
                : "Si votre institution souhaite joindre l'office, nous accueillons les demandes réfléchies."}
            </p>
            <div className="mt-10 flex justify-center">
              <ArrowLink to="/contact">
                {en ? "Contact the office" : "Contacter l'office"}
              </ArrowLink>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
