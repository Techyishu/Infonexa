import { Layout } from "@/components/layout";
import {
  HeroVideoSlider,
  ServicesSection,
  WhyChooseUs,
  TechnologyStack,
  TestimonialsSection,
  CTASection,
} from "@/components/home";

const Index = () => {
  return (
    <Layout>
      <HeroVideoSlider />
      <ServicesSection />
      <WhyChooseUs />
      <TechnologyStack />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;