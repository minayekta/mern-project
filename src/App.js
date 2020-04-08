import React from 'react'
import './App.css'
import ProductList from './components/ProductList'
const App = () => {
  const products = [
    {id:1 , title: 'book1'},
    {id:2 , title: 'book2'},
    {id:3 , title: 'book3'}
]
  return(
    <div className="conntainer">
      <h2> Book Store </h2>
      <ProductList  items= {products}/>
    </div>
  )
}

export default App;