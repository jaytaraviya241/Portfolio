export type Stage = {
  num: string;
  name: string;
  body: string;
  artifact: string;
};

export const process: Stage[] = [
  {
    num: "01",
    name: "Audit & scope",
    body: "Store teardown, Core Web Vitals baseline, app inventory, and a scope document with real numbers — not a vibe.",
    artifact: "Scope doc + estimate · 48h",
  },
  {
    num: "02",
    name: "Architecture",
    body: "Content model, section map, metafield/metaobject strategy. Business rules get a single source of truth before any UI exists.",
    artifact: "Build map you can challenge",
  },
  {
    num: "03",
    name: "Build sprints",
    body: "Weekly increments on an unpublished dev theme. Async Loom walkthroughs; your live store is never the test environment.",
    artifact: "Preview links every Friday",
  },
  {
    num: "04",
    name: "Hardening",
    body: "QA matrix across devices and edge cases, performance-budget pass, accessibility sweep, schema validation.",
    artifact: "Test matrix + Lighthouse report",
  },
  {
    num: "05",
    name: "Launch",
    body: "A planned cutover window with a rollback path. Redirects verified, pixels firing, monitoring on.",
    artifact: "Launch runbook",
  },
  {
    num: "06",
    name: "Iterate",
    body: "Post-launch metrics review, a prioritized backlog, and optional retainer for experiments and new sections.",
    artifact: "30-day report",
  },
];
