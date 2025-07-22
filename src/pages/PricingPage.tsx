import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Shield } from "lucide-react";
import SEO from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const pricingPlans = [
  {
    name: "אבחון ראשוני",
    price: "ללא עלות",
    description: "הערכה מקצועית של הנזק ואפשרויות השחזור",
    features: [
      "גישה מרחוק בטוחה",
      "סריקה מקצועית של המדיה",
      "דו\"ח מפורט על קבצים ניתנים לשחזור",
      "הערכת זמני עבודה",
      "ייעוץ טכני מקצועי"
    ],
    popular: false,
    color: "border-primary"
  },
  {
    name: "שחזור כרטיסי זיכרון ודיסקים אונקיים",
    price: "₪350-₪600",
    description: "שחזור מכל סוגי כרטיסי הזיכרון ודיסקים אונקיים",
    features: [
      "כולל אבחון ראשוני מלא",
      "כרטיסי SD, MicroSD, CF",
      "דיסקים אונקיים USB",
      "SSD חיצוניים",
      "ללא הגבלת נפח או מספר קבצים",
      "אחריות מלאה לתוצאות"
    ],
    popular: true,
    color: "border-accent"
  },
  {
    name: "שחזור דיסקים קשיחים",
    price: "₪700-₪1,200",
    description: "שחזור מדיסקים קשיחים פנימיים וחיצוניים",
    features: [
      "כולל כל השירותים הקודמים",
      "דיסקים קשיחים HDD ו-SSD",
      "נזק לוגי בלבד",
      "ללא הגבלת נפח או מספר קבצים",
      "שחזור מטא-דאטה ומבנה תיקיות"
    ],
    popular: false,
    color: "border-warning"
  }
];

const additionalServices = [
  {
    title: "התקנת מערכות גיבוי",
    price: "₪200-₪500",
    description: "הקמת מערכת גיבוי אוטומטית למניעת אובדן נתונים עתידי"
  },
  {
    title: "ייעוץ אבטחת מידע",
    price: "₪300/שעה",
    description: "הערכת סיכונים והמלצות להגנה על הנתונים"
  },
  {
    title: "הדרכה אישית",
    price: "₪250/שעה",
    description: "הדרכה על כלי שחזור וגיבוי לשימוש עצמאי"
  }
];

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
      <Header />
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

      {/* Service Pricing Table */}
      <div className="max-w-5xl mx-auto px-4 mb-20">
        <div className="bg-card rounded-lg border shadow-lg overflow-hidden">
          <div className="bg-primary/5 px-6 py-4 border-b">
            <h2 className="font-hebrew text-2xl font-bold text-center">
              תעריפי שחזור קבצים
            </h2>
          </div>
          
          <div className="divide-y">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`p-6 hover:bg-muted/30 transition-colors ${plan.popular ? 'bg-accent/5 border-r-4 border-accent' : ''}`}>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-hebrew text-xl font-semibold text-foreground">
                        {plan.name}
                      </h3>
                      {plan.popular && (
                        <Badge className="bg-accent text-accent-foreground font-hebrew text-xs">
                          מומלץ
                        </Badge>
                      )}
                    </div>
                    <p className="font-hebrew text-muted-foreground mb-3">
                      {plan.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {plan.features.slice(0, 3).map((feature, featureIndex) => (
                        <span key={featureIndex} className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                          <Check className="h-3 w-3 text-success" />
                          <span className="font-hebrew">{feature}</span>
                        </span>
                      ))}
                      {plan.features.length > 3 && (
                        <span className="text-sm text-muted-foreground font-hebrew">
                          +{plan.features.length - 3} נוספים
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 lg:flex-col lg:items-end lg:text-right">
                    <div className="text-2xl lg:text-3xl font-bold text-primary">
                      {plan.price}
                    </div>
                    <Button 
                      onClick={openWhatsApp}
                      size="sm"
                      className={`font-hebrew ${
                        plan.popular 
                          ? 'bg-accent hover:bg-accent/90' 
                          : 'bg-primary hover:bg-primary/90'
                      }`}
                    >
                      פרטים נוספים
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
    <Footer />
    </>
  );
};
