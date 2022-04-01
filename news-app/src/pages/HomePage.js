import { useState, useEffect } from "react"
import ArticleList from '../components/ArticleList/ArticleList.js'


function HomePage() {
  // states
  const [articles, setArticles] = useState([])
  
  // render
  return (
    <div>
      { 
        articles 
          ? <ArticleList articles={articles} />
          : <span>404: Error retrieving articles.</span>
      }
    </div>
  )
}

export default HomePage;






