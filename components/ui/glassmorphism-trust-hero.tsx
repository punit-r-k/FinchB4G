import React from "react";
import {
  ArrowRight,
  Command,
  Cpu,
  Crown,
  Gem,
  Ghost,
  Hexagon,
  Play,
  Star,
  Target,
  Triangle,
} from "lucide-react";

const CLIENTS = [
  { name: "Acme Corp", icon: Hexagon },
  { name: "Quantum", icon: Triangle },
  { name: "Command+Z", icon: Command },
  { name: "Phantom", icon: Ghost },
  { name: "Ruby", icon: Gem },
  { name: "Chipset", icon: Cpu },
];

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="flex cursor-default flex-col items-center justify-center transition-transform hover:-translate-y-1">
    <span className="text-xl font-bold text-white sm:text-2xl">{value}</span>
    <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-500 sm:text-xs">
      {label}
    </span>
  </div>
);

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#111714] font-sans text-white">
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-fade-in {
          opacity: 1;
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>

      <div
        className="absolute inset-0 z-0 bg-cover bg-[center_top] opacity-20"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1800&q=80")',
          maskImage:
            "linear-gradient(180deg, transparent, black 0%, black 70%, transparent)",
          WebkitMaskImage:
            "linear-gradient(180deg, transparent, black 0%, black 70%, transparent)",
        }}
      />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_18%_22%,rgba(39,67,58,0.78),transparent_34%),radial-gradient(circle_at_53%_58%,rgba(184,121,28,0.34),transparent_20%),linear-gradient(180deg,rgba(24,37,31,0.92),rgba(15,19,17,0.98))]" />
      <div className="absolute bottom-[-12%] left-[-8%] z-0 h-[28rem] w-[28rem] rounded-full bg-[#0d1310] blur-3xl" />
      <div className="absolute left-1/2 top-1/2 z-0 h-[32rem] w-[18rem] -translate-x-1/2 -translate-y-[18%] rounded-[999px] bg-[radial-gradient(circle_at_center,rgba(210,139,27,0.52),rgba(122,76,13,0.24)_48%,transparent_72%)] blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 z-0 h-48 bg-gradient-to-t from-black/65 to-transparent" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1460px] flex-1 items-center px-10 pb-8 pt-24 sm:px-12 md:pt-28 lg:px-16 xl:px-20">
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(37rem,0.9fr)] lg:gap-10">
          <div className="flex flex-col justify-center space-y-8 pt-6 lg:pr-8">
            <div className="animate-fade-in delay-100">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 backdrop-blur-md transition-colors hover:bg-white/[0.08]">
                <span className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-200 sm:text-xs">
                  Award-Winning Design
                  <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                </span>
              </div>
            </div>

            <h1
              className="animate-fade-in delay-200 max-w-[9.4ch] text-[4.6rem] font-medium leading-[0.88] tracking-[-0.065em] text-white sm:text-[5.5rem] lg:text-[6.45rem] xl:text-[6.9rem]"
              style={{
                maskImage:
                  "linear-gradient(180deg, black 0%, black 80%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(180deg, black 0%, black 80%, transparent 100%)",
              }}
            >
              Crafting Digital
              <br />
              <span className="bg-gradient-to-br from-white via-white to-[#ffcd75] bg-clip-text text-transparent">
                Experiences
              </span>
              <br />
              That Matter
            </h1>

            <p className="animate-fade-in delay-300 max-w-[42rem] text-[1.12rem] leading-relaxed text-zinc-300/88 lg:text-[1.15rem]">
              We design interfaces that combine beauty with functionality,
              creating seamless experiences that users love and businesses thrive
              on.
            </p>

            <div className="animate-fade-in delay-400 flex flex-col gap-4 sm:flex-row">
              <button className="group inline-flex min-h-16 items-center justify-center gap-3 rounded-full bg-white px-10 py-4 text-xl font-semibold text-zinc-950 transition-all hover:scale-[1.02] hover:bg-zinc-200 active:scale-[0.98] sm:min-h-[5rem]">
                View Portfolio
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>

              <button className="group inline-flex min-h-16 items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-10 py-4 text-xl font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/[0.08] sm:min-h-[5rem]">
                <Play className="h-5 w-5 fill-current" />
                Watch Showreel
              </button>
            </div>
          </div>

          <div className="space-y-9 lg:-translate-y-4 lg:justify-self-end lg:self-center">
            <div className="animate-fade-in delay-500 relative w-full max-w-[48rem] overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.06] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl lg:p-10">
              <div className="pointer-events-none absolute right-0 top-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-white/[0.04] blur-3xl" />

              <div className="relative z-10">
                <div className="mb-10 flex items-center gap-5">
                  <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-[1.7rem] bg-white/10 ring-1 ring-white/15">
                    <Target className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <div className="text-4xl font-bold tracking-tight text-white lg:text-5xl">
                      150+
                    </div>
                    <div className="text-[1.05rem] text-zinc-300/70">
                      Projects Delivered
                    </div>
                  </div>
                </div>

                <div className="mb-8 space-y-4">
                  <div className="flex justify-between text-base lg:text-lg">
                    <span className="text-zinc-300/70">Client Satisfaction</span>
                    <span className="font-medium text-white">98%</span>
                  </div>
                  <div className="h-3 w-full overflow-hidden rounded-full bg-black/20">
                    <div className="h-full w-[98%] rounded-full bg-gradient-to-r from-white via-white to-zinc-200" />
                  </div>
                </div>

                <div className="mb-8 h-px w-full bg-white/10" />

                <div className="grid grid-cols-2 gap-x-6 gap-y-5 text-center md:grid-cols-[1fr_auto_1fr]">
                  <StatItem value="5+" label="Years" />
                  <StatItem value="24/7" label="Support" />
                  <div className="md:hidden" />
                  <div className="hidden md:block md:mx-auto md:h-full md:w-px md:bg-white/10" />
                  <div className="hidden md:block md:mx-auto md:h-full md:w-px md:bg-white/10" />
                  <div className="col-span-2 md:col-span-1">
                    <StatItem value="100%" label="Quality" />
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-medium tracking-wide text-zinc-200">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                    </span>
                    ACTIVE
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-medium tracking-wide text-zinc-200">
                    <Crown className="h-3 w-3 text-yellow-500" />
                    PREMIUM
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in delay-500 relative w-full max-w-[48rem] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] py-8 backdrop-blur-xl">
              <h3 className="mb-7 px-8 text-lg font-medium text-zinc-300/80 lg:px-10">
                Trusted by Industry Leaders
              </h3>

              <div
                className="relative flex overflow-hidden"
                style={{
                  maskImage:
                    "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                }}
              >
                <div className="animate-marquee flex gap-12 whitespace-nowrap px-4 lg:px-5">
                  {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, i) => (
                    <div
                      key={i}
                      className="flex cursor-default items-center gap-3 opacity-50 grayscale transition-all hover:scale-105 hover:opacity-100 hover:grayscale-0"
                    >
                      <client.icon className="h-7 w-7 fill-current text-white" />
                      <span className="text-[1.7rem] font-bold tracking-tight text-white/85">
                        {client.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
