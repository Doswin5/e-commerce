import React from 'react'

import { BiPlus, BiMinus } from 'react-icons/bi'

const CartItem = ({ item, handleUpdateCartQty, handleRemoveFromCart  }) => {
  return (
    <div className="grid w-full shadow-md">
      <div className="w-full">
        <img src={item.image.url} alt="" className="w-full h-[250px]" />
      </div>
      <div className="grid w-full p-4">
        <div className="flex justify-between items-center mb-4">
          <h5>{item.name}</h5>
          <h5>{item.line_total.formatted_with_symbol}</h5>
        </div>
        <div className='w-full flex justify-between'>
          <div className='flex items-center gap-2'>
            <div className='p-2 cursor-pointer hover:bg-gray-300 hover:rounded-full' onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>
              <BiMinus />
            </div>
            <h6>{item.quantity}</h6>
            <div className='p-2 cursor-pointer hover:bg-gray-300 hover:rounded-full' onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>
              <BiPlus />
            </div>
          </div>
          <button className="del-btn" onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
        </div>
      </div>
    </div>
  )
}

export default CartItem