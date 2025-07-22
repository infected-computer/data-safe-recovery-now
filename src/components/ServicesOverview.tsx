import { HardDrive, Smartphone, Monitor, Database, FileX, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: HardDrive,
    title: "שחזור דיסק קשיח",
    description: "שחזור קבצים מדיסקים קשיחים פגומים או מקולקלים",
    features: ["HDD ו-SSD", "נזק לוגי", "כל הגדלים"]
  },
  {
    icon: FileX,
    title: "מחיקה בטעות",
    description: "שחזור קבצים שנמחקו בטעות או בעקבות ניקוי מערכת",
    features: ["מחיקה ידנית", "ניקוי אוטומטי", "פורמט בטעות"]
  },
  {
    icon: HardDrive,
    title: "כרטיסי זיכרון",
    description: "שחזור מכרטיסי זיכרון ודיסקים אונקיים",
    features: ["SD ו-MicroSD", "כרטיסי CF", "דיסקים אונקיים"]
  },
  {
    icon: Monitor,
    title: "מחשבים אישיים",
    description: "שחזור מכל סוגי המחשבים האישיים",
    features: ["Windows ו-Mac", "Linux", "מחשבים ביתיים"]
  }
];

export const ServicesOverview = () => {
  return (
    <section className="py-20 bg-gradient-overlay relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 tech-pattern opacity-50"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-accent/5 rounded-full blur-lg"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-hebrew text-3xl md:text-4xl font-bold mb-4 gradient-text">
            השירותים שלנו
          </h2>
          <p className="font-hebrew text-lg text-muted-foreground max-w-2xl mx-auto">
            פתרונות שחזור נתונים מקצועיים לכל סוגי הבעיות והמכשירים
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group glass-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/20 hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl mb-6 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300 animate-glow">
                <service.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Title & Description */}
              <h3 className="font-hebrew font-semibold text-xl mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="font-hebrew text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 font-hebrew text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-slide-up">
          <div className="glass-card gradient-bg rounded-2xl p-8 border border-primary/20 text-white hover-lift">
            <h3 className="font-hebrew text-2xl font-bold mb-4">
              רוצה לדעת איך התהליך עובד?
            </h3>
            <p className="font-hebrew text-lg mb-6 max-w-2xl mx-auto opacity-90">
              צפה בהסבר המפורט עם צילומי מסך של כל שלב בתהליך שחזור הקבצים
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-hebrew text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link to="/process">
                צפה בתהליך המלא
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};