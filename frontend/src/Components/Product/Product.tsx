import React from 'react';
import "./Product.css";
type Props = {}

const Product = (props: Props) => {
  return (
    <div className='card'>
        <img src='https://www.catster.com/wp-content/uploads/2023/11/tabby-cat-at-night_Mookmixsth_Shutterstock.jpg' alt='image'/>

        <div className='details'>
            <p>$100</p>
            <h2>Название</h2>
            <span className='info'>Описание</span>
            
            <p className='author'>Автор</p>
            
        </div>
    </div>
    
  )
}

export default Product