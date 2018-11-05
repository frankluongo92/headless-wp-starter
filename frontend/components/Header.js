import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import Menu from "./Menu.js";
import { Config } from "../config.js";
import stylesheet from '../src/styles/style.scss';

class Header extends Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Head>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <title>Frank's WordPress Bloggy Blog</title>
        </Head>
        <header>
          <Link href="/">
            <a><h1>WordPress Blog</h1></a>
          </Link>
        </header>
        <Menu menu={this.props.mainNav} />

      </div>
    );
  }
}

export default Header;
