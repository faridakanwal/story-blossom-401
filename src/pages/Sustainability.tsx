import Header from "@/components/Header";
import Footer from "@/components/Footer";
import stripedCushion from "@/assets/loominah/products/striped-cushion.jpg";
import patchworkTassel from "@/assets/loominah/products/patchwork-tassel-cushion.jpg";

const steps = [
  {
    step: "01",
    label: "Sourced",
    body: "We collect surplus cuttings from ateliers, couturiers and luxury houses — the pieces too small for a garment and too beautiful to discard.",
  },
  {
    step: "02",
    label: "Selected",
    body: "Each fragment is inspected for hand, weight and grain. Only pieces with a long life ahead of them enter the studio.",
  },
  {
    step: "03",
    label: "Composed",
    body: "Panels are arranged on the table until the composition feels inevitable — a slow, almost silent stage of the work.",
  },
  {
    step: "04",
    label: "Crafted",
    body: "Sewn in small batches by a tight-knit team, with hand-finishing on every hem, tassel and lining.",
  },
  {
    step: "05",
    label: "Numbered",
    body: "Each piece is measured, pressed, labelled and numbered within its edition — often one of only six to twelve.",
  },
  {
    step: "06",
    label: "Sent",
    body: "Wrapped in unbleached cotton and shipped with a card that traces the origins of its cloth.",
  },
];

const Sustainability = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero */}
      <section className="relative w-full px-6 md:px-[calc(18vw-10rem)] pt-16 md:pt-24">
        <div className="max-w-[110rem] mx-auto text-center">
          <p className="font-sans uppercase tracking-[0.3em] text-[1.2rem] text-primary mb-8">Our Process</p>
          <h1 className="font-serif text-[4.4rem] md:text-[7.2rem] leading-[1.02] tracking-[-0.02em]">
            Six quiet steps, <br className="hidden md:block" />repeated with care.
          </h1>
          <p className="mt-8 text-[1.7rem] leading-[1.75] text-muted-foreground max-w-[62rem] mx-auto">
            The Loominah studio is small on purpose. Every piece passes through the same six
            hands-on stages — no shortcuts, no filler, no batches that lose their character.
          </p>
        </div>
      </section>

      {/* Split with image */}
      <section className="relative w-full px-6 md:px-[calc(18vw-10rem)] pt-24 md:pt-36">
        <div className="max-w-[138rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <figure className="relative overflow-hidden aspect-[4/5]">
              <img src={patchworkTassel} alt="A patchwork cushion detail" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            </figure>
            <figcaption className="mt-4 font-sans uppercase tracking-[0.25em] text-[1rem] text-muted-foreground">
              Studio notes · Composition table
            </figcaption>
          </div>
          <ol className="lg:col-span-7 divide-y divide-border">
            {steps.map((s) => (
              <li key={s.step} className="grid grid-cols-[6rem_1fr] gap-6 py-10">
                <span className="font-serif text-[2.4rem] text-primary">{s.step}</span>
                <div>
                  <h3 className="font-serif text-[2.8rem] mb-3 tracking-[-0.01em]">{s.label}</h3>
                  <p className="text-[1.5rem] leading-[1.8] text-muted-foreground">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Impact strip */}
      <section className="relative w-full px-6 md:px-[calc(18vw-10rem)] pt-32 md:pt-48">
        <div className="max-w-[120rem] mx-auto border-t border-b border-border py-16 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { n: "100%", l: "Reclaimed textile" },
              { n: "≤ 12", l: "Pieces per edition" },
              { n: "0", l: "Synthetic filler" },
              { n: "6", l: "Hands per cushion" },
            ].map((k) => (
              <div key={k.l}>
                <p className="font-serif text-[3.6rem] md:text-[5rem] leading-none">{k.n}</p>
                <p className="mt-4 font-sans uppercase tracking-[0.25em] text-[1rem] text-muted-foreground">
                  {k.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Material honesty */}
      <section className="relative w-full px-6 md:px-[calc(18vw-10rem)] pt-32 md:pt-48 pb-32">
        <div className="max-w-[138rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-8 order-2 lg:order-1">
            <p className="font-sans uppercase tracking-[0.3em] text-[1.1rem] text-primary">Material Honesty</p>
            <h2 className="font-serif text-[3.2rem] md:text-[4.4rem] leading-[1.1] tracking-[-0.02em]">
              Every piece is one of one.
            </h2>
            <p className="text-[1.7rem] leading-[1.8] text-muted-foreground">
              Because our fabric is reclaimed, the exact combination in your cushion or runner
              cannot be repeated. Small variations in tone, print and weave are not flaws — they
              are the reason the piece exists.
            </p>
          </div>
          <figure className="lg:col-span-6 relative aspect-[4/5] overflow-hidden order-1 lg:order-2">
            <img src={stripedCushion} alt="A striped brocade and satin cushion" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          </figure>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sustainability;
