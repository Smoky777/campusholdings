import { createFileRoute } from "@tanstack/react-router";
import { LegalPageShell } from "./legal-notice";
import { useLang, type Lang } from "@/lib/i18n";

export const Route = createFileRoute("/regulatory-information")({
  component: RegulatoryInformation,
  head: () => ({
    meta: [
      {
        title: "Regulatory Information | Campus Holding SA — Geneva",
      },
      {
        name: "description",
        content:
          "Regulatory information and financial disclaimer of Campus Holding SA. This website does not constitute an offer, solicitation or investment advice.",
      },
      {
        property: "og:title",
        content: "Regulatory Information | Campus Holding SA — Geneva",
      },
      {
        property: "og:description",
        content:
          "Regulatory information and financial disclaimer of Campus Holding SA.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

type Copy = Record<
  Lang,
  { title: string; updated: string; blocks: { h: string; p: string[] }[] }
>;

const COPY: Copy = {
  en: {
    title: "Regulatory Information",
    updated: "Last updated: September 2026",
    blocks: [
      {
        h: "Status of the Company",
        p: [
          "Campus Holding SA is a private family office. Its activity consists in administering and developing the interests of one family. As it does not provide financial services to the public, it does not hold itself out as a supervised financial institution and its website is not subject to the rules that apply to public offerings or client acquisition.",
        ],
      },
      {
        h: "No Offer or Solicitation",
        p: [
          "Nothing on this website constitutes, or should be interpreted as, an offer to sell or a solicitation of an offer to buy any investment, product or service, nor as investment, legal, tax or accounting advice.",
          "Descriptions of the company's approach or of its areas of investment are given for information only. They are not recommendations, and they say nothing about the suitability of any decision for any particular person.",
        ],
      },
      {
        h: "No Public Offering, No Third-Party Assets",
        p: [
          "The website is purely informative. It does not seek clients, does not accept third-party assets and does not collect capital. Any decision should be made with your own qualified advisers.",
        ],
      },
      {
        h: "Figures and Descriptions",
        p: [
          "Where this website mentions figures or describes activities, these are given as general descriptions of the company's position and history. They are not audited disclosures, not performance data, and not a basis for any decision.",
        ],
      },
      {
        h: "Forward-Looking Statements",
        p: [
          "Where the website describes approaches or intentions, these are statements of principle and not commitments, forecasts or guarantees of any future outcome.",
        ],
      },
      {
        h: "Accuracy of Information",
        p: [
          "The content of this website is prepared with care, but Campus Holding SA gives no warranty as to its completeness, accuracy or timeliness, and accepts no liability for any use made of it. Historical elements presented on this site concern the history of the family and are provided as context; they are separate from the activities of the company.",
        ],
      },
      {
        h: "Applicable Law",
        p: [
          "This website and its content are governed by Swiss law. Any dispute relating to their use falls, subject to any mandatory provision, under the jurisdiction of the courts of Geneva.",
        ],
      },
      {
        h: "Questions",
        p: [
          "For any question regarding this page, write to info@campusholdings.com.",
        ],
      },
    ],
  },
  fr: {
    title: "Informations Réglementaires",
    updated: "Dernière mise à jour : septembre 2026",
    blocks: [
      {
        h: "Statut de la société",
        p: [
          "Campus Holding SA est un family office privé. Son activité consiste à administrer et développer les intérêts d'une seule famille. N'offrant pas de services financiers au public, elle ne se présente pas comme une institution financière supervisée, et son site n'est pas soumis aux règles applicables aux offres au public ou à la démarchage de clients.",
        ],
      },
      {
        h: "Aucune offre ni sollicitation",
        p: [
          "Rien sur ce site ne constitue, ni ne doit être interprété comme, une offre de vente ou une sollicitation d'offre d'achat d'un investissement, produit ou service, ni un conseil en investissement, juridique, fiscal ou comptable.",
          "Les descriptions de l'approche de la société ou de ses domaines d'investissement sont données à titre d'information. Elles ne constituent pas des recommandations et ne disent rien de l'adéquation d'une quelconque décision pour une personne en particulier.",
        ],
      },
      {
        h: "Aucun appel public, aucun actif tiers",
        p: [
          "Ce site est purement informatif. Il ne recherche pas de clients, n'accepte pas d'actifs tiers et ne collecte pas de capitaux. Toute décision doit être prise avec vos propres conseillers qualifiés.",
        ],
      },
      {
        h: "Chiffres et descriptions",
        p: [
          "Lorsque ce site mentionne des chiffres ou décrit des activités, il s'agit de descriptions générales de la position et de l'histoire de la société. Ce ne sont pas des informations auditées, pas des données de performance, et pas une base de décision.",
        ],
      },
      {
        h: "Déclarations prospectives",
        p: [
          "Lorsque le site décrit des approches ou des intentions, il s'agit de principes et non d'engagements, de prévisions ou de garanties de tout résultat futur.",
        ],
      },
      {
        h: "Exactitude des informations",
        p: [
          "Le contenu de ce site est préparé avec soin, mais Campus Holding SA ne garantit ni son exhaustivité, ni son exactitude, ni son actualité, et décline toute responsabilité quant à l'usage qui en serait fait. Les éléments historiques présentés sur ce site concernent l'histoire de la famille et sont donnés à titre de contexte ; ils sont distincts des activités de la société.",
        ],
      },
      {
        h: "Droit applicable",
        p: [
          "Ce site et son contenu sont régis par le droit suisse. Tout litige relatif à leur utilisation relève, sous réserve de toute disposition impérative, de la juridiction des tribunaux du canton de Genève.",
        ],
      },
      {
        h: "Questions",
        p: [
          "Pour toute question relative à cette page, écrivez à info@campusholdings.com.",
        ],
      },
    ],
  },
};

function RegulatoryInformation() {
  const { lang } = useLang();
  return (
    <LegalPageShell
      copy={COPY[lang]}
      siblings={[
        { to: "/legal-notice", en: "Legal Notice", fr: "Mentions Légales" },
        {
          to: "/privacy-policy",
          en: "Privacy Policy",
          fr: "Politique de Confidentialité",
        },
        { to: "/cookie-policy", en: "Cookie Policy", fr: "Politique de Cookies" },
      ]}
    />
  );
}
