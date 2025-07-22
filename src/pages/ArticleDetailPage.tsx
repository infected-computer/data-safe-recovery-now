import { useParams, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowRight, ArrowLeft, Share2 } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import SEO from "@/components/SEO";

const articles = {
  "1": {
    id: 1,
    title: "5 שגיאות נפוצות שגורמות לאובדן נתונים",
    excerpt: "המדריך המלא למניעת אובדן קבצים חשובים והגנה על הנתונים שלכם",
    author: "צוות דוקטור פיקס",
    date: "15 בינואר 2024",
    readTime: "5 דקות קריאה",
    category: "מניעה",
    image: "photo-1488590528505-98d2b5aba04b",
    content: `אובדן נתונים הוא אחד הסיוטים הגדולים של כל מי שעובד עם מחשב. בין אם מדובר בתמונות משפחתיות יקרות, מסמכי עבודה חשובים או פרויקטים שלקח שבועות לכתוב - אובדן הנתונים יכול להיות הרסני.

## השגיאה הראשונה: העדר גיבוי סדיר

**הבעיה:** רוב האנשים חושבים שזה לא יקרה להם, עד שזה כן קורה.

**הפתרון:**
- הגדר גיבוי אוטומטי יומי לענן (Google Drive, OneDrive, Dropbox)
- השתמש בכלל 3-2-1: 3 עותקים של הנתונים, 2 מדיות שונות, 1 חוץ-מקומי
- בדוק תקופתי שהגיבוי עובד באמת

## השגיאה השנייה: התעלמות מאזהרות המערכת

**הבעיה:** Windows ו-Mac מציגים אזהרות על בעיות בכונן, אבל רבים מתעלמים מהן.

**הפתרון:**
- שים לב להודעות על שגיאות דיסק
- הקשב לצלילים חשודים מהכונן הקשיח
- בדוק את בריאות הכונן באמצעות כלים מובנים

**זקוק לעזרה?** פנה אלינו לבדיקה חינמית ללא התחייבות.`
  }
};

export const ArticleDetailPage = () => {
  const { id } = useParams();
  const article = articles[id as keyof typeof articles];

  const openWhatsApp = () => {
    const message = encodeURIComponent(`שלום, קראתי את המאמר "${article?.title}" באתר ואני זקוק לעזרה בשחזור קבצים.`);
    window.open(`https://wa.me/972123456789?text=${message}`, '_blank');
  };

  if (!article) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-hebrew text-2xl font-bold mb-4">המאמר לא נמצא</h1>
            <Link to="/articles">
              <Button>חזור למאמרים</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <SEO 
        title={`${article.title} | דוקטור פיקס`}
        description={article.excerpt}
        keywords={`שחזור נתונים, ${article.category}, ${article.title}`}
      />
      <Header />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="relative h-96 overflow-hidden">
          <img 
            src={`https://images.unsplash.com/${article.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80`}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <Badge className="mb-4 bg-accent text-accent-foreground">
                {article.category}
              </Badge>
              <h1 className="font-hebrew text-3xl md:text-5xl font-bold mb-4">
                {article.title}
              </h1>
              <p className="font-hebrew text-lg md:text-xl opacity-90">
                {article.excerpt}
              </p>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="mb-8">
            <Link to="/articles" className="inline-flex items-center text-primary hover:text-primary/80 font-hebrew mb-6">
              <ArrowRight className="ml-2 h-4 w-4" />
              חזור למאמרים
            </Link>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span className="font-hebrew">{article.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span className="font-hebrew">{article.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span className="font-hebrew">{article.readTime}</span>
              </div>
            </div>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            <div 
              className="font-hebrew leading-relaxed text-foreground"
              style={{ whiteSpace: 'pre-line' }}
            >
              {article.content}
            </div>
          </div>

          {/* CTA Section */}
          <Card className="mt-12 bg-primary/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="font-hebrew text-2xl font-bold mb-4">
                זקוק לעזרה מקצועית?
              </h3>
              <p className="font-hebrew text-muted-foreground mb-6">
                המאמר עזר לך? אם אתה מתמודד עם אובדן נתונים, אנחנו כאן לעזור.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={openWhatsApp}
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-hebrew"
                >
                  בדיקה חינמית עכשיו
                </Button>
                <Link to="/pricing">
                  <Button variant="outline" size="lg" className="font-hebrew">
                    מחירון שירותים
                    <ArrowLeft className="mr-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};