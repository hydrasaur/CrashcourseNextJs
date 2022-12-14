import Link from "next/link";
import ArticleStyles from "../styles/Article.module.css";

const ArticleItem = ({ article }) => {
  //   console.log(article);
  return (
    <Link key={article.id} href="/article/[id]" as={`/article/${article.id}`}>
      <a className={ArticleStyles.card}>
        <h3>{ArticleStyles.title} &rarr;</h3>
        <p>{article.body}</p>
      </a>
    </Link>
  );
};

export default ArticleItem;
