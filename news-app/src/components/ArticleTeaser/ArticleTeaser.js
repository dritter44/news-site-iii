import "./articleTeaser.css"

function ArticleTeaser(props) {
  return (
    <div>
      <div className="title">
        <a onClick={(e) => {
            e.preventDefault();
            props.handleTitleClick(props.id);
        }}>
          { props.title }
        </a>
      </div>
      <div className="date">
        { props.created_date }
      </div>
    </div>
  )
}

export default ArticleTeaser;

