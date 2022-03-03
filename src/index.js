import React from 'react'
import ReactDom from 'react-dom'

import './index.css'
const Book1 =
{
    img:'https://images-eu.ssl-images-amazon.com/images/I/41+grDTP2FL._AC_UL604_SR604,400_.jpg',
    Author:'Ankur Warikoo',
    Title:'Do Epic Shit'
}
const Book2 =
{
    img:'https://images-eu.ssl-images-amazon.com/images/I/81N7FmJhbhL._AC_UL604_SR604,400_.jpg',
    Author:'Gaur Gopal Das',
    Title:'Lifes Amazing Secrets: How to Find Balance and Purpose in Your Life '
}
function Greeting() {
    return (
        <section className = "booklist">
            <Book 
            img = {Book1.img}
            Title={Book1.Title}
            Author={Book1.Author}
            />
            <Book 
            img = {Book2.img}
            Title={Book2.Title}
            Author={Book2.Author}
            />
            
            
        </section>

    )
}

const Book = function (props) {
    const {img,Title,Author} = props
    return (
    <article className='book' >
        <img src={img}></img>
        <h1>{Title}</h1>
        <h4 > {Author}</h4>
    </article>
    )
}

ReactDom.render(<Greeting />, document.getElementById('root'));