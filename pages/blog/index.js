import Link from "next/link";
import fetch from "isomorphic-unfetch";

import { Layout } from "../../components/Layout";

export function BlogLink({ id, children }) {
  return (
    <li>
      <Link href={`/blog/${id}`}>
        <a>{children}</a>
      </Link>
    </li>
  );
}

function Blog({ shows }) {
  return (
    <Layout>
      <h2>This is the blog page index and hsows all the blogs available</h2>
      <ul>
        {shows.slice(0, 3).map(({ show }) => (
          <BlogLink key={show.id} id={show.id}>
            {show.name}
          </BlogLink>
        ))}
      </ul>
    </Layout>
  );
}

Blog.getInitialProps = async function() {
  const res = await fetch("http://api.tvmaze.com/search/shows?q=girls");
  const shows = await res.json();

  console.log("fetching on console");
  return {
    shows: shows
  };
};

export default Blog;
