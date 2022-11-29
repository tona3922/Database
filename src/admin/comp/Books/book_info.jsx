import React from 'react';

const Card = (props) => {
    return (
        <div className = "book-card">
            <img src={'../../assets/img/' + props.book.img} className="book-image" alt=""></img>
            <div className = "book-info">
                <h6 className="book-title">{props.book.title}</h6>
                <h6 className="book-author">{props.book.author}</h6>
                <h6 className="book-price">{props.book.price} VNĐ</h6>
            </div>
        </div>
    )
}

export default Card;