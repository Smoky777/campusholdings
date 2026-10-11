import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { LanguageProvider, useLang } from "@/lib/i18n";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CookiebotHeadScript } from "@/components/CookiebotLoader";

function NotFoundComponent() {
  const { lang } = useLang();
  const en = lang === "en";
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Error 404
        </p>
        <h1 className="mt-4 font-serif text-6xl font-normal text-foreground">
          404
        </h1>
        <h2 className="mt-6 font-serif text-2xl text-foreground">
          {en ? "Page not found" : "Page introuvable"}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {en
            ? "The page you're looking for doesn't exist or has been moved."
            : "La page que vous cherchez n'existe pas ou a été déplacée."}
        </p>
        <div className="mt-8">
          <Link to="/" className="btn-quiet text-foreground">
            {en ? "Return home" : "Retour à l'accueil"}
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-2xl font-medium tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back
          home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
            }}
            className="btn-quiet text-foreground"
          >
            Try again
          </button>
          <a href="/" className="btn-quiet text-foreground">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      // Site privé : aucune page ne doit apparaître dans les moteurs de recherche.
      { name: "robots", content: "noindex, nofollow" },
      { title: "Campus Holding | Private Family Office | Geneva, Switzerland" },
      {
        name: "description",
        content:
          "Campus Holding SA is a private Swiss family office in Geneva, dedicated to preserving, developing and responsibly stewarding family wealth across generations.",
      },
      { property: "og:title", content: "Campus Holding | Private Family Office | Geneva, Switzerland" },
      {
        property: "og:description",
        content:
          "A private Swiss family office dedicated to preserving, developing and responsibly stewarding family wealth across generations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Tinos:ital,wght@0,400;0,700;1,400;1,700&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", sizes: "48x48" },
      { rel: "icon", href: "/favicon.png", type: "image/png", sizes: "48x48" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <CookiebotHeadScript />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <SiteHeader />
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
        <SiteFooter />
        {/* Filigrane du logo — ordinateur uniquement, fixe en bas à droite */}
        <img
          src="/images/campus-mark.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none fixed bottom-6 right-6 z-0 hidden h-40 w-40 select-none opacity-[0.07] md:block"
        />
      </LanguageProvider>
    </QueryClientProvider>
  );
}
