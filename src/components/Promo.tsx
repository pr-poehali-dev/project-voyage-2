import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/6c87f0d4-b1d7-49fd-9e7f-faea7033671c/files/673b4bf7-3c39-4e73-b599-1ee7c6979865.jpg"
            alt="Горный луг"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-emerald-900/40" />
        </motion.div>
      </div>

      <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-16 z-10">
        <p className="text-white/70 uppercase text-sm tracking-widest self-end">
          Берег Катуни · 1 апреля
        </p>
        <div className="max-w-2xl">
          <p className="font-display text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-light">
            Перевернуть жизнь на 180° не получится.
          </p>
          <p className="font-display text-white/80 text-3xl sm:text-4xl md:text-5xl leading-tight font-light mt-4">
            Получится немного выдохнуть — и начать разбираться спокойно.
          </p>
          <div className="mt-10 flex items-center gap-4">
            <span className="text-white text-2xl font-bold">490 ₽</span>
            <span className="text-white/60 text-sm uppercase tracking-widest">· 3 дня · закрытый чат</span>
          </div>
        </div>
      </div>
    </div>
  );
}
