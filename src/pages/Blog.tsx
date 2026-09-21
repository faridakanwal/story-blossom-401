import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroBannerAsset from "@/assets/HeroBanner1.png.asset.json";
import catCushionsAsset from "@/assets/cushions.png.asset.json";
import catLinensAsset from "@/assets/tableLinens.png.asset.json";
import catToteAsset from "@/assets/toteBag2.png.asset.json";
import catCorporateAsset from "@/assets/corporate.png.asset.json";
import studioAsset from "@/assets/2Image.png.asset.json";
import frameAsset from "@/assets/Frame.png.asset.json";
import cushionOneAsset from "@/assets/cushion1.png.asset.json";
import linensAsset from "@/assets/linens.png.asset.json";
import toteSetAsset from "@/assets/2totte.png.asset.json";
import giftToteAsset from "@/assets/giftTote.png.asset.json";


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
  { badge: "One of a kind", cat: "Home", name: "Patchwork Cushions", image: cushionOneAsset.url },
  { badge: "Made to order", cat: "Dining", name: "Table Linens", image: linensAsset.url },
  { badge: "Best for gifting", cat: "Everyday", name: "Signature Totes", image: toteSetAsset.url },
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
          alt="Loominah handcrafted patchwork cushions and textiles arranged on an ivory sofa at golden hour"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/10" />
        <div className="relative w-full px-6 md:px-[calc(18vw-10rem)] pb-20 md:pb-28 pt-40">
          <div className="max-w-[138rem] mx-auto">
            <p className="font-sans uppercase tracking-[0.3em] text-[1.1rem] text-background/80 mb-6">
              Sustainable . Handcrafted . Timeless
            </p>
            <h1 className="font-serif font-normal text-[3.6rem] md:text-[5.4rem] leading-[1.12] tracking-[-0.02em] text-background max-w-[26ch]">
              What We Throw Away Today, <em className="italic">Our Children Will Inherit Tomorrow.</em>
            </h1>
            <p className="mt-8 text-[1.7rem] leading-[1.7] text-background/85 max-w-[62rem]">
              The textile industry discards millions of tonnes of fabric every year. Silks, linens, and
              jacquards — woven on looms, dyed by hand, carried across continents — buried in landfills
              where they will sit for longer than our grandchildren will live. We refuse to let that be
              the ending. Loominah rescues these forgotten fabrics and gives them a second life — as
              cushions, runners, mats, and accessories, handcrafted by women artisans in the UAE. Every
              piece is one of a kind. Every piece carries a story.
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

      {/* THE WORLD WE ARE LEAVING BEHIND */}
      <section className="relative w-full px-6 md:px-[calc(18vw-10rem)] pt-24 md:pt-32">
        <div className="max-w-[138rem] mx-auto">
          <div className="max-w-[100rem] mx-auto text-center">
            <blockquote className="font-serif italic text-[2.8rem] md:text-[4rem] leading-[1.25] tracking-[-0.01em]">
              "Nothing beautiful should ever be discarded."
            </blockquote>
            <footer className="mt-6 font-sans uppercase tracking-[0.25em] text-[1.1rem] text-muted-foreground">
              Our Founding Belief
            </footer>
          </div>
          <div className="max-w-[80rem] pt-20 md:pt-28">
            <p className="font-sans uppercase tracking-[0.3em] text-[1.1rem] text-primary mb-4">The Stakes</p>
            <h2 className="font-serif text-[3.2rem] md:text-[4.4rem] leading-[1.1] tracking-[-0.02em] mb-8">
              The world we are leaving behind.
            </h2>
            <p className="text-[1.6rem] leading-[1.8] text-muted-foreground mb-6">
              Close your eyes for a moment and think about the world your children will inherit. Think
              about the landfills — growing every day, swallowing materials that could have been saved.
              Think about the textile industry, one of the most polluting on earth, producing fabric that
              is worn once, discarded, and forgotten. Think about the water wasted, the energy burned,
              the human skill thrown away.
            </p>
            <p className="text-[1.6rem] leading-[1.8] text-muted-foreground mb-6">
              Now think about what happens when we choose differently. When we rescue a piece of silk
              from a landfill, we are not just saving fabric. We are saving the water that was used to
              grow it. The energy that was used to weave it. The hands that dyed it.
            </p>
            <p className="text-[1.6rem] leading-[1.8] text-foreground/90">
              This is what Loominah is about. Not products. A choice — a quiet, deliberate choice to
              leave the world a little less broken than we found it.
            </p>
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
                src={studioAsset.url}
                alt="Artisan sorting block-printed rescued fabrics on a sunlit studio table"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-foreground/70 to-transparent">
                <p className="font-serif italic text-[2rem] md:text-[2.4rem] leading-[1.35] text-background">
                  Every rescued fabric carries the memory of its first life.
                </p>
                <p className="mt-3 font-sans uppercase tracking-[0.3em] text-[1rem] text-background/75">
                  Rescued at the source
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
              linens, and jacquards — often flawless — end up in landfill within weeks of leaving the loom.
            </p>
            <p className="text-[1.6rem] leading-[1.8] text-muted-foreground mb-10">
              We work directly with fashion houses, textile mills, designers, and tailoring workshops to
              rescue these fabrics. In the hands of our women artisans, they are reimagined into cushions,
              table linens, gifting objects, and interior pieces designed to last a generation. Every
              piece carries the memory of its first life — and the promise of a second.
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

      {/* EVERY PIECE HAS A STORY */}
      <section className="relative w-full px-6 md:px-[calc(18vw-10rem)] pt-32 md:pt-48">
        <div className="max-w-[138rem] mx-auto">
          <p className="font-sans uppercase tracking-[0.3em] text-[1.1rem] text-primary mb-4">Every Piece Has a Story</p>
          <h2 className="font-serif text-[3.2rem] md:text-[4.4rem] leading-[1.1] tracking-[-0.02em] mb-8">
            No two pieces are the same.
          </h2>
          <p className="text-[1.6rem] leading-[1.8] text-muted-foreground max-w-[64rem] mb-6">
            Because we work exclusively with rescued scraps and deadstock, no two Loominah pieces are
            ever the same. Each cushion, each runner, each tote begins as a different combination of
            fabric. When you buy a Loominah piece, you are buying something that has never existed
            before and will never exist again.
          </p>
          <p className="text-[1.6rem] leading-[1.8] text-foreground/90 max-w-[64rem] mb-16">
            There is no second one. There is no restock. There is only this piece, with this fabric,
            made by these hands — and it is yours.
          </p>
          <div className="max-w-[80rem] border-t border-border pt-12">
            <h3 className="font-serif text-[2.6rem] mb-4">The Story Card</h3>
            <p className="text-[1.6rem] leading-[1.8] text-muted-foreground">
              When you receive a Loominah piece, it comes with its story. Not a tag. Not a barcode. A
              story. Where the fabric was rescued from. Which artisan's hands shaped it. What it was
              before, and what it has become. This is the difference between owning something beautiful
              and owning something meaningful.
            </p>
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

      {/* THE ARTISANS */}
      <section className="relative w-full px-6 md:px-[calc(18vw-10rem)] pt-32 md:pt-48">
        <div className="max-w-[138rem] mx-auto">
          <p className="font-sans uppercase tracking-[0.3em] text-[1.1rem] text-primary mb-4">The Artisans</p>
          <h2 className="font-serif text-[3.2rem] md:text-[4.4rem] leading-[1.1] tracking-[-0.02em] mb-8">
            Crafted by women, <em className="italic">powered by purpose.</em>
          </h2>
          <p className="text-[1.6rem] leading-[1.8] text-muted-foreground max-w-[68rem] mb-6">
            Behind every Loominah piece is a woman whose hands you will never meet but whose artistry
            you will see every day. Hand embroidery is not decoration. It is a tradition — a language
            of patience, skill, and beauty passed down from mother to daughter across generations. In a
            world that increasingly replaces human hands with machines, these women keep a craft alive
            that no factory can replicate.
          </p>
          <p className="text-[1.6rem] leading-[1.8] text-muted-foreground max-w-[68rem] mb-6">
            When you choose a hand-embroidered Loominah piece, you are not just buying something
            beautiful. You are supporting a woman's livelihood. You are keeping a tradition alive. You
            are telling her that her craft matters — that her hands are worth more than a machine.
          </p>
          <p className="text-[1.6rem] leading-[1.8] text-foreground/90 max-w-[68rem]">
            This is what meaningful luxury looks like. Not luxury that costs more. Luxury that means more.
          </p>
        </div>
      </section>

      {/* IMPACT */}
      <section className="relative w-full px-6 md:px-[calc(18vw-10rem)] pt-32 md:pt-48">
        <div className="max-w-[138rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5">
            <figure className="relative aspect-[4/5] overflow-hidden">
              <img
                src={frameAsset.url}
                alt="Framed textile collage made from rescued fabric offcuts beside folded cloth"
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

      {/* WHY THIS MATTERS FOR TOMORROW */}
      <section className="relative w-full px-6 md:px-[calc(18vw-10rem)] pt-32 md:pt-48">
        <div className="max-w-[138rem] mx-auto">
          <p className="font-sans uppercase tracking-[0.3em] text-[1.1rem] text-primary mb-4">Why This Matters for Tomorrow</p>
          <h2 className="font-serif text-[3.2rem] md:text-[4.4rem] leading-[1.1] tracking-[-0.02em] mb-8">
            The bigger picture.
          </h2>
          <p className="text-[1.6rem] leading-[1.8] text-muted-foreground max-w-[68rem] mb-6">
            We are not going to solve the climate crisis with cushions. But we are going to change the
            way people think about what they buy, what they throw away, and what they leave behind.
            Every year, the textile industry produces more than 92 million tonnes of waste.
          </p>
          <p className="text-[1.6rem] leading-[1.8] text-muted-foreground max-w-[68rem] mb-6">
            Loominah is a small brand. We cannot save the world. But we can save fabric — one scrap at
            a time, one piece at a time, one story at a time.
          </p>
          <p className="text-[1.6rem] leading-[1.8] text-foreground/90 max-w-[68rem]">
            Every customer who chooses Loominah is a person who said: I will not buy something
            meaningless. I will buy something that matters. That is how change begins. Not with a
            slogan. With a choice.
          </p>
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

      {/* A LETTER TO YOU */}
      <section className="relative w-full px-6 md:px-[calc(18vw-10rem)] pt-32 md:pt-48">
        <div className="max-w-[138rem] mx-auto">
          <p className="font-sans uppercase tracking-[0.3em] text-[1.1rem] text-primary mb-4">A Letter to You</p>
          <h2 className="font-serif text-[3rem] md:text-[4.2rem] leading-[1.15] tracking-[-0.02em] mb-8 max-w-[32ch]">
            If you have read this far, you already understand.
          </h2>
          <p className="text-[1.6rem] leading-[1.8] text-muted-foreground max-w-[68rem] mb-6">
            You understand that the world we leave to our children is built from the choices we make
            today. Not the big, dramatic choices — but the small, quiet ones. The cushion you buy. The
            gift you give. The fabric you choose to save.
          </p>
          <p className="text-[1.6rem] leading-[1.8] text-muted-foreground max-w-[68rem] mb-6">
            You understand that sustainability is not a sacrifice. It is a privilege. The privilege of
            choosing something made with care over something made without thought. The privilege of
            knowing that the money you spend today supports a woman's livelihood, saves a piece of
            fabric from a landfill, and leaves the world a little less broken than you found it.
          </p>
          <p className="text-[1.6rem] leading-[1.8] text-foreground/90 max-w-[68rem] mb-12">
            That is what Loominah offers you. Not a product. A choice. A choice to buy something that
            matters. We hope you will make that choice. Not because we need your money — but because
            the world needs more people who care.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center px-10 py-4 bg-foreground text-background text-[1.3rem] uppercase tracking-[0.2em] hover:bg-primary hover:text-primary-foreground transition-colors duration-500"
          >
            Explore the Collection
          </Link>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="relative w-full mt-32 md:mt-48 overflow-hidden">
        <img
          src={giftToteAsset.url}
          alt="Pastel patchwork tote with embroidered floral trim and tassels"
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
