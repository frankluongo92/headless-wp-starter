import React, { Component } from 'react';
import Layout from "../components/Layout.js";
import PostIndex from "../components/PostIndex";
import PageWrapper from "../components/PageWrapper.js";

class PostIndexPage extends Component {

  render() {
    const { posts } = this.props;
    console.log(posts);
    return (
      <Layout index={false} {...this.props}>
        <h1>Post Index</h1>
        <PostIndex limit={20} />
      </Layout>
    );
  }
}

export default PageWrapper(PostIndexPage);
