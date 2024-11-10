import React from 'react'
import ProductItem from './ProductItem'

function ProductList({productList , loading}) {
  return (
    <div 
    className=' grid grid-cols-1 xsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-5 '
    >
        {productList.map(item => (
            <div key={item.documentId}> <ProductItem product={item} loading={loading} /> </div>
        )) }
    </div>
  )
}

export default ProductList