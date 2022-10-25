import Head from "next/head";
import ArticleList from "../components/ArticleList";

export default function Home({ articles }) {
  console.log(articles);
  return (
    <div>
      <Head>
        <title>WebDev News</title>
        <meta name="keywords" content="web develepmont, programing" />
      </Head>

      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=6"
  );
  const articles = await res.json();
  // console.log(articles);
  return {
    props: {
      articles: articles,
    },
  };
};
