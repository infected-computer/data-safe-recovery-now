import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
  structuredData?: any;
}

const SEO = ({
  title = 'שחזור קבצים מקצועי מרחוק | שירות אמין ללא הגעה פיזית',
  description = 'שירותי שחזור קבצים מקצועיים מרחוק. מעל 7 שנות ניסיון, בדיקה חינמית, תשלום רק לאחר הצלחה. 98% שיעור הצלחה.',
  keywords = 'שחזור קבצים, שחזור נתונים, שחזור מרחוק, שחזור דיסק קשיח, שחזור מחיקה בטעות, R-Studio, AnyDesk',
  ogImage = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=630',
  ogType = 'website',
  canonicalUrl,
  noIndex = false,
  structuredData,
}: SEOProps) => {
  const siteUrl = 'https://your-domain.com'; // החלף בדומיין האמיתי
  const currentUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : siteUrl);

  // Default structured data for LocalBusiness
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "שחזור קבצים מקצועי",
    "description": description,
    "url": siteUrl,
    "telephone": "+972-123456789",
    "email": "egozkokus1@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "תל אביב",
      "addressCountry": "IL"
    },
    "priceRange": "₪350-₪1200",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "500"
    },
    "areaServed": {
      "@type": "Country",
      "name": "ישראל"
    },
    "serviceType": ["שחזור קבצים", "שחזור נתונים", "שחזור מרחוק"],
    "paymentAccepted": ["Credit Card", "Bank Transfer"],
    "sameAs": [
      "https://wa.me/972123456789"
    ]
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={currentUrl} />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Hebrew Language */}
      <html lang="he" dir="rtl" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="he_IL" />
      <meta property="og:site_name" content="שחזור קבצים מקצועי" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="theme-color" content="#1e3a8a" />
      
      {/* Apple */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="שחזור קבצים" />
      
      {/* Microsoft */}
      <meta name="msapplication-TileColor" content="#1e3a8a" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
