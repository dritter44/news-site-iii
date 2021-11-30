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


// Functional solution:
// function ArticleList({ articles, handleTitleClick }) {
//   return (
//     <ListGroup>
//       {articles.map((article, index) => (
//         <ListGroupItem>
//           <ArticleTeaser {...article} id={ index + 1 }
//              handleTitleClick={handleTitleClick} />
//         </ListGroupItem>
//       ))}
//     </ListGroup>
//   );
// }
