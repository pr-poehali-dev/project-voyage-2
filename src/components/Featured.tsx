const items = [
  {
    day: "День 1",
    title: "Диагностика",
    desc: "Поймёшь, куда утекают твои силы. Короткое аудио + одно простое задание.",
  },
  {
    day: "День 2",
    title: "Разгрузка",
    desc: "Чуть-чуть освободим день. Без героизма — только то, что реально сделать.",
  },
  {
    day: "День 3",
    title: "По-другому",
    desc: "Почувствуешь, что может быть иначе. Спокойно, без переворота жизни на 180°.",
  },
];

export default function Featured() {
  return (
    <div id="format" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="/images/mountain-landscape.jpg"
          alt="Горный пейзаж Катуни"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-6 text-sm tracking-wide text-neutral-500">Закрытый чат в Telegram · 3 дня</h3>
        <div className="flex flex-col gap-8 mb-10">
          {items.map((item) => (
            <div key={item.day}>
              <p className="text-xs uppercase tracking-widest text-neutral-400 mb-1">{item.day}</p>
              <h4 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-2">{item.title}</h4>
              <p className="text-neutral-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <a
          id="join"
          href="https://t.me/+QgiLIa1gFRY4Y2Iy"
          className="bg-black text-white border border-black px-6 py-3 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide"
        >
          Написать в комментарии
        </a>
      </div>
    </div>
  );
}