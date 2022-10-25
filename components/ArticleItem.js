import Link from "next/link";
import articleStyles from "../styles/Article.module.css";

const ArticleItem = ({ article }) => {
  console.log(article);
  return (
    <Link href="/article/[id]" as={`/article/${article.id}`}>
      <a classNmae={articleStyles.card}>
        <h3>{articleStyles.title} &rarr;</h3>
        <p>{article.body}</p>
      </a>
    </Link>
  );
};

export default ArticleItem;
