let viewCount = 0;

export async function incrementViews() {
  viewCount++;
  return viewCount;
}

export function getViews() {
  return viewCount;
}