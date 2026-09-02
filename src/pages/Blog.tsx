import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroCushion from "@/assets/loominah/products/patchwork-floral-cushion.jpg";
import runnerNapkin from "@/assets/loominah/products/floral-runner-napkin.jpg";
import stripedTote from "@/assets/loominah/products/striped-tote.jpg";
import patchworkTassel from "@/assets/loominah/products/patchwork-tassel-cushion.jpg";
import brocadeCushion from "@/assets/loominah/products/brocade-cushion.jpg";
import embroideredClutch from "@/assets/loominah/products/embroidered-clutch.png";
import craft from "@/assets/loominah/craft.jpg";
import textiles from "@/assets/loominah/textiles.jpg";
import heroBannerAsset from "@/assets/HeroBanner.png.asset.json";
import catCushionsAsset from "@/assets/cushions.png.asset.json";
import catLinensAsset from "@/assets/tableLinens.png.asset.json";
import catToteAsset from "@/assets/toteBag2.png.asset.json";
import catCorporateAsset from "@/assets/corporate.png.asset.json";


const marquee = [
  "Handcrafted in the UAE",
  "Rescued Textiles",
  "Women-led Ateliers",
  "Zero-Waste Design",
  "Bespoke for Brands",
  "Made-to-Order",
];

const categories = [
  { name: "Cushions", image: catCushionsAsset.url, href: "/products" },
  { name: "Table Linens", image: catLinensAsset.url, href: "/products" },
  { name: "Totes & Bags", image: catToteAsset.url, href: "/products" },
  { name: "Corporate Gifting", image: catCorporateAsset.url, href: "/corporate-gifting" },
];

const alchemy = [
  {
    step: "01",
    title: "Rescued at the Source",
    copy: "We collect deadstock, offcuts and end-of-roll fabrics directly from fashion brands, mills and ateliers across the region.",
  },
  {
    step: "02",
    title: "Sorted & Reimagined",
    copy: "Each piece is assessed for fibre, hand and hue — then paired with complementary rescued fabrics to compose new designs.",
  },
  {
    step: "03",
    title: "Handcrafted with Care",
    copy: "Cut, stitched and finished by our women-led atelier — slowly, thoughtfully, and to museum-grade standards.",
  },
];

const impact = [
  { value: "2,400+", label: "Kilograms of textile waste diverted from landfill" },
  { value: "38", label: "Women artisans empowered with fair, dignified work" },
  { value: "14", label: "Partner ateliers and fashion houses across the UAE" },
  { value: "100%", label: "Traceable materials, ethically sourced end-to-end" },
];

const collection = [
  { badge: "One of a kind", cat: "Home", name: "Patchwork Cushions", image: patchworkTassel },
  { badge: "Made to order", cat: "Dining", name: "Table Linens", image: runnerNapkin },
  { badge: "Best for gifting", cat: "Everyday", name: "Signature Totes", image: stripedTote },
];

const howItWorks = [
  { step: "Step 01", title: "Rescue", copy: "Partner with fashion houses & ateliers to divert deadstock." },
  { step: "Step 02", title: "Reimagine", copy: "Compose designs that honour each fabric's original beauty." },
  { step: "Step 03", title: "Handcraft", copy: "Cut, stitch, hem and finish — slowly, in our atelier." },
  { step: "Step 04", title: "Deliver", copy: "Presented with the story of every fabric used within." },
];

const partners = [
  { title: "A story worth telling", copy: "Every piece carries the provenance of its rescued fabric — a narrative your clients and guests remember." },
  { title: "Bespoke for your brand", copy: "From colourways to custom labelling and packaging, we co-create pieces aligned to your identity." },
  { title: "Verified sustainability", copy: "Full traceability from source to stitch, with per-order impact reporting for your ESG communications." },
  { title: "Heirloom-grade craft", copy: "Hand-finished by artisans trained in slow, museum-standard textile techniques." },
  { title: "Made in the UAE", copy: "Proudly regional. Short supply chains, reduced footprint, uncompromised luxury." },
  { title: "Scalable & considered", copy: "From single-piece commissions to gifting runs of five hundred, without the compromise of mass production." },
];

const smallQuotes = [
  { quote: "The most meaningful corporate gift we've ever given. Our clients still speak of it.", who: "Managing Director, Private Bank" },
  { quote: "A collaboration that elevated our seasonal collection with real integrity.", who: "Creative Director, Fashion House" },
  { quote: "Every piece feels considered — because it is. This is what luxury should mean.", who: "Interior Designer, Villa Project" },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* HERO */}
      <section className="relative w-full min-h-[80vh] flex items-end overflow-hidden">
        <img
          src={heroBannerAsset.url}
          alt="Loominah patchwork cushions and tote styled on a linen daybed in a meadow at golden hour"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/10" />
        <div className="relative w-full px-6 md:px-[calc(18vw-10rem)] pb-20 md:pb-28 pt-40">
          <div className="max-w-[138rem] mx-auto">
            <p className="font-sans uppercase tracking-[0.3em] text-[1.1rem] text-background/80 mb-6">
              Loominah · Atelier · UAE
            </p>
            <h1 className="font-serif font-normal text-[4.4rem] md:text-[7.2rem] leading-[1.05] tracking-[-0.02em] text-background max-w-[24ch]">
              Luxury with a <em className="italic">Second Story.</em>
            </h1>
            <p className="mt-8 text-[1.7rem] leading-[1.7] text-background/85 max-w-[60rem]">
              Textile offcuts from the world's finest ateliers, rewoven by hand into heirloom home
              objects and considered corporate gifts — quietly transforming what fashion leaves behind.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center px-8 py-4 bg-background text-foreground text-[1.3rem] uppercase tracking-[0.2em] hover:bg-primary hover:text-primary-foreground transition-colors duration-500"
              >
                Explore the Collection
              </Link>
              <Link
                to="/corporate-gifting"
                className="inline-flex items-center px-8 py-4 border border-background/60 text-background text-[1.3rem] uppercase tracking-[0.2em] hover:bg-background hover:text-foreground transition-colors duration-500"
              >
                Corporate Gifting
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-y border-border bg-secondary/40 py-5">
        <div className="flex w-max animate-marquee gap-10">
          {[0, 1].map((n) => (
            <div key={n} className="flex gap-10 shrink-0">
              {marquee.map((m) => (
                <span
                  key={m + n}
                  className="font-sans uppercase tracking-[0.3em] text-[1.15rem] text-muted-foreground whitespace-nowrap"
                >
                  {m} <span className="text-primary ml-10">·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* SHOP BY CATEGORY */}
      <section className="relative w-full px-6 md:px-[calc(18vw-10rem)] pt-24 md:pt-32">
        <div className="max-w-[138rem] mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="font-sans uppercase tracking-[0.3em] text-[1.1rem] text-primary mb-4">Browse</p>
              <h2 className="font-serif text-[3.2rem] md:text-[4.4rem] leading-[1.1] tracking-[-0.02em]">
                Shop by category.
              </h2>
            </div>
            <Link
              to="/products"
              className="hidden md:inline-block text-[1.3rem] uppercase tracking-[0.2em] border-b border-foreground/40 pb-1 hover:border-foreground transition-colors"
            >
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {categories.map((c) => (
              <Link key={c.name} to={c.href} className="group block">
                <figure className="relative aspect-[4/5] overflow-hidden mb-5">
                  <img
                    src={c.image}
                    alt={c.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.05]"
                  />
                </figure>
                <h3 className="font-serif text-[2rem] md:text-[2.4rem] group-hover:text-primary transition-colors">
                  {c.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="relative w-full px-6 md:px-[calc(18vw-10rem)] pt-32 md:pt-48">
        <div className="max-w-[138rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-6">
            <figure className="relative aspect-[4/5] overflow-hidden">
              <img
                src={craft}
                alt="Artisan hand-stitching linen with gold thread"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-foreground/70 to-transparent">
                <p className="font-serif italic text-[2rem] md:text-[2.4rem] leading-[1.35] text-background">
                  “Nothing beautiful should ever be discarded.”
                </p>
                <p className="mt-3 font-sans uppercase tracking-[0.3em] text-[1rem] text-background/75">
                  Our Founding Belief
                </p>
              </figcaption>
            </figure>
          </div>
          <div className="lg:col-span-6">
            <p className="font-sans uppercase tracking-[0.3em] text-[1.1rem] text-primary mb-4">The Brand</p>
            <h2 className="font-serif text-[3.2rem] md:text-[4.4rem] leading-[1.1] tracking-[-0.02em] mb-8">
              A quiet rebellion against textile waste.
            </h2>
            <p className="text-[1.6rem] leading-[1.8] text-muted-foreground mb-6">
              Loominah began in a Dubai studio with a simple observation: the fashion industry creates
              extraordinary fabrics, and then discards a staggering portion of them. Deadstock silks,
              linens and jacquards — often flawless — end up in landfill within weeks of leaving the loom.
            </p>
            <p className="text-[1.6rem] leading-[1.8] text-muted-foreground mb-10">
              We work directly with fashion houses, textile mills, designers and tailoring workshops to
              rescue these fabrics. In the hands of our women artisans, they are reimagined into cushions,
              table linens, gifting objects and interior pieces designed to last a generation.
            </p>
            <Link
              to="/about"
              className="inline-block text-[1.3rem] uppercase tracking-[0.2em] border-b border-foreground/40 pb-1 hover:border-primary hover:text-primary transition-colors"
            >
              Read our story →
            </Link>
          </div>
        </div>
      </section>

      {/* THE ALCHEMY */}
      <section className="relative w-full px-6 md:px-[calc(18vw-10rem)] pt-32 md:pt-48">
        <div className="max-w-[138rem] mx-auto">
          <p className="font-sans uppercase tracking-[0.3em] text-[1.1rem] text-primary mb-4">The Alchemy</p>
          <h2 className="font-serif text-[3.2rem] md:text-[4.4rem] leading-[1.1] tracking-[-0.02em] mb-8">
            From discarded to <em className="italic">timeless.</em>
          </h2>
          <p className="text-[1.6rem] leading-[1.8] text-muted-foreground max-w-[64rem] mb-16">
            Every Loominah piece is one of a kind. Because our raw materials arrive as small,
            irreplaceable lots, no two cushions or runners share the same story — only the same quiet
            standard of craft.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 border-t border-border pt-12">
            {alchemy.map((a) => (
              <div key={a.step}>
                <p className="font-serif text-[2.4rem] text-primary mb-4">{a.step}</p>
                <h3 className="font-serif text-[2.4rem] mb-3">{a.title}</h3>
                <p className="text-[1.5rem] leading-[1.8] text-muted-foreground">{a.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="relative w-full px-6 md:px-[calc(18vw-10rem)] pt-32 md:pt-48">
        <div className="max-w-[138rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5">
            <figure className="relative aspect-[4/5] overflow-hidden">
              <img
                src={textiles}
                alt="Curated stacks of upcycled fabric swatches"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </figure>
          </div>
          <div className="lg:col-span-7">
            <p className="font-sans uppercase tracking-[0.3em] text-[1.1rem] text-primary mb-4">Our Impact</p>
            <h2 className="font-serif text-[3.2rem] md:text-[4.4rem] leading-[1.1] tracking-[-0.02em] mb-12">
              Measured in kilograms. <em className="italic">Felt in livelihoods.</em>
            </h2>
            <dl className="grid grid-cols-2 gap-x-10 gap-y-12">
              {impact.map((i) => (
                <div key={i.value}>
                  <dt className="font-serif text-[4rem] md:text-[5rem] leading-none text-primary">{i.value}</dt>
                  <dd className="mt-4 text-[1.4rem] leading-[1.7] text-muted-foreground max-w-[28rem]">{i.label}</dd>
                </div>
              ))}
            </dl>
            <Link
              to="/impact"
              className="mt-12 inline-block text-[1.3rem] uppercase tracking-[0.2em] border-b border-foreground/40 pb-1 hover:border-primary hover:text-primary transition-colors"
            >
              See the full impact report →
            </Link>
          </div>
        </div>
      </section>

      {/* COLLECTION */}
      <section className="relative w-full px-6 md:px-[calc(18vw-10rem)] pt-32 md:pt-48">
        <div className="max-w-[138rem] mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="font-sans uppercase tracking-[0.3em] text-[1.1rem] text-primary mb-4">The Collection</p>
              <h2 className="font-serif text-[3.2rem] md:text-[4.4rem] leading-[1.1] tracking-[-0.02em]">
                Objects with a memory.
              </h2>
            </div>
            <Link
              to="/products"
              className="hidden md:inline-block text-[1.3rem] uppercase tracking-[0.2em] border-b border-foreground/40 pb-1 hover:border-foreground transition-colors"
            >
              View all products →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {collection.map((c) => (
              <Link key={c.name} to="/products" className="group block">
                <figure className="relative aspect-[4/5] overflow-hidden mb-6">
                  <img
                    src={c.image}
                    alt={c.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.05]"
                  />
                  <span className="absolute top-4 left-4 bg-background/90 text-foreground text-[1rem] uppercase tracking-[0.2em] px-3 py-1">
                    {c.badge}
                  </span>
                </figure>
                <p className="font-sans uppercase tracking-[0.3em] text-[1rem] text-primary mb-3">{c.cat}</p>
                <h3 className="font-serif text-[2.4rem] leading-[1.25] group-hover:text-primary transition-colors">
                  {c.name}
                </h3>
                <span className="mt-3 inline-block text-[1.2rem] uppercase tracking-[0.2em] text-muted-foreground group-hover:text-primary transition-colors">
                  View collection →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative w-full px-6 md:px-[calc(18vw-10rem)] pt-32 md:pt-48">
        <div className="max-w-[138rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-end mb-16">
            <div className="lg:col-span-7">
              <p className="font-sans uppercase tracking-[0.3em] text-[1.1rem] text-primary mb-4">How It Works</p>
              <h2 className="font-serif text-[3rem] md:text-[4rem] leading-[1.15] tracking-[-0.02em]">
                A slow, considered process — from rescued cloth to finished piece.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[1.6rem] leading-[1.8] text-muted-foreground mb-6">
                Whether we're producing a limited home edition or a bespoke gifting run of five hundred,
                our process honours the material at every step.
              </p>
              <Link
                to="/sustainability"
                className="inline-block text-[1.3rem] uppercase tracking-[0.2em] border-b border-foreground/40 pb-1 hover:border-primary hover:text-primary transition-colors"
              >
                Explore our process →
              </Link>
            </div>
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-4 gap-px bg-border border border-border list-none">
            {howItWorks.map((h) => (
              <li key={h.step} className="bg-background p-8 md:p-10">
                <p className="font-sans uppercase tracking-[0.3em] text-[1rem] text-primary mb-6">{h.step}</p>
                <h3 className="font-serif text-[2.4rem] mb-3">{h.title}</h3>
                <p className="text-[1.45rem] leading-[1.7] text-muted-foreground">{h.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FOR PARTNERS */}
      <section className="relative w-full px-6 md:px-[calc(18vw-10rem)] pt-32 md:pt-48">
        <div className="max-w-[138rem] mx-auto">
          <p className="font-sans uppercase tracking-[0.3em] text-[1.1rem] text-primary mb-4">For Partners</p>
          <h2 className="font-serif text-[3.2rem] md:text-[4.4rem] leading-[1.1] tracking-[-0.02em] mb-16">
            Why brands, hotels and designers choose <em className="italic">Loominah.</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
            {partners.map((p) => (
              <div key={p.title} className="border-t border-border pt-8">
                <h3 className="font-serif text-[2.2rem] mb-3">{p.title}</h3>
                <p className="text-[1.45rem] leading-[1.8] text-muted-foreground">{p.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative w-full px-6 md:px-[calc(18vw-10rem)] pt-32 md:pt-48">
        <div className="max-w-[138rem] mx-auto">
          <p className="font-sans uppercase tracking-[0.3em] text-[1.1rem] text-primary mb-10">In Their Words</p>
          <blockquote className="max-w-[92rem]">
            <p className="font-serif italic text-[2.6rem] md:text-[3.4rem] leading-[1.35] tracking-[-0.01em]">
              “Loominah's pieces don't just decorate our suites — they open a conversation with our guests
              about beauty, responsibility, and craft. Nothing else we've commissioned comes close.”
            </p>
            <footer className="mt-8 font-sans uppercase tracking-[0.25em] text-[1.1rem] text-muted-foreground">
              Head of Design · Luxury Hospitality Partner
            </footer>
          </blockquote>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 mt-20">
            {smallQuotes.map((q) => (
              <figure key={q.who} className="border-t border-border pt-8">
                <blockquote className="text-[1.6rem] leading-[1.7] text-foreground/90">“{q.quote}”</blockquote>
                <figcaption className="mt-5 font-sans uppercase tracking-[0.2em] text-[1.05rem] text-muted-foreground">
                  {q.who}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="relative w-full mt-32 md:mt-48 overflow-hidden">
        <img
          src={embroideredClutch}
          alt="Embroidered clutch presented as a corporate gift"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="relative px-6 md:px-[calc(18vw-10rem)] py-28 md:py-40">
          <div className="max-w-[92rem] mx-auto text-center">
            <p className="font-sans uppercase tracking-[0.3em] text-[1.1rem] text-background/80 mb-6">
              Let's Create Together
            </p>
            <h2 className="font-serif text-[3.6rem] md:text-[5.2rem] leading-[1.05] tracking-[-0.02em] text-background mb-8">
              Give your brand a second story to tell.
            </h2>
            <p className="text-[1.6rem] leading-[1.8] text-background/85 max-w-[64rem] mx-auto mb-12">
              We collaborate with fashion brands, hotels, interior designers, retailers and corporate
              gifting partners on limited editions, seasonal capsules and bespoke commissions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-10 py-4 bg-background text-foreground text-[1.3rem] uppercase tracking-[0.2em] hover:bg-primary hover:text-primary-foreground transition-colors duration-500"
              >
                Begin a conversation
              </Link>
              <Link
                to="/corporate-gifting"
                className="inline-flex items-center px-10 py-4 border border-background/60 text-background text-[1.3rem] uppercase tracking-[0.2em] hover:bg-background hover:text-foreground transition-colors duration-500"
              >
                Request gifting lookbook
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
