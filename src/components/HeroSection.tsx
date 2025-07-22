import { Button } from "@/components/ui/button";
import { MessageCircle, Calculator } from "lucide-react";
import heroImage from "@/assets/hero-recovery.jpg";

export const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("שלום, אני זקוק לעזרה בשחזור קבצים. אשמח לקבל ייעוץ ראשוני.");
    window.open(`https://wa.me/972123456789?text=${message}`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="שחזור קבצים מקצועי"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-primary/20 to-background/95"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="font-hebrew text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-primary">שחזור קבצים מקצועי</span>
            <br />
            <span className="text-foreground">בלי לצאת מהבית</span>
          </h1>

          {/* Sub-headline */}
          <p className="font-hebrew text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            שירות אמין, מהיר וללא הגעה פיזית
            <br />
            <span className="text-accent font-semibold">מעל 7 שנות ניסיון • 87% הצלחה</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToForm}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-hebrew text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Calculator className="ml-2 h-5 w-5" />
              שליחת פנייה
            </Button>
            
            <Button 
              onClick={openWhatsApp}
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-hebrew text-lg px-8 py-6 rounded-full transition-all duration-300"
            >
              <MessageCircle className="ml-2 h-5 w-5" />
              שליחת הודעת WhatsApp
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground font-hebrew">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              100% שליטה מרחוק
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              לקוחות פרטיים ועסקיים
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              בדיקה ללא עלות
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};