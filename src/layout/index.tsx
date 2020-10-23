import React from 'react';
import Navbar from './Navbar';
import useWindow from '@/hooks/useWindow';
import GlobalLoading from '@/components/GlobalLoading';
const Layout: React.FC = () => {
  const win = useWindow();
  return win ? (
    <>
      <Navbar />
      <div style={{ height: '900vh', position: 'relative' }}>Hello world</div>
    </>
  ) : (
    <GlobalLoading />
  );
};

export default Layout;
