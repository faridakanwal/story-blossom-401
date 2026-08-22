import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import laptopSleeve from "@/assets/loominah/products/laptop-sleeve.jpg";
import redPatchwork from "@/assets/loominah/products/red-patchwork-cushion.jpg";
import stripedTote from "@/assets/loominah/products/striped-tote.jpg";

const offerings = [
  {
    step: "01",
    title: "Signature Editions",
    body: "Curated, ready-to-gift boxes composed from our best-loved pieces. Available from single units.",
  },
  {
    step: "02",
    title: "Custom Capsules",
    body: "Co-designed capsules from 50 to 500 units — your colourways, your branding, your story woven in.",
  },
  {
    step: "03",
    title: "Executive Commissions",
    body: "One-of-one heirloom pieces for VIP clients, board members and milestone occasions.",
  },
];

const occasions = [
  "Client Appreciation",
  "Onboarding",
  "VIP Welcome",
  "Board Retreats",
  "Ramadan & Eid",
  "Weddings",
  "Speaker Gifts",
  "Retirements",
  "Milestones",
  "Hotel Amenities",
];

const reasons = [
  { title: "A story worth telling", body: "Every piece carries the provenance of its rescued fabric — a narrative your clients and guests remember." },
  { title: "Bespoke for your brand", body: "From colourways to custom labelling and packaging, we co-create pieces aligned to your identity." },
  { title: "Verified sustainability", body: "Full traceability from source to stitch, with per-order impact reporting for your ESG communications." },
  { title: "Heirloom-grade craft", body: "Hand-finished by artisans trained in slow, museum-standard textile techniques." },
  { title: "Made in the UAE", body: "Proudly regional. Short supply chains, reduced footprint, uncompromised luxury." },
  { title: "Scalable & considered", body: "From single-piece commissions to gifting runs of five hundred, without the compromise of mass production." },
];

const CorporateGifting = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero */}
      <section className="relative w-full px-6 md:px-[calc(18vw-10rem)] pt-16 md:pt-24">
        <div className="max-w-[110rem] mx-auto text-center">
          <p className="font-sans uppercase tracking-[0.3em] text-[1.2rem] text-primary mb-8">Corporate Gifting</p>
          <h1 className="font-serif text-[4.4rem] md:text-[7.2rem] leading-[1.02] tracking-[-0.02em]">
            Gifts that begin <br className="hidden md:block" />a conversation.
          </h1>
          <p className="mt-8 text-[1.7rem] leading-[1.75] text-muted-foreground max-w-[62rem] mx-auto">
            Bespoke, sustainable gifting for brands, banks, hospitality groups and private clients
            who understand that a gift is a statement of values.
          </p>
        </div>
        <figure className="max-w-[138rem] mx-auto mt-16 md:mt-24 relative aspect-[16/9] overflow-hidden">
          <img src={redPatchwork} alt="A Loominah gifting piece in crimson patchwork" className="absolute inset-0 w-full h-full object-cover" />
        </figure>
      </section>

      {/* Why it matters */}
      <section className="relative w-full px-6 md:px-[calc(18vw-10rem)] pt-24 md:pt-36">
        <div className="max-w-[138rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-6 space-y-8">
            <p className="font-sans uppercase tracking-[0.3em] text-[1.1rem] text-primary">Why It Matters</p>
            <h2 className="font-serif text-[3.2rem] md:text-[4.4rem] leading-[1.1] tracking-[-0.02em]">
              A gift that lasts longer than the moment.
            </h2>
            <p className="text-[1.7rem] leading-[1.8] text-muted-foreground">
              Corporate gifts too often end up unopened, or worse — in the bin. A Loominah gift lives
              on: on a sofa, on a dining table, in a wardrobe. It reminds the recipient of your brand
              every time they encounter it, and of the values you chose to lead with.
            </p>
            <p className="text-[1.7rem] leading-[1.8] text-muted-foreground">
              Each gift arrives with the story of the fabrics it was made from, an impact statement,
              and packaging that is itself compostable.
            </p>
          </div>
          <figure className="lg:col-span-6 relative aspect-[4/5] overflow-hidden">
            <img src={laptopSleeve} alt="An embroidered laptop sleeve prepared as a corporate gift" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          </figure>
        </div>
      </section>

      {/* Offerings */}
      <section className="relative w-full px-6 md:px-[calc(18vw-10rem)] pt-32 md:pt-48">
        <div className="max-w-[138rem] mx-auto">
          <p className="font-sans uppercase tracking-[0.3em] text-[1.1rem] text-primary">What We Offer</p>
          <h2 className="font-serif text-[3.2rem] md:text-[4.4rem] leading-[1.1] tracking-[-0.02em] mt-6 max-w-[60rem]">
            From considered singles to considered scale.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mt-16">
            {offerings.map((o) => (
              <div key={o.step} className="border-t border-border pt-8">
                <span className="font-serif text-[2.4rem] text-primary">{o.step}</span>
                <h3 className="font-serif text-[2.8rem] mt-4 mb-3 tracking-[-0.01em]">{o.title}</h3>
                <p className="text-[1.5rem] leading-[1.8] text-muted-foreground">{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Occasions */}
      <section className="relative w-full px-6 md:px-[calc(18vw-10rem)] pt-32 md:pt-48">
        <div className="max-w-[120rem] mx-auto text-center">
          <h2 className="font-serif text-[3.2rem] md:text-[4.4rem] leading-[1.1] tracking-[-0.02em]">
            Occasions we love to gift for.
          </h2>
          <ul className="flex flex-wrap justify-center gap-4 mt-12">
            {occasions.map((o) => (
              <li key={o} className="border border-border rounded-full px-6 py-3 text-[1.4rem] text-muted-foreground">
                {o}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why brands choose us */}
      <section className="relative w-full px-6 md:px-[calc(18vw-10rem)] pt-32 md:pt-48">
        <div className="max-w-[138rem] mx-auto">
          <p className="font-sans uppercase tracking-[0.3em] text-[1.1rem] text-primary">For Partners</p>
          <h2 className="font-serif text-[3.2rem] md:text-[4.4rem] leading-[1.1] tracking-[-0.02em] mt-6 max-w-[70rem]">
            Why brands, hotels and designers choose Loominah.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12 mt-16">
            {reasons.map((r) => (
              <div key={r.title} className="border-t border-border pt-8">
                <h3 className="font-serif text-[2.4rem] mb-3 tracking-[-0.01em]">{r.title}</h3>
                <p className="text-[1.5rem] leading-[1.8] text-muted-foreground">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lookbook CTA */}
      <section className="relative w-full px-6 md:px-[calc(18vw-10rem)] pt-32 md:pt-48 pb-32">
        <div className="max-w-[138rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <figure className="lg:col-span-6 relative aspect-[4/3] overflow-hidden">
            <img src={stripedTote} alt="A Loominah signature tote presented as a gift" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          </figure>
          <div className="lg:col-span-6 space-y-8">
            <h2 className="font-serif text-[3.2rem] md:text-[4.4rem] leading-[1.1] tracking-[-0.02em]">
              Request our gifting lookbook.
            </h2>
            <p className="text-[1.7rem] leading-[1.8] text-muted-foreground">
              A curated PDF featuring editions, capsule concepts, pricing tiers and delivery timelines.
            </p>
            <Link
              to="/contact"
              className="inline-block border border-foreground px-10 py-4 text-[1.4rem] uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-colors"
            >
              Request lookbook
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CorporateGifting;
