import { useNavigate } from 'react-router-dom';
import ArticleList from '../components/ArticleList/ArticleList.js'
import News from '../data/news.json';


function HomePage() {

  const navigate = useNavigate()

  return (
    <div>
      <ArticleList articles={News}
        handleTitleClick={(articleID) => navigate(`/articles/${articleID}`) } />
    </div>
  )
}

export default HomePage;

