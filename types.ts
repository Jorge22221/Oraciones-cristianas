// FIX: Import React to provide types for React.FC and React.SVGProps
import React from 'react';

export interface Prayer {
  id: number;
  title: string;
  slug: string;
  category: string;
  categorySlug: string;
  image: string;
  excerpt: string;
  content: string[]; // Array of paragraphs
  date: string;
  author: string;
}

export interface Category {
  name: string;
  slug: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface SeoData {
  title: string;
  description: string;
  keywords: string;
}
