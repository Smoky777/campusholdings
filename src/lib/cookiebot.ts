// Cookiebot domain group ID (from cookiebot.com > Settings > Your scripts).
// Leave empty until the account is created: nothing is loaded while empty.
export const COOKIEBOT_CBID = "ab781044-e792-4c8f-869b-e0dcbc2d7500";

type CookiebotApi = { renew: () => void; show?: () => void };

/** Reopens the Cookiebot preferences so visitors can change or withdraw consent.
 *  Falls back to the cookie policy page when the banner cannot appear
 *  (e.g. preview domain not registered in Cookiebot Manager). */
export function openCookieSettings() {
  const cb = (window as unknown as { Cookiebot?: CookiebotApi }).Cookiebot;
  if (!cb) {
    window.location.href = "/cookie-policy";
    return;
  }
  cb.renew();
  // If the dialog did not render (domain not whitelisted in Cookiebot Manager),
  // send the visitor to the cookie policy page instead of leaving them stuck.
  window.setTimeout(() => {
    if (!document.getElementById("CybotCookiebotDialog")) {
      window.location.href = "/cookie-policy";
    }
  }, 1200);
}
