import { openCookieSettings } from "@/lib/cookiebot";
import { CookieDeclaration } from "@/components/CookiebotLoader";
import { createFileRoute } from "@tanstack/react-router";
import { LegalPageShell } from "./legal-notice";
import { useLang, type Lang } from "@/lib/i18n";

export const Route = createFileRoute("/cookie-policy")({
  component: CookiePolicy,
  head: () => ({
    meta: [
      { title: "Cookie Policy | Campus Holding SA — Geneva" },
      {
        name: "description",
        content:
          "Cookie policy of Campus Holding SA. This website is designed to function with the minimum number of cookies.",
      },
      {
        property: "og:title",
        content: "Cookie Policy | Campus Holding SA — Geneva",
      },
      {
        property: "og:description",
        content: "Cookie policy of Campus Holding SA, Geneva, Switzerland.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

type Copy = Record<
  Lang,
  {
    title: string;
    eyebrow: string;
    updated: string;
    intro: string;
    blocks: { h: string; p: string[] }[];
  }
>;

const COPY: Copy = {
  en: {
    eyebrow: "Legal Notice",
    title: "Cookie Policy",
    updated: "Effective Date — February 2026",
    intro:
      "This page lists, plainly, what this website stores in your browser and why. Most cookie policies run to several screens of legal prose; ours does not, because there is very little to declare. We would rather tell you the short truth than a long one.",
    blocks: [
      {
        h: "Why this page is short",
        p: [
          "Most websites follow you. They measure how far you scroll, which buttons you hesitate over, how long you linger on a paragraph. That information is worth money, so those sites collect it, and their cookie policies become long documents trying to explain it.",
          "We follow no one. Nothing on this site reports back to us about you. That is not a policy decision made under pressure; it is how the site was built from the first line of code. This page is short for the same reason a house with three rooms has a short floor plan.",
        ],
      },
      {
        h: "What we mean by cookies",
        p: [
          "A cookie is a small text file a website leaves in your browser. On later visits the site can read that file and remember something — that you stayed in French, that you answered a question, that you have been here before.",
          "Here we use the word loosely, to include similar techniques such as local storage, which does the same job without sending anything back and forth. Some cookies are needed for a site to work; others exist to follow people from site to site. We only use the first kind unless you say otherwise.",
        ],
      },
      {
        h: "What this site stores",
        p: [
          "Three things, in total. That is the complete inventory — not a summary of it, not the interesting parts: the whole of it.",
          "— ch-lang (local storage): your language, English or French, so the site does not ask you every time. Kept until you clear your browser.",
          "— CookieConsent (set by Cookiebot): your answer to the consent banner. Twelve months.",
          "— Google Maps, on the contact page only: the embedded map may set cookies of its own once loaded. They stay blocked until you accept them.",
          "The first of the three exists purely for your comfort. We could build a site that forgets your language on every page; it would simply be worse to use, and it would still be honest. We chose the small convenience instead.",
        ],
      },
      {
        h: "What we do not use",
        p: [
          "The following are common on the web. None of them is on this site, and none will be added without revising this page first.",
          "— No advertising cookies, and no retargeting of any kind.",
          "— No pixels from social networks — no Facebook, LinkedIn or X trackers.",
          "— No cross-site tracking and no profiling of visitors.",
          "— No heatmaps, session recordings or scroll measurement.",
          "— No analytics dashboards counting your every move.",
          "— No browser fingerprinting, which is tracking under another name.",
        ],
      },
      {
        h: "How consent is managed",
        p: [
          "Consent is handled by Cookiebot, a service run by Usercentrics A/S in Copenhagen — one of the platforms most widely certified in Europe for this purpose. On your first visit, a banner asks what you accept. You can accept everything, refuse everything except what is strictly necessary, or choose line by line.",
          "Until you answer, nothing beyond what is strictly necessary is loaded. No map, no optional script, nothing. If you leave the site without answering, the same question greets you on your return — we take silence for what it is, an absence of consent.",
          "Cookiebot itself sets one cookie, CookieConsent, to remember your answer for twelve months. It stores your choice and an anonymous identifier, nothing more.",
        ],
      },
      {
        h: "Changing your mind",
        p: [
          "Consent that cannot be withdrawn is not consent. You can change or withdraw your choice at any time with the button at the bottom of this page — it reopens the banner exactly as on your first visit. Nothing is kept against you: the site does not slow down, hide pages or ask why.",
          "You can also simply delete cookies from your browser settings. The site will keep working and will ask you again, as if for the first time.",
        ],
      },
      {
        h: "Your browser's own settings",
        p: [
          "Every browser — Safari, Chrome, Firefox, Edge — lets you see the cookies a site has set, delete them, or block them in advance. These settings live in each browser's privacy menu, and they sit above anything this site can do: if your browser refuses a cookie, no code from us can change that.",
          "Private or incognito browsing offers a middle path: what the site stores lasts only for the session and disappears when you close the window. For a site like this one, which stores almost nothing, private mode changes little — but the choice is yours, and it always works.",
        ],
      },
      {
        h: "If the banner does not appear",
        p: [
          "Two ordinary reasons explain this. You may have answered before, and Cookiebot is remembering your answer; the button at the bottom of this page reopens the question. Or a blocker or strict browser setting is preventing the banner from loading.",
          "Either way, the site keeps working. Only what is strictly necessary runs, and your language still follows you. Nothing is hidden behind the banner.",
        ],
      },
      {
        h: "One page you may also want",
        p: [
          "Cookies are only part of the story. What we collect outside your browser — a message sent through the contact form, an email written to us — is described in our Privacy Policy, in the same plain language as this page.",
          "Together, the two pages are the full extent of what we know about the people who visit this site: very little, by design.",
        ],
      },
      {
        h: "Updates and questions",
        p: [
          "If the site changes, this page changes with it, and the date at the top moves. We will not narrow what this page promises without saying so here. A question costs nothing and is always welcome: write to info@campusholdings.com, and a person will answer.",
        ],
      },
    ],
  },
  fr: {
    eyebrow: "Mentions légales",
    title: "Politique de Cookies",
    updated: "Date d'entrée en vigueur — février 2026",
    intro:
      "Cette page indique simplement ce que ce site enregistre dans votre navigateur, et pourquoi. La plupart des politiques de cookies s'étendent sur plusieurs écrans de prose juridique ; la nôtre est courte, parce qu'il y a très peu à déclarer. Nous préférons vous dire la vérité courte plutôt qu'une longue.",
    blocks: [
      {
        h: "Pourquoi cette page est courte",
        p: [
          "La plupart des sites vous suivent. Ils mesurent jusqu'où vous faites défiler, sur quels boutons vous hésitez, combien de temps vous vous attardez sur un paragraphe. Ces informations ont une valeur, alors ces sites les collectent, et leurs politiques de cookies deviennent de longs documents pour l'expliquer.",
          "Nous ne suivons personne. Rien sur ce site ne nous rend compte de vous. Ce n'est pas une décision prise sous la contrainte : c'est ainsi que le site a été construit, dès la première ligne. Cette page est courte pour la même raison qu'une maison de trois pièces a un plan succinct.",
        ],
      },
      {
        h: "Ce que nous appelons cookies",
        p: [
          "Un cookie est un petit fichier texte qu'un site dépose dans votre navigateur. Lors de visites suivantes, le site peut le relire et se souvenir de quelque chose — que vous êtes resté en français, que vous avez répondu à une question, que vous êtes déjà venu.",
          "Nous employons ici le mot au sens large, en y incluant des techniques proches comme le stockage local, qui fait le même travail sans rien envoyer ni recevoir. Certains cookies sont nécessaires au fonctionnement d'un site ; d'autres existent pour suivre les personnes de site en site. Nous n'utilisons que les premiers, sauf accord de votre part.",
        ],
      },
      {
        h: "Ce que ce site enregistre",
        p: [
          "Trois choses, en tout. C'est l'inventaire complet — pas un résumé, pas les points marquants : la totalité.",
          "— ch-lang (stockage local) : votre langue, anglais ou français, pour ne pas vous la redemander à chaque page. Conservé jusqu'à ce que vous vidiez votre navigateur.",
          "— CookieConsent (déposé par Cookiebot) : votre réponse au bandeau de consentement. Douze mois.",
          "— Google Maps, sur la page contact uniquement : la carte intégrée peut déposer ses propres cookies une fois chargée. Ils restent bloqués tant que vous ne les acceptez pas.",
          "Le premier des trois n'existe que pour votre confort. Nous pourrions construire un site qui oublie votre langue à chaque page ; il serait simplement moins agréable à lire, et il resterait tout aussi honnête. Nous avons choisi la petite commodité.",
        ],
      },
      {
        h: "Ce que nous n'utilisons pas",
        p: [
          "Voici des pratiques courantes sur le web. Aucune n'est sur ce site, et aucune ne sera ajoutée sans réviser d'abord cette page.",
          "— Aucun cookie publicitaire, aucun reciblage d'aucune sorte.",
          "— Aucun pixel de réseau social — ni Facebook, ni LinkedIn, ni X.",
          "— Aucun suivi entre sites, aucun profilage des visiteurs.",
          "— Aucune carte de chaleur, aucun enregistrement de session, aucune mesure de défilement.",
          "— Aucun tableau de bord statistique comptant vos moindres gestes.",
          "— Aucune empreinte de navigateur, qui n'est que du suivi sous un autre nom.",
        ],
      },
      {
        h: "Comment le consentement est géré",
        p: [
          "Le consentement est géré par Cookiebot, un service de Usercentrics A/S à Copenhague — l'une des plateformes les plus certifiées d'Europe pour cet usage. Lors de votre première visite, un bandeau vous demande ce que vous acceptez. Tout accepter, tout refuser sauf le strict nécessaire, ou choisir ligne par ligne : les trois options vous sont ouvertes.",
          "Tant que vous n'avez pas répondu, rien au-delà du strict nécessaire n'est chargé. Ni carte, ni script facultatif, rien. Si vous quittez le site sans répondre, la même question vous accueille à votre retour — nous prenons le silence pour ce qu'il est, une absence de consentement.",
          "Cookiebot dépose lui-même un cookie, CookieConsent, pour mémoriser votre réponse pendant douze mois. Il contient votre choix et un identifiant anonyme, rien de plus.",
        ],
      },
      {
        h: "Changer d'avis",
        p: [
          "Un consentement qu'on ne peut pas retirer n'en est pas un. Vous pouvez modifier ou retirer votre choix à tout moment avec le bouton en bas de cette page — il rouvre le bandeau exactement comme lors de votre première visite. Rien ne vous est retenu : le site ne ralentit pas, ne cache pas de pages, ne demande pas pourquoi.",
          "Vous pouvez aussi simplement supprimer les cookies depuis votre navigateur. Le site continuera de fonctionner et vous reposera la question, comme au premier jour.",
        ],
      },
      {
        h: "Les réglages de votre navigateur",
        p: [
          "Chaque navigateur — Safari, Chrome, Firefox, Edge — vous permet de voir les cookies déposés par un site, de les supprimer ou de les bloquer d'avance. Ces réglages se trouvent dans le menu de confidentialité de chaque navigateur, et ils passent avant tout ce que ce site peut faire : si votre navigateur refuse un cookie, aucun code de notre part ne peut y changer rien.",
          "La navigation privée offre une voie médiane : ce que le site enregistre ne dure que la session et disparaît à la fermeture de la fenêtre. Pour un site comme le nôtre, qui enregistre presque rien, la navigation privée change peu — mais le choix vous appartient, et il fonctionne toujours.",
        ],
      },
      {
        h: "Si le bandeau n'apparaît pas",
        p: [
          "Deux raisons ordinaires l'expliquent. Vous avez peut-être déjà répondu, et Cookiebot se souvient de votre réponse ; le bouton en bas de cette page rouvre la question. Ou bien un bloqueur, ou un réglage strict du navigateur, empêche le bandeau de se charger.",
          "Dans les deux cas, le site continue de fonctionner. Seul le strict nécessaire s'exécute, et votre langue vous suit toujours. Rien ne se cache derrière le bandeau.",
        ],
      },
      {
        h: "Une page qui peut aussi vous servir",
        p: [
          "Les cookies ne sont qu'une partie de l'histoire. Ce que nous collectons en dehors de votre navigateur — un message envoyé par le formulaire de contact, un courriel qui nous est écrit — est décrit dans notre Politique de Confidentialité, dans le même langage simple que cette page.",
          "À elles deux, ces pages font le tour de ce que nous savons des personnes qui visitent ce site : très peu de choses, à dessein.",
        ],
      },
      {
        h: "Mises à jour et questions",
        p: [
          "Si le site évolue, cette page évolue avec lui, et la date en haut change. Nous ne réduirons pas ce que cette page promet sans l'écrire ici. Une question ne coûte rien et est toujours bienvenue : écrivez à info@campusholdings.com, et une personne vous répondra.",
        ],
      },
    ],
  },
};

function CookiePolicy() {
  const { lang } = useLang();
  const en = lang === "en";
  return (
    <>
      <LegalPageShell
        copy={COPY[lang]}
        siblings={[
          { to: "/legal-notice", en: "Legal Notice", fr: "Mentions Légales" },
          { to: "/privacy-policy", en: "Privacy Policy", fr: "Politique de Confidentialité" },
          { to: "/regulatory-information", en: "Regulatory Information", fr: "Informations Réglementaires" },
        ]}
      />
      <section className="mx-auto max-w-4xl px-6 pb-24">
        <div className="border-t border-border pt-10">
          <h2 className="font-serif text-2xl text-foreground">
            {en ? "Your cookie settings" : "Vos réglages de cookies"}
          </h2>
          <p className="mt-3 text-[1.02rem] font-light leading-[1.75] text-foreground">
            {en
              ? "Review or change what you accepted on this site. The banner reopens exactly as on your first visit — nothing is assumed, nothing is kept against you."
              : "Consultez ou modifiez ce que vous avez accepté sur ce site. Le bandeau se rouvre exactement comme lors de votre première visite — rien n'est supposé, rien ne vous est retenu."}
          </p>
          <button
            type="button"
onClick={openCookieSettings}
            className="btn-quiet mt-6 text-foreground"
          >
            {en ? "Change my consent" : "Modifier mon consentement"}
          </button>
          <CookieDeclaration />
        </div>
      </section>
    </>
  );
}
