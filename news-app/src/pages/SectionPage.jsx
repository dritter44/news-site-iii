import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'

import ArticleList from '../components/ArticleList'


function SectionPage ({articles}) {

    const {sectionName} = useParams()
    const [sectionArticles, setSectionArticles] = useState([])
    useEffect( () => {
        const filteredArticles = articles.filter(article => article.section.toLowerCase() == sectionName.toLowerCase())
        setSectionArticles(filteredArticles)
        console.log(filteredArticles)
    }, [sectionName])
    console.log(sectionName)



    return (
        <div>
            {sectionArticles ?
            sectionArticles.map((article)=> (
                <ArticleList key={article.id} articles={sectionArticles}/>
            ))
            : 'no articles found'
            }           
        </div>
    )
}
export default SectionPage