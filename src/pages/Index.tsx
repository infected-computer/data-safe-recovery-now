import { HeroSection } from "@/components/HeroSection";
import { HowItWorks } from "@/components/HowItWorks";
import { TrustSection } from "@/components/TrustSection";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <HowItWorks />
      <TrustSection />
      <ContactForm />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
