import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "דוד כהן",
    role: "עורך דין",
    text: "השירות פשוט הציל לי את הקריירה. קבצים חשובים שנמחקו בטעות חזרו אליי תוך כמה שעות. מקצועי ואמין ביותר!",
    rating: 5
  },
  {
    name: "שרה לוי",
    role: "גרפיקאית עצמאית",
    text: "אחרי שהדיסק הקשיח התקלקל, חשבתי שאיבדתי את כל העבודות שלי. הצוות כאן שחזר הכל בצורה מושלמת. תודה רבה!",
    rating: 5
  },
  {
    name: "מיכאל רוזן",
    role: "בעל עסק",
    text: "שירות מהיר, יעיל ושקוף. הם הסבירו לי כל שלב בתהליך וגבו תשלום רק לאחר שראיתי שהקבצים אכן חזרו.",
    rating: 5
  },
  {
    name: "רחל אברהם",
    role: "רואת חשבון",
    text: "ממליצה בחום! איבדתי קבצי לקוחות חשובים והם שחזרו הכל תוך יום. השירות המרחוק חסך לי זמן ומאמץ.",
    rating: 5
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-muted/50 to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-10 w-28 h-28 bg-accent/10 rounded-full blur-lg animate-pulse"></div>
        <div className="absolute bottom-32 left-10 w-36 h-36 bg-primary/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-hebrew text-3xl md:text-4xl font-bold mb-4 gradient-text">
            מה אומרים הלקוחות שלנו?
          </h2>
          <p className="font-hebrew text-lg text-muted-foreground max-w-2xl mx-auto">
            המלצות אמיתיות מלקוחות שחוו את השירות שלנו
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glass-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-primary/20 to-accent/10 rounded-full p-2">
                  <Quote className="h-6 w-6 text-primary flex-shrink-0" />
                </div>
                <div className="flex-1">
                  <p className="font-hebrew text-lg text-foreground mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-hebrew font-semibold text-lg text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="font-hebrew text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                    
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current text-yellow-500" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Stats */}
        <div className="mt-16 text-center animate-slide-up">
          <div className="inline-flex items-center gap-8 glass-card rounded-2xl p-8 shadow-lg hover-lift">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">4.9/5</div>
              <div className="font-hebrew text-sm text-muted-foreground">דירוג ממוצע</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success">1000+</div>
              <div className="font-hebrew text-sm text-muted-foreground">לקוחות מרוצים</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">98%</div>
              <div className="font-hebrew text-sm text-muted-foreground">שיעור הצלחה</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};