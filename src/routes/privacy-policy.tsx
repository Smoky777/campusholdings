import { createFileRoute } from "@tanstack/react-router";
import { LegalPageShell } from "./legal-notice";
import { useLang, type Lang } from "@/lib/i18n";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicy,
  head: () => ({
    meta: [
      {
        title: "Privacy Policy | Campus Holding SA — Geneva",
      },
      {
        name: "description",
        content:
          "Privacy policy of Campus Holding SA — data collected through this website, purposes, retention and your rights under Swiss law and, where applicable, the GDPR.",
      },
      {
        property: "og:title",
        content: "Privacy Policy | Campus Holding SA — Geneva",
      },
      {
        property: "og:description",
        content: "Privacy policy of Campus Holding SA, Geneva, Switzerland.",
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
    title: "Privacy Policy",
    eyebrow: "Legal Notice",
    updated: "Effective Date — February 2026",
    intro:
      "We collect as little as a website possibly can. This page explains, in plain terms, what we receive when you write to us, what we do with it, how long we keep it, and what you may ask of us at any moment. It follows the Swiss Federal Act on Data Protection (FADP) and, where relevant, the European GDPR — not as a formality, but because handling people's information with care is simply how we work.",
    blocks: [
      {
        h: "Who Is Responsible",
        p: [
          "Campus Holding SA, a family holding company established in Geneva, is responsible for the personal data collected on this site.",
          "You will find us at Avenue Giuseppe-Motta 31-33, 1202 Geneva, Switzerland — registered under CH-170.3.032.107-7, IDE/TVA CHE-114.282.590. For anything concerning your data, one address is enough: info@campusholdings.com.",
          "If a point on this page remains unclear, or you would rather speak to a person than read a policy, write to us. A question costs nothing and is always welcome.",
        ],
      },
      {
        h: "What This Policy Covers",
        p: [
          "This policy concerns this website only — the data you send us through the contact form and the technical traces a visit inevitably leaves. Our private correspondence, our internal files and everything the company handles outside the site follow separate, internal arrangements, and are not described here.",
        ],
      },
      {
        h: "What We Collect",
        p: [
          "Very little, and only what you give us yourself. When you use the contact form, we receive:",
          "— your name, and the company you represent if you mention it;",
          "— your email address, so that we can reply;",
          "— your message itself, along with the language in which the form was used.",
          "Beyond that, only the technical data strictly required to display the pages and keep the site secure — nothing more.",
          "One request: please do not send sensitive financial documents, identity papers or banking details through the form. We will never ask for them. Should they reach us anyway, we will treat them with the same care — but they are safer left unsent.",
        ],
      },
      {
        h: "Why We Use It",
        p: [
          "Your message is read, understood and answered. If a dialogue continues, we keep a record of it so that we never ask you the same thing twice. The site itself is watched only for its performance and its security. And where the law requires us to keep something, we comply.",
          "That is the whole list. Your data is not used for marketing, not used to build profiles of you, and never sold or passed on for commercial purposes.",
        ],
      },
      {
        h: "What We Never Do",
        p: [
          "No advertising trackers. No social-media pixels. No following visitors from site to site. No account can be created here, and no payment is ever collected through this website. It is not a marketing platform, and it never will be.",
        ],
      },
      {
        h: "On What Ground",
        p: [
          "Every use of your data rests on one of a few simple grounds, under the FADP and, where applicable, the GDPR:",
          "— your own choice to contact us, and the reply we owe you;",
          "— the steps needed to respond to a request you made on your own initiative;",
          "— the obligations the law places on us;",
          "— the legitimate interest of keeping this website running and secure.",
          "None of these grounds is ever invoked to justify anything beyond what is described on this page.",
        ],
      },
      {
        h: "Who Sees Your Data",
        p: [
          "We do not sell, rent or trade personal data — there is nothing to sell and no one to sell it to. Two situations, and only two, give others access:",
          "— the IT and hosting providers who keep this site running, chosen carefully, bound by data processing agreements and acting only on our instructions;",
          "— public authorities, strictly where the law requires it.",
        ],
      },
      {
        h: "How Long We Keep It",
        p: [
          "No longer than needed. A message is kept for the time it takes to answer it properly and, where a correspondence continues, for as long as that dialogue remains relevant. Once the applicable retention period has run its course, or the purpose itself has been fulfilled, the data is securely deleted.",
          "No archive is built in the background, and your message has no second life.",
        ],
      },
      {
        h: "Cookies & Statistics",
        p: [
          "This site uses the smallest number of cookies it can function with. Where usage is measured, we prefer privacy-friendly solutions that require no consent and identify no one. The detail lives in our Cookie Policy.",
        ],
      },
      {
        h: "Hosting & Security",
        p: [
          "The site is hosted by a professional provider, in facilities offering appropriate physical and technical protection, and everything you send is encrypted in transit. Stored messages can be read only by the few people who need to read them to answer you — no one else.",
        ],
      },
      {
        h: "Your Rights",
        p: [
          "Your data belongs to you. Under Swiss law and, where relevant, the GDPR, you may ask to see it, have it corrected or deleted, restrict or object to its processing, or have it carried elsewhere.",
          "To exercise any of these rights, write to info@campusholdings.com. Every request receives an answer within a reasonable time, and you may also turn to the competent supervisory authority if you prefer. You do not need to explain why you are asking.",
        ],
      },
      {
        h: "If This Policy Changes",
        p: [
          "It may, if the site or the law changes. The date at the top of this page tells you which version you are reading.",
        ],
      },
      {
        h: "A Last Word",
        p: [
          "The simplest summary of this page fits in one sentence: we collect almost nothing, we use it only to answer you, and we keep it no longer than necessary. If any doubt remains, one email is enough to settle it.",
        ],
      },
    ],
  },
  fr: {
    title: "Politique de Confidentialité",
    eyebrow: "Mentions légales",
    updated: "Date d'entrée en vigueur — février 2026",
    intro:
      "Nous collectons aussi peu de données qu'un site le permet. Cette page explique simplement ce que nous recevons lorsque vous nous écrivez, ce que nous en faisons, combien de temps nous le gardons et ce que vous pouvez nous demander à tout moment. Elle suit la Loi fédérale sur la protection des données (LPD) et, le cas échéant, le RGPD européen — non pas par formalité, mais parce que traiter les informations avec soin fait simplement partie de notre manière de travailler.",
    blocks: [
      {
        h: "Qui est responsable",
        p: [
          "Campus Holding SA, société de holding familiale établie à Genève, est responsable des données personnelles collectées sur ce site.",
          "Vous nous trouverez à l'Avenue Giuseppe-Motta 31-33, 1202 Genève, Suisse — immatriculée sous CH-170.3.032.107-7, IDE/TVA CHE-114.282.590. Pour tout ce qui concerne vos données, une seule adresse suffit : info@campusholdings.com.",
          "Si un point de cette page reste obscur, ou si vous préférez parler à une personne plutôt que lire une politique, écrivez-nous. Une question ne coûte rien et est toujours bienvenue.",
        ],
      },
      {
        h: "Ce que couvre cette politique",
        p: [
          "Cette politique concerne uniquement ce site : les données que vous nous transmettez via le formulaire de contact et les traces techniques qu'une visite laisse inévitablement. Notre correspondance privée, nos dossiers internes et tout ce que la société traite en dehors du site relèvent d'arrangements internes distincts, qui ne sont pas décrits ici.",
        ],
      },
      {
        h: "Ce que nous collectons",
        p: [
          "Très peu, et uniquement ce que vous nous donnez vous-même. Lorsque vous utilisez le formulaire de contact, nous recevons :",
          "— votre nom, et la société que vous représentez si vous la mentionnez ;",
          "— votre adresse email, pour pouvoir vous répondre ;",
          "— votre message, ainsi que la langue dans laquelle le formulaire a été utilisé.",
          "Au-delà, seules des données techniques strictement nécessaires à l'affichage des pages et à la sécurité du site — rien de plus.",
          "Une demande : n'envoyez pas de documents financiers sensibles, de pièces d'identité ni de coordonnées bancaires via le formulaire. Nous ne les demanderons jamais. S'ils nous parviennent malgré tout, nous les traitons avec le même soin — mais ils sont plus en sécurité s'ils ne sont pas envoyés.",
        ],
      },
      {
        h: "Ce que nous en faisons",
        p: [
          "Votre message est lu, compris, puis il reçoit une réponse. Si un dialogue s'installe, nous en gardons une trace afin de ne jamais vous poser deux fois la même question. Le site n'est suivi que pour ses performances et sa sécurité. Et lorsque la loi nous impose de conserver quelque chose, nous nous y conformons.",
          "C'est toute la liste. Vos données ne servent ni au marketing, ni à établir des profils, et ne sont jamais vendues ni transmises à des fins commerciales.",
        ],
      },
      {
        h: "Ce que nous ne faisons jamais",
        p: [
          "Aucun traceur publicitaire. Aucun pixel de réseau social. Aucun suivi de visiteur de site en site. Aucun compte ne peut être créé ici, et aucun paiement n'est jamais collecté par ce site. Ce n'est pas une plateforme marketing, et cela ne le deviendra jamais.",
        ],
      },
      {
        h: "Sur quel fondement",
        p: [
          "Chaque utilisation de vos données repose sur l'un de quelques fondements simples, selon la LPD et, le cas échéant, le RGPD :",
          "— votre choix de nous contacter, et la réponse que nous vous devons ;",
          "— les démarches nécessaires pour répondre à une demande formulée de votre propre initiative ;",
          "— les obligations que la loi nous impose ;",
          "— l'intérêt légitime de maintenir ce site en fonctionnement et en sécurité.",
          "Aucun de ces fondements n'est jamais invoqué pour justifier quoi que ce soit au-delà de ce qui est décrit sur cette page.",
        ],
      },
      {
        h: "Qui voit vos données",
        p: [
          "Nous ne vendons, ne louons ni n'échangeons de données personnelles — il n'y a rien à vendre et personne à qui le vendre. Deux situations, et deux seulement, donnent à d'autres un accès :",
          "— les prestataires informatiques et d'hébergement qui font fonctionner ce site, choisis avec soin, liés par des accords de traitement des données et n'agissant que sur nos instructions ;",
          "— les autorités publiques, strictement dans les cas où la loi l'exige.",
        ],
      },
      {
        h: "Combien de temps nous les gardons",
        p: [
          "Pas plus longtemps que nécessaire. Un message est conservé le temps d'y répondre convenablement et, lorsqu'une correspondance se poursuit, tant que ce dialogue reste d'actualité. Une fois le délai légal échu, ou la finalité atteinte, les données sont supprimées de manière sécurisée.",
          "Aucune archive n'est constituée en arrière-plan, et votre message n'a pas de seconde vie.",
        ],
      },
      {
        h: "Cookies & statistiques",
        p: [
          "Ce site utilise le plus petit nombre de cookies compatible avec son fonctionnement. Lorsque l'usage est mesuré, nous privilégions des solutions respectueuses de la vie privée, sans consentement ni identification des personnes. Le détail figure dans notre Politique de Cookies.",
        ],
      },
      {
        h: "Hébergement & sécurité",
        p: [
          "Le site est hébergé par un prestataire professionnel, dans des installations offrant une protection physique et technique appropriée, et tout ce que vous envoyez est chiffré en transit. Les messages conservés ne peuvent être lus que par les rares personnes qui doivent le faire pour vous répondre — personne d'autre.",
        ],
      },
      {
        h: "Vos droits",
        p: [
          "Vos données vous appartiennent. Selon le droit suisse et, le cas échéant, le RGPD, vous pouvez demander à les consulter, les faire corriger ou supprimer, limiter ou contester leur traitement, ou les faire porter ailleurs.",
          "Pour exercer l'un de ces droits, écrivez à info@campusholdings.com. Chaque demande reçoit une réponse dans un délai raisonnable, et vous pouvez également vous tourner vers l'autorité de surveillance compétente si vous le préférez. Vous n'avez pas à justifier votre demande.",
        ],
      },
      {
        h: "Si cette politique change",
        p: [
          "Il se peut qu'elle évolue, si le site ou le droit change. La date en haut de cette page indique la version que vous lisez.",
        ],
      },
      {
        h: "Un dernier mot",
        p: [
          "Le résumé le plus simple de cette page tient en une phrase : nous collectons presque rien, nous ne l'utilisons que pour vous répondre, et nous ne le gardons pas plus longtemps que nécessaire. Si un doute subsiste, un email suffit à le lever.",
        ],
      },
    ],
  },
};

function PrivacyPolicy() {
  const { lang } = useLang();
  return (
    <LegalPageShell
      copy={COPY[lang]}
      siblings={[
        { to: "/legal-notice", en: "Legal Notice", fr: "Mentions Légales" },
        { to: "/cookie-policy", en: "Cookie Policy", fr: "Politique de Cookies" },
        {
          to: "/regulatory-information",
          en: "Regulatory Information",
          fr: "Informations Réglementaires",
        },
      ]}
    />
  );
}
