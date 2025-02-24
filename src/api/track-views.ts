export const viewCount = {
  count: 0,
  increment() {
    this.count++;
    localStorage.setItem('pdfViews', this.count.toString());
  },
  get() {
    const stored = localStorage.getItem('pdfViews');
    this.count = stored ? parseInt(stored) : 0;
    return this.count;
  }
};