import { Helmet } from 'umi';
import React from 'react';
import { PageComponent } from '@/interface/Page';
import { DynamicLoadWrapper } from '@/components/DynamicLoad';

const MyHome = DynamicLoadWrapper({ path: 'pages/Home' });
const Home: PageComponent = () => {
  return (
    <>
      <Helmet encodeSpecialCharacters={false}>
        <title>Hello Umi Bar Title</title>
      </Helmet>
      <div>
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
