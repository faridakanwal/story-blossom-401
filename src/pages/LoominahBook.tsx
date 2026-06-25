import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import AppearOnScroll from "@/components/AppearOnScroll";
import { BookOpen, Bookmark, Camera, Heart, Mail, ArrowRight } from "lucide-react";

const LoominahBook = () => {
  const editions = [
    {
      title: "Volume One",
      subtitle: "Origins",
      description: "Our debut collection exploring the spaces, faces, and ideas that first shaped loominah.",
      image: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?w=1200&q=80",
    },
    {
      title: "Volume Two",
      subtitle: "Horizons",
      description: "A visual journey into design, travel, and the futures we are choosing to build.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Title */}
      <div className="box-content max-w-[64rem] px-4 md:px-[calc(18vw-10rem)] mx-auto relative mt-[4.5rem] xl:mt-[6rem]">
        <AppearOnScroll delay={0}>
          <h1 className="text-[3.4rem] md:text-[4.2rem] lg:text-[6rem] font-semibold tracking-[-0.01em] leading-[1.2] md:leading-[1] text-center">
            Loominah Book
          </h1>
        </AppearOnScroll>
        <AppearOnScroll delay={150}>
          <p className="text-center text-[1.8rem] leading-[1.8] text-muted-foreground mt-[2rem]">
            A curated, collectible print series of stories, photography, and design.
          </p>
        </AppearOnScroll>
      </div>

      {/* Hero Image */}
      <AppearOnScroll delay={0}>
        <figure className="relative flex overflow-hidden w-full mt-[3rem] md:mt-[4.5rem] lg:mt-[6rem] mb-[6rem] md:mb-[9rem] lg:mb-[12rem]">
          <picture className="flex w-full justify-center">
            <img
              src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=2000&q=80"
              alt="Loominah Book open on a desk"
              className="top-0 left-0 max-w-full w-full aspect-[2/1] xl:aspect-[16/5] object-cover"
            />
          </picture>
        </figure>
      </AppearOnScroll>

      {/* Intro */}
      <div className="box-content max-w-[64rem] px-4 md:px-[calc(18vw-10rem)] mx-auto relative mb-[6rem] md:mb-[9rem] lg:mb-[12rem]">
        <AppearOnScroll delay={0}>
          <h2 className="text-[2.7rem] md:text-[3.6rem] font-semibold mb-[3rem]">
            Stories worth holding
          </h2>
        </AppearOnScroll>
        <AppearOnScroll delay={150}>
          <p className="text-[1.8rem] leading-[1.8] text-foreground mb-6">
            The Loominah Book is our answer to an endless scroll. Each volume is printed on responsibly sourced paper, bound with care, and filled with long-form journalism, original photography, and illustrated essays.
          </p>
        </AppearOnScroll>
        <AppearOnScroll delay={300}>
          <p className="text-[1.8rem] leading-[1.8] text-foreground">
            It is designed to be read slowly, kept on shelves, and shared across tables. Every edition is a snapshot of the conversations, cultures, and creators we believe deserve a permanent place.
          </p>
        </AppearOnScroll>
      </div>

      {/* Editions Grid */}
      <Section>
        <div className="max-w-[110rem] mx-auto">
          <AppearOnScroll delay={0}>
            <h2 className="text-[2.7rem] md:text-[3.6rem] font-semibold mb-[4rem]">
              Editions
            </h2>
          </AppearOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {editions.map((edition, index) => (
              <AppearOnScroll key={edition.title} delay={index * 150}>
                <div className="rounded-2xl overflow-hidden bg-muted">
                  <img
                    src={edition.image}
                    alt={edition.title}
                    className="w-full aspect-[3/2] object-cover"
                  />
                  <div className="p-8">
                    <p className="text-[1.4rem] uppercase tracking-wider text-muted-foreground mb-2">
                      {edition.subtitle}
                    </p>
                    <h3 className="text-[2.4rem] font-semibold mb-3">{edition.title}</h3>
                    <p className="text-[1.6rem] leading-[1.8] text-muted-foreground">
                      {edition.description}
                    </p>
                  </div>
                </div>
              </AppearOnScroll>
            ))}
          </div>
        </div>
      </Section>

      {/* What to Expect */}
      <Section>
        <div className="max-w-[110rem] mx-auto">
          <AppearOnScroll delay={0}>
            <h2 className="text-[2.7rem] md:text-[3.6rem] font-semibold mb-[4rem]">
              What to expect
            </h2>
          </AppearOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AppearOnScroll delay={0}>
              <div className="p-8 rounded-2xl bg-muted">
                <BookOpen className="w-[48px] h-[48px] text-primary mb-4" />
                <h3 className="text-[2.2rem] font-semibold mb-3">Long-form stories</h3>
                <p className="text-[1.6rem] leading-[1.8] text-muted-foreground">
                  In-depth pieces written with time, research, and care.
                </p>
              </div>
            </AppearOnScroll>

            <AppearOnScroll delay={150}>
              <div className="p-8 rounded-2xl bg-muted">
                <Camera className="w-[48px] h-[48px] text-primary mb-4" />
                <h3 className="text-[2.2rem] font-semibold mb-3">Original photography</h3>
                <p className="text-[1.6rem] leading-[1.8] text-muted-foreground">
                  Printed portfolios from photographers we admire.
                </p>
              </div>
            </AppearOnScroll>

            <AppearOnScroll delay={300}>
              <div className="p-8 rounded-2xl bg-muted">
                <Heart className="w-[48px] h-[48px] text-primary mb-4" />
                <h3 className="text-[2.2rem] font-semibold mb-3">Curated design</h3>
                <p className="text-[1.6rem] leading-[1.8] text-muted-foreground">
                  Every layout is considered, tactile, and made to last.
                </p>
              </div>
            </AppearOnScroll>

            <AppearOnScroll delay={450}>
              <div className="p-8 rounded-2xl bg-muted">
                <Bookmark className="w-[48px] h-[48px] text-primary mb-4" />
                <h3 className="text-[2.2rem] font-semibold mb-3">Limited print run</h3>
                <p className="text-[1.6rem] leading-[1.8] text-muted-foreground">
                  Each volume is produced in small batches and numbered.
                </p>
              </div>
            </AppearOnScroll>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="border-t border-border">
        <div className="text-center max-w-[70rem] mx-auto">
          <AppearOnScroll delay={0}>
            <h3 className="text-[2.4rem] font-semibold mb-[1.5rem]">
              Get the next volume
            </h3>
          </AppearOnScroll>
          <AppearOnScroll delay={150}>
            <p className="text-[1.8rem] leading-[1.8] text-muted-foreground mb-[2rem]">
              Interested in owning a copy or stocking Loominah Book? Reach out and we will share the details.
            </p>
          </AppearOnScroll>
          <AppearOnScroll delay={300}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 text-[1.6rem] font-medium bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              <Mail className="w-5 h-5" />
              Contact us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </AppearOnScroll>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default LoominahBook;
