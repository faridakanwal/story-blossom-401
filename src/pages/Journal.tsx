import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import AppearOnScroll from "@/components/AppearOnScroll";
import { PenTool, ArrowRight, Calendar, Mail } from "lucide-react";

const Journal = () => {
  const entries = [
    {
      date: "June 2026",
      title: "A slower kind of summer",
      excerpt: "On the value of long afternoons, analog notebooks, and letting a story find its shape.",
      slug: "mlmo-architectural-renaissance",
    },
    {
      date: "May 2026",
      title: "Designing by subtraction",
      excerpt: "What we remove from a page is often more important than what we add.",
      slug: "mlmo-architectural-renaissance",
    },
    {
      date: "April 2026",
      title: "The Loominah Book process",
      excerpt: "From first draft to final spread, a look at how our print editions come together.",
      slug: "mlmo-architectural-renaissance",
    },
    {
      date: "March 2026",
      title: "Conversations with makers",
      excerpt: "Meet the photographers, printers, and illustrators who shape our visual world.",
      slug: "mlmo-architectural-renaissance",
    },
    {
      date: "February 2026",
      title: "What we are reading",
      excerpt: "A list of books, essays, and archives that are influencing our next volume.",
      slug: "mlmo-architectural-renaissance",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Title */}
      <div className="box-content max-w-[64rem] px-4 md:px-[calc(18vw-10rem)] mx-auto relative mt-[4.5rem] xl:mt-[6rem]">
        <AppearOnScroll delay={0}>
          <h1 className="text-[3.4rem] md:text-[4.2rem] lg:text-[6rem] font-semibold tracking-[-0.01em] leading-[1.2] md:leading-[1] text-center">
            Journal
          </h1>
        </AppearOnScroll>
        <AppearOnScroll delay={150}>
          <p className="text-center text-[1.8rem] leading-[1.8] text-muted-foreground mt-[2rem]">
            Notes, updates, and behind-the-scenes thinking from the loominah team.
          </p>
        </AppearOnScroll>
      </div>

      {/* Hero Image */}
      <AppearOnScroll delay={0}>
        <figure className="relative flex overflow-hidden w-full mt-[3rem] md:mt-[4.5rem] lg:mt-[6rem] mb-[6rem] md:mb-[9rem] lg:mb-[12rem]">
          <picture className="flex w-full justify-center">
            <img
              src="https://images.unsplash.com/photo-1517842645767-c639042777db?w=2000&q=80"
              alt="A notebook and coffee on a desk for the Journal page"
              className="top-0 left-0 max-w-full w-full aspect-[2/1] xl:aspect-[16/5] object-cover"
            />
          </picture>
        </figure>
      </AppearOnScroll>

      {/* Intro */}
      <div className="box-content max-w-[64rem] px-4 md:px-[calc(18vw-10rem)] mx-auto relative mb-[6rem] md:mb-[9rem] lg:mb-[12rem]">
        <AppearOnScroll delay={0}>
          <h2 className="text-[2.7rem] md:text-[3.6rem] font-semibold mb-[3rem]">
            In progress
          </h2>
        </AppearOnScroll>
        <AppearOnScroll delay={150}>
          <p className="text-[1.8rem] leading-[1.8] text-foreground mb-6">
            The Journal is where we share what we are learning, building, and questioning. It is less polished than our published work and closer to the conversation around the table.
          </p>
        </AppearOnScroll>
        <AppearOnScroll delay={300}>
          <p className="text-[1.8rem] leading-[1.8] text-foreground">
            Check back for updates, or reach out if something here sparks a thought you would like to continue.
          </p>
        </AppearOnScroll>
      </div>

      {/* Entries List */}
      <Section>
        <div className="max-w-[80rem] w-full mx-auto">
          <AppearOnScroll delay={0}>
            <div className="flex items-center gap-3 mb-[4rem]">
              <PenTool className="w-[32px] h-[32px] text-primary" />
              <h2 className="text-[2.7rem] md:text-[3.6rem] font-semibold">
                Recent entries
              </h2>
            </div>
          </AppearOnScroll>

          <div className="flex flex-col gap-6">
            {entries.map((entry, index) => (
              <AppearOnScroll key={entry.title} delay={index * 150}>
                <Link
                  to={`/article/${entry.slug}`}
                  className="group block p-8 rounded-2xl bg-muted border border-border hover:border-primary transition-colors"
                >
                  <div className="flex items-center gap-2 text-[1.4rem] text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{entry.date}</span>
                  </div>
                  <h3 className="text-[2.2rem] font-semibold mb-3 group-hover:text-primary transition-colors">
                    <span className="inline-block [transition:background-position_600ms_cubic-bezier(0.45,0,0.55,1)] bg-current [background-image:linear-gradient(90deg,rgba(203,48,223,0.5)_0%,rgba(254,44,85,0.5)_46%,hsl(var(--foreground))_54%,hsl(var(--foreground))_100%)] bg-[length:220%_100%] bg-[position:100%_0] bg-clip-text text-transparent group-hover:bg-[position:0%_0]">
                      {entry.title}
                    </span>
                  </h3>
                  <p className="text-[1.6rem] leading-[1.8] text-muted-foreground">
                    {entry.excerpt}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 text-[1.4rem] font-medium text-foreground group-hover:text-primary transition-colors">
                    Read more
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </AppearOnScroll>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="border-t border-border">
        <div className="text-center max-w-[70rem] mx-auto">
          <AppearOnScroll delay={0}>
            <h3 className="text-[2.4rem] font-semibold mb-[1.5rem]">
              Want to contribute?
            </h3>
          </AppearOnScroll>
          <AppearOnScroll delay={150}>
            <p className="text-[1.8rem] leading-[1.8] text-muted-foreground mb-[2rem]">
              We welcome pitches, reflections, and ideas from our community. Send us a note and we will read every one.
            </p>
          </AppearOnScroll>
          <AppearOnScroll delay={300}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 text-[1.6rem] font-medium bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              <Mail className="w-5 h-5" />
              Send a pitch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </AppearOnScroll>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Journal;
