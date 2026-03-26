const items = [
  {
    day: "День 1",
    title: "Диагностика",
    desc: "Поймёшь, куда утекают твои силы. Короткое аудио + одно простое задание.",
    emoji: "🌱",
  },
  {
    day: "День 2",
    title: "Разгрузка",
    desc: "Чуть-чуть освободим день. Без героизма — только то, что реально сделать.",
    emoji: "☁️",
  },
  {
    day: "День 3",
    title: "По-другому",
    desc: "Почувствуешь, что может быть иначе. Спокойно, без переворота жизни на 180°.",
    emoji: "🌿",
  },
];

export default function Featured() {
  return (
    <div id="format" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-16 lg:py-0 bg-amber-50">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-12 lg:mb-0 lg:order-2 lg:ml-16 rounded-3xl overflow-hidden shadow-xl">
        <img
          src="https://cdn.poehali.dev/projects/6c87f0d4-b1d7-49fd-9e7f-faea7033671c/files/657a7bd6-c227-4874-922d-0ac6c6458bf7.jpg"
          alt="Солнечный лес"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:order-1 lg:max-w-lg">
        <p className="uppercase text-xs tracking-widest text-emerald-600 font-semibold mb-8">
          Закрытый чат в Telegram · 3 дня
        </p>
        <div className="flex flex-col gap-8 mb-10">
          {items.map((item) => (
            <div key={item.day} className="flex gap-5 items-start">
              <span className="text-3xl mt-1">{item.emoji}</span>
              <div>
                <p className="text-xs uppercase tracking-widest text-emerald-500 mb-1">{item.day}</p>
                <h4 className="text-2xl font-display font-medium text-emerald-900 mb-2">{item.title}</h4>
                <p className="text-neutral-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <a
          id="join"
          href="https://t.me/+QgiLIa1gFRY4Y2Iy"
          className="inline-block bg-emerald-600 text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-emerald-700 transition-colors duration-300 rounded-full w-fit"
        >
          Написать в комментарии
        </a>
      </div>
    </div>
  );
}
