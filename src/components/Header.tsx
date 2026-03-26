interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-emerald-800 text-sm uppercase tracking-widest font-semibold">МАКС</div>
        <nav className="flex gap-8">
          <a
            href="#format"
            className="text-emerald-800 hover:text-emerald-600 transition-colors duration-300 uppercase text-sm tracking-wide"
          >
            Формат
          </a>
          <a
            href="#join"
            className="bg-emerald-600 text-white px-5 py-2 text-sm uppercase tracking-wide hover:bg-emerald-700 transition-colors duration-300 rounded-full"
          >
            Участвовать
          </a>
        </nav>
      </div>
    </header>
  );
}
