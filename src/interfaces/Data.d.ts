export interface TagProps {
  name: string;
  count?: number;
  href?: string;
  color?: string;
}

export interface ArticleProps {
  id: string | number;
  time: number;
  title: string;
  img?: string;
  desc?: string;
  tags?: TagProps[];
}

export interface LayoutProps {
  relatedTags: TagProps[];
  newArticleList: ArticleProps[];
}
