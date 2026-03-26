export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top[calc(100vh-800px)]">
          <div className="bg-amber-50 py-4 sm:py-6 lg:py-8 px-6 sm:px-10 h-full w-full flex flex-col justify-between border-t border-emerald-100">
            <div className="flex shrink-0 gap-8 sm:gap-16 lg:gap-24">
              <div className="flex flex-col gap-2">
                <h3 className="mb-2 uppercase text-emerald-400 text-xs tracking-widest">Формат</h3>
                <a href="#format" className="text-emerald-800 hover:text-emerald-600 transition-colors text-sm">3 дня</a>
                <a href="#format" className="text-emerald-800 hover:text-emerald-600 transition-colors text-sm">490 ₽</a>
                <a href="#join" className="text-emerald-800 hover:text-emerald-600 transition-colors text-sm">Участвовать</a>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="mb-2 uppercase text-emerald-400 text-xs tracking-widest">Контакт</h3>
                <a href="https://t.me/+QgiLIa1gFRY4Y2Iy" className="text-emerald-800 hover:text-emerald-600 transition-colors text-sm">Telegram</a>
                <a href="#format" className="text-emerald-800 hover:text-emerald-600 transition-colors text-sm">Начало 1 апреля</a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
              <h1 className="font-display text-[18vw] sm:text-[16vw] lg:text-[14vw] leading-[0.85] text-emerald-800 font-light tracking-tight">
                Выдох
              </h1>
              <p className="text-emerald-500 text-sm">{new Date().getFullYear()} МАКС</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
