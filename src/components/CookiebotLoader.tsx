import { useEffect } from "react";
import { COOKIEBOT_CBID } from "@/lib/cookiebot";

/**
 * Cookiebot consent script — injected client-side as the very first element
 * of <head> so it loads before any third-party service. Auto-blocking mode
 * holds back non-essential cookies/trackers until the visitor consents.
 *
 * Injected via useEffect (not rendered by SSR) because Cookiebot rewrites
 * its own <script> tag on load, which otherwise causes a React hydration
 * mismatch on every page.
 */
export function CookiebotHeadScript() {
  useEffect(() => {
    if (!COOKIEBOT_CBID) return;
    if (document.getElementById("Cookiebot")) return;
    const script = document.createElement("script");
    script.id = "Cookiebot";
    script.src = "https://consent.cookiebot.com/uc.js";
    script.setAttribute("data-cbid", COOKIEBOT_CBID);
    script.setAttribute("data-blockingmode", "auto");
    script.type = "text/javascript";
    document.head.prepend(script);
  }, []);
  return null;
}

/** Mounts Cookiebot's auto-generated cookie declaration. */
export function CookieDeclaration() {
  useEffect(() => {
    if (!COOKIEBOT_CBID) return;
    if (document.getElementById("CookieDeclaration")) return;
    const script = document.createElement("script");
    script.id = "CookieDeclaration";
    script.src = `https://consent.cookiebot.com/${COOKIEBOT_CBID}/cd.js`;
    script.type = "text/javascript";
    script.async = true;
    const host = document.querySelector(".cookie-declaration");
    (host ?? document.body).appendChild(script);
  }, []);
  return <div className="cookie-declaration mt-8" />;
}
