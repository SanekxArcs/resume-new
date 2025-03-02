import { createClient } from '@sanity/client';
import { SANITY_TOKEN, SANITY_PROJECT_ID, SANITY_DATASET } from '../config/environment';

interface TrackingData {
  documentId: string;
  timestamp: Date;
  userAgent?: string;
  referrer?: string;
}

const sanityClient = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  apiVersion: "2024-01-01",
  token: SANITY_TOKEN,
  useCdn: false,
});

export const trackDocumentView = async (documentId: string): Promise<void> => {
  try {
    const trackingData: TrackingData = {
      documentId,
      timestamp: new Date(),
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : undefined,
      referrer: typeof document !== 'undefined' ? document.referrer : undefined,
    };

    await sanityClient.create({
      _type: 'documentView',
      ...trackingData,
    });
  } catch (error) {
    console.error('Error tracking document view:', error);
  }
};

export const getDocumentViews = async (documentId: string): Promise<number> => {
  try {
    const query = `count(*[_type == "documentView" && documentId == $documentId])`;
    const count = await sanityClient.fetch(query, { documentId });
    return count;
  } catch (error) {
    console.error('Error getting document views:', error);
    return 0;
  }
};