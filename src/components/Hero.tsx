import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/6c87f0d4-b1d7-49fd-9e7f-faea7033671c/files/1b411ada-bd6b-4cd0-8252-5c8662b8619d.jpg"
          alt="Река Катунь"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-sm uppercase tracking-widest mb-4 opacity-70">3 дня · 490 ₽ · начало 1 апреля</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-none">
          ВЫДОХ
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto opacity-90 leading-relaxed">
          Для тех, кто устал жить в постоянной гонке.<br/>Без сложных техник. Без аффирмаций. Просто — выдохнуть.
        </p>
        <a
          href="#join"
          className="inline-block mt-8 bg-white text-neutral-900 px-8 py-3 text-sm uppercase tracking-wide hover:bg-neutral-200 transition-colors duration-300"
        >
          Участвовать
        </a>
      </div>
    </div>
  );
}