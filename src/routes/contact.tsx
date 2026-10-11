import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState, type FormEvent } from "react";
import { ArrowUpRight, Linkedin, MapPin } from "lucide-react";
import buildingHq from "@/assets/building-hq-final.png";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/i18n";

const address = "Avenue Giuseppe-Motta 31-33, 1202 Genève, Suisse";
const mapQuery = encodeURIComponent(address);
const mapUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
const linkedinSearchUrl = "https://www.linkedin.com/search/results/companies/?keywords=Campus%20Holding%20SA";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact | Campus Holding — Private Family Office, Geneva" },
      {
        name: "description",
        content: "Contact Campus Holding SA, a private Swiss family office in Geneva. Avenue Giuseppe-Motta 31-33, 1202 Genève, Switzerland.",
      },
      { property: "og:title", content: "Contact | Campus Holding — Private Family Office, Geneva" },
      { property: "og:description", content: "Contact Campus Holding SA — Geneva, Switzerland." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Contact() {
  const { lang } = useLang();
  const en = lang === "en";
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const renderTime = useRef(Date.now());

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if ((data.get("website") as string)?.trim()) return;
    if (Date.now() - renderTime.current < 4000) {
      setStatus("error");
      return;
    }

    const payload = {
      first_name: String(data.get("first_name") ?? "").trim(),
      last_name: String(data.get("last_name") ?? "").trim(),
      company: String(data.get("company") ?? "").trim() || null,
      email: String(data.get("email") ?? "").trim(),
      subject: String(data.get("subject") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
      locale: lang,
    };
    if (!payload.first_name || !payload.last_name || !payload.email || !payload.subject || !payload.message) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    const { error } = await supabase.from("contact_messages").insert(payload);
    if (error) {
      setStatus("error");
      return;
    }
    setStatus("sent");
    form.reset();
  }

  const inputClass = "mt-2 w-full border-b border-input bg-transparent px-0 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-foreground";

  return (
    <main className="mx-auto max-w-7xl px-6 pb-20 pt-32 md:pt-40 lg:px-10">
      <section className="border-b border-border pb-8 md:pb-10">
        <div className="grid gap-5 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="text-sm text-muted-foreground">Campus Holding SA — Genève</p>
            <h1 className="mt-5 font-serif text-5xl font-medium md:text-6xl">Contact</h1>
          </div>
          <p className="max-w-md text-base leading-relaxed text-foreground/75 md:col-span-5 md:pb-1">
            {en
              ? "You can write to our Geneva office by email or use the form below."
              : "Vous pouvez écrire à notre bureau de Genève par email ou utiliser le formulaire ci-dessous."}
          </p>
        </div>
      </section>

      <figure className="pt-6 md:pt-8">
        <img
          src={buildingHq}
          alt={en ? "Building at the registered office of Campus Holding SA in Geneva" : "Immeuble du siège de Campus Holding SA à Genève"}
          className="h-[260px] w-full object-cover object-center sm:h-[380px] lg:h-[440px] lg:object-bottom"
          fetchPriority="high"
        />
        <figcaption className="mt-2.5 text-xs text-muted-foreground">
          {en ? "Our office on Avenue Giuseppe-Motta, Geneva" : "Notre bureau, avenue Giuseppe-Motta à Genève"}
        </figcaption>
      </figure>

      <section className="grid gap-12 border-b border-border py-16 md:grid-cols-12 md:gap-12 md:py-20">
        <div className="md:col-span-4">
          <h2 className="font-serif text-2xl font-medium md:text-3xl">{en ? "Our office" : "Notre bureau"}</h2>
          <address className="mt-7 not-italic leading-relaxed">
            Campus Holding SA<br />Avenue Giuseppe-Motta 31-33<br />1202 Genève, Suisse
          </address>
          <a className="mt-6 block w-fit text-sm underline decoration-border underline-offset-4 hover:decoration-foreground" href="tel:+41225394144">+41 22 539 41 44</a>
          <a className="mt-2 block w-fit break-all text-sm underline decoration-border underline-offset-4 hover:decoration-foreground" href="mailto:info@campusholdings.com">info@campusholdings.com</a>
          <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm">
            <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 underline decoration-border underline-offset-4 hover:decoration-foreground" aria-label={en ? "Open directions in Google Maps (new tab)" : "Ouvrir l’itinéraire dans Google Maps (nouvel onglet)"}>
              <MapPin className="h-4 w-4" aria-hidden="true" />{en ? "Directions" : "Itinéraire"}<ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
            <a href={linkedinSearchUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 underline decoration-border underline-offset-4 hover:decoration-foreground" aria-label={en ? "Search for Campus Holding SA on LinkedIn (opens in a new tab)" : "Rechercher Campus Holding SA sur LinkedIn (nouvel onglet)"}>
              <Linkedin className="h-4 w-4" aria-hidden="true" />{en ? "Search on LinkedIn" : "Rechercher sur LinkedIn"}<ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
          <p className="mt-10 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {en
              ? "We are a private family office and do not offer services to the public."
              : "Nous sommes un family office privé et ne proposons pas de services au public."}
          </p>
        </div>

        <div className="md:col-span-8 md:border-l md:border-border md:pl-12 lg:pl-20">
          <h2 className="font-serif text-2xl font-medium md:text-3xl">{en ? "Write to us" : "Nous écrire"}</h2>
          {status === "sent" ? (
            <div role="status" className="py-10">
              <p className="text-xl font-medium">{en ? "Thank you for your message." : "Merci pour votre message."}</p>
              <p className="mt-2 text-sm text-muted-foreground">{en ? "It has been received." : "Nous l’avons bien reçu."}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-7">
              <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
              <div className="grid gap-x-7 gap-y-6 sm:grid-cols-2">
                <label className="block text-sm">{en ? "First name" : "Prénom"}<input name="first_name" type="text" required className={inputClass} /></label>
                <label className="block text-sm">{en ? "Last name" : "Nom"}<input name="last_name" type="text" required className={inputClass} /></label>
                <label className="block text-sm">{en ? "Company" : "Société"}<input name="company" type="text" className={inputClass} /></label>
                <label className="block text-sm">Email<input name="email" type="email" required className={inputClass} /></label>
                <label className="block text-sm sm:col-span-2">{en ? "Subject" : "Objet"}<input name="subject" type="text" required className={inputClass} /></label>
                <label className="block text-sm sm:col-span-2">Message<textarea name="message" required rows={4} className={`${inputClass} resize-y`} /></label>
              </div>
              <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                {en ? "Please don't include sensitive personal or financial details." : "Merci de ne pas inclure de données personnelles ou financières sensibles."}
              </p>
              {status === "error" && <p role="alert" className="mt-5 text-sm text-destructive">{en ? "Your message could not be sent. Please try again." : "Votre message n’a pas pu être envoyé. Merci de réessayer."}</p>}
              <Button variant="ghost" type="submit" disabled={status === "sending"} className="btn-quiet mt-6 h-auto rounded-none text-foreground hover:text-background">
                {status === "sending" ? (en ? "Sending…" : "Envoi…") : (en ? "Send message" : "Envoyer le message")}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </form>
          )}
        </div>
      </section>

      <section className="pt-14 md:pt-16" aria-label={en ? "Location" : "Emplacement"}>
        <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="font-serif text-2xl font-medium md:text-3xl">Genève</h2>
          <span className="text-sm text-muted-foreground">Avenue Giuseppe-Motta 31-33 · 1202 Genève</span>
        </div>
        <iframe
          title={en ? "Map of Campus Holding SA in Geneva" : "Carte du siège de Campus Holding SA à Genève"}
          src={mapUrl}
          className="h-[300px] w-full border border-border sm:h-[400px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </section>
    </main>
  );
}
