import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useLang } from "@/lib/i18n";

const NAV = [
  { to: "/", en: "Home", fr: "Accueil" },
  { to: "/family", en: "Our Family", fr: "Notre Famille" },
  { to: "/family-office", en: "Family Office", fr: "Family Office" },
  { to: "/investments", en: "Investments", fr: "Investissements" },
  { to: "/responsibility", en: "Responsibility", fr: "Responsabilité" },
  { to: "/about", en: "About", fr: "À Propos" },
  { to: "/team", en: "Our Team", fr: "Notre Équipe" },
  { to: "/contact", en: "Contact", fr: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useLang();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // On the homepage the header floats over the video until the user scrolls.
  const overHero = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          overHero
            ? "border-transparent bg-transparent py-4"
            : scrolled
              ? "border-border bg-background py-3"
              : "border-transparent bg-background py-5"
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 lg:px-10">
          <Link to="/" className="group flex items-center gap-3.5">
            <img
              src="/images/campus-mark.png"
              alt=""
              className={`h-11 w-11 object-contain transition-all duration-300 ${
                overHero
                  ? "brightness-0 invert"
                  : "opacity-90 group-hover:opacity-100"
              }`}
            />
            <span className="leading-none">
              <span
                className={`block font-serif text-[1.35rem] font-medium tracking-tight transition-colors duration-300 ${
                  overHero ? "text-primary-foreground" : "text-foreground"
                }`}
              >
                Campus Holding
              </span>
              <span
                className={`label-caps mt-1.5 block text-[0.62rem] tracking-[0.28em] transition-colors duration-300 ${
                  overHero
                    ? "text-primary-foreground/70"
                    : "text-muted-foreground"
                }`}
              >
                Genève
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-4 lg:flex xl:gap-7">
            {NAV.map((item) => {
              const active =
                item.to === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`label-caps text-[0.72rem] transition-colors duration-500 ${
                    active
                      ? "text-accent"
                      : overHero
                        ? "text-primary-foreground/80 hover:text-primary-foreground"
                        : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {lang === "en" ? item.en : item.fr}
                </Link>
              );
            })}
            <span
              className={`h-3 w-px ${overHero ? "bg-primary-foreground/30" : "bg-border"}`}
              aria-hidden
            />
            <div className="label-caps flex items-center gap-2 text-xs">
              <button
                onClick={() => setLang("en")}
                className={`transition-colors ${
                  lang === "en"
                    ? "text-accent"
                    : overHero
                      ? "text-primary-foreground/60 hover:text-primary-foreground"
                      : "text-foreground/50 hover:text-accent"
                }`}
                aria-pressed={lang === "en"}
              >
                EN
              </button>
              <span
                className={overHero ? "text-primary-foreground/30" : "text-foreground/30"}
                aria-hidden
              >
                |
              </span>
              <button
                onClick={() => setLang("fr")}
                className={`transition-colors ${
                  lang === "fr"
                    ? "text-accent"
                    : overHero
                      ? "text-primary-foreground/60 hover:text-primary-foreground"
                      : "text-foreground/50 hover:text-accent"
                }`}
                aria-pressed={lang === "fr"}
              >
                FR
              </button>
            </div>
          </nav>

          <button
            className={`transition-colors lg:hidden ${
              overHero ? "text-primary-foreground" : "text-foreground"
            }`}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" strokeWidth={1.25} />
          </button>
        </div>
      </header>

      {/* Mobile menu — extremely simple overlay */}
      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col overflow-hidden bg-primary px-8 py-8 text-primary-foreground">
          {/* Logo watermark behind the menu */}
          <img
            src="/images/campus-mark.png"
            alt=""
            aria-hidden
            className="pointer-events-none absolute -bottom-10 -right-14 h-80 w-80 object-contain opacity-[0.14] brightness-0 invert select-none"
          />
          <div className="relative flex items-center justify-between">
            <span className="flex items-center gap-3">
              <img
                src="/images/campus-mark.png"
                alt=""
                className="h-9 w-9 object-contain brightness-0 invert"
              />
              <span className="font-serif text-xl font-medium">
                Campus Holding
              </span>
            </span>
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              <X className="h-6 w-6" strokeWidth={1.25} />
            </button>
          </div>
          <nav className="mt-16 flex flex-col gap-7">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="font-serif text-3xl font-medium"
              >
                {lang === "en" ? item.en : item.fr}
              </Link>
            ))}
          </nav>
          <div className="label-caps mt-auto flex items-center gap-3 text-xs text-primary-foreground/60">
            <button
              onClick={() => setLang("en")}
              className={lang === "en" ? "text-accent" : ""}
            >
              EN
            </button>
            <span aria-hidden>|</span>
            <button
              onClick={() => setLang("fr")}
              className={lang === "fr" ? "text-accent" : ""}
            >
              FR
            </button>
          </div>
        </div>
      )}
    </>
  );
}
