import { useEffect } from 'react';
import { viewCount } from '../api/track-views';

const TrackingPixel = () => {
  useEffect(() => {
    viewCount.increment();
  }, []);

  return (
    <div style={{ width: 1, height: 1, position: 'absolute', opacity: 0 }}>
      <img 
        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        width="1"
        height="1"
        alt=""
      />
    </div>
  );
};

export default TrackingPixel;