import articlestyles from "../styles/Article.module.css";

const ArticleList = ({ articles }) => {
  return (
    <div className={articlestyles.grid}>
      {articles.map((article) => (
        <h3 key={article.id}>{article.title}</h3>
      ))}
    </div>
  );
};

export default ArticleList;
