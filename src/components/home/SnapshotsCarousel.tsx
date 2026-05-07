import type { MediaItem } from '@/types/notion';

interface SnapshotsCarouselProps {
  snapshots?: MediaItem[];
}

const DEFAULT_SNAPSHOTS = [
  { id: '1', title: '', url: '', type: '', tags: [] },
  { id: '2', title: '', url: '', type: '', tags: [] },
  { id: '3', title: '', url: '', type: '', tags: [] },
  { id: '4', title: '', url: '', type: '', tags: [] },
];

export function SnapshotsCarousel({ snapshots = DEFAULT_SNAPSHOTS }: SnapshotsCarouselProps = {}) {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-t1">Snapshots</h2>
        <span className="text-xs text-t3">Scroll →</span>
      </div>
      <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 -mx-4 px-4 scrollbar-hide">
        {snapshots.map((snap, i) => (
          <div
            key={snap.id || i}
            className="flex-shrink-0 w-[200px] h-[130px] bg-bg2 border border-border rounded-card snap-start"
          />
        ))}
      </div>
    </section>
  );
}
