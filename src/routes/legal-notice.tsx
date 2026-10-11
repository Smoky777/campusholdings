import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { useLang, type Lang } from "@/lib/i18n";

export const Route = createFileRoute("/legal-notice")({
  component: LegalNotice,
  head: () => ({
    meta: [
      { title: "Legal Notice | Campus Holding SA — Geneva" },
      {
        name: "description",
        content:
          "Legal notice of Campus Holding SA, société anonyme, registered in Geneva — CH-170.3.032.107-7, CHE-114.282.590.",
      },
      { property: "og:title", content: "Legal Notice | Campus Holding SA — Geneva" },
      {
        property: "og:description",
        content: "Legal notice of Campus Holding SA, Geneva, Switzerland.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

type Block = { h: string; p: string[]; tone?: "notice" };
type Copy = Record<Lang, { title: string; updated: string; intro: string; facts: { k: string; v: string }[]; blocks: Block[] }>;

const COPY: Copy = {
  en: {
    title: "Legal Notice",
    updated: "Last updated: February 2026",
    intro:
      "This notice brings together the legal information relating to Campus Holding SA and the conditions under which this website is published. It applies to the whole site and to every page it contains.",
    facts: [
      { k: "Legal form", v: "Société anonyme (SA) under Swiss law" },
      { k: "Founded", v: "2008, Geneva" },
      { k: "Registered office", v: "Avenue Giuseppe-Motta 31-33, 1202 Geneva" },
      { k: "Commercial register", v: "CH-170.3.032.107-7" },
      { k: "UID / VAT", v: "CHE-114.282.590" },
      { k: "Phone", v: "+41 22 539 41 44" },
      { k: "Contact", v: "info@campusholdings.com" },
    ],
    blocks: [
      {
        h: "Company",
        p: [
          "Campus Holding SA is a société anonyme (SA) organised under the laws of Switzerland, with its registered office in Geneva. The company was founded in 2008 by Ernesto Bertarelli and is wholly held by the family. It has no subsidiary open to outside shareholders and no capital held by third parties.",
          "The company is entered in the Commercial Register of the Canton of Geneva under number CH-170.3.032.107-7 and has remained so, without interruption, since its incorporation — eighteen years at the time of writing. Its enterprise identification number (UID) is CHE-114.282.590. The full registry extract may be obtained from the Geneva Commercial Register upon request.",
          "Campus Holding SA is an independent legal entity. It shares a common founder with the Campus Biotech foundation in Geneva — Ernesto Bertarelli — but has no legal, financial or operational connection with it: no shared management, no shared capital and no shared activity. Any confusion between the two entities should be avoided.",
        ],
      },
      {
        h: "Corporate Purpose",
        p: [
          "The company's purpose, as set out in its articles of association, is the acquisition, administration and long-term development of participations and assets on behalf of the family. The company acts exclusively for its own account and in the interest of the family it serves.",
          "The company does not carry on any activity subject to authorisation by the Swiss Financial Market Supervisory Authority (FINMA). In particular, it is not a bank, a securities firm, a fund management company, an asset manager of collective investment schemes, or an insurance undertaking within the meaning of Swiss financial market legislation.",
        ],
      },
      {
        h: "Representation",
        p: [
          "The person authorised to sign on behalf of the company is Ernesto Bertarelli.",
          "Any commitment entered into on behalf of Campus Holding SA is binding only where it is signed by the authorised person referred to above, acting within the limits of the corporate purpose. Documents, offers or commitments presented by any other person and purporting to bind the company should be treated with caution and reported to the registered office.",
        ],
      },
      {
        h: "Registered Office & Contact",
        p: [
          "Registered office: Avenue Giuseppe-Motta 31-33, 1202 Geneva, Switzerland. All correspondence intended for the company should be addressed to the registered office.",
          "For questions relating to this website or to the company, you may write to info@campusholdings.com. Please do not send sensitive financial documents, identity papers or banking details by email or through the contact form; the company will never request such documents through these channels.",
        ],
      },
      {
        h: "Nature of the Activity",
        tone: "notice",
        p: [
          "Campus Holding SA is a private family office. It administers and develops the interests of one family only. It does not offer services to the public, does not manage third-party assets, does not provide financial, legal or tax advice, and does not solicit investments of any kind.",
          "Nothing published on this website constitutes an invitation to become a client, to invest, to subscribe to any instrument, or to entrust assets to the company. The company accepts no third-party assets, under any circumstances, and no process exists by which an outside party may apply to do so.",
          "Any approach, proposal or communication claiming to emanate from Campus Holding SA and inviting you to invest, transfer funds or open an account is fraudulent. The company does not contact members of the public for investment purposes and does not operate through intermediaries, brokers or online platforms.",
        ],
      },
      {
        h: "Purpose of this Website",
        p: [
          "This website exists to present the company, its history and the principles that govern its activity. It is purely informative. None of its pages constitutes an offer, a prospectus, a recommendation or advice of any kind, within the meaning of Swiss law or of any other jurisdiction.",
          "The descriptions of the company's activity are general in nature. They are not a description of services available to the reader, and they create no rights and no expectations. For further detail on this point, please refer to our Regulatory Information page.",
        ],
      },
      {
        h: "No Public Offering",
        p: [
          "No content on this website constitutes a public offering of securities or of any other financial instrument in Switzerland or abroad. The company has not approved, and will not approve, any prospectus relating to it under the Swiss Financial Services Act (FinSA) or any equivalent foreign legislation.",
          "Access to this website may be restricted by the laws of certain jurisdictions. Persons who access it from outside Switzerland do so on their own initiative and are responsible for compliance with the laws applicable to them.",
        ],
      },
      {
        h: "Intellectual Property",
        p: [
          "The content of this website — texts, layout, photographs, graphic elements and the structure of the pages — is the property of Campus Holding SA or is used by it under licence. Any reproduction, adaptation, distribution or other use, in whole or in part, without the prior written consent of the company is prohibited.",
          "The name Campus Holding SA, the company's visual identity and the associated graphic elements are protected. Their use, in particular in documents, domain names or communications of any kind, without the company's authorisation is not permitted and may give rise to legal action.",
        ],
      },
      {
        h: "Photographs & Credits",
        p: [
          "The photographs and visual elements used on this website are the property of Campus Holding SA or are licensed for its use. They may not be copied, downloaded for reuse or reproduced without prior written consent. In keeping with the company's practice, author credits are deliberately not displayed on this site.",
        ],
      },
      {
        h: "Liability",
        p: [
          "The information published on this website is provided for general information purposes only. While the company takes care in preparing its content, Campus Holding SA makes no representation as to the completeness, accuracy or timeliness of the information published, and accepts no liability for any use made of it or for any decision taken on the basis of it.",
          "The company may modify, supplement or remove the content of this website at any time and without notice, and is under no obligation to keep it current. The company likewise accepts no liability for technical interruptions, errors or the temporary unavailability of the site.",
        ],
      },
      {
        h: "External Links",
        p: [
          "This website may contain links to third-party websites — for example, an embedded map provider or a professional network. These sites are operated independently. Campus Holding SA has no control over their content, availability or practices, and accepts no responsibility in respect of them. The presence of a link does not imply any endorsement of the site concerned.",
        ],
      },
      {
        h: "Personal Data",
        p: [
          "This website collects as little personal data as possible. Messages sent through the contact form are used solely to reply to you and are never shared with third parties or used for any other purpose. The manner in which the company handles personal data is described in full in our Privacy Policy.",
        ],
      },
      {
        h: "Reference Language",
        p: [
          "This website is offered in English and in French. Both versions are prepared with the same care; however, in the event of any discrepancy in meaning between them, the French version prevails.",
        ],
      },
      {
        h: "Governing Law & Jurisdiction",
        p: [
          "This legal notice and the use of this website are governed exclusively by Swiss law, to the exclusion of any conflict-of-laws rule that would lead to the application of another law.",
          "Subject to any mandatory provision to the contrary, any dispute arising out of or in connection with this website falls within the exclusive jurisdiction of the courts of the Canton of Geneva, the company's registered office being the relevant venue.",
        ],
      },
    ],
  },
  fr: {
    title: "Mentions Légales",
    updated: "Dernière mise à jour : février 2026",
    intro:
      "Les présentes mentions rassemblent les informations légales relatives à Campus Holding SA ainsi que les conditions dans lesquelles ce site est publié. Elles s'appliquent à l'ensemble du site et à chacune de ses pages.",
    facts: [
      { k: "Forme juridique", v: "Société anonyme (SA) de droit suisse" },
      { k: "Fondation", v: "2008, Genève" },
      { k: "Siège social", v: "Avenue Giuseppe-Motta 31-33, 1202 Genève" },
      { k: "Registre du commerce", v: "CH-170.3.032.107-7" },
      { k: "IDE / TVA", v: "CHE-114.282.590" },
      { k: "Téléphone", v: "+41 22 539 41 44" },
      { k: "Contact", v: "info@campusholdings.com" },
    ],
    blocks: [
      {
        h: "Société",
        p: [
          "Campus Holding SA est une société anonyme (SA) de droit suisse, dont le siège est à Genève. La société a été fondée en 2008 par Ernesto Bertarelli et est détenue entièrement par la famille. Elle ne compte aucune filiale ouverte à des actionnaires extérieurs et aucun capital détenu par des tiers.",
          "La société est inscrite au Registre du commerce du canton de Genève sous le numéro CH-170.3.032.107-7, et ce sans interruption depuis sa constitution — dix-huit ans à ce jour. Son numéro d'identification des entreprises (IDE) est CHE-114.282.590. L'extrait complet du registre peut être obtenu auprès du Registre du commerce de Genève sur demande.",
          "Campus Holding SA est une entité juridique indépendante. Elle partage un fondateur commun avec la fondation Campus Biotech à Genève — Ernesto Bertarelli — mais n'entretient avec elle aucun lien juridique, financier ou opérationnel : ni direction commune, ni capital commun, ni activité commune. Toute confusion entre les deux entités doit être évitée.",
        ],
      },
      {
        h: "Objet social",
        p: [
          "L'objet de la société, tel que défini dans ses statuts, est l'acquisition, l'administration et le développement à long terme de participations et d'actifs pour le compte de la famille. La société agit exclusivement pour son propre compte et dans l'intérêt de la famille qu'elle sert.",
          "La société n'exerce aucune activité soumise à l'autorisation de l'Autorité fédérale de surveillance des marchés financiers (FINMA). Elle n'est notamment ni une banque, ni une maison de titres, ni une direction de fonds, ni un gestionnaire de fortune au sens de la législation suisse sur les marchés financiers, ni une entreprise d'assurance.",
        ],
      },
      {
        h: "Représentation",
        p: [
          "La personne habilitée à signer au nom de la société est Ernesto Bertarelli.",
          "Tout engagement pris au nom de Campus Holding SA n'engage la société que s'il est signé par la personne habilitée visée ci-dessus, agissant dans les limites de l'objet social. Les documents, offres ou engagements présentés par toute autre personne comme engageant la société doivent être considérés avec prudence et signalés au siège social.",
        ],
      },
      {
        h: "Siège & Contact",
        p: [
          "Siège social : Avenue Giuseppe-Motta 31-33, 1202 Genève, Suisse. Toute correspondance destinée à la société doit être adressée au siège social.",
          "Pour toute question relative à ce site ou à la société, vous pouvez écrire à info@campusholdings.com. Merci de ne pas transmettre de documents financiers sensibles, de pièces d'identité ou de coordonnées bancaires par email ni via le formulaire de contact ; la société ne demande jamais de tels documents par ces canaux.",
        ],
      },
      {
        h: "Nature de l'activité",
        tone: "notice",
        p: [
          "Campus Holding SA est un family office privé. Elle administre et développe les intérêts d'une seule famille. Elle n'offre pas de services au public, ne gère pas d'actifs tiers, ne fournit pas de conseils financiers, juridiques ou fiscaux, et ne sollicite aucun investissement.",
          "Rien de ce qui est publié sur ce site ne constitue une invitation à devenir client, à investir, à souscrire un instrument quelconque ou à confier des actifs à la société. La société n'accepte aucun actif tiers, en aucune circonstance, et il n'existe aucune procédure permettant à un tiers de le demander.",
          "Toute démarche, proposition ou communication se réclamant de Campus Holding SA et vous invitant à investir, à transférer des fonds ou à ouvrir un compte est frauduleuse. La société ne contacte pas le public à des fins d'investissement et n'opère ni par intermédiaires, ni par courtiers, ni par plateformes en ligne.",
        ],
      },
      {
        h: "Objet de ce site",
        p: [
          "Ce site existe pour présenter la société, son histoire et les principes qui régissent son activité. Il est purement informatif. Aucune de ses pages ne constitue une offre, un prospectus, une recommandation ou un conseil d'aucune sorte, au sens du droit suisse ou de toute autre juridiction.",
          "Les descriptions de l'activité de la société sont de nature générale. Elles ne décrivent pas des services offerts au lecteur et ne créent ni droits ni attentes. Pour plus de détail sur ce point, voir notre page Informations Réglementaires.",
        ],
      },
      {
        h: "Absence d'offre publique",
        p: [
          "Aucun contenu de ce site ne constitue une offre publique de titres ou d'autres instruments financiers, en Suisse ou à l'étranger. La société n'a approuvé et n'approuvera aucun prospectus la concernant au sens de la Loi fédérale sur les services financiers (LSFin) ou de toute législation étrangère équivalente.",
          "L'accès à ce site peut être soumis à des restrictions légales dans certaines juridictions. Les personnes qui y accèdent depuis l'étranger le font de leur propre initiative et sont tenues de se conformer au droit qui leur est applicable.",
        ],
      },
      {
        h: "Propriété intellectuelle",
        p: [
          "Le contenu de ce site — textes, mise en page, photographies, éléments graphiques et structure des pages — est la propriété de Campus Holding SA ou est utilisé par elle sous licence. Toute reproduction, adaptation, diffusion ou autre utilisation, totale ou partielle, sans l'autorisation écrite préalable de la société est interdite.",
          "Le nom Campus Holding SA, l'identité visuelle de la société et les éléments graphiques associés sont protégés. Leur utilisation, notamment dans des documents, des noms de domaine ou des communications de toute nature, sans l'autorisation de la société n'est pas permise et peut donner lieu à des poursuites.",
        ],
      },
      {
        h: "Photographies & Crédits",
        p: [
          "Les photographies et éléments visuels utilisés sur ce site sont la propriété de Campus Holding SA ou sont utilisés sous licence. Ils ne peuvent être copiés, téléchargés aux fins de réutilisation ou reproduits sans autorisation écrite préalable. Conformément à la pratique de la société, les crédits d'auteur ne sont volontairement pas affichés sur ce site.",
        ],
      },
      {
        h: "Responsabilité",
        p: [
          "Les informations publiées sur ce site le sont à titre purement informatif. Bien que la société apporte le plus grand soin à la rédaction de ses contenus, Campus Holding SA ne garantit ni l'exhaustivité, ni l'exactitude, ni l'actualité des informations publiées, et décline toute responsabilité quant à l'usage qui en serait fait ou aux décisions prises sur leur base.",
          "La société peut modifier, compléter ou supprimer le contenu de ce site à tout moment et sans préavis, et n'est pas tenue de le maintenir à jour. Elle décline également toute responsabilité en cas d'interruption technique, d'erreur ou d'indisponibilité temporaire du site.",
        ],
      },
      {
        h: "Liens externes",
        p: [
          "Ce site peut contenir des liens vers des sites de tiers — par exemple un fournisseur de cartes intégrées ou un réseau professionnel. Ces sites sont exploités de manière indépendante. Campus Holding SA n'exerce aucun contrôle sur leur contenu, leur disponibilité ou leurs pratiques et décline toute responsabilité à leur égard. La présence d'un lien ne vaut pas approbation du site concerné.",
        ],
      },
      {
        h: "Données personnelles",
        p: [
          "Ce site collecte le moins de données personnelles possible. Les messages envoyés via le formulaire de contact servent uniquement à vous répondre et ne sont jamais partagés avec des tiers ni utilisés à d'autres fins. La manière dont la société traite les données personnelles est décrite en détail dans notre Politique de Confidentialité.",
        ],
      },
      {
        h: "Langue de référence",
        p: [
          "Ce site est proposé en anglais et en français. Les deux versions sont rédigées avec le même soin ; toutefois, en cas de divergence de sens entre elles, la version française prévaut.",
        ],
      },
      {
        h: "Droit applicable & For juridique",
        p: [
          "Les présentes mentions légales et l'utilisation de ce site sont régies exclusivement par le droit suisse, à l'exclusion de toute règle de conflit de lois qui conduirait à l'application d'un autre droit.",
          "Sous réserve de toute disposition impérative contraire, tout litige né de ce site ou en relation avec lui est soumis à la juridiction exclusive des tribunaux du canton de Genève, le for étant celui du siège de la société.",
        ],
      },
    ],
  },
};

export function LegalPageShell({
  copy,
  siblings,
  signature,
}: {
  copy: { title: string; updated?: string; intro?: string; eyebrow?: string; facts?: { k: string; v: string }[]; blocks: { h: string; p: string[]; tone?: "notice" }[] };
  siblings: { to: string; en: string; fr: string }[];
  signature?: { lines: string[]; name: string };
}) {
  const { lang } = useLang();
  const en = lang === "en";

  return (
    <main className="relative mx-auto w-full max-w-4xl px-6 pb-24 pt-36 md:pt-44 lg:px-10">
      {/* Filigrane du logo en arrière-plan de la page */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-24 z-0 flex select-none justify-center md:top-32"
      >
        <img
          src="/images/campus-logo.png"
          alt=""
          className="w-[min(640px,94%)] opacity-[0.05]"
        />
      </div>

      <div className="relative z-10">
        <Reveal>
          <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border pb-4">
            <p className="font-serif text-[1.02rem] tracking-wide text-foreground">
              {en
                ? "Campus Holding SA — Geneva, Switzerland"
                : "Campus Holding SA — Société anonyme, Genève"}
            </p>
          </div>
          <p className="label-caps mt-10 text-accent">
            {copy.eyebrow ?? (en ? "Legal" : "Mentions légales")}
          </p>
          <h1 className="mt-5 font-serif text-5xl font-medium md:text-[3.5rem]">
            {copy.title}
          </h1>
          <div aria-hidden="true" className="mt-7 h-px w-16 bg-accent" />
          {copy.updated && (
            <p className="mt-6 font-sans text-[0.85rem] tracking-wide text-muted-foreground">
              {copy.updated}
            </p>
          )}
          {copy.intro && (
            <p className="mt-8 max-w-2xl font-sans text-[1.05rem] font-light leading-[1.75] text-foreground">
              {copy.intro}
            </p>
          )}
        </Reveal>

        {copy.facts && copy.facts.length > 0 && (
          <Reveal delay={60}>
            <dl className="mt-12 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2">
              {copy.facts.map((f, i, arr) => (
                <div
                  key={f.k}
                  className={
                    "bg-background px-5 py-4" +
                    (arr.length % 2 === 1 && i === arr.length - 1
                      ? " sm:col-span-2"
                      : "")
                  }
                >
                  <dt className="label-caps text-[0.65rem] text-muted-foreground">
                    {f.k}
                  </dt>
                  <dd className="mt-1.5 font-sans text-[0.95rem] text-foreground">{f.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        )}

        {copy.blocks.length >= 6 && (
          <Reveal delay={100}>
            <nav
              aria-label={en ? "Contents" : "Sommaire"}
              className="mt-12 border border-border px-6 py-6 md:px-8"
            >
              <p className="label-caps text-[0.65rem] text-accent">
                {en ? "Contents" : "Sommaire"}
              </p>
              <ol className="mt-4 grid grid-cols-1 gap-x-10 gap-y-1.5 sm:grid-cols-2">
                {copy.blocks.map((b, i) => (
                  <li key={b.h}>
                    <a
                      href={`#article-${i + 1}`}
                      className="flex gap-3 font-sans text-[0.92rem] text-foreground hover:text-accent"
                    >
                      <span
                        aria-hidden="true"
                        className="font-serif text-accent/80"
                      >
                        {i + 1}.
                      </span>
                      <span>{b.h}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </Reveal>
        )}

        <div className="mt-16 space-y-16">
          {copy.blocks.map((b, i) => (
            <Reveal key={b.h} delay={Math.min(i, 4) * 50}>
              <section
                id={`article-${i + 1}`}
                className={
                  b.tone === "notice"
                    ? "scroll-mt-32 border border-border border-l-2 border-l-accent bg-secondary/40 p-6 md:p-8"
                    : "scroll-mt-32"
                }
              >
                <div
                  className={
                    b.tone === "notice"
                      ? "flex items-baseline gap-4"
                      : "flex items-baseline gap-3.5"
                  }
                >
                  <span
                    aria-hidden="true"
                    className="shrink-0 font-serif text-[1.05rem] text-accent"
                  >
                    {i + 1}.
                  </span>
                  <h2 className="font-serif text-[1.5rem] text-foreground">
                    {b.h}
                  </h2>
                </div>
                <div className="mt-6 space-y-5">
                  {renderSegments(b.p)}
                </div>
              </section>
            </Reveal>
          ))}
        </div>

        {signature && (
          <div className="mt-20 flex justify-end">
            <div className="text-right">
              {signature.lines.map((l) => (
                <p key={l} className="font-sans text-[0.9rem] font-light text-foreground">
                  {l}
                </p>
              ))}
              <div className="ml-auto mt-12 w-60 border-t border-foreground/50 pt-3">
                <p className="font-serif text-[1.2rem] text-foreground">
                  {signature.name}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="mt-16 border-t border-border pt-8">
          <p className="label-caps text-xs text-muted-foreground">
            {en ? "Related" : "À voir également"}
          </p>
          <div className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
            {siblings.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="text-sm text-foreground underline-offset-4 hover:text-accent hover:underline"
              >
                {en ? s.en : s.fr}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

type Seg =
  | { kind: "p"; text: string }
  | { kind: "list"; items: string[] };

function buildSegments(paras: string[]): Seg[] {
  const segs: Seg[] = [];
  for (const p of paras) {
    if (p.startsWith("— ")) {
      const last = segs[segs.length - 1];
      if (last && last.kind === "list") last.items.push(p.slice(2));
      else segs.push({ kind: "list", items: [p.slice(2)] });
    } else {
      segs.push({ kind: "p", text: p });
    }
  }
  return segs;
}

function renderSegments(paras: string[]) {
  return buildSegments(paras).map((seg, k) =>
    seg.kind === "list" ? (
      <ul key={k} className="space-y-3.5">
        {seg.items.map((it, j) => (
          <li key={j} className="flex gap-4">
            <span
              aria-hidden="true"
              className="mt-[0.68em] h-px w-4 shrink-0 bg-accent/70"
            />
            <p className="font-sans text-[1.02rem] font-light leading-[1.75] text-foreground">

              {it}
            </p>
          </li>
        ))}
      </ul>
    ) : (
      <p
        key={k}
        className="font-sans text-[1.02rem] font-light leading-[1.75] text-foreground"
      >
        {seg.text}
      </p>
    )
  );
}

function LegalNotice() {
  const { lang } = useLang();
  const en = lang === "en";
  return (
    <LegalPageShell
      copy={COPY[lang]}
      signature={{
        lines: en
          ? ["Done at Geneva, in February 2026", "For Campus Holding SA"]
          : ["Fait à Genève, en février 2026", "Pour Campus Holding SA"],
        name: "Ernesto Bertarelli",
      }}
      siblings={[
        { to: "/privacy-policy", en: "Privacy Policy", fr: "Politique de Confidentialité" },
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
