import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, Phone, User, FileText } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    description: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      // Here you would typically send the data to your backend
      const emailBody = `שם: ${formData.name}\nטלפון: ${formData.phone}\nתיאור התקלה: ${formData.description}`;
      const subject = "פנייה חדשה לשחזור קבצים";
      
      // Open email client
      window.location.href = `mailto:egozkokus1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
      
      toast({
        title: "הפנייה נשלחה בהצלחה!",
        description: "נחזור אליך בהקדם האפשרי",
      });

      // Reset form
      setFormData({ name: '', phone: '', description: '' });
    } catch (error) {
      toast({
        title: "שגיאה בשליחת הפנייה",
        description: "אנא נסה שוב או פנה דרך WhatsApp",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact-form" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-hebrew text-3xl md:text-4xl font-bold mb-4">
            בואו נתחיל
          </h2>
          <p className="font-hebrew text-lg text-muted-foreground max-w-2xl mx-auto">
            מלא את הטופס הפשוט ונחזור אליך עם הערכה ראשונית
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border border-primary/10">
            <CardHeader className="text-center pb-8">
              <CardTitle className="font-hebrew text-2xl">
                שליחת פנייה
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-hebrew text-right flex items-center gap-2 justify-end">
                      <User className="h-4 w-4" />
                      שם מלא
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="font-hebrew text-right"
                      placeholder="הכנס את שמך המלא"
                    />
                  </div>

                  {/* Phone Field */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-hebrew text-right flex items-center gap-2 justify-end">
                      <Phone className="h-4 w-4" />
                      מספר טלפון
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="font-hebrew text-right"
                      placeholder="050-1234567"
                    />
                  </div>
                </div>

                {/* Description Field */}
                <div className="space-y-2">
                  <Label htmlFor="description" className="font-hebrew text-right flex items-center gap-2 justify-end">
                    <FileText className="h-4 w-4" />
                    תיאור התקלה
                  </Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="font-hebrew text-right resize-none"
                    placeholder="אנא תאר בקצרה מה קרה לקבצים (למשל: מחיקה בטעות, קרס המחשב, כונן לא נפתח וכו')"
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center pt-4">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-hebrew text-lg px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white ml-2"></div>
                    ) : (
                      <Send className="ml-2 h-5 w-5" />
                    )}
                    {isSubmitting ? 'שולח...' : 'שלח פנייה'}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};