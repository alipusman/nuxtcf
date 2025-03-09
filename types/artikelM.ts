export interface SeoMeta {
  metaTitle: string;
  metaDescription: string;
  metaKeywords?: string[];
  ogImage?: string;
  twitterCard?: string;
}

export interface ArticleSchema {
  "@context": string;
  "@type": string;
  headline: string;
  image?: string[];
  datePublished: string;
  dateModified?: string;
  author: {
    "@type": string;
    name: string;
  };
  publisher: {
    "@type": string;
    name: string;
    logo: {
      "@type": string;
      url: string;
    };
  };
  description: string;
  // Properti knows telah dihapus
}

export interface ArticleM {
  id?: string; // Optional, karena Firestore akan membuat ID otomatis jika tidak disediakan
  title: string;
  slug: string;
  description: string;
  content: ArticleContentBlock[];
  published_at: string;
  author: Author;
  seoMeta?: SeoMeta; // Properti SEO meta
  schemaArticle?: ArticleSchema; // Properti schema article untuk data terstruktur (JSON-LD)
}

export interface Author {
  name: string;
  profile_url: string;
}

export interface ArticleContentBlock {
  type: 'h2' | 'h3' | 'p' | 'ul' | 'img' | 'blockquote' | 'table';
  text?: string;
  items?: string[];
  url?: string;
  alt?: string;
  cols?: number;
  columns?: string[];
  rows?: string[][];
}
