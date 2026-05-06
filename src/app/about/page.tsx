export default function AboutPage() {
  return (
    <div className="flex flex-col gap-12">
      {/* Bio */}
      <section>
        <h1 className="text-[22px] font-bold heading-tight mb-4">About</h1>
        <p className="text-sm text-t2 leading-relaxed">
          I&apos;m Douglas Gockah, a Product Designer based in Ghana with 5+
          years of experience crafting digital experiences. I specialize in
          enterprise platforms, payment systems, and design systems that scale.
        </p>
      </section>

      {/* Values */}
      <section>
        <h2 className="text-base font-semibold text-t1 mb-4">
          Design Philosophy
        </h2>
        <div className="grid grid-cols-1 gap-3">
          {[
            {
              title: 'Depth Over Surface',
              desc: 'I dig into the why before shaping the what.',
            },
            {
              title: 'Systems Over Screens',
              desc: 'I think in components, patterns, and scalable logic.',
            },
            {
              title: 'Speed Through Structure',
              desc: 'Good frameworks let you move fast without breaking things.',
            },
          ].map((value) => (
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
