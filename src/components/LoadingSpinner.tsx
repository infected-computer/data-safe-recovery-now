import { Loader2 } from "lucide-react";

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto mb-4" />
        <p className="font-hebrew text-muted-foreground">טוען...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
