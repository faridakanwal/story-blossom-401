import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import craft from "@/assets/loominah/craft.jpg";
import textiles from "@/assets/loominah/textiles.jpg";

const stats = [
  { n: "2,400+", l: "Kilograms of textile diverted from landfill" },
  { n: "38", l: "Women artisans in dignified employment" },
  { n: "14", l: "Fashion & atelier partners across the UAE" },
  { n: "12,800", l: "Litres of water saved through material reuse" },
];

const commitments = [
  { n: "50,000 kg", l: "Textile waste diverted, cumulatively" },
  { n: "200+", l: "Artisans in fair, dignified employment" },
  { n: "Net-positive", l: "Water, energy and social footprint annually" },
];

const Impact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero */}
      <section className="relative w-full px-6 md:px-[calc(18vw-10rem)] pt-16 md:pt-24">
        <div className="max-w-[110rem] mx-auto text-center">
          <p className="font-sans uppercase tracking-[0.3em] text-[1.2rem] text-primary mb-8">Our Impact</p>
          <h1 className="font-serif text-[4.4rem] md:text-[7.2rem] leading-[1.02] tracking-[-0.02em]">
            Beauty that leaves the world <br className="hidden md:block" />better than it found it.
          </h1>
          <p className="mt-8 text-[1.7rem] leading-[1.75] text-muted-foreground max-w-[62rem] mx-auto">
            Numbers only tell half the story — but they matter. Here is what Loominah has diverted,
            transformed and enabled to date.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="relative w-full px-6 md:px-[calc(18vw-10rem)] pt-20 md:pt-28">
        <div className="max-w-[120rem] mx-auto border-t border-b border-border py-16 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {stats.map((s) => (
              <div key={s.l}>
                <p className="font-serif text-[3.6rem] md:text-[5rem] leading-none">{s.n}</p>
                <p className="mt-4 font-sans uppercase tracking-[0.2em] text-[1rem] text-muted-foreground leading-[1.7]">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Human impact */}
      <section className="relative w-full px-6 md:px-[calc(18vw-10rem)] pt-24 md:pt-36">
        <div className="max-w-[138rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <figure className="lg:col-span-6 relative aspect-[4/5] overflow-hidden">
            <img src={craft} alt="An artisan at work in the Loominah atelier" className="absolute inset-0 w-full h-full object-cover" />
          </figure>
          <div className="lg:col-span-6 space-y-8">
            <p className="font-sans uppercase tracking-[0.3em] text-[1.1rem] text-primary">Human Impact</p>
            <h2 className="font-serif text-[3.2rem] md:text-[4.4rem] leading-[1.1] tracking-[-0.02em]">
              Empowering the hands that make everything possible.
            </h2>
            <p className="text-[1.7rem] leading-[1.8] text-muted-foreground">
              Loominah's atelier is intentionally women-led. Many of our artisans come from
              communities where skilled textile craft is passed down through generations — but where
              opportunity has not always followed talent. We provide fair wages, safe workspaces,
              ongoing training and a share of every commission's success.
            </p>
            <p className="text-[1.7rem] leading-[1.8] text-muted-foreground">
              We publish an annual impact report co-authored with our artisan team — because those
              closest to the craft should be closest to the story.
            </p>
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="relative w-full px-6 md:px-[calc(18vw-10rem)] pt-32 md:pt-48">
        <div className="max-w-[120rem] mx-auto text-center">
          <h2 className="font-serif text-[3.2rem] md:text-[4.4rem] leading-[1.1] tracking-[-0.02em]">
            Our commitments to 2030.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            {commitments.map((c) => (
              <div key={c.l} className="border-t border-border pt-8">
                <p className="font-serif text-[3.2rem] md:text-[4rem] leading-none">{c.n}</p>
                <p className="mt-4 text-[1.5rem] leading-[1.8] text-muted-foreground">{c.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative w-full px-6 md:px-[calc(18vw-10rem)] pt-32 md:pt-48 pb-32">
        <div className="max-w-[138rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-6 space-y-8">
            <h2 className="font-serif text-[3.2rem] md:text-[4.4rem] leading-[1.1] tracking-[-0.02em]">
              Amplify your own impact with ours.
            </h2>
            <p className="text-[1.7rem] leading-[1.8] text-muted-foreground">
              Every corporate partner contributes directly to these numbers — and receives certified,
              per-commission reporting for their ESG disclosures.
            </p>
            <Link
              to="/contact"
              className="inline-block border border-foreground px-10 py-4 text-[1.4rem] uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-colors"
            >
              Partner with us
            </Link>
          </div>
          <figure className="lg:col-span-6 relative aspect-[4/3] overflow-hidden">
            <img src={textiles} alt="Curated stacks of rescued fabric swatches" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          </figure>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Impact;
