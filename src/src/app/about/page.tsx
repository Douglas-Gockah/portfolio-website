import { getSiteContent, getTestimonials } from '@/lib/queries';

export const revalidate = 60;

export default async function AboutPage() {
  const [siteContent, testimonials] = await Promise.all([
    getSiteContent('About'),
    getTestimonials(),
  ]);

  const content = (key: string) =>
    siteContent.find((c) => c.key === key)?.value ?? '';

  const philosophies = [
    { title: content('about_philosophy_1_title') || 'Depth Over Surface', desc: content('about_philosophy_1_desc') || 'I dig into the why before shaping the what.' },
    { title: content('about_philosophy_2_title') || 'Systems Over Screens', desc: content('about_philosophy_2_desc') || 'I think in components, patterns, and scalable logic.' },
    { title: content('about_philosophy_3_title') || 'Speed Through Structure', desc: content('about_philosophy_3_desc') || 'Good frameworks let you move fast without breaking things.' },
  ];

  return (
    <div className="flex flex-col gap-12">
      {/* Bio */}
      <section>
        <h1 className="text-[22px] font-bold heading-tight mb-4">About</h1>
        <p className="text-sm text-t2 leading-relaxed">
          {content('about_intro') ||
            "I'm Douglas Gockah, a Product Designer based in Ghana with 5+ years of experience crafting digital experiences. I specialize in enterprise platforms, payment systems, and design systems that scale."}
        </p>
      </section>

      {/* Values */}
      <section>
        <h2 className="text-base font-semibold text-t1 mb-4">
          Design Philosophy
        </h2>
        <div className="grid grid-cols-1 gap-3">
          {philosophies.map((value) => (
            <div
              key={value.title}
              className="p-4 border border-border rounded-card"
            >
              <h3 className="text-sm font-medium text-t1">{value.title}</h3>
              <p className="text-xs text-t2 mt-1">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section>
          <h2 className="text-base font-semibold text-t1 mb-4">
            What people say
          </h2>
          <div className="flex flex-col gap-3">
            {testimonials.map((t) => (
              <div
                key={t.quote}
                className="p-4 border border-border rounded-card"
              >
                <p className="text-sm text-t2 italic leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <div className="w-8 h-8 rounded-full bg-bg3 border border-border flex items-center justify-center">
                    <span className="text-[10px] font-medium text-t3">
                      {t.authorInitials}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-t1">
                      {t.authorName}
                    </p>
                    <p className="text-[11px] text-t3">{t.authorRole}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Contact CTA */}
      <section className="text-center py-4">
        <a
          href="mailto:douglasgockah@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-bg text-sm font-medium rounded-pill"
        >
          Get in touch
        </a>
      </section>
    </div>
  );
}
