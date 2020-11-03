import { useSelector } from 'umi';
import { useContext, createContext } from 'react';
import { LayoutProps } from '@/interfaces/Data';
export const LayoutContext = createContext<LayoutProps>({
  relatedTags: [],
  newArticleList: [],
});
const useLayout = () => {
  return useSelector(({ layout }) => layout);
};

export default useLayout;
