import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WhatsAppFloat = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent("שלום, אני זקוק לעזרה בשחזור קבצים. אשמח לקבל ייעוץ ראשוני.");
    window.open(`https://wa.me/972123456789?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <Button
        onClick={openWhatsApp}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse hover:animate-none"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
      
      {/* Tooltip */}
      <div className="absolute bottom-16 left-0 bg-foreground text-background px-3 py-2 rounded-lg text-sm font-hebrew whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        שליחת הודעה בWhatsApp
        <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground"></div>
      </div>
    </div>
  );
};