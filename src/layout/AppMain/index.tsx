import React from 'react';

const AppMain: React.FC = ({ children }) => {
  return (
    <main style={{ height: '100vh' }}>
      {children}
      main
    </main>
  );
};

export default AppMain;
