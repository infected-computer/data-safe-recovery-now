
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
    <section className="py-20 relative overflow-hidden">
      {/* Background with customer service imagery */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-overlay-tech"></div>
        <div className="absolute inset-0 tech-pattern-dense opacity-50"></div>
      </div>

      {/* Enhanced decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-10 w-40 h-40 bg-gradient-to-br from-accent/12 to-primary/8 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-32 left-10 w-48 h-48 bg-gradient-to-br from-primary/10 to-success/6 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-28 h-28 bg-gradient-to-br from-warning/8 to-accent/6 rounded-full blur-2xl animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-hebrew text-3xl md:text-4xl font-bold mb-4 gradient-text-vibrant">
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
              className="glass-card rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-border hover:border-primary/20 hover-lift hover-glow animate-scale-in stagger-animation"
              style={{ '--stagger': index } as React.CSSProperties}
            >
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-primary/25 to-accent/15 rounded-full p-3 shadow-lg">
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
                        <Star key={i} className="h-5 w-5 fill-current text-yellow-500 animate-pulse-soft" style={{ animationDelay: `${i * 0.2}s` }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced quote decoration */}
              <div className="absolute top-4 right-4 text-6xl text-primary/10 font-bold">"</div>
            </div>
          ))}
        </div>

        {/* Enhanced Overall Stats */}
        <div className="mt-16 text-center animate-slide-up">
          <div className="inline-flex items-center gap-8 glass-card rounded-2xl p-8 shadow-xl hover-lift hover-glow border border-primary/20 relative overflow-hidden">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text-vibrant">4.9/5</div>
              <div className="font-hebrew text-sm text-muted-foreground">דירוג ממוצע</div>
              <div className="w-8 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-2 rounded-full"></div>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-border to-transparent"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success">1000+</div>
              <div className="font-hebrew text-sm text-muted-foreground">לקוחות מרוצים</div>
              <div className="w-8 h-1 bg-gradient-to-r from-success to-primary mx-auto mt-2 rounded-full"></div>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-border to-transparent"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">98%</div>
              <div className="font-hebrew text-sm text-muted-foreground">שיעור הצלחה</div>
              <div className="w-8 h-1 bg-gradient-to-r from-accent to-warning mx-auto mt-2 rounded-full"></div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-primary/5 rounded-full blur-xl"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-accent/5 rounded-full blur-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
