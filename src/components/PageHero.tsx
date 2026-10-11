import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHero({
  image,
  label,
  title,
  intro,
  children,
}: {
  image: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative flex min-h-[72vh] items-end overflow-hidden">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/30 to-foreground/10" />
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-48 lg:px-10">
        <Reveal>
          <p className="label-caps text-primary-foreground/80">
            {label}
          </p>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl font-normal leading-[1.05] text-primary-foreground md:text-6xl lg:text-7xl">
            {title}
          </h1>
          {intro ? (
            <p className="mt-8 max-w-xl text-base leading-relaxed text-primary-foreground/85">
              {intro}
            </p>
          ) : null}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
