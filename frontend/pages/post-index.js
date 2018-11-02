import React, { Component } from 'react';
import Layout from "../components/Layout.js";
import { Config } from '../config';

export default class PostIndex extends Component {

  // This is a Next.js Thing
  static async getInitialProps() {
    const postsRes = await fetch(
      `${Config.apiUrl}/wp-json/wp/v2/posts`
    );
    const posts = await postsRes.json();
    return {
      posts
    }
  }

  render() {
    const { posts } = this.props;
    console.log(posts);
    return (
      <Layout>
        <h1>Post Index</h1>
        <ul>
          {posts.map((post, index) => (
            <li key={index}>
              <a href={post.slug}>
                {post.title.rendered}
              </a>
            </li>
          ))}
        </ul>
      </Layout>
    );
  }
}
