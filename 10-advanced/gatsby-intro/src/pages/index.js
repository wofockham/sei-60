import * as React from 'react';
import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Paragraphs of content coming soon</p>
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;