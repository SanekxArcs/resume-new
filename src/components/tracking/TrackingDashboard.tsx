import { useEffect, useState } from 'react';
import { getDocumentViews } from '@/services/tracking';

interface TrackingDashboardProps {
  documentId: string;
  className?: string;
}

export function TrackingDashboard({ documentId, className = '' }: TrackingDashboardProps) {
  const [viewCount, setViewCount] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchViewCount = async () => {
      try {
        const count = await getDocumentViews(documentId);
        setViewCount(count);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch view count');
        setLoading(false);
      }
    };

    fetchViewCount();
  }, [documentId]);

  if (loading) {
    return (
      <div className={`flex items-center justify-center p-4 ${className}`}>
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`text-destructive p-4 ${className}`}>
        {error}
      </div>
    );
  }

  return (
    <div className={` ${className}`}>
      {/* <h3 className="text-lg font-semibold mb-2">Resume Views</h3>/ */}
      <div className="flex items-center space-x-2">
        <span className="font-bold text-primary">{viewCount}</span>
        <span className="text-muted-foreground">times viewed</span>
      </div>
    </div>
  );
}