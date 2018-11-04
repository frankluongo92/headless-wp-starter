import React, { Component } from 'react';
import { Config } from '../config';
import fetch from 'isomorphic-unfetch';
import PageWrapper from "../components/PageWrapper.js";
import Layout from "../components/Layout.js";

class blogPost extends Component {
  static async getInitialProps(context) {
    console.log(context.query.slug);
    const postsRes = await fetch(
      `${Config.apiUrl}/wp-json/postlight/v1/post?slug=${context.query.slug}`
    );
    const posts = await postsRes.json();
    return {
      posts
    }
  }

  render() {
    const { posts } = this.props;
    let content = posts.content.rendered;
    return (
      <Layout>
        <h1>{posts.title.rendered}</h1>
        <div dangerouslySetInnerHTML={{
          __html: content
        }} />
      </Layout>
    )
  }
}

export default PageWrapper(blogPost);
