import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import AppearOnScroll from "@/components/AppearOnScroll";
import { Leaf, Globe, Heart, Recycle, TreePine, ArrowRight, Mail } from "lucide-react";

const Sustainability = () => {
  const pillars = [
    {
      icon: Leaf,
      title: "Planet",
      description: "We choose responsible production, reduce waste, and offset the emissions from every print run.",
    },
    {
      icon: Heart,
      title: "People",
      description: "We work with ethical suppliers, fair collaborators, and champion underrepresented voices.",
    },
    {
      icon: Globe,
      title: "Practice",
      description: "Our editorial choices reflect long-term thinking about culture, community, and climate.",
    },
  ];

  const commitments = [
    { title: "Responsible paper", description: "FSC-certified, recycled, or low-impact stock for all printed goods." },
    { title: "Carbon offset shipping", description: "We invest in verified projects to balance delivery emissions." },
    { title: "Long-lasting design", description: "Objects and stories made to be kept, not thrown away." },
    { title: "Transparent partners", description: "We publish the makers, printers, and studios behind our work." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Title */}
      <div className="box-content max-w-[64rem] px-4 md:px-[calc(18vw-10rem)] mx-auto relative mt-[4.5rem] xl:mt-[6rem]">
        <AppearOnScroll delay={0}>
          <h1 className="text-[3.4rem] md:text-[4.2rem] lg:text-[6rem] font-semibold tracking-[-0.01em] leading-[1.2] md:leading-[1] text-center">
            Sustainability
          </h1>
        </AppearOnScroll>
        <AppearOnScroll delay={150}>
          <p className="text-center text-[1.8rem] leading-[1.8] text-muted-foreground mt-[2rem]">
            Caring for the world while creating the stories we want to share.
          </p>
        </AppearOnScroll>
      </div>

      {/* Hero Image */}
      <AppearOnScroll delay={0}>
        <figure className="relative flex overflow-hidden w-full mt-[3rem] md:mt-[4.5rem] lg:mt-[6rem] mb-[6rem] md:mb-[9rem] lg:mb-[12rem]">
          <picture className="flex w-full justify-center">
            <img
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=2000&q=80"
              alt="A landscape representing sustainability and nature"
              className="top-0 left-0 max-w-full w-full aspect-[2/1] xl:aspect-[16/5] object-cover"
            />
          </picture>
        </figure>
      </AppearOnScroll>

      {/* Mission */}
      <div className="box-content max-w-[64rem] px-4 md:px-[calc(18vw-10rem)] mx-auto relative mb-[6rem] md:mb-[9rem] lg:mb-[12rem]">
        <AppearOnScroll delay={0}>
          <h2 className="text-[2.7rem] md:text-[3.6rem] font-semibold mb-[3rem]">
            Our promise
          </h2>
        </AppearOnScroll>
        <AppearOnScroll delay={150}>
          <p className="text-[1.8rem] leading-[1.8] text-foreground mb-6">
            Sustainability is not a marketing line for us; it is a design constraint. We believe the best stories are told with respect for the people and places that make them possible.
          </p>
        </AppearOnScroll>
        <AppearOnScroll delay={300}>
          <p className="text-[1.8rem] leading-[1.8] text-foreground">
            We are committed to improving our practices, measuring our impact, and sharing what we learn along the way.
          </p>
        </AppearOnScroll>
      </div>

      {/* Pillars */}
      <Section>
        <div className="max-w-[110rem] mx-auto">
          <AppearOnScroll delay={0}>
            <h2 className="text-[2.7rem] md:text-[3.6rem] font-semibold mb-[4rem]">
              Three pillars
            </h2>
          </AppearOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => (
              <AppearOnScroll key={pillar.title} delay={index * 150}>
                <div className="p-8 rounded-2xl bg-muted">
                  <pillar.icon className="w-[48px] h-[48px] text-primary mb-4" />
                  <h3 className="text-[2.2rem] font-semibold mb-3">{pillar.title}</h3>
                  <p className="text-[1.6rem] leading-[1.8] text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>
              </AppearOnScroll>
            ))}
          </div>
        </div>
      </Section>

      {/* Commitments */}
      <Section>
        <div className="max-w-[110rem] mx-auto">
          <AppearOnScroll delay={0}>
            <h2 className="text-[2.7rem] md:text-[3.6rem] font-semibold mb-[4rem]">
              Current commitments
            </h2>
          </AppearOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commitments.map((commitment, index) => (
              <AppearOnScroll key={commitment.title} delay={index * 150}>
                <div className="flex items-start gap-4 p-8 rounded-2xl bg-muted border border-border">
                  <TreePine className="w-[32px] h-[32px] text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-[2rem] font-semibold mb-2">{commitment.title}</h3>
                    <p className="text-[1.6rem] leading-[1.8] text-muted-foreground">
                      {commitment.description}
                    </p>
                  </div>
                </div>
              </AppearOnScroll>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="border-t border-border">
        <div className="text-center max-w-[70rem] mx-auto">
          <AppearOnScroll delay={0}>
            <Recycle className="w-12 h-12 text-primary mx-auto mb-6" />
          </AppearOnScroll>
          <AppearOnScroll delay={150}>
            <h3 className="text-[2.4rem] font-semibold mb-[1.5rem]">
              Want to collaborate on sustainable work?
            </h3>
          </AppearOnScroll>
          <AppearOnScroll delay={300}>
            <p className="text-[1.8rem] leading-[1.8] text-muted-foreground mb-[2rem]">
              We are always open to partnerships that push us to do better. Share your idea and we will find a way forward.
            </p>
          </AppearOnScroll>
          <AppearOnScroll delay={450}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 text-[1.6rem] font-medium bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              <Mail className="w-5 h-5" />
              Get in touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </AppearOnScroll>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Sustainability;
