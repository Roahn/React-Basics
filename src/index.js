import React from 'react'
import ReactDom from 'react-dom'

import './index.css'
import { BookList } from './Books'
import Book from './Book'


function Greeting() {

    return (

        <section className="booklist">


            {
                BookList.map((book) => {

                    return <Book key = {book.id} book={book}></Book>
                }
                )
            }





        </section>

    )
}

// const Book = function (props) {
//     const { img, Title, Author } = props.book;
//     return (
//         <article className='book' >
//             <img src={img}></img>
//             <h1>{Title}</h1>
//             <h4 > {Author}</h4>



//         </article>
//     )
// }

ReactDom.render(<Greeting />, document.getElementById('root'));