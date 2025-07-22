import { HardDrive, Smartphone, Monitor, Database, FileX, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: HardDrive,
    title: "שחזור דיסק קשיח",
    description: "שחזור קבצים מדיסקים קשיחים פגומים או מקולקלים",
    features: ["HDD ו-SSD", "נזק פיזי או לוגי", "כל הגדלים"]
  },
  {
    icon: FileX,
    title: "מחיקה בטעות",
    description: "שחזור קבצים שנמחקו בטעות או בעקבות ניקוי מערכת",
    features: ["מחיקה ידנית", "ניקוי אוטומטי", "פורמט בטעות"]
  },
  {
    icon: Smartphone,
    title: "מכשירים ניידים",
    description: "שחזור נתונים מטלפונים וטאבלטים",
    features: ["Android ו-iOS", "כרטיסי זיכרון", "זיכרון פנימי"]
  },
  {
    icon: Monitor,
    title: "מחשבים נייחים ונישאים",
    description: "שחזור מכל סוגי המחשבים והמערכות",
    features: ["Windows ו-Mac", "Linux", "מערכות ישנות"]
  },
  {
    icon: Database,
    title: "שרתים ובסיסי נתונים",
    description: "שחזור נתונים ממערכות עסקיות מתקדמות",
    features: ["SQL Server", "MySQL", "RAID Arrays"]
  },
  {
    icon: Zap,
    title: "נזק חשמלי",
    description: "שחזור לאחר נזק מחשמל או ברק",
    features: ["נזק לוח אם", "התחממות יתר", "כיבוי פתאומי"]
  }
];

export const ServicesOverview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-hebrew text-3xl md:text-4xl font-bold mb-4">
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
              className="group bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/20"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-8 w-8 text-primary" />
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
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="font-hebrew text-2xl font-bold mb-4 text-foreground">
              רוצה לדעת איך התהליך עובד?
            </h3>
            <p className="font-hebrew text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              צפה בהסבר המפורט עם צילומי מסך של כל שלב בתהליך שחזור הקבצים
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-hebrew text-lg px-8 py-6 rounded-full"
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