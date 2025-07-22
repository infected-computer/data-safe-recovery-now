import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, HardDrive, MessageCircle } from "lucide-react";

const navigation = [
  { name: "דף הבית", href: "/" },
  { name: "מחירון", href: "/pricing" },
  { name: "איך זה עובד", href: "/process" },
  { name: "מאמרים", href: "/articles" },
  { name: "אודות", href: "/about" },
  { name: "יצירת קשר", href: "/contact" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const openWhatsApp = () => {
    const message = encodeURIComponent("שלום, אני זקוק לעזרה בשחזור קבצים. אשמח לקבל ייעוץ ראשוני.");
    window.open(`https://wa.me/972536657279?text=${message}`, '_blank');
  };

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border" role="banner">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 font-rubik font-bold text-xl text-primary"
            aria-label="דוקטור פיקס - דף הבית"
          >
            <HardDrive className="h-8 w-8" aria-hidden="true" />
            דוקטור פיקס
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="ניווט ראשי">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-hebrew text-sm font-medium transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1 ${
                  isActive(item.href) 
                    ? 'text-primary border-b-2 border-primary' 
                    : 'text-muted-foreground'
                }`}
                aria-current={isActive(item.href) ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              onClick={openWhatsApp}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-hebrew"
              aria-label="צור קשר מהיר בוואטסאפ"
            >
              <MessageCircle className="ml-2 h-4 w-4" aria-hidden="true" />
              צור קשר מהיר
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "סגור תפריט" : "פתח תפריט"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav 
            id="mobile-menu"
            className="md:hidden border-t border-border bg-background animate-slide-in-down"
            role="navigation"
            aria-label="ניווט ראשי - מובייל"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium font-hebrew rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset ${
                    isActive(item.href)
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-primary hover:bg-muted'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-4 px-3">
                <Button
                  onClick={() => {
                    openWhatsApp();
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-hebrew"
                  aria-label="צור קשר מהיר בוואטסאפ"
                >
                  <MessageCircle className="ml-2 h-4 w-4" aria-hidden="true" />
                  צור קשר מהיר
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
