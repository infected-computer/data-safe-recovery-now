import { Monitor, Link2, Search, CreditCard, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Monitor,
    title: "הלקוח פונה דרך האתר או וואטסאפ",
    description: "יצירת קשר ראשונית והבנת הבעיה",
    color: "text-primary"
  },
  {
    icon: Link2,
    title: "התחברות עם AnyDesk",
    description: "חיבור מרחוק בטוח למחשב הלקוח",
    color: "text-accent"
  },
  {
    icon: Search,
    title: "סריקה עם R-Studio (גרסת דמו)",
    description: "בדיקה מקצועית של הקבצים הניתנים לשחזור",
    color: "text-success"
  },
  {
    icon: CheckCircle,
    title: "הצגת התוצאות",
    description: "הלקוח רואה את הקבצים לפני התשלום",
    color: "text-warning"
  },
  {
    icon: CreditCard,
    title: "תשלום ושחזור מלא",
    description: "רק לאחר אישור הלקוח מתבצע השחזור הסופי",
    color: "text-primary"
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-hebrew text-3xl md:text-4xl font-bold mb-4">
            איך זה עובד?
          </h2>
          <p className="font-hebrew text-lg text-muted-foreground max-w-2xl mx-auto">
            תהליך פשוט ושקוף בחמישה שלבים ברורים
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 right-0 w-full h-0.5 bg-border z-0 transform translate-x-1/2"></div>
              )}
              
              {/* Step Card */}
              <div className="relative z-10 bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border group-hover:border-primary/20">
                {/* Step Number */}
                <div className="absolute -top-4 right-4 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors`}>
                  <step.icon className={`h-8 w-8 ${step.color}`} />
                </div>

                {/* Content */}
                <h3 className="font-hebrew font-semibold text-lg mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="font-hebrew text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};