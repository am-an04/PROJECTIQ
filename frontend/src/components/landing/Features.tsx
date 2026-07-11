import Container from "../ui/Container";
import FeatureCard from "./FeatureCard";
import { FEATURES } from "./features.data";

export default function Features() {
  return (
    <section
  id="features"
  className="pt-36 pb-52"
>
      <Container>

       
            <div className="w-full">
  <h2 className="text-center text-6xl font-bold text-white ">
    Everything You Need
  </h2>

  <div className="flex justify-center mt-8">
  <p className="w-[600px] text-center text-lg leading-8 text-slate-400 bg-black-500/20 pt-40">
    Everything required to transform an idea into an industry-ready software project using artificial intelligence.
  </p>
</div>
</div>

        {/* Cards */}

        <div className="mt-32 mb-32 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              color={feature.color}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}