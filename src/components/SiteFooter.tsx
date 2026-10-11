import { Link } from "@tanstack/react-router";
import { Linkedin } from "lucide-react";
import { useLang } from "@/lib/i18n";

const MAIN_LINKS = [
  { to: "/family-office", en: "Family Office", fr: "Family Office" },
  { to: "/investments", en: "Investments", fr: "Investissements" },
  { to: "/responsibility", en: "Responsibility", fr: "Responsabilité" },
  { to: "/about", en: "About", fr: "À Propos" },
  { to: "/team", en: "Our Team", fr: "Notre Équipe" },
  { to: "/contact", en: "Contact", fr: "Contact" },
] as const;

const LEGAL_LINKS = [
  { to: "/legal-notice", en: "Legal Notice", fr: "Mentions Légales" },
  { to: "/privacy-policy", en: "Privacy Policy", fr: "Politique de Confidentialité" },
  { to: "/cookie-policy", en: "Cookie Policy", fr: "Politique de Cookies" },
  {
    to: "/regulatory-information",
    en: "Regulatory Information",
    fr: "Informations Réglementaires",
  },
] as const;

export function SiteFooter() {
  const { lang, setLang } = useLang();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto w-full max-w-7xl px-6 pb-16 pt-20 md:pt-24 lg:px-10">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-y-16">
          {/* Brand */}
          <div className="flex flex-col justify-between md:col-span-5">
            <div>
              <div className="flex items-center gap-4">
                <img
                  src="/images/campus-mark.png"
                  alt=""
                  className="h-12 w-12 object-contain opacity-90 brightness-0 invert"
                />
                <span className="font-serif text-3xl font-light tracking-[0.02em]">
                  Campus Holding <span className="italic text-accent">SA</span>
                </span>
              </div>
              <p className="label-caps mt-3.5 text-[0.65rem] text-primary-foreground/50">
                {lang === "en"
                  ? "Private Family Office — Geneva, Switzerland"
                  : "Family Office Privé — Genève, Suisse"}
              </p>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-primary-foreground/60">
                {lang === "en"
                  ? "A private Swiss family office dedicated to preserving, developing and responsibly stewarding family wealth across generations."
                  : "Un family office privé suisse dédié à la préservation, au développement et à la gestion responsable du patrimoine familial à travers les générations."}
              </p>
              <address className="mt-8 text-sm not-italic leading-relaxed text-primary-foreground/60">
                Avenue Giuseppe-Motta 31-33
                <br />
                1202 Genève, Suisse
                <a
                  href="tel:+41225394144"
                  className="mt-3 block w-fit transition-colors hover:text-primary-foreground"
                >
                  +41 22 539 41 44
                </a>
                <a
                  href="mailto:info@campusholdings.com"
                  className="mt-1.5 block w-fit transition-colors hover:text-primary-foreground"
                >
                  info@campusholdings.com
                </a>
                <a
                  href="https://www.linkedin.com/search/results/companies/?keywords=Campus%20Holding%20SA"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn — Campus Holding SA (opens in a new tab)"
                  className="mt-4 flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/60 transition-colors hover:border-primary-foreground/50 hover:text-primary-foreground"
                >
                  <Linkedin className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                </a>
              </address>
            </div>
          </div>

          {/* Navigation */}
          <nav className="border-l border-primary-foreground/10 pl-8 md:col-span-2">
            <p className="label-caps text-xs text-accent">
              {lang === "en" ? "Navigation" : "Navigation"}
            </p>
            <ul className="mt-8 space-y-4">
              {MAIN_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {lang === "en" ? l.en : l.fr}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav className="border-l border-primary-foreground/10 pl-8 md:col-span-3">
            <p className="label-caps text-xs text-accent">
              {lang === "en" ? "Legal" : "Mentions légales"}
            </p>
            <ul className="mt-8 space-y-4">
              {LEGAL_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {lang === "en" ? l.en : l.fr}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Language */}
          <div className="border-l border-primary-foreground/10 pl-8 md:col-span-2">
            <p className="label-caps text-xs text-accent">
              {lang === "en" ? "Language" : "Langue"}
            </p>
            <div className="mt-8 flex items-center gap-3 text-sm">
              <button
                type="button"
                onClick={() => setLang("en")}
                aria-pressed={lang === "en"}
                className={
                  lang === "en"
                    ? "text-primary-foreground"
                    : "text-primary-foreground/40 transition-colors hover:text-primary-foreground"
                }
              >
                EN
              </button>
              <span className="text-primary-foreground/20" aria-hidden>
                /
              </span>
              <button
                type="button"
                onClick={() => setLang("fr")}
                aria-pressed={lang === "fr"}
                className={
                  lang === "fr"
                    ? "text-primary-foreground"
                    : "text-primary-foreground/40 transition-colors hover:text-primary-foreground"
                }
              >
                FR
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-6 py-6 text-[0.65rem] uppercase tracking-[0.2em] text-primary-foreground/40 md:flex-row md:items-center md:justify-between lg:px-10">
          <p>© 2026 Campus Holding SA</p>
          <p>CHE-114.282.590 · CH-170.3.032.107-7</p>
        </div>
      </div>
    </footer>
  );
}
