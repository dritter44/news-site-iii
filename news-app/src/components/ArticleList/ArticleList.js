import ArticleTeaser from '../ArticleTeaser/ArticleTeaser.js';
import { ListGroup, ListGroupItem } from 'reactstrap';

function ArticleList(props) {
  return (
    <ListGroup>
      { 
        props.articles.map((article, index) => (
          <ListGroupItem>
            <ArticleTeaser { ...article } id={ index + 1 }
              handleTitleClick={ props.handleTitleClick }/>
          </ListGroupItem>
        ))
      }
    </ListGroup>
  )
}

export default ArticleList;


