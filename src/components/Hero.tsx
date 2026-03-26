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
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <img
          src="https://cdn.poehali.dev/projects/6c87f0d4-b1d7-49fd-9e7f-faea7033671c/files/673b4bf7-3c39-4e73-b599-1ee7c6979865.jpg"
          alt="Цветущий луг в горах"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/30" />
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-widest mb-5 text-emerald-700 font-semibold">
          3 дня · 490 ₽ · начало 1 апреля
        </p>
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-light tracking-tight mb-6 text-emerald-900 leading-none">
          Выдох
        </h1>
        <p className="text-lg md:text-xl text-emerald-800 leading-relaxed mb-8 max-w-xl mx-auto">
          Для тех, кто устал жить в постоянной гонке.<br />
          Без сложных техник. Просто — выдохнуть.
        </p>
        <a
          href="#join"
          className="inline-block bg-emerald-600 text-white px-10 py-4 text-sm uppercase tracking-widest hover:bg-emerald-700 transition-colors duration-300 rounded-full"
        >
          Участвовать
        </a>
      </div>
    </div>
  );
}
