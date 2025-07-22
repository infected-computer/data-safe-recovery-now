import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Shield } from "lucide-react";
import SEO from "@/components/SEO";

// ... rest of the pricing data ...

export const PricingPage = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent("שלום, אני מעוניין לקבל הצעת מחיר לשחזור קבצים. אשמח לפרטים.");
    window.open(`https://wa.me/972123456789?text=${message}`, '_blank');
  };

  const pricingStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Offer",
        "position": 1,
        "name": "בדיקה ראשונית",
        "price": "0",
        "priceCurrency": "ILS",
        "description": "הערכת סיכויי השחזור ללא עלות"
      },
      {
        "@type": "Offer", 
        "position": 2,
        "name": "שחזור בסיסי",
        "priceRange": "350-600",
        "priceCurrency": "ILS",
        "description": "לקבצים רגילים ובעיות פשוטות"
      },
      {
        "@type": "Offer",
        "position": 3,
        "name": "שחזור מתקדם",
        "priceRange": "700-1200",
        "priceCurrency": "ILS",
        "description": "למקרים מורכבים וכמויות גדולות"
      }
    ]
  };

  return (
    <>
      <SEO 
        title="מחירון שחזור קבצים | מחירים שקופים והוגנים"
        description="מחירון שירותי שחזור קבצים מרחוק. בדיקה חינמית, תשלום רק לאחר הצלחה. מחירים החל מ-350₪ לשחזור בסיסי."
        keywords="מחירון שחזור קבצים, עלות שחזור נתונים, מחיר שחזור דיסק קשיח, תעריפי שחזור"
        structuredData={pricingStructuredData}
      />
      <div className="min-h-screen bg-background py-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <h1 className="font-hebrew text-4xl md:text-5xl font-bold mb-6">
          מחירון שירותי שחזור קבצים
        </h1>
        <p className="font-hebrew text-xl text-muted-foreground max-w-3xl mx-auto">
          תמחור שקוף והוגן ללא הפתעות. בדיקה ראשונית תמיד ללא עלות
        </p>
      </div>

      {/* Pricing Plans */}
      <div className="max-w-7xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative ${plan.color} ${plan.popular ? 'ring-2 ring-accent' : ''} hover:shadow-lg transition-shadow`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-accent text-accent-foreground font-hebrew">
                    <Star className="ml-1 h-3 w-3" />
                    הכי פופולרי
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center">
                <CardTitle className="font-hebrew text-xl mb-2">
                  {plan.name}
                </CardTitle>
                <div className="text-3xl font-bold text-primary mb-2">
                  {plan.price}
                </div>
                <p className="font-hebrew text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="font-hebrew text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  onClick={openWhatsApp}
                  className={`w-full mt-6 font-hebrew ${
                    plan.popular 
                      ? 'bg-accent hover:bg-accent/90' 
                      : 'bg-primary hover:bg-primary/90'
                  }`}
                >
                  קבל הצעת מחיר
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Additional Services */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="font-hebrew text-3xl font-bold text-center mb-12">
          שירותים נוספים
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {additionalServices.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="font-hebrew text-lg text-center">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-2xl font-bold text-accent mb-3">
                  {service.price}
                </div>
                <p className="font-hebrew text-sm text-muted-foreground mb-4">
                  {service.description}
                </p>
                <Button 
                  onClick={openWhatsApp}
                  variant="outline" 
                  className="font-hebrew"
                >
                  פרטים נוספים
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Guarantee Section */}
      <div className="max-w-4xl mx-auto px-4">
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-primary/10 p-4 rounded-full">
                <Shield className="h-12 w-12 text-primary" />
              </div>
            </div>
            
            <h3 className="font-hebrew text-2xl font-bold mb-4">
              ההבטחה שלנו
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <Zap className="h-8 w-8 text-accent mx-auto mb-2" />
                <h4 className="font-hebrew font-semibold mb-2">בדיקה חינמית</h4>
                <p className="font-hebrew text-sm text-muted-foreground">
                  לא משלמים עד שרואים תוצאות
                </p>
              </div>
              
              <div>
                <Shield className="h-8 w-8 text-success mx-auto mb-2" />
                <h4 className="font-hebrew font-semibold mb-2">אחריות מלאה</h4>
                <p className="font-hebrew text-sm text-muted-foreground">
                  אחריות לכל הקבצים שנשחזרו
                </p>
              </div>
              
              <div>
                <Check className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-hebrew font-semibold mb-2">שקיפות מלאה</h4>
                <p className="font-hebrew text-sm text-muted-foreground">
                  מחירים קבועים ללא הפתעות
                </p>
              </div>
            </div>

            <Button 
              onClick={openWhatsApp}
              size="lg"
              className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground font-hebrew"
            >
              התחל עכשיו - בדיקה חינמית
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
