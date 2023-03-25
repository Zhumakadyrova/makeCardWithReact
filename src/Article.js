import "./Article.css";

function Article(props) {
  return (
    <article className="Article">
      <p>{props.paragraph}</p>
      <img src={props.url} alt="" />
      <h2>{props.h2}</h2>
      {props.children}
    </article>
  );
}
export default Article;
