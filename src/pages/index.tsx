import Link from "gatsby-link";
import * as React from "react";
import { Layout } from "../components/layout";

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      }
    }
  }
}

export default class extends React.Component<IndexPageProps, {}> {
  constructor(props: IndexPageProps, context: any) {
    super(props, context);
  }
  public render() {

    return (
        <Layout>
          <h1>Hi, I'm Koji Kanao</h1>
          <p>
            Welcome to your new
            <strong>{this.props.data.site.siteMetadata.title}</strong> site.
          </p>
          <p>Now go build something great.</p>
          <Link to="/page-2/">Go to page 2</Link>
          <p>new page</p>
          <Link to="/about/">Go to about</Link>
        </Layout>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
