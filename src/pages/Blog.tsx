import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import hero from "@/assets/loominah/hero.jpg";
import cushions from "@/assets/loominah/cushions.jpg";
import runners from "@/assets/loominah/runners.jpg";
import totes from "@/assets/loominah/totes.jpg";
import craft from "@/assets/loominah/craft.jpg";
import textiles from "@/assets/loominah/textiles.jpg";

const collections = [
  { name: "Cushions", image: cushions, href: "/custom-projects", tag: "01 / Collection" },
  { name: "Table Runners", image: runners, href: "/custom-projects", tag: "02 / Collection" },
  { name: "Tote Bags", image: totes, href: "/custom-projects", tag: "03 / Collection" },
  { name: "Placemats", image: textiles, href: "/custom-projects", tag: "04 / Collection" },
];

const process = [
  { step: "01", label: "Sourced", detail: "Surplus fabrics from luxury houses and ateliers." },
  { step: "02", label: "Selected", detail: "Each cut is chosen for hand, weight and grain." },
  { step: "03", label: "Designed", detail: "Quiet forms shaped around the material's character." },
  { step: "04", label: "Crafted", detail: "Sewn in small runs by hands that know the cloth." },
  { step: "05", label: "Inspected", detail: "Every piece finished, pressed and read for beauty." },
  { step: "06", label: "Delivered", detail: "Wrapped with care, ready for beautiful spaces." },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* HERO ————————————————————————————————— */}
      <section className="relative w-full px-6 md:px-[calc(18vw-10rem)] pt-12 md:pt-20">
        <div className="max-w-[138rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <p className="font-sans uppercase tracking-[0.3em] text-[1.2rem] text-primary mb-8">
                Luxury Crafted · Waste Reimagined
              </p>
              <h1 className="font-serif font-normal text-[4.4rem] md:text-[6.4rem] leading-[1.05] tracking-[-0.02em] text-foreground">
                Where every piece tells a story.
              </h1>
              <p className="mt-8 text-[1.7rem] leading-[1.7] text-muted-foreground max-w-[46rem]">
                Premium handcrafted cushions, table runners, placemats and tote bags — made from
                carefully reclaimed luxury textiles, giving exceptional materials a meaningful
                second life.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/custom-projects"
                  className="inline-flex items-center px-8 py-4 bg-foreground text-background text-[1.3rem] uppercase tracking-[0.2em] hover:bg-primary transition-colors duration-500"
                >
                  Explore Collection
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 border border-foreground/40 text-foreground text-[1.3rem] uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-colors duration-500"
                >
                  Download Catalogue
                </Link>
              </div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <figure className="relative overflow-hidden aspect-[4/5] lg:aspect-[5/6]">
                <img
                  src={hero}
                  alt="A quiet interior with linen cushions stacked on a travertine bench"
                  className="absolute inset-0 w-full h-full object-cover"
                  width={1600}
                  height={1280}
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* STORY ———————————————————————————————— */}
      <section className="relative w-full px-6 md:px-[calc(18vw-10rem)] pt-32 md:pt-48">
        <div className="max-w-[100rem] mx-auto text-center">
          <p className="font-sans uppercase tracking-[0.3em] text-[1.1rem] text-primary mb-8">The Story</p>
          <p className="font-serif text-[2.6rem] md:text-[3.6rem] leading-[1.35] tracking-[-0.01em] text-foreground">
            Beautiful fabrics often never reach a home. They rest at the edges of ateliers, folded
            and forgotten. Loominah gathers them, reads their character, and returns them to daily
            life — as pieces made to be lived with.
          </p>
        </div>
      </section>

      {/* COLLECTIONS — BENTO ——————————————————— */}
      <section className="relative w-full px-6 md:px-[calc(18vw-10rem)] pt-32 md:pt-48">
        <div className="max-w-[138rem] mx-auto">
          <div className="flex items-end justify-between mb-12 md:mb-16">
            <div>
              <p className="font-sans uppercase tracking-[0.3em] text-[1.1rem] text-primary mb-4">Collections</p>
              <h2 className="font-serif text-[3.2rem] md:text-[4.4rem] leading-[1.1] tracking-[-0.02em]">
                Curated for calm interiors.
              </h2>
            </div>
            <Link
              to="/custom-projects"
              className="hidden md:inline-block text-[1.3rem] uppercase tracking-[0.2em] border-b border-foreground/40 pb-1 hover:border-foreground transition-colors"
            >
              View all →
            </Link>
          </div>

          <div className="grid grid-cols-6 grid-rows-2 gap-4 md:gap-6 auto-rows-fr h-auto md:h-[80rem]">
            {/* Large tile */}
            <Link
              to={collections[0].href}
              className="group relative overflow-hidden col-span-6 md:col-span-4 row-span-2 aspect-[4/5] md:aspect-auto"
            >
              <img
                src={collections[0].image}
                alt={collections[0].name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12">
                <p className="font-sans uppercase tracking-[0.3em] text-[1rem] text-background/80 mb-3">
                  {collections[0].tag}
                </p>
                <h3 className="font-serif text-[3.2rem] md:text-[4.4rem] text-background leading-none">
                  {collections[0].name}
                </h3>
              </div>
            </Link>

            {/* Three smaller tiles */}
            {collections.slice(1).map((c) => (
              <Link
                key={c.name}
                to={c.href}
                className="group relative overflow-hidden col-span-3 md:col-span-2 row-span-1 aspect-[4/5] md:aspect-auto"
              >
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/45 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 md:p-8">
                  <p className="font-sans uppercase tracking-[0.3em] text-[0.95rem] text-background/80 mb-2">
                    {c.tag}
                  </p>
                  <h3 className="font-serif text-[2.2rem] md:text-[2.8rem] text-background leading-none">
                    {c.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS ——————————————————————————————— */}
      <section className="relative w-full px-6 md:px-[calc(18vw-10rem)] pt-32 md:pt-48">
        <div className="max-w-[138rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <figure className="relative overflow-hidden aspect-[4/5]">
              <img
                src={craft}
                alt="Hands weaving natural fibers"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </figure>
          </div>
          <div className="lg:col-span-7">
            <p className="font-sans uppercase tracking-[0.3em] text-[1.1rem] text-primary mb-4">Our Process</p>
            <h2 className="font-serif text-[3.2rem] md:text-[4.4rem] leading-[1.1] tracking-[-0.02em] mb-12">
              From surplus cloth to considered object.
            </h2>
            <ol className="divide-y divide-border">
              {process.map((p) => (
                <li key={p.step} className="grid grid-cols-[6rem_1fr] gap-6 py-8">
                  <span className="font-serif text-[2.2rem] text-primary">{p.step}</span>
                  <div>
                    <h3 className="font-serif text-[2.4rem] mb-2">{p.label}</h3>
                    <p className="text-[1.5rem] leading-[1.7] text-muted-foreground">{p.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* JOURNAL PREVIEW ——————————————————————— */}
      <section className="relative w-full px-6 md:px-[calc(18vw-10rem)] pt-32 md:pt-48">
        <div className="max-w-[138rem] mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="font-sans uppercase tracking-[0.3em] text-[1.1rem] text-primary mb-4">Journal</p>
              <h2 className="font-serif text-[3.2rem] md:text-[4.4rem] leading-[1.1] tracking-[-0.02em]">
                Notes from the studio.
              </h2>
            </div>
            <Link
              to="/loominah-book"
              className="hidden md:inline-block text-[1.3rem] uppercase tracking-[0.2em] border-b border-foreground/40 pb-1 hover:border-foreground transition-colors"
            >
              Read more →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
            {[
              { img: textiles, tag: "Textiles", title: "The quiet luxury of leftover cloth" },
              { img: runners, tag: "Interiors", title: "Setting a table for slow evenings" },
              { img: craft, tag: "Craft", title: "Six pairs of hands, one runner" },
            ].map((j, i) => (
              <Link key={i} to="/loominah-book" className="group block">
                <figure className="relative aspect-[4/5] overflow-hidden mb-6">
                  <img
                    src={j.img}
                    alt={j.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]"
                  />
                </figure>
                <p className="font-sans uppercase tracking-[0.3em] text-[1rem] text-primary mb-3">{j.tag}</p>
                <h3 className="font-serif text-[2.2rem] md:text-[2.6rem] leading-[1.25] tracking-[-0.01em] group-hover:text-primary transition-colors">
                  {j.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CATALOGUE CTA ————————————————————————— */}
      <section className="relative w-full px-6 md:px-[calc(18vw-10rem)] pt-32 md:pt-48">
        <div className="max-w-[100rem] mx-auto border-t border-b border-border py-20 md:py-28 text-center">
          <p className="font-sans uppercase tracking-[0.3em] text-[1.1rem] text-primary mb-6">The Catalogue</p>
          <h2 className="font-serif text-[3.6rem] md:text-[5.2rem] leading-[1.05] tracking-[-0.02em] mb-8">
            Bring Loominah to your studio.
          </h2>
          <p className="text-[1.6rem] leading-[1.7] text-muted-foreground max-w-[56rem] mx-auto mb-10">
            For interior designers, boutique retailers and hospitality partners — request the full
            catalogue and discover pieces made for beautiful spaces.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-10 py-4 bg-foreground text-background text-[1.3rem] uppercase tracking-[0.2em] hover:bg-primary transition-colors duration-500"
          >
            Request Catalogue
          </Link>
        </div>
      </section>

      <div className="pt-32" />
      <Footer />
    </div>
  );
};

export default Blog;
