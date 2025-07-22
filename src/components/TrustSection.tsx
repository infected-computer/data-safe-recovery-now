import { Shield, Clock, Users, Award } from "lucide-react";

const trustItems = [
  {
    icon: Clock,
    title: "מעל 7 שנות ניסיון",
    description: "בשחזור קבצים מרחוק"
  },
  {
    icon: Shield,
    title: "100% שחזור מרחוק",
    description: "לא צריך לצאת מהבית"
  },
  {
    icon: Users,
    title: "לקוחות פרטיים ועסקיים",
    description: "שירות מותאם לכל צורך"
  },
  {
    icon: Award,
    title: "98% שיעור הצלחה",
    description: "תוצאות מוכחות"
  }
];

export const TrustSection = () => {
  return (
    <section className="py-20 bg-primary-muted">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-hebrew text-3xl md:text-4xl font-bold mb-4 text-primary">
            למה לבחור בנו?
          </h2>
          <p className="font-hebrew text-lg text-muted-foreground max-w-2xl mx-auto">
            ניסיון, מקצועיות ואמינות שמובילים לתוצאות
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <item.icon className="h-10 w-10 text-primary" />
              </div>
              
              <h3 className="font-hebrew font-semibold text-xl mb-3 text-foreground">
                {item.title}
              </h3>
              
              <p className="font-hebrew text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-card rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="font-hebrew text-lg text-muted-foreground">לקוחות מרוצים</div>
          </div>
          
          <div className="text-center p-8 bg-card rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-success mb-2">98%</div>
            <div className="font-hebrew text-lg text-muted-foreground">שיעור הצלחה</div>
          </div>
          
          <div className="text-center p-8 bg-card rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-accent mb-2">7+</div>
            <div className="font-hebrew text-lg text-muted-foreground">שנות ניסיון</div>
          </div>
        </div>
      </div>
    </section>
  );
};