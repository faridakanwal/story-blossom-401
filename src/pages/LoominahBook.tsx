import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import runnerNapkin from "@/assets/loominah/products/floral-runner-napkin.jpg";
import brocadeCushion from "@/assets/loominah/products/brocade-cushion.jpg";
import stripedTote from "@/assets/loominah/products/striped-tote.jpg";
import greenTote from "@/assets/loominah/products/green-tote.jpg";
import redPatchwork from "@/assets/loominah/products/red-patchwork-cushion.jpg";
import laptopSleeve from "@/assets/loominah/products/laptop-sleeve.jpg";

const featured = {
  img: brocadeCushion,
  tag: "Studio Note · Autumn 2026",
  title: "Reading a metre of brocade.",
  dek: "A slow look at how a single piece of surplus silk becomes a cushion — and why we keep the panels quiet on purpose.",
};

const posts = [
  { img: runnerNapkin, tag: "Table", title: "Setting a table for slow evenings" },
  { img: stripedTote, tag: "Everyday", title: "A tote that softens with the week" },
  { img: redPatchwork, tag: "Colour", title: "On crimson, orange, and warmth after autumn" },
  { img: greenTote, tag: "Studio", title: "Notes from a small production run" },
  { img: laptopSleeve, tag: "Craft", title: "The border, the seam, the tassel" },
];

const LoominahBook = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero */}
      <section className="relative w-full px-6 md:px-[calc(18vw-10rem)] pt-16 md:pt-24">
        <div className="max-w-[110rem] mx-auto text-center">
          <p className="font-sans uppercase tracking-[0.3em] text-[1.2rem] text-primary mb-8">The Journal</p>
          <h1 className="font-serif text-[4.4rem] md:text-[7.2rem] leading-[1.02] tracking-[-0.02em]">
            Notes from the studio.
          </h1>
          <p className="mt-8 text-[1.7rem] leading-[1.75] text-muted-foreground max-w-[62rem] mx-auto">
            Occasional writing on textiles, interiors and the quiet craft of composing objects
            from cloth that already has a history.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="relative w-full px-6 md:px-[calc(18vw-10rem)] pt-20 md:pt-28">
        <Link to="/loominah-book" className="group block max-w-[138rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <figure className="lg:col-span-7 relative aspect-[4/5] lg:aspect-[5/4] overflow-hidden">
            <img src={featured.img} alt={featured.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]" />
          </figure>
          <div className="lg:col-span-5">
            <p className="font-sans uppercase tracking-[0.3em] text-[1rem] text-primary mb-4">{featured.tag}</p>
            <h2 className="font-serif text-[3.4rem] md:text-[4.8rem] leading-[1.1] tracking-[-0.02em] mb-6 group-hover:text-primary transition-colors">
              {featured.title}
            </h2>
            <p className="text-[1.7rem] leading-[1.8] text-muted-foreground mb-8">{featured.dek}</p>
            <span className="inline-block text-[1.2rem] uppercase tracking-[0.25em] border-b border-foreground/40 pb-1">
              Read the piece →
            </span>
          </div>
        </Link>
      </section>

      {/* Grid */}
      <section className="relative w-full px-6 md:px-[calc(18vw-10rem)] pt-32 md:pt-48 pb-32">
        <div className="max-w-[138rem] mx-auto">
          <div className="flex items-end justify-between mb-14">
            <h2 className="font-serif text-[3.2rem] md:text-[4.4rem] leading-[1.1] tracking-[-0.02em]">More reading</h2>
            <p className="hidden md:block font-sans uppercase tracking-[0.25em] text-[1rem] text-muted-foreground">
              05 pieces
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
            {posts.map((p, i) => (
              <Link key={i} to="/loominah-book" className="group block">
                <figure className="relative aspect-[4/5] overflow-hidden mb-6">
                  <img src={p.img} alt={p.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]" />
                </figure>
                <p className="font-sans uppercase tracking-[0.3em] text-[1rem] text-primary mb-3">{p.tag}</p>
                <h3 className="font-serif text-[2.2rem] md:text-[2.6rem] leading-[1.25] tracking-[-0.01em] group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LoominahBook;
