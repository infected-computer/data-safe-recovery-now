import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { HowItWorks } from "@/components/HowItWorks";
import SEO from "@/components/SEO";

const ProcessPage = () => {
  return (
    <>
      <SEO 
        title="תהליך שחזור הקבצים - איך זה עובד?"
        description="הסבר מפורט על תהליך שחזור הקבצים מרחוק עם צילומי מסך והדרכה שלב אחר שלב."
        keywords="תהליך שחזור קבצים, איך זה עובד, שחזור מרחוק, AnyDesk, R-Studio"
      />
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="text-center mb-12">
              <h1 className="font-hebrew text-4xl md:text-5xl font-bold mb-6">
                תהליך שחזור הקבצים
              </h1>
              <p className="font-hebrew text-xl text-muted-foreground max-w-3xl mx-auto">
                הסבר מפורט על התהליך השלם של שחזור קבצים מרחוק - 
                מההתחברות הראשונית ועד לשחזור המלא
              </p>
            </div>
          </div>
          <HowItWorks />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </>
  );
};

export default ProcessPage;