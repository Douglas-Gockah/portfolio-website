export default function WorkPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-[22px] font-bold heading-tight">Work</h1>
        <p className="text-sm text-t2 mt-1">
          Selected projects and explorations
        </p>
      </div>

      {/* Filter chips */}
      <div className="flex flex-wrap gap-2">
        {['All', 'Enterprise Platforms', 'Payment Systems', 'Brand Identity', 'Design Systems'].map(
          (filter) => (
            <button
              key={filter}
              className="px-4 py-2 border border-border rounded-pill text-xs text-t2 transition-colors hover:border-border2 first:bg-accent first:text-bg first:border-accent"
            >
              {filter}
            </button>
          )
        )}
      </div>

      {/* Project grid placeholder */}
      <div className="grid grid-cols-1 gap-4">
        <div className="border border-border rounded-card-lg overflow-hidden">
          <div className="w-full aspect-[16/10] bg-bg2" />
          <div className="p-4">
            <h3 className="text-sm font-semibold text-t1">
              Enterprise Design System
            </h3>
            <p className="text-xs text-t2 mt-1">
              Confidential Client · 2023 – Present
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
