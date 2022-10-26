import Header from "../components/Header";
import { server } from "../config";
import ArticleList from "../components/ArticleList";

export default function Home({ articles }) {
  console.log(articles);
  return (
    <div>
      <Header title="Home" description="this is the home page" />
      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);

  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};

//export const getStaticProps = async () => {
//const res = await fetch(
//"https://jsonplaceholder.typicode.com/posts?_limit=6"
//);
//const articles = await res.json();
// console.log(articles);
//return {
//props: {
//articles: articles,
//},
//};
//};
