import fetch from "isomorphic-unfetch";
import { Layout } from "../../components/Layout";

function BlogPost({ show }) {
  const { name, summary, image } = show;
  return (
    <Layout>
      <h1>{name}</h1>
      <div>
        <img src={image.medium} />
        <p>{summary}</p>
      </div>
    </Layout>
  );
}

BlogPost.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log("fetching on client");
  
  return {
    show: show
  };
};

export default BlogPost;
