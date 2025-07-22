import { MessageCircle, Mail, Clock, Download, Home, FileText, Users, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Footer = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent("שלום, אני זקוק לעזרה בשחזור קבצים. אשמח לקבל ייעוץ ראשוני.");
    window.open(`https://wa.me/972123456789?text=${message}`, '_blank');
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="font-hebrew text-2xl font-bold mb-6">
              שחזור קבצים מקצועי
            </h3>
            <p className="font-hebrew text-lg text-muted mb-6">
              שירותי שחזור קבצים מרחוק עם מעל 7 שנות ניסיון. 
              אמינות, מקצועיות ושקיפות מלאה.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5" />
                <span className="font-hebrew">egozkokus1@gmail.com</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5" />
                <span className="font-hebrew">ראשון-חמישי: 09:00-18:00</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-hebrew text-lg font-semibold mb-6">
              קישורים מהירים
            </h4>
            
            <div className="space-y-3">
              <Link 
                to="/" 
                className="flex items-center gap-2 text-background/80 hover:text-background transition-colors"
              >
                <Home className="h-4 w-4" />
                <span className="font-hebrew">דף הבית</span>
              </Link>
              
              <Link 
                to="/pricing" 
                className="flex items-center gap-2 text-background/80 hover:text-background transition-colors"
              >
                <DollarSign className="h-4 w-4" />
                <span className="font-hebrew">מחירון</span>
              </Link>
              
              <Link 
                to="/about" 
                className="flex items-center gap-2 text-background/80 hover:text-background transition-colors"
              >
                <Users className="h-4 w-4" />
                <span className="font-hebrew">אודותינו</span>
              </Link>
              
              <Link 
                to="/articles" 
                className="flex items-center gap-2 text-background/80 hover:text-background transition-colors"
              >
                <FileText className="h-4 w-4" />
                <span className="font-hebrew">מאמרים</span>
              </Link>
              
              <Link 
                to="/contact" 
                className="flex items-center gap-2 text-background/80 hover:text-background transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span className="font-hebrew">יצירת קשר</span>
              </Link>
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <h4 className="font-hebrew text-lg font-semibold mb-6">
              יצירת קשר מהירה
            </h4>
            
            <div className="space-y-4">
              <Button 
                onClick={openWhatsApp}
                variant="outline" 
                className="w-full justify-start border-background/20 text-background hover:bg-background/10"
              >
                <MessageCircle className="ml-2 h-4 w-4" />
                WhatsApp
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full justify-start border-background/20 text-background hover:bg-background/10"
                onClick={() => window.open('https://anydesk.com/download', '_blank')}
              >
                <Download className="ml-2 h-4 w-4" />
                הורדת AnyDesk
              </Button>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-hebrew text-lg font-semibold mb-6">
              מידע משפטי
            </h4>
            
            <div className="space-y-3">
              <Link 
                to="/terms" 
                className="flex items-center gap-2 text-background/80 hover:text-background transition-colors"
              >
                <FileText className="h-4 w-4" />
                <span className="font-hebrew">תנאי שימוש</span>
              </Link>
              
              <Link 
                to="/privacy" 
                className="flex items-center gap-2 text-background/80 hover:text-background transition-colors"
              >
                <FileText className="h-4 w-4" />
                <span className="font-hebrew">מדיניות פרטיות</span>
              </Link>
            </div>
          </div>

          {/* Emergency Contact */}
          <div>
            <h4 className="font-hebrew text-lg font-semibold mb-6">
              מקרה חירום?
            </h4>
            <p className="font-hebrew text-sm text-muted mb-4">
              במקרה של נתונים קריטיים או חירום עסקי, 
              פנה אלינו מיידית דרך WhatsApp.
            </p>
            <Button 
              onClick={openWhatsApp}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              צור קשר עכשיו
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="font-hebrew text-sm text-muted">
            © 2024 שחזור קבצים מקצועי. כל הזכויות שמורות.
          </p>
          <p className="font-hebrew text-xs text-muted mt-2">
            שירות מרחוק בלבד • בדיקה ללא עלות • תשלום רק לאחר הצלחה
          </p>
        </div>
      </div>
    </footer>
  );
};