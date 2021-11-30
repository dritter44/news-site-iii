import { ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

function ArticleTeaser(props) {
  return (
    <div>
      <ListGroupItemHeading>
        <a onClick={(e) => {
          e.preventDefault();
          props.handleTitleClick(props.id);
          }}>{ props.title }</a>
      </ListGroupItemHeading>
      <ListGroupItemText>{ props.createdDate }</ListGroupItemText>
    </div>
  )
}

export default ArticleTeaser;

