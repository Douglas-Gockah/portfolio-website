const services = [
  { icon: '◎', label: 'Product Design' },
  { icon: '△', label: 'Design Systems' },
  { icon: '□', label: 'Brand Identity' },
  { icon: '⬡', label: 'Prototyping' },
  { icon: '◇', label: 'User Research' },
  { icon: '○', label: 'Interaction Design' },
];

export function ServicesSection() {
  return (
    <section>
      <h2 className="text-base font-semibold text-t1 mb-4">
        I can help you with
      </h2>
      <div className="flex flex-wrap gap-2">
        {services.map((service) => (
          <span
            key={service.label}
            className="inline-flex items-center gap-2 px-4 py-2.5 border border-border rounded-pill text-sm text-t1 transition-colors hover:border-border2"
          >
            <span className="text-t3">{service.icon}</span>
            {service.label}
          </span>
        ))}
      </div>
    </section>
  );
}
