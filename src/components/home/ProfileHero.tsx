interface ProfileHeroProps {
  headline: string;
  subtitle: string;
  status: string;
  email: string;
}

export function ProfileHero({ headline, subtitle, status, email }: ProfileHeroProps) {
  return (
    <section className="flex flex-col items-center text-center gap-4 pt-8">
      {/* Avatar */}
      <div className="w-20 h-20 rounded-full bg-bg3 border border-border flex items-center justify-center">
        <span className="text-2xl font-semibold text-t2">DG</span>
      </div>

      {/* Name & bio */}
      <div className="flex flex-col gap-2">
        <h1 className="text-lg font-bold heading-tight text-t1">
          {headline}
        </h1>
        <p className="text-sm text-t2 max-w-[320px]">
          {subtitle}
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex items-center gap-3 mt-2">
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-bg text-sm font-medium rounded-full"
        >
          <span className="w-2 h-2 rounded-full bg-green" />
          {status}
        </a>
        <a
          href="/work"
          className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-t1 text-sm font-medium rounded-full"
        >
          View work
        </a>
      </div>
    </section>
  );
}
