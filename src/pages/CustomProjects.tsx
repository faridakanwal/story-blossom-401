import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import AppearOnScroll from "@/components/AppearOnScroll";
import { Palette, Camera, PenTool, Layers, Sparkles, ArrowRight, Mail } from "lucide-react";

const CustomProjects = () => {
  const services = [
    {
      icon: PenTool,
      title: "Editorial direction",
      description: "We develop story angles, themes, and series that connect with the audiences you care about.",
    },
    {
      icon: Camera,
      title: "Photography & video",
      description: "Original image and motion work for campaigns, books, editorial, and digital products.",
    },
    {
      icon: Palette,
      title: "Visual identity",
      description: "Design systems, art direction, and bespoke layouts that feel unmistakably yours.",
    },
    {
      icon: Layers,
      title: "Content strategy",
      description: "Long-term planning, tone of voice, and publishing rhythms that build lasting trust.",
    },
  ];

  const process = [
    { step: "01", title: "Discover", description: "We learn your goals, audience, and constraints." },
    { step: "02", title: "Define", description: "We shape a creative direction and clear scope." },
    { step: "03", title: "Create", description: "We produce stories, visuals, and design in close collaboration." },
    { step: "04", title: "Deliver", description: "We launch, refine, and hand over everything you need." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Title */}
      <div className="box-content max-w-[64rem] px-4 md:px-[calc(18vw-10rem)] mx-auto relative mt-[4.5rem] xl:mt-[6rem]">
        <AppearOnScroll delay={0}>
          <h1 className="text-[3.4rem] md:text-[4.2rem] lg:text-[6rem] font-semibold tracking-[-0.01em] leading-[1.2] md:leading-[1] text-center">
            Custom Projects
          </h1>
        </AppearOnScroll>
        <AppearOnScroll delay={150}>
          <p className="text-center text-[1.8rem] leading-[1.8] text-muted-foreground mt-[2rem]">
            Bespoke creative partnerships for brands, publications, and people with something to say.
          </p>
        </AppearOnScroll>
      </div>

      {/* Hero Image */}
      <AppearOnScroll delay={0}>
        <figure className="relative flex overflow-hidden w-full mt-[3rem] md:mt-[4.5rem] lg:mt-[6rem] mb-[6rem] md:mb-[9rem] lg:mb-[12rem]">
          <picture className="flex w-full justify-center">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=2000&q=80"
              alt="A creative workspace for custom projects"
              className="top-0 left-0 max-w-full w-full aspect-[2/1] xl:aspect-[16/5] object-cover"
            />
          </picture>
        </figure>
      </AppearOnScroll>

      {/* Intro */}
      <div className="box-content max-w-[64rem] px-4 md:px-[calc(18vw-10rem)] mx-auto relative mb-[6rem] md:mb-[9rem] lg:mb-[12rem]">
        <AppearOnScroll delay={0}>
          <h2 className="text-[2.7rem] md:text-[3.6rem] font-semibold mb-[3rem]">
            Made to measure
          </h2>
        </AppearOnScroll>
        <AppearOnScroll delay={150}>
          <p className="text-[1.8rem] leading-[1.8] text-foreground mb-6">
            Every project begins with a conversation. We bring together editorial craft, visual direction, and thoughtful design to help you tell stories that resonate.
          </p>
        </AppearOnScroll>
        <AppearOnScroll delay={300}>
          <p className="text-[1.8rem] leading-[1.8] text-foreground">
            From a single campaign to a multi-channel editorial program, we adapt our process to fit your ambition, timeline, and budget.
          </p>
        </AppearOnScroll>
      </div>

      {/* Services Grid */}
      <Section>
        <div className="max-w-[110rem] mx-auto">
          <AppearOnScroll delay={0}>
            <h2 className="text-[2.7rem] md:text-[3.6rem] font-semibold mb-[4rem]">
              What we do
            </h2>
          </AppearOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <AppearOnScroll key={service.title} delay={index * 150}>
                <div className="p-8 rounded-2xl bg-muted">
                  <service.icon className="w-[48px] h-[48px] text-primary mb-4" />
                  <h3 className="text-[2.2rem] font-semibold mb-3">{service.title}</h3>
                  <p className="text-[1.6rem] leading-[1.8] text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </AppearOnScroll>
            ))}
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section>
        <div className="max-w-[110rem] mx-auto">
          <AppearOnScroll delay={0}>
            <h2 className="text-[2.7rem] md:text-[3.6rem] font-semibold mb-[4rem]">
              How we work
            </h2>
          </AppearOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <AppearOnScroll key={item.step} delay={index * 150}>
                <div className="p-8 rounded-2xl bg-muted border border-border">
                  <span className="text-[1.4rem] font-semibold text-primary">{item.step}</span>
                  <h3 className="text-[2.2rem] font-semibold mt-2 mb-3">{item.title}</h3>
                  <p className="text-[1.6rem] leading-[1.8] text-muted-foreground">
                    {item.description}
                  </p>
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
            <Sparkles className="w-12 h-12 text-primary mx-auto mb-6" />
          </AppearOnScroll>
          <AppearOnScroll delay={150}>
            <h3 className="text-[2.4rem] font-semibold mb-[1.5rem]">
              Have a project in mind?
            </h3>
          </AppearOnScroll>
          <AppearOnScroll delay={300}>
            <p className="text-[1.8rem] leading-[1.8] text-muted-foreground mb-[2rem]">
              Tell us what you are building. We will respond with ideas, a plan, and a clear next step.
            </p>
          </AppearOnScroll>
          <AppearOnScroll delay={450}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 text-[1.6rem] font-medium bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              <Mail className="w-5 h-5" />
              Start a project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </AppearOnScroll>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default CustomProjects;
