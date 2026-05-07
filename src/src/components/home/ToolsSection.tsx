const tools = [
  'Figma',
  'Framer',
  'Webflow',
  'Notion',
  'FigJam',
  'Miro',
  'Jira',
  'Slack',
  'VS Code',
  'GitHub',
];

export function ToolsSection() {
  return (
    <section>
      <h2 className="text-base font-semibold text-t1 mb-4">Tools</h2>
      <div className="flex flex-wrap gap-2">
        {tools.map((tool) => (
          <span
            key={tool}
            className="inline-flex items-center gap-2 px-3.5 py-2 border border-border rounded-pill text-xs text-t2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-border2" />
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
}
