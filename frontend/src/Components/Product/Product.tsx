import React from 'react';
import "./Product.css";


interface Props {
  bookName: string;
  author: string;
  price: number;
}

const Product = ({bookName, author, price}: Props) => {
  return (
    <div className='card'>
        <img src='https://www.catster.com/wp-content/uploads/2023/11/tabby-cat-at-night_Mookmixsth_Shutterstock.jpg' alt='image'/>

        <div className='details'>
            <p>${price}</p>
            <h2>{bookName}</h2>
            <span className='info'>Описание</span>
            
            <p className='author'>{author}</p>
            
        </div>
    </div>
    
  )
}

export default Product