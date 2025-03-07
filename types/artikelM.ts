export interface ArticleM {
    id?: string; // Optional, karena Firestore akan membuat ID otomatis jika tidak disediakan
    title: string;
    slug: string;
    description: string;
    content: ArticleContentBlock[];
    published_at: string;
    author: Author;
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
  