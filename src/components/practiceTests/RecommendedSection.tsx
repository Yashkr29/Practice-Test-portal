import { recommendedTopics } from "../../data/practiceTests";

function RecommendedSection() {
  return (
    <section className="rounded-lg border border-practice-line bg-white p-4 shadow-dashboard">
      <h4 className="mb-4 flex items-center gap-2 text-xl font-bold text-practice-ink">
        <span className="text-practice-amberDark">*</span>
        Recommended
      </h4>
      <div className="space-y-4">
        {recommendedTopics.map((topic) => (
          <button
            key={topic.title}
            type="button"
            className="w-full rounded border border-practice-line p-3 text-left transition hover:bg-practice-muted"
          >
            <p className="mb-1 text-[10px] font-extrabold uppercase tracking-wider text-practice-amberDark">
              {topic.label}
            </p>
            <p className="text-sm font-extrabold text-practice-ink">{topic.title}</p>
            <p className="mt-1 text-xs text-practice-subdued">{topic.description}</p>
          </button>
        ))}
      </div>
    </section>
  );
}

export default RecommendedSection;
