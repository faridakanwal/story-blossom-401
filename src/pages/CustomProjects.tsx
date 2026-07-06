import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import patchworkFloral from "@/assets/loominah/products/patchwork-floral-cushion.jpg";
import runnerNapkin from "@/assets/loominah/products/floral-runner-napkin.jpg";
import patchworkTassel from "@/assets/loominah/products/patchwork-tassel-cushion.jpg";
import stripedTote from "@/assets/loominah/products/striped-tote.jpg";
import stripedCushion from "@/assets/loominah/products/striped-cushion.jpg";
import brocadeCushion from "@/assets/loominah/products/brocade-cushion.jpg";
import greenTote from "@/assets/loominah/products/green-tote.jpg";
import redPatchwork from "@/assets/loominah/products/red-patchwork-cushion.jpg";
import laptopSleeve from "@/assets/loominah/products/laptop-sleeve.jpg";
import embroideredClutch from "@/assets/loominah/products/embroidered-clutch.png";

type Product = {
  name: string;
  material: string;
  image: string;
  edition: string;
};

const groups: { id: string; title: string; caption: string; items: Product[] }[] = [
  {
    id: "cushions",
    title: "Cushions",
    caption: "Sculpted from block-print cottons, silks and brocades reclaimed from atelier surplus.",
    items: [
      { name: "Meadow Patchwork Cushion", material: "Cotton block print · Navy panelling", image: patchworkFloral, edition: "Edition of 12" },
      { name: "Bazaar Tassel Cushion", material: "Mughal florals · Hand-tied tassels", image: patchworkTassel, edition: "Edition of 8" },
      { name: "Nocturne Band Cushion", material: "Silk brocade · Gold satin band", image: stripedCushion, edition: "Edition of 6" },
      { name: "Ivory Brocade Cushion", material: "Layered silk brocade in blush and gold", image: brocadeCushion, edition: "Edition of 10" },
      { name: "Vermillion Patchwork Cushion", material: "Silk chanderi · Crimson tassels", image: redPatchwork, edition: "Edition of 8" },
    ],
  },
  {
    id: "table",
    title: "Table Linens",
    caption: "Runners and napkins that turn a shared meal into a quiet ceremony.",
    items: [
      { name: "Rosewater Runner & Napkin Set", material: "Vintage silk florals · Fringed edge", image: runnerNapkin, edition: "Set of 5" },
    ],
  },
  {
    id: "totes",
    title: "Totes & Carryalls",
    caption: "Everyday pieces cut from heavier weaves — made to soften with use.",
    items: [
      { name: "Loominah Signature Tote", material: "Reclaimed linen stripe · Cotton lining", image: stripedTote, edition: "Open edition" },
      { name: "Verdant Bloom Tote", material: "Sage cotton · Floral handles", image: greenTote, edition: "Edition of 20" },
    ],
  },
  {
    id: "accessories",
    title: "Clutches & Sleeves",
    caption: "Small objects, considered — for a laptop, a passport, an afternoon out.",
    items: [
      { name: "Ikat Ribbon Clutch", material: "Marbled cotton · Embroidered band", image: embroideredClutch, edition: "Edition of 15" },
      { name: "Kalamkari Laptop Sleeve", material: "Embroidered wool · Padded interior", image: laptopSleeve, edition: "Edition of 10" },
    ],
  },
];

const CustomProjects = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero */}
      <section className="relative w-full px-6 md:px-[calc(18vw-10rem)] pt-16 md:pt-24 pb-16 md:pb-24">
        <div className="max-w-[120rem] mx-auto text-center">
          <p className="font-sans uppercase tracking-[0.3em] text-[1.2rem] text-primary mb-8">
            The Collection · Autumn / Winter
          </p>
          <h1 className="font-serif text-[4.4rem] md:text-[7.2rem] leading-[1.02] tracking-[-0.02em]">
            Ten pieces. <br className="hidden md:block" />
            No two alike.
          </h1>
          <p className="mt-8 text-[1.7rem] leading-[1.7] text-muted-foreground max-w-[60rem] mx-auto">
            Each Loominah object is composed from reclaimed luxury textiles — block prints, silks,
            brocades and embroidered panels — sewn together in small, numbered editions.
          </p>
        </div>
      </section>

      {/* Anchor nav */}
      <div className="sticky top-[72px] z-30 border-y border-border bg-background/90 backdrop-blur">
        <nav className="max-w-[138rem] mx-auto px-6 md:px-[calc(18vw-10rem)] py-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-2 font-sans uppercase tracking-[0.25em] text-[1.1rem]">
          {groups.map((g) => (
            <a key={g.id} href={`#${g.id}`} className="text-muted-foreground hover:text-primary transition-colors">
              {g.title}
            </a>
          ))}
        </nav>
      </div>

      {/* Collection groups */}
      {groups.map((group, gi) => (
        <section
          key={group.id}
          id={group.id}
          className="relative w-full px-6 md:px-[calc(18vw-10rem)] pt-24 md:pt-36 scroll-mt-32"
        >
          <div className="max-w-[138rem] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-14 items-end">
              <div className="lg:col-span-8">
                <p className="font-sans uppercase tracking-[0.3em] text-[1.1rem] text-primary mb-4">
                  {String(gi + 1).padStart(2, "0")} / {groups.length.toString().padStart(2, "0")}
                </p>
                <h2 className="font-serif text-[3.6rem] md:text-[5.2rem] leading-[1.05] tracking-[-0.02em]">
                  {group.title}
                </h2>
              </div>
              <p className="lg:col-span-4 text-[1.5rem] leading-[1.7] text-muted-foreground">
                {group.caption}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {group.items.map((p) => (
                <article key={p.name} className="group flex flex-col">
                  <figure className="relative aspect-[4/5] overflow-hidden bg-muted mb-6">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]"
                    />
                  </figure>
                  <p className="font-sans uppercase tracking-[0.25em] text-[1rem] text-primary mb-2">
                    {p.edition}
                  </p>
                  <h3 className="font-serif text-[2.2rem] leading-[1.2] tracking-[-0.01em] mb-2">
                    {p.name}
                  </h3>
                  <p className="text-[1.4rem] leading-[1.7] text-muted-foreground mb-4">{p.material}</p>
                  <Link
                    to="/contact"
                    className="mt-auto inline-block text-[1.2rem] uppercase tracking-[0.25em] border-b border-foreground/40 pb-1 self-start hover:border-primary hover:text-primary transition-colors"
                  >
                    Enquire →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Trade CTA */}
      <section className="relative w-full px-6 md:px-[calc(18vw-10rem)] pt-32 md:pt-48 pb-32">
        <div className="max-w-[100rem] mx-auto border-t border-b border-border py-20 md:py-28 text-center">
          <p className="font-sans uppercase tracking-[0.3em] text-[1.1rem] text-primary mb-6">Trade & Bespoke</p>
          <h2 className="font-serif text-[3.6rem] md:text-[5.2rem] leading-[1.05] tracking-[-0.02em] mb-8">
            Working on an interior?
          </h2>
          <p className="text-[1.6rem] leading-[1.7] text-muted-foreground max-w-[56rem] mx-auto mb-10">
            We work with interior designers, hospitality studios and boutique retailers on bespoke
            colourways, custom dimensions and small production runs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-10 py-4 bg-foreground text-background text-[1.3rem] uppercase tracking-[0.2em] hover:bg-primary transition-colors duration-500"
          >
            Request the Catalogue
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomProjects;
