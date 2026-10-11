import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import architecture from "@/assets/architecture.jpg";
import mountains from "@/assets/mountains.jpg";
import { Reveal } from "@/components/Reveal";
import { ArrowLink } from "@/components/ArrowLink";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      {
        title: "Campus Holding | Private Family Office | Geneva, Switzerland",
      },
      {
        name: "description",
        content:
          "Campus Holding SA is a private family office in Geneva. One family, its capital, and the long term.",
      },
      {
        property: "og:title",
        content: "Campus Holding | Private Family Office | Geneva, Switzerland",
      },
      {
        property: "og:description",
        content:
          "A private family office in Geneva. One family, its capital, and the long term.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preload", as: "image", href: "/images/campus-logo.png" },
    ],
  }),
});

function Home() {
  const { lang } = useLang();
  const en = lang === "en";
  const [showLogo, setShowLogo] = useState(true);
  const [logoGone, setLogoGone] = useState(false);
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    // Logo is already on screen; it fades out quickly while the video keeps playing
    const logoOutTimer = window.setTimeout(() => setLogoGone(true), 800);
    // Hero text reveals right after — fully visible within ~1.5s
    const endTimer = window.setTimeout(() => setIntroDone(true), 950);
    return () => {
      window.clearTimeout(logoOutTimer);
      window.clearTimeout(endTimer);
    };
  }, []);

  const domains = en
    ? [
        {
          title: "Wealth Stewardship",
          text: "The day-to-day care of the family's capital: structures, banking relationships, reporting, and the quiet work of keeping it all coherent.",
        },
        {
          title: "Family Governance",
          text: "Who decides what, and how. We keep the family's decision-making clear and documented — especially when opinions differ.",
        },
        {
          title: "Investment Oversight",
          text: "We supervise every holding directly. Nothing important is delegated without a name attached to it.",
        },
        {
          title: "Direct Investments",
          text: "From time to time we take ownership positions in businesses we understand and can stand behind for years.",
        },
        {
          title: "Next Generation",
          text: "The youngest members learn what ownership means before they carry it: responsibility first, privilege second.",
        },
        {
          title: "Philanthropy",
          text: "Giving is decided by the family, in line with its convictions — science, medicine, the environment.",
        },
      ]
    : [
        {
          title: "Gestion patrimoniale",
          text: "Le soin quotidien apporté au capital familial : structures, relations bancaires, reporting, et le travail discret de tout garder cohérent.",
        },
        {
          title: "Gouvernance familiale",
          text: "Qui décide quoi, et comment. Nous gardons la prise de décision claire et documentée — surtout quand les avis divergent.",
        },
        {
          title: "Supervision des investissements",
          text: "Nous suivons chaque participation directement. Rien d'important n'est délégué sans un nom attaché à la tâche.",
        },
        {
          title: "Investissements directs",
          text: "De temps en temps, nous prenons des positions dans des entreprises que nous comprenons et pouvons porter pendant des années.",
        },
        {
          title: "Nouvelle génération",
          text: "Les plus jeunes apprennent ce que veut dire être propriétaire avant de le devenir : la responsabilité d'abord, le privilège ensuite.",
        },
        {
          title: "Philanthropie",
          text: "La générosité est décidée par la famille, selon ses convictions — la science, la médecine, l'environnement.",
        },
      ];

  const categories = [
    { en: "Private Companies", fr: "Sociétés non cotées" },
    { en: "Real Estate", fr: "Immobilier" },
    { en: "Public Markets", fr: "Marchés publics" },
    { en: "Healthcare & Life Sciences", fr: "Santé & Sciences du vivant" },
    { en: "Technology & Innovation", fr: "Technologie & Innovation" },
    { en: "Private Credit & Alternatives", fr: "Crédit privé & Alternatifs" },
  ];

  return (
    <main>
      {/* ————— HERO — cinematic video, logo emerges over it, video keeps playing ————— */}
      <section className="relative flex min-h-screen items-end overflow-hidden bg-foreground">
        {/* Plays once (no loop, so the flight never restarts), slightly slowed,
            then rests on the sky while a very slow drift keeps the frame alive */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1 }}
          animate={{ scale: 1.08 }}
          transition={{ duration: 24, ease: "linear" }}
        >
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            playsInline
            preload="metadata"
            poster="/images/campus-intro-poster.jpg"
            onLoadedMetadata={(e) => {
              e.currentTarget.playbackRate = 0.75;
            }}
          >
            <source src="/videos/campus-intro.mp4" type="video/mp4" />
          </video>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />

        {/* Logo emerges as the camera tilts to the sky, then dissolves — the video never stops */}
        <AnimatePresence>
          {showLogo && !logoGone && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={false}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.03 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              aria-hidden
            >
              <img
                src="/images/campus-logo.png"
                alt=""
                className="w-72 max-w-[70vw] md:w-96"
                style={{ filter: "brightness(0) invert(1)", opacity: 0.95 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 pt-48 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={introDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="label-caps text-primary-foreground/80">
              {en
                ? "Private Family Office — Geneva, Switzerland"
                : "Family Office Privé — Genève, Suisse"}
            </p>
            <h1 className="mt-7 max-w-4xl font-serif text-6xl font-light leading-[1.05] tracking-tight text-primary-foreground md:text-7xl lg:text-8xl">
              {en ? (
                <>
                  Stewardship
                  <br />
                  across generations.
                </>
              ) : (
                <>
                  Préserver, développer,
                  <br />
                  transmettre.
                </>
              )}
            </h1>
            <div className="mt-10 h-px w-24 bg-accent" aria-hidden />
            <p className="mt-10 max-w-xl text-base leading-relaxed text-primary-foreground/85">
              {en
                ? "Campus Holding SA is a private family office in Geneva — one family, its capital, and the long term."
                : "Campus Holding SA est un family office privé à Genève — une famille, son capital, et le long terme."}
            </p>
            <div className="mt-10">
              <ArrowLink to="/family-office" onDark>
                {en ? "Discover our approach" : "Découvrir notre approche"}
              </ArrowLink>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-10 right-6 hidden md:block lg:right-10">
          <span className="label-caps text-[0.65rem] text-primary-foreground/70">
            {en ? "Geneva · Switzerland" : "Genève · Suisse"}
          </span>
        </div>
      </section>

      {/* ————— PURPOSE — a single spoken paragraph, no label, no grid ————— */}
      <section className="mx-auto w-full max-w-5xl px-6 py-28 md:py-40 lg:px-10">
        <Reveal>
          <p className="font-serif text-3xl font-light leading-[1.3] text-foreground md:text-[2.6rem] md:leading-[1.28]">
            {en
              ? "We look after what three generations have built, and prepare what the fourth will receive."
              : "Nous veillons sur ce que trois générations ont bâti, et préparons ce que la quatrième recevra."}
          </p>
          <p className="mt-9 max-w-xl text-base leading-relaxed text-muted-foreground">
            {en
              ? "That is the whole mandate. Investments, governance and philanthropy are only the ways we go about it."
              : "Toute la mission est là. Investissements, gouvernance et philanthropie ne sont que nos façons de l'accomplir."}
          </p>
          <p className="label-caps mt-12 text-[0.65rem] text-muted-foreground/80">
            {en ? "Geneva, since 2008" : "Genève, depuis 2008"}
          </p>
        </Reveal>
      </section>

      {/* ————— THREE MOVES — staggered by hand, no card grid ————— */}
      <section className="px-6 pb-28 md:pb-40 lg:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 gap-y-14 md:grid-cols-12 md:gap-x-10">
            <div className="md:col-span-4">
              <Reveal>
                <h3 className="font-serif text-2xl font-light">
                  {en ? "Preserve" : "Préserver"}
                </h3>
                <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {en
                    ? "Protect the capital, keep it resilient, and never let a good decade make anyone careless."
                    : "Protéger le capital, le garder résilient, et ne jamais laisser une bonne décennie rendre quelqu'un négligent."}
                </p>
              </Reveal>
            </div>
            <div className="md:col-span-4 md:col-start-6 md:mt-20">
              <Reveal>
                <h3 className="font-serif text-2xl font-light">
                  {en ? "Grow" : "Développer"}
                </h3>
                <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {en
                    ? "Put capital to work in businesses and assets we understand — slowly, and with our own name on every decision."
                    : "Mettre le capital au travail dans des entreprises et des actifs que nous comprenons — lentement, avec notre nom sur chaque décision."}
                </p>
              </Reveal>
            </div>
            <div className="md:col-span-3 md:col-start-10 md:mt-36">
              <Reveal>
                <h3 className="font-serif text-2xl font-light">
                  {en ? "Pass on" : "Transmettre"}
                </h3>
                <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {en
                    ? "Prepare the next generation for ownership — the duties before the advantages."
                    : "Préparer la génération suivante à la propriété — les devoirs avant les avantages."}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ————— HERITAGE — asymmetric 3/2 split ————— */}
      <section className="relative overflow-hidden">
        <div className="grid min-h-[80vh] lg:grid-cols-5">
          <div className="relative min-h-[50vh] lg:col-span-3">
            <img
              src={architecture}
              alt="Swiss architecture"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              width={1600}
              height={1280}
            />
          </div>
          <div className="flex items-center bg-secondary/40 lg:col-span-2">
            <div className="px-6 py-24 lg:px-16">
              <Reveal>
                <p className="label-caps text-accent">
                  {en ? "Our Heritage" : "Notre Héritage"}
                </p>
                <h2 className="mt-6 max-w-md font-serif text-4xl font-light leading-[1.12] md:text-5xl">
                  {en
                    ? "Built by entrepreneurs, kept by a family."
                    : "Bâti par des entrepreneurs, gardé par une famille."}
                </h2>
                <p className="mt-8 max-w-md text-base leading-relaxed text-foreground/80">
                  {en
                    ? "The family behind this office has been building companies for three generations. Campus Holding SA carries that temperament into the family's own affairs: patience, directness, and a strong preference for quiet."
                    : "La famille derrière cet office construit des entreprises depuis trois générations. Campus Holding SA met ce tempérament au service des affaires de la famille : patience, franchise, et un goût marqué pour la discrétion."}
                </p>
                <div className="mt-10">
                  <ArrowLink to="/family">
                    {en ? "Discover our family" : "Découvrir notre famille"}
                  </ArrowLink>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ————— FAMILY OFFICE (dark) ————— */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto w-full max-w-7xl px-6 py-28 md:py-40 lg:px-10">
          <Reveal>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
              <div className="md:col-span-4">
                <p className="label-caps text-accent">Family Office</p>
              </div>
              <div className="md:col-span-8">
                <h2 className="max-w-3xl font-serif text-4xl font-light leading-[1.12] md:text-5xl lg:text-6xl">
                  {en
                    ? "One family, one mandate."
                    : "Une famille, un mandat."}
                </h2>
                <p className="mt-8 max-w-xl text-base leading-relaxed text-primary-foreground/70">
                  {en
                    ? "Campus Holding SA serves a single family. That changes everything: no outside investors to answer to, no products to sell, no quarters to please — only the long life of one patrimony."
                    : "Campus Holding SA sert une seule famille. Cela change tout : aucun investisseur extérieur à qui rendre des comptes, aucun produit à vendre, aucun trimestre à satisfaire — seulement la longue vie d'un patrimoine."}
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mt-20 grid gap-x-16 gap-y-12 sm:grid-cols-2">
            {domains.map((domain) => (
              <Reveal key={domain.title}>
                <div className="border-t border-primary-foreground/15 pt-7">
                  <h3 className="font-serif text-xl font-normal">
                    {domain.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-primary-foreground/60">
                    {domain.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-20">
            <ArrowLink to="/family-office" onDark>
              {en ? "Our Family Office" : "Notre Family Office"}
            </ArrowLink>
          </Reveal>
        </div>
      </section>

      {/* ————— INVESTMENTS ————— */}
      <section className="mx-auto w-full max-w-7xl px-6 py-28 md:py-40 lg:px-10">
        <Reveal>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-baseline">
            <div>
              <p className="label-caps text-accent">
                {en ? "Investments" : "Investissements"}
              </p>
              <h2 className="mt-6 max-w-3xl font-serif text-4xl font-light leading-[1.12] md:text-5xl">
                {en ? "Capital that stays." : "Un capital qui reste."}
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {en
                ? "We invest our own capital, directly and for the long term — most often alongside entrepreneurs we have come to know well."
                : "Nous investissons notre propre capital, directement et sur le long terme — le plus souvent aux côtés d'entrepreneurs que nous avons appris à connaître."}
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-20 grid grid-cols-1 gap-x-16 gap-y-10 sm:grid-cols-2">
            {categories.map((cat) => (
              <div
                key={cat.en}
                className="border-t border-border pt-6"
              >
                <p className="font-serif text-2xl font-light leading-snug">
                  {en ? cat.en : cat.fr}
                </p>
                <p className="label-caps mt-2 text-[0.65rem] text-muted-foreground">
                  {en ? cat.fr : cat.en}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <ArrowLink to="/investments">
            {en ? "Our Investments" : "Nos Investissements"}
          </ArrowLink>
        </Reveal>
      </section>

      {/* ————— RESPONSIBILITY ————— */}
      <section className="border-t border-border px-6 py-24 md:py-32 lg:px-10">
        <div className="mx-auto grid w-full max-w-7xl overflow-hidden border border-border lg:min-h-[80vh] lg:grid-cols-2">
          <div className="order-2 flex items-center bg-card lg:order-1">
            <div className="px-6 py-24 lg:px-16">
              <Reveal>
                <p className="label-caps text-accent">
                  {en ? "Responsibility" : "Responsabilité"}
                </p>
                <h2 className="mt-6 max-w-md font-serif text-4xl font-light leading-[1.12] md:text-5xl">
                  {en
                    ? "Responsibility beyond capital."
                    : "Une responsabilité au-delà du capital."}
                </h2>
                <p className="mt-10 max-w-md font-serif text-xl font-light italic leading-relaxed text-foreground">
                  {en
                    ? "“Wealth is a temporary stewardship that carries a permanent obligation to the future.”"
                    : "« La richesse est une intendance temporaire, qui porte une obligation permanente envers l'avenir. »"}
                </p>
                <p className="mt-10 max-w-md text-sm leading-relaxed text-foreground/70">
                  {en
                    ? "Our commitments reflect the family's convictions: supporting scientific research, protecting the environment and contributing to the communities in which we live and operate."
                    : "Nos engagements reflètent les convictions de la famille : soutenir la recherche scientifique, protéger l'environnement et contribuer aux communautés dans lesquelles nous vivons et agissons."}
                </p>
                <div className="mt-10">
                  <ArrowLink to="/responsibility">
                    {en ? "Our responsibility" : "Notre responsabilité"}
                  </ArrowLink>
                </div>
              </Reveal>
            </div>
          </div>
          <div className="relative order-1 min-h-[50vh] lg:order-2">
            <img
              src={mountains}
              alt="Swiss mountains"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              width={1600}
              height={1200}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
