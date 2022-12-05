import React from 'react'
import { BsCartCheck } from 'react-icons/bs'

const Product = ({ product, onAddToCart }) => {
  return (
    <div className="grid w-full shadow-md">
      <div className="w-full">
        <img src={product.image.url} alt="" className="w-full h-[250px]" />
      </div>
      <div className="grid w-full p-4">
        <div className="flex justify-between items-center mb-4">
          <h5>{product.name}</h5>
          <h5>{product.price.formatted_with_symbol}</h5>
        </div>
        <div className='w-full flex justify-end'>
          <div className='p-2 cursor-pointer hover:bg-gray-300 hover:rounded-full' onClick={() => onAddToCart(product.id, 1)}>
            <BsCartCheck  />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Product