import React from 'react'
import Product from '../Product/Product'

interface Props {}

const ProductList = (props: Props) => {
  return (
    <div>
        <Product bookName='Шляпа' author='Тайупа' price={100}/>
        <Product bookName='Шляпище' author='Нефор' price={500}/>
        <Product bookName='Шляпона' author='Гао' price={1200}/>
    </div>
  )
}

export default ProductList