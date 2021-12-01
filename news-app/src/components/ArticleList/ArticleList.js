import "./articleList.css"
import { ListGroup } from 'react-bootstrap';
import ArticleTeaser from '../ArticleTeaser/ArticleTeaser.js';


function ArticleList(props) {
  return (
    <ListGroup id="articles">
      { 
        props.articles.map((article, index) => (
          <ListGroup.Item className={index % 2 ? "odd-item" : "even-item"}>
            <ArticleTeaser { ...article } id={ index + 1 }
              handleTitleClick={ props.handleTitleClick }/>
          </ListGroup.Item>
        ))
      }
    </ListGroup>
  )
}

export default ArticleList;


