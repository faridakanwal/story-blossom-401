import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import brocadeCushion from "@/assets/loominah/products/brocade-cushion.jpg";
import redPatchwork from "@/assets/loominah/products/red-patchwork-cushion.jpg";
import runnerNapkin from "@/assets/loominah/products/floral-runner-napkin.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero */}
      <section className="relative w-full px-6 md:px-[calc(18vw-10rem)] pt-16 md:pt-24">
        <div className="max-w-[110rem] mx-auto text-center">
          <p className="font-sans uppercase tracking-[0.3em] text-[1.2rem] text-primary mb-8">Our Story</p>
          <h1 className="font-serif text-[4.4rem] md:text-[7.2rem] leading-[1.02] tracking-[-0.02em]">
            Cloth carries memory.
          </h1>
          <p className="mt-8 text-[1.7rem] leading-[1.75] text-muted-foreground max-w-[62rem] mx-auto">
            Loominah began as a quiet act of rescue — gathering the beautiful cuts of fabric that
            were being set aside by ateliers and couturiers, and imagining them into pieces made
            for daily life.
          </p>
        </div>
      </section>

      {/* Editorial image split */}
      <section className="relative w-full px-6 md:px-[calc(18vw-10rem)] pt-20 md:pt-28">
        <div className="max-w-[138rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <figure className="lg:col-span-7 relative aspect-[4/5] overflow-hidden">
            <img src={brocadeCushion} alt="A brocade cushion in low afternoon light" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          </figure>
          <div className="lg:col-span-5 space-y-8">
            <h2 className="font-serif text-[3.2rem] md:text-[4.4rem] leading-[1.1] tracking-[-0.02em]">
              From surplus to something loved.
            </h2>
            <p className="text-[1.7rem] leading-[1.8] text-muted-foreground">
              A metre of silk brocade, a length of hand-block cotton, a run of embroidered borders —
              too small for a garment, too beautiful to discard. We began collecting these fragments
              from luxury houses and small ateliers, giving each one a slower, more private life.
            </p>
            <p className="text-[1.7rem] leading-[1.8] text-muted-foreground">
              Every cushion, runner and tote begins as a quiet study — laying panels beside each
              other until the composition feels inevitable. The result is a piece with a memory:
              carried forward by hands that value it enough to make it new.
            </p>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="relative w-full px-6 md:px-[calc(18vw-10rem)] pt-32 md:pt-48">
        <div className="max-w-[100rem] mx-auto text-center">
          <p className="font-sans uppercase tracking-[0.3em] text-[1.1rem] text-primary mb-10">Our Belief</p>
          <blockquote className="font-serif text-[3rem] md:text-[4.6rem] leading-[1.2] tracking-[-0.01em]">
            "Luxury is not something new. It is something considered — kept, cared for,
            and given the chance to live a second life."
          </blockquote>
        </div>
      </section>

      {/* Values as editorial list */}
      <section className="relative w-full px-6 md:px-[calc(18vw-10rem)] pt-32 md:pt-48">
        <div className="max-w-[138rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="font-sans uppercase tracking-[0.3em] text-[1.1rem] text-primary mb-4">The House</p>
            <h2 className="font-serif text-[3.2rem] md:text-[4.4rem] leading-[1.1] tracking-[-0.02em]">
              What holds Loominah together.
            </h2>
          </div>
          <ol className="lg:col-span-8 divide-y divide-border">
            {[
              { t: "Material first", d: "Every design begins with the fabric — its hand, drape and history — never with a sketch." },
              { t: "Made in small runs", d: "Each design is produced in numbered editions so no two homes carry the same piece." },
              { t: "Hand-finished", d: "Seams, hems and tassels are turned by hand in a studio that keeps close to its makers." },
              { t: "Quietly circular", d: "The luxury waste stream is our raw material — sustainability is a consequence, not a slogan." },
            ].map((v, i) => (
              <li key={v.t} className="grid grid-cols-[5rem_1fr] gap-6 py-8">
                <span className="font-serif text-[2rem] text-primary">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-serif text-[2.4rem] mb-2">{v.t}</h3>
                  <p className="text-[1.5rem] leading-[1.8] text-muted-foreground">{v.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Duo image */}
      <section className="relative w-full px-6 md:px-[calc(18vw-10rem)] pt-32 md:pt-48">
        <div className="max-w-[138rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <figure className="relative aspect-[4/5] overflow-hidden">
            <img src={runnerNapkin} alt="A pink floral runner and napkin set on a dark wood table" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          </figure>
          <figure className="relative aspect-[4/5] overflow-hidden">
            <img src={redPatchwork} alt="A crimson and orange patchwork cushion with tassels" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          </figure>
        </div>
      </section>

      {/* CTA */}
      <section className="relative w-full px-6 md:px-[calc(18vw-10rem)] pt-32 md:pt-48 pb-32">
        <div className="max-w-[80rem] mx-auto text-center">
          <h2 className="font-serif text-[3.2rem] md:text-[4.4rem] leading-[1.1] tracking-[-0.02em] mb-8">
            Meet the collection.
          </h2>
          <Link
            to="/custom-projects"
            className="inline-flex items-center px-10 py-4 bg-foreground text-background text-[1.3rem] uppercase tracking-[0.2em] hover:bg-primary transition-colors duration-500"
          >
            View Collections →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
