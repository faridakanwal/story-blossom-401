import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import AppearOnScroll from "@/components/AppearOnScroll";
import { BookOpen, Bookmark, Layers, Eye } from "lucide-react";

const LoominahBook = () => {
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
      </div>

      {/* Hero Image */}
      <AppearOnScroll delay={0}>
        <figure className="relative flex overflow-hidden w-full mt-[3rem] md:mt-[4.5rem] lg:mt-[6rem] mb-[6rem] md:mb-[9rem] lg:mb-[12rem]">
          <picture className="flex w-full justify-center">
            <img
              src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=2000&q=80"
              alt="Loominah Book collection"
              className="top-0 left-0 max-w-full w-full aspect-[2/1] xl:aspect-[16/5] object-cover"
            />
          </picture>
        </figure>
      </AppearOnScroll>

      {/* Intro Section */}
      <div className="box-content max-w-[64rem] px-4 md:px-[calc(18vw-10rem)] mx-auto relative mb-[6rem] md:mb-[9rem] lg:mb-[12rem]">
        <AppearOnScroll delay={0}>
          <h2 className="text-[2.7rem] md:text-[3.6rem] font-semibold mb-[3rem]">
            A living archive of stories
          </h2>
        </AppearOnScroll>
        <AppearOnScroll delay={150}>
          <p className="text-[1.8rem] leading-[1.8] text-foreground mb-6">
            The Loominah Book is our annual printed and digital collection of the year's most thoughtful stories, essays, and visual journeys. It is designed to be kept, shared, and returned to.
          </p>
        </AppearOnScroll>
        <AppearOnScroll delay={300}>
          <p className="text-[1.8rem] leading-[1.8] text-foreground">
            Each edition is curated around a single theme, bringing together voices from design, architecture, wellness, and everyday life into one coherent volume.
          </p>
        </AppearOnScroll>
      </div>

      {/* Mission Quote */}
      <div className="box-content max-w-[64rem] px-4 md:px-[calc(18vw-10rem)] mx-auto relative mb-[6rem] md:mb-[9rem] lg:mb-[12rem]">
        <AppearOnScroll delay={0}>
          <figure className="blockquote-big text-center mt-[1.25rem] mb-[0.9375rem] md:mt-[1.875rem] md:mb-[1.875rem] lg:mt-[3.75rem] lg:mb-[3.75rem] md:mx-[calc(-18vw+6.875rem)] xl:mx-[-12.5rem]">
            <blockquote className="font-sans text-[calc(5vw+0.6rem)] lg:text-[5.4rem] font-extrabold leading-[1.2]">
              "Stories worth printing, ideas worth preserving."
            </blockquote>
            <figcaption className="text-[calc(2.5vw+0.8rem)] lg:text-[3rem] font-semibold leading-[1.6] md:leading-[1.4] before:content-['―_']">
              The Loominah Book
            </figcaption>
          </figure>
        </AppearOnScroll>
      </div>

      {/* Values Grid */}
      <Section>
        <div className="max-w-[110rem] mx-auto">
          <AppearOnScroll delay={0}>
            <h2 className="text-[2.7rem] md:text-[3.6rem] font-semibold mb-[4rem]">
              What makes it different
            </h2>
          </AppearOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <AppearOnScroll delay={0}>
              <div className="lg:col-span-1 p-8 rounded-2xl bg-[rgba(197,159,255,0.15)]">
                <BookOpen className="w-[48px] h-[48px] text-black mb-4" />
                <h3 className="text-[2.2rem] font-semibold mb-3 text-black">Curated depth</h3>
                <p className="text-[1.6rem] leading-[1.8] text-black">
                  Every piece is selected for its lasting relevance, not its momentary trend value.
                </p>
              </div>
            </AppearOnScroll>

            <AppearOnScroll delay={150}>
              <div className="lg:col-span-2 p-8 rounded-2xl bg-[rgba(255,149,238,0.15)]">
                <Bookmark className="w-[48px] h-[48px] text-black mb-4" />
                <h3 className="text-[2.2rem] font-semibold mb-3 text-black">Beautiful print</h3>
                <p className="text-[1.6rem] leading-[1.8] text-black">
                  Printed on responsibly sourced paper with a tactile, minimal design that sits quietly on any shelf.
                </p>
              </div>
            </AppearOnScroll>

            <AppearOnScroll delay={300}>
              <div className="lg:col-span-2 p-8 rounded-2xl bg-[rgba(255,207,109,0.15)]">
                <Layers className="w-[48px] h-[48px] text-black mb-4" />
                <h3 className="text-[2.2rem] font-semibold mb-3 text-black">Digital companion</h3>
                <p className="text-[1.6rem] leading-[1.8] text-black">
                  Each book includes an extended digital edition with photography, audio, and behind-the-scenes notes.
                </p>
              </div>
            </AppearOnScroll>

            <AppearOnScroll delay={450}>
              <div className="lg:col-span-1 p-8 rounded-2xl bg-[rgba(254,185,131,0.15)]">
                <Eye className="w-[48px] h-[48px] text-black mb-4" />
                <h3 className="text-[2.2rem] font-semibold mb-3 text-black">Independent voice</h3>
                <p className="text-[1.6rem] leading-[1.8] text-black">
                  Free from advertising, the book is entirely funded by readers who believe in slow, intentional media.
                </p>
              </div>
            </AppearOnScroll>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default LoominahBook;
