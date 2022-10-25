import ArticleItem from "./ArticleItem";
import articlestyles from "../styles/Article.module.css";
import Link from "next/link";

const ArticleList = ({ articles }) => {
  return (
    <div className={articlestyles.grid}>
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
