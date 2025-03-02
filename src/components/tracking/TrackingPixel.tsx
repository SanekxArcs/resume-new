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
      className={`w-px h-px opacity-0 bg-red-500 pointer-events-none tracker absolute ${className}`}
    aria-hidden="true"
    >
      <img src={emailImg} alt="emailImg" className="w-0 h-0" />
    </div>
  );
}