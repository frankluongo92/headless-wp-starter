import React, { Component } from 'react';
import { Config } from '../config';
import fetch from 'isomorphic-unfetch';

export default class blogPost extends Component {
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
    console.log(posts);
    return (
      <div>
        <h1>{posts.title.rendered}</h1>
        {posts.content.rendered}
      </div>
    )
  }
}
