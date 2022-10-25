import ArticleItem from "./ArticleItem";
import articlestyles from "../styles/Article.module.css";

const ArticleList = ({ articles }) => {
  return (
    <div className={articlestyles.grid}>
      {articles.map((article) => (
        <ArticleItem article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
