import React from 'react';
import { PageComponent } from '@/interface/Page';
import { DynamicLoadWrapper } from '@/components/DynamicLoad';
import GlobalHelmet from '@/components/GlobalHelmet';

const MyHome = DynamicLoadWrapper({ path: 'pages/Home' });
const Home: PageComponent = () => {
  return (
    <>
      <GlobalHelmet title="Hello"></GlobalHelmet>
      <div>
        ads
        <MyHome />
      </div>
    </>
  );
};
Home.getInitialProps = async ctx => {
  return Promise.resolve({
    data: {
      title: 'Hello World',
    },
  });
};

export default Home;
