import { skills } from '../data/portfolioData';

const names = Object.values(skills).flatMap((category) =>
  category.items.map((item) => item.name)
);

const SkillsMarquee = () => (
  <div className="relative overflow-hidden border-y border-ink/8 bg-sand/60 py-3 sm:py-4">
    <div className="marquee-track flex w-max gap-3">
      {[...names, ...names].map((name, index) => (
        <span
          key={`${name}-${index}`}
          className="rounded-full bg-cream px-4 py-1.5 text-sm font-semibold text-ink shadow-sm"
        >
          {name}
        </span>
      ))}
    </div>
  </div>
);

export default SkillsMarquee;
