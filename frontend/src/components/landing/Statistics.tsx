import Container from "../ui/Container";
import StatisticCard from "./StatisticCard";
import { STATISTICS } from "./Statistics.data";

export default function Statistics() {
  return (
    <section
  className="pt-60 pb-36"
  style={{
    marginTop: "100px",
    background: "black-500/20",
  }}
>
      <Container>

        {/* Heading */}

        <div className="mt-32 text-center  pt-60 pb-50">

          

          <span
            className="
              inline-block
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-400/10
              px-5
              py-2
              text-sm
              font-medium
              text-cyan-300
              gap-16
            "
          >
            Trusted by Future Developers
          </span>

          <h2
            className="
              mt-6
              text-4xl
              lg:text-6xl
              font-bold
            "
          >
            ProjectIQ in Numbers
          </h2>
        <div className="flex justify-center mt-8">
          <p
            className="w-[600px] text-center text-lg leading-8 text-slate-400 bg-black-500/20"
          >
            Powerful AI capabilities designed to help students
            and developers build better software projects.
          </p>
        </div>
        </div>

        {/* Cards */}

        <div
          className="
            mt-24
            grid
            gap-8
            md:grid-cols-2
            lg:grid-cols-4
          "
        >
          {STATISTICS.map((item) => (
            <StatisticCard
              key={item.title}
              value={item.value}
              title={item.title}
              icon={item.icon}
              color={item.color}
            />
          ))}
        </div>

      </Container>

    </section>
  );
}