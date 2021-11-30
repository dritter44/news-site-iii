import { Media } from 'reactstrap';
import "./article.css";

function Article(props) {
  return (
    <Media>
      <Media left>
        { props.image && <img className="image" src={ props.image }/> }
      </Media>
      <Media body className="body">
        <Media heading>{ props.title }</Media>
        <p>{ props.createdDate }</p>
        { props.byline && <p>{ props.byline }</p> }
        <p>{ props.abstract }</p>
      </Media>
    </Media>
  )
}

export default Article;
