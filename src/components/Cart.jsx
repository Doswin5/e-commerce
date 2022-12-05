import React from 'react'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

const Cart = ({ cart, handleUpdateCartQty, handleEmptyCart, handleRemoveFromCart }) => {
  const EmptyCart = () => (
    <h6>You have no items in your shopping cart, 
      <Link to='/'>start adding some</Link>!</h6>
  )

  const FilledCart = () => (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {cart.line_items.map((item) => (
          <CartItem key={item.id} item={item}  handleRemoveFromCart={handleRemoveFromCart}  handleUpdateCartQty={handleUpdateCartQty} />
        ))}
      </div>
      <div className="flex justify-between items-center my-16">
        <h3>Subtotal: {cart.subtotal.formatted_with_symbol}</h3>
        <div className="flex gap-4 items-center">
          <button className="del-btn" onClick={handleEmptyCart}>Empty Cart</button>
          <button className="check-btn">Check Out</button>
        </div>
      </div>
    </div>
  )

  if(!cart.line_items) {
    return 'Loading...'
  }

  return (
    <section className="grid mt-[80px]">
      <h3 className="mb-2">Your Shopping Cart</h3>
      { !cart.line_items.length ? <EmptyCart /> : <FilledCart /> }
    </section>
  )
}

export default Cart