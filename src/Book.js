import React from 'react'

const Book = function (props) {
    const { img, Title, Author } = props.book;
    return (
        <article className='book' >
            <img src={img} alt={Title}></img>
            <h1>{Title}</h1>
            <h4 > {Author}</h4>
        </article>
    )
}

export default Book
