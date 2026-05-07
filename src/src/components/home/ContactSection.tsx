interface ContactSectionProps {
  headline?: string;
  subtitle?: string;
  email?: string;
}

export function ContactSection({
  headline = "Let's work together",
  subtitle = 'Currently available for freelance projects and full-time roles.',
  email = 'douglasgockah@gmail.com',
}: ContactSectionProps) {
  return (
    <section className="text-center py-8">
      <h2 className="text-base font-semibold text-t1 mb-2">{headline}</h2>
      <p className="text-sm text-t2 mb-5">{subtitle}</p>
      <a
        href={`mailto:${email}`}
        className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-bg text-sm font-medium rounded-pill transition-opacity hover:opacity-90"
      >
        Get in touch
      </a>
    </section>
  );
}
