export interface ISource {
  id: string;
  name: string;
}

export default interface INews {
  full_description: string;
  image_url: string;
  pubDate: string;
  source: ISource;
  author: string;
  title: string;
  description: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
