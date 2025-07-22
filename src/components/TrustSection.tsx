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
    <section className="py-20 bg-gradient-to-br from-primary-muted via-background to-accent/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-40 h-40 bg-primary/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-hebrew text-3xl md:text-4xl font-bold mb-4 gradient-text">
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
              className="text-center group animate-scale-in hover-lift"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/10 rounded-full mb-6 group-hover:from-primary/30 group-hover:to-accent/20 transition-all duration-300 animate-glow">
                <item.icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" />
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
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up">
          <div className="text-center p-8 glass-card rounded-2xl shadow-lg hover-lift transition-all duration-300">
            <div className="text-4xl font-bold gradient-text mb-2">1000+</div>
            <div className="font-hebrew text-lg text-muted-foreground">לקוחות מרוצים</div>
          </div>
          
          <div className="text-center p-8 glass-card rounded-2xl shadow-lg hover-lift transition-all duration-300">
            <div className="text-4xl font-bold text-success mb-2">98%</div>
            <div className="font-hebrew text-lg text-muted-foreground">שיעור הצלחה</div>
          </div>
          
          <div className="text-center p-8 glass-card rounded-2xl shadow-lg hover-lift transition-all duration-300">
            <div className="text-4xl font-bold text-accent mb-2">7+</div>
            <div className="font-hebrew text-lg text-muted-foreground">שנות ניסיון</div>
          </div>
        </div>
      </div>
    </section>
  );
};