<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

# Project Conventions

- Bilingual EN/FR site: copy lives inline per route as `en ? ... : ...` via `useLang()` from `src/lib/i18n.tsx`; default EN, persisted in localStorage `ch-lang`.
- Design tokens only in `src/styles.css` (Ivory/Deep Forest/Stone/Bronze palette, Helvetica/Arial headings + Work Sans body); never hardcode colors in components, so the site remains consistent.
- Contact form inserts anonymously into `contact_messages` (RLS: anon INSERT only) with honeypot + 4s time-gate anti-spam.
- Contact uses an address-only Google Maps embed and external directions link, rather than a server-side map service, because it needs one public office location and no lookup proxy.
- Contact LinkedIn icon links to a labeled LinkedIn company search until the official profile URL is supplied, to avoid inventing a company account.
- Downloaded photography is uploaded through lovable-assets and referenced by project asset pointers, so media remains locally managed rather than hotlinked.

<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->
