import { useContext, createContext } from 'react';
import { LayoutProps } from '@/interfaces/Data';
export const LayoutContext = createContext<LayoutProps>({
  relatedTags: [],
  newArticleList: [],
});
const useLayout = () => {
  return useContext(LayoutContext);
};

export default useLayout;
