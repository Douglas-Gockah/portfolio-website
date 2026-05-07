import type { MediaItem } from '@/types/notion';

interface SnapshotsCarouselProps {
  snapshots?: MediaItem[];
}

export function SnapshotsCarousel({ snapshots = [] }: SnapshotsCarouselProps) {
  // Fall back to placeholders if no snapshots from Notion
  const items = snapshots.length > 0
    ? snapshots
    : [
        { name: '1', url: '', type: 'Snapshot', altText: 'Design snapshot 1' },
        { name: '2', url: '', type: 'Snapshot', altText: 'Design snapshot 2' },
        { name: '3', url: '', type: 'Snapshot', altText: 'Design snapshot 3' },
        { name: '4', url: '', type: 'Snapshot', altText: 'Design snapshot 4' },
      ];

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-t1">Snapshots</h2>
        <span className="text-xs text-t3">Scroll →</span>
      </div>
      <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 -mx-4 px-4 scrollbar-hide">
        {items.map((snap, i) => (
          <div
            key={snap.name || i}
            className="flex-shrink-0 w-[200px] h-[130px] bg-bg2 border border-border rounded-card snap-start overflow-hidden"
          >
            {snap.url && (
              <img
                src={snap.url}
                alt={snap.altText || snap.name}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
