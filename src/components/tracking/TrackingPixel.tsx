import { useEffect } from 'react';
import { trackDocumentView } from '@/services/tracking';


interface TrackingPixelProps {
  documentId: string;
  className?: string;
  children?: React.ReactNode;
}
export function TrackingPixel({ documentId, className = '', children }: TrackingPixelProps) {
  useEffect(() => {
    trackDocumentView(documentId);
  }, [documentId]);


  return (
    <div
      className={` tracker ${className}`}
    >
      {children}
    </div>
  );
}