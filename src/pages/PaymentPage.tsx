import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WhatsAppFloat } from '../components/WhatsAppFloat';
import { MessageSystem } from '../components/MessageSystem';
import SEO from '../components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const PaymentPage = () => {
  const handlePayment = () => {
    // Replace with your actual Squeezy Lemon payment URL
    window.open('https://doctorfix.squeezylem.com/checkout/your-product-id', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="תשלום - ד״ר פיקס"
        description="עמוד תשלום לשירותי שחזור מידע"
        canonicalUrl="https://doctorfix.co.il/payment"
      />
      
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-foreground">
              השלמת התשלום
            </h1>
            <p className="text-xl text-muted-foreground">
              בחר את החבילה המתאימה לך
            </p>
          </div>

          <div className="space-y-6">
            {/* Basic Package */}
            <Card className="border-2">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-primary">
                  חבילה בסיסית
                </CardTitle>
                <div className="text-3xl font-bold text-foreground">
                  ₪299
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>שחזור מידע מכרטיס זיכרון או דיסק קשיח</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>עד 50GB מידע</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>תמיכה טכנית בסיסית</span>
                  </li>
                </ul>
                <Button 
                  onClick={handlePayment}
                  className="w-full h-12 text-lg"
                  size="lg"
                >
                  בחר חבילה
                </Button>
              </CardContent>
            </Card>

            {/* Premium Package */}
            <Card className="border-2 border-primary">
              <CardHeader className="text-center bg-primary/5">
                <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium mb-2 inline-block">
                  מומלץ
                </div>
                <CardTitle className="text-2xl font-bold text-primary">
                  חבילה מתקדמת
                </CardTitle>
                <div className="text-3xl font-bold text-foreground">
                  ₪499
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>שחזור מידע מכל סוג מדיה</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>עד 200GB מידע</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>תמיכה טכנית מתקדמת</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>זמן תגובה מהיר</span>
                  </li>
                </ul>
                <Button 
                  onClick={handlePayment}
                  className="w-full h-12 text-lg"
                  size="lg"
                >
                  בחר חבילה
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Package */}
            <Card className="border-2">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-primary">
                  חבילה מקצועית
                </CardTitle>
                <div className="text-3xl font-bold text-foreground">
                  ₪999
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>שחזור מידע ללא הגבלה</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>כל סוגי המדיה</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>תמיכה VIP 24/7</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>עדיפות מוחלטת</span>
                  </li>
                </ul>
                <Button 
                  onClick={handlePayment}
                  className="w-full h-12 text-lg"
                  size="lg"
                >
                  בחר חבילה
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8 text-sm text-muted-foreground">
            <p>תשלום מאובטח דרך Squeezy Lemon</p>
            <p>לשאלות: <a href="mailto:doctorfix79@gmail.com" className="text-primary hover:underline">doctorfix79@gmail.com</a></p>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
      <MessageSystem />
    </div>
  );
};

export default PaymentPage;