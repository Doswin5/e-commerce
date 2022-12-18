import React from 'react'
import Product from './Product'


// const products = [
//   { id: 1, name: 'Shoe', description: 'Nike Air Jordan.', price: '$10', image: 'https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'},
//   { id: 2, name: 'Laptop', description: 'Apple Macbook.', price: '$25', image: 'https://images.unsplash.com/photo-1511385348-a52b4a160dc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=907&q=80' },
//   { id: 3, name: 'Car', description: 'Mercedes Benz.', price: '$200', image: 'https://images.unsplash.com/photo-1565534271200-2b76c39be938?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' },
//   { id: 4, name: 'Television', description: 'HiSense Television.', price: '$120', image: 'https://images.unsplash.com/photo-1539786774582-0707555f1f72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80' },
//   { id: 5, name: 'House', description: 'Living Apartment.', price: '$1000', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' },
//   { id: 6, name: 'Phone', description: 'Iphone 13 Pro Max.', price: '$70', image: 'https://images.unsplash.com/photo-1581637708784-94c4e6f46b54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80' },
// ]

const Products = ({ products, onAddToCart }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-[80px] sm:px-[100px] sm:py-[40px] px-[16px] py-[24px]">
      {products.map((product) => (
        <Product key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </section>
  )
}

export default Products