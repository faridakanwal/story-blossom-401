import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const messages = [
  "Every piece handcrafted from reclaimed luxury textiles",
  "Trade & interior designer catalogue — request yours today",
];

const AnnouncementBar = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % messages.length), 5000);
    return () => clearInterval(id);
  }, []);

  const go = (dir: number) =>
    setIndex((i) => (i + dir + messages.length) % messages.length);

  return (
    <div className="bg-primary text-primary-foreground">
      <div className="max-w-[138rem] mx-auto flex items-center justify-center gap-6 px-6 py-[0.7rem]">
        <button
          onClick={() => go(-1)}
          aria-label="Previous announcement"
          className="opacity-70 hover:opacity-100 transition-opacity"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <p
          key={index}
          className="text-[1.2rem] tracking-[0.08em] text-center animate-fade-in leading-[1.6]"
        >
          {messages[index]}
        </p>
        <button
          onClick={() => go(1)}
          aria-label="Next announcement"
          className="opacity-70 hover:opacity-100 transition-opacity"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBar;