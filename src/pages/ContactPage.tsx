import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, MessageCircle, User, FileText, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const emailBody = `שם: ${formData.name}\nטלפון: ${formData.phone}\nאימייל: ${formData.email}\nנושא: ${formData.subject}\n\nהודעה:\n${formData.message}`;
      const subject = `פנייה חדשה: ${formData.subject}`;
      
      window.location.href = `mailto:egozkokus1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
      
      toast({
        title: "הפנייה נשלחה בהצלחה!",
        description: "נחזור אליך בהקדם האפשרי",
      });

      setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
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

  const openWhatsApp = () => {
    const message = encodeURIComponent("שלום, אני זקוק לעזרה בשחזור קבצים. אשמח לקבל ייעוץ ראשוני.");
    window.open(`https://wa.me/972536657279?text=${message}`, '_blank');
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "תגובה מיידית",
      action: "שלח הודעה",
      onClick: openWhatsApp,
      primary: true
    },
    {
      icon: Mail,
      title: "אימייל",
      description: "egozkokus1@gmail.com",
      action: "שלח אימייל",
      onClick: () => window.location.href = 'mailto:egozkokus1@gmail.com'
    },
    {
      icon: Phone,
      title: "טלפון",
      description: "לשיחות דחופות",
      action: "התקשר עכשיו",
      onClick: () => window.location.href = 'tel:+972536657279'
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background py-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <h1 className="font-hebrew text-4xl md:text-5xl font-bold mb-6">
          יצירת קשר
        </h1>
        <p className="font-hebrew text-xl text-muted-foreground max-w-3xl mx-auto">
          זקוק לעזרה בשחזור קבצים? אנחנו כאן בשבילך 24/7
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Methods */}
          <div className="lg:col-span-1">
            <h2 className="font-hebrew text-2xl font-bold mb-8">
              דרכי התקשרות
            </h2>
            
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <Card 
                  key={index}
                  className={`cursor-pointer hover:shadow-lg transition-all duration-300 ${
                    method.primary ? 'border-accent bg-accent/5' : ''
                  }`}
                  onClick={method.onClick}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-full ${
                        method.primary ? 'bg-accent text-accent-foreground' : 'bg-primary/10 text-primary'
                      }`}>
                        <method.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-hebrew font-semibold text-lg">
                          {method.title}
                        </h3>
                        <p className="font-hebrew text-muted-foreground text-sm">
                          {method.description}
                        </p>
                      </div>
                    </div>
                    <Button 
                      className={`w-full mt-4 font-hebrew ${
                        method.primary ? 'bg-accent hover:bg-accent/90' : 'bg-primary hover:bg-primary/90'
                      }`}
                    >
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Business Hours */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="font-hebrew flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  שעות פעילות
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 font-hebrew text-sm">
                  <div className="flex justify-between">
                    <span>ראשון - חמישי</span>
                    <span className="font-semibold">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>שישי</span>
                    <span className="font-semibold">09:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>שבת</span>
                    <span className="text-muted-foreground">סגור</span>
                  </div>
                  <div className="mt-4 p-3 bg-accent/10 rounded-lg">
                    <p className="text-xs font-hebrew text-center">
                      מקרי חירום: זמינים גם מחוץ לשעות הפעילות דרך WhatsApp
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="font-hebrew text-2xl text-center">
                  שלח לנו הודעה
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-hebrew text-right flex items-center gap-2 justify-end">
                        <User className="h-4 w-4" />
                        שם מלא *
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

                    {/* Phone */}
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-hebrew text-right flex items-center gap-2 justify-end">
                        <Phone className="h-4 w-4" />
                        מספר טלפון *
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-hebrew text-right flex items-center gap-2 justify-end">
                        <Mail className="h-4 w-4" />
                        כתובת אימייל
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="font-hebrew text-right"
                        placeholder="example@email.com"
                      />
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="font-hebrew text-right flex items-center gap-2 justify-end">
                        <FileText className="h-4 w-4" />
                        נושא הפנייה *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="font-hebrew text-right"
                        placeholder="לדוגמה: שחזור קבצים מכונן קשיח"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-hebrew text-right flex items-center gap-2 justify-end">
                      <FileText className="h-4 w-4" />
                      תיאור מפורט של הבעיה *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="font-hebrew text-right resize-none"
                      placeholder="אנא תאר בפירוט מה קרה לקבצים, איך התגלתה הבעיה, ומה ניסית לעשות עד כה..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-4">
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      size="lg"
                      className="bg-accent hover:bg-accent/90 text-accent-foreground font-hebrew px-12 py-6"
                    >
                      {isSubmitting ? (
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white ml-2"></div>
                      ) : (
                        <Send className="ml-2 h-5 w-5" />
                      )}
                      {isSubmitting ? 'שולח...' : 'שלח הודעה'}
                    </Button>
                  </div>

                  <p className="text-center text-sm text-muted-foreground font-hebrew">
                    * שדות חובה
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Notice */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-warning/10 border-warning/20">
            <CardContent className="p-8 text-center">
              <h3 className="font-hebrew text-xl font-bold mb-4 text-warning">
                מצב חירום? זקוק לעזרה דחופה?
              </h3>
              <p className="font-hebrew text-muted-foreground mb-6">
                אם מדובר בנתונים עסקיים קריטיים או מצב חירום, 
                פנה אלינו מיידית דרך WhatsApp לתגובה מהירה
              </p>
              <Button 
                onClick={openWhatsApp}
                className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-hebrew"
              >
                <MessageCircle className="ml-2 h-5 w-5" />
                צור קשר חירום ב-WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};