import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TrustSection } from "@/components/TrustSection";
import { HowItWorks } from "@/components/HowItWorks";
import { VideoDemo } from "@/components/VideoDemo";
import { ServicesOverview } from "@/components/ServicesOverview";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import SEO from "@/components/SEO";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "שחזור קבצים מרחוק",
    "provider": {
      "@type": "LocalBusiness",
      "name": "דוקטור פיקס",
      "telephone": "+972-123456789",
      "email": "egozkokus1@gmail.com"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "ILS",
      "lowPrice": "0",
      "highPrice": "1200",
      "offerCount": "4"
    },
    "areaServed": {
      "@type": "Country",
      "name": "ישראל"
    }
  };

  return (
    <>
      <SEO 
        title="דוקטור פיקס - שחזור קבצים מקצועי מרחוק | 87% הצלחה | בדיקה חינמית"
        description="שירותי שחזור קבצים מקצועיים מרחוק עם מעל 7 שנות ניסיון. בדיקה חינמית, תשלום רק לאחר הצלחה. שחזור מחיקה בטעות, כוננים פגומים ועוד."
        keywords="שחזור קבצים, שחזור נתונים מרחוק, שחזור דיסק קשיח, שחזור מחיקה בטעות, R-Studio, AnyDesk, שחזור SSD"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background animate-page-enter">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded">
          דלג לתוכן הראשי
        </a>
        <Header />
        <main id="main-content" role="main">
          <HeroSection />
          <TrustSection />
          <HowItWorks />
          <VideoDemo />
          <ServicesOverview />
          <TestimonialsSection />
          <ContactForm />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </>
  );
};

export default Index;
