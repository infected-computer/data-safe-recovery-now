import React from 'react';

const App = () => {
  return (
    <div style={{ 
      padding: '20px', 
      fontFamily: 'Heebo, sans-serif',
      textAlign: 'center' as const,
      background: '#f5f5f5',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column' as const,
      justifyContent: 'center' as const,
      alignItems: 'center' as const
    }}>
      <h1 style={{ color: '#1e3a8a', marginBottom: '20px', fontSize: '2rem' }}>
        שחזור קבצים מקצועי
      </h1>
      <p style={{ color: '#4b5563', fontSize: '1.2rem', marginBottom: '30px' }}>
        בדיקת תקינות האתר...
      </p>
      <div style={{ 
        background: 'white', 
        padding: '20px', 
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        maxWidth: '400px'
      }}>
        <p style={{ color: '#059669', fontWeight: 'bold', marginBottom: '10px' }}>
          ✅ React עובד כראוי
        </p>
        <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>
          האתר נטען בהצלחה ללא שגיאות
        </p>
        <button 
          style={{
            background: '#25D366',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            marginTop: '15px',
            cursor: 'pointer',
            fontSize: '1rem'
          }}
          onClick={() => {
            window.open('https://wa.me/972123456789?text=' + encodeURIComponent('שלום, אני זקוק לעזרה בשחזור קבצים'), '_blank');
          }}
        >
          📱 פנה בוואטסאפ
        </button>
      </div>
    </div>
  );
};

export default App;