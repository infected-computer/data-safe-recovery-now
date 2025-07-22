import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage = ({
  src,
  alt,
  className,
  width,
  height,
  loading = 'lazy',
  priority = false,
  onLoad,
  onError,
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>('');

  useEffect(() => {
    // For Unsplash images, optimize the URL
    if (src.includes('unsplash.com')) {
      const optimizedSrc = src.includes('?') 
        ? `${src}&auto=format&fit=crop&q=80`
        : `${src}?auto=format&fit=crop&q=80`;
      
      // Add width parameter if specified
      if (width) {
        setImageSrc(`${optimizedSrc}&w=${width}`);
      } else {
        setImageSrc(optimizedSrc);
      }
    } else {
      setImageSrc(src);
    }
  }, [src, width]);

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    onError?.();
  };

  // Placeholder for loading state
  const placeholderSrc = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${width || 400} ${height || 300}'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3C/svg%3E`;

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Loading placeholder */}
      {isLoading && (
        <div 
          className="absolute inset-0 bg-muted animate-pulse"
          aria-hidden="true"
        />
      )}
      
      {/* Error state */}
      {hasError ? (
        <div className="flex items-center justify-center h-full bg-muted text-muted-foreground">
          <span className="font-hebrew text-sm">שגיאה בטעינת התמונה</span>
        </div>
      ) : (
        <img
          src={imageSrc}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : loading}
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            "transition-opacity duration-300",
            isLoading ? "opacity-0" : "opacity-100",
            className
          )}
          decoding="async"
        />
      )}
    </div>
  );
};

export default OptimizedImage;
