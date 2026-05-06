export function SnapshotsCarousel() {
  // Placeholder snapshots — will be populated from Notion Media DB
  const snapshots = [
    { id: 1, alt: 'Design snapshot 1' },
    { id: 2, alt: 'Design snapshot 2' },
    { id: 3, alt: 'Design snapshot 3' },
    { id: 4, alt: 'Design snapshot 4' },
  ];

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-t1">Snapshots</h2>
        <span className="text-xs text-t3">Scroll →</span>
      </div>
      <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 -mx-4 px-4 scrollbar-hide">
        {snapshots.map((snap) => (
          <div
            key={snap.id}
            className="flex-shrink-0 w-[200px] h-[130px] bg-bg2 border border-border rounded-card snap-start"
          />
        ))}
      </div>
    </section>
  );
}
