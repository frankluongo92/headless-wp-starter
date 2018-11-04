import React, { Component } from 'react';
import Link from 'next/link';
import Layout from "../components/Layout.js";
import fetch from 'isomorphic-unfetch';
import { Config } from '../config';

export default class PostIndex extends Component {

  state = {
    posts: []
  };

  // This is a Next.js Thing
  async componentWillMount() {
    const postsRes = await fetch(
      `${Config.apiUrl}/wp-json/wp/v2/posts`
    );
    const posts = await postsRes.json();
    this.setState({
      posts
    });
  }

  render() {
    const { posts } = this.state;
    return (
      <section>
        <h1>Archive</h1>
        <ul>
          {posts.map((post, index) => (
            <li key={index}>
             <Link
              href={`/post?slug=${post.slug}&apiRoute=post`}
              as={`/post/${post.slug}`}
            >
                <a>{post.title.rendered}</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
