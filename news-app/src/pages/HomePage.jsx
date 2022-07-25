import ArticleList from "../components/ArticleList"
import {InputGroup } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import {Button} from 'react-bootstrap'

import { useEffect, useState } from "react"
import ArticleTeaser from "../components/ArticleTeaser"

function HomePage ({articles}){
    
    const [searchTitle,setSearchTitle] = useState('')

    const[results, setResults] = useState([])

    const handleChange = (event)=> {
        const value = event.target.value
        console.log(`${value} val changed`)
        
        setSearchTitle(value) 
    
    }

    useEffect( () => {
        if (searchTitle != '') {
        const filteredArticles = articles.filter(article => article.title.includes(searchTitle))
        setResults(filteredArticles)
        }
    } , [searchTitle])
    
    return (
        <div>
            <Form className="d-flex">
                <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange = {(event) => {handleChange(event)}}
                />
                <Button variant="outline-success">Search</Button>
            </Form>

            {
                results
                ? results.map((article) => (
                <ArticleTeaser key={article.id} {...article}/>
                ))
                : ''
            }
            <hr/>

            <ArticleList articles={articles}/>
        </div>
    )
}

export default HomePage