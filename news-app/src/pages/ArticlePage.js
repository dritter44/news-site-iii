import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import Article from '../components/Article/Article.js'

function ArticlePage(props) {
  // states
  const [article, setArticle] = useState(null)

  // router props
  const params = useParams()


  // render
  return (
    <div>
      {
        article 
          ? <Article { ...article } /> 
          : <span>404: Article Not Found</span>
      }
    </div>
  );
}

export default ArticlePage;

