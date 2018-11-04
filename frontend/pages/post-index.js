import React, { Component } from 'react';
import Layout from "../components/Layout.js";
import PostIndex from "../components/PostIndex";

export default class PostIndexPage extends Component {

  render() {
    const { posts } = this.props;
    console.log(posts);
    return (
      <Layout>
        <h1>Post Index</h1>
        <PostIndex limit={20} />
      </Layout>
    );
  }
}
