import { useEffect } from 'react';
import { trackDocumentView } from '@/services/tracking';
import emailImg from '@/assets/at.png';

interface TrackingPixelProps {
  documentId: string;
  className?: string;
}

export function TrackingPixel({ documentId, className = '' }: TrackingPixelProps) {
  useEffect(() => {
    trackDocumentView(documentId);
  }, [documentId]);


  return (
    <div
      className={` tracker ${className}`}
    >
      <img src={emailImg} alt="emailImg" className="w-4 h-4" />
    </div>
  );
}