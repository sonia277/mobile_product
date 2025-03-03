import React from 'react'
import MobileList from './MobileList'
// import books from './books'
let books = [{
  product: "myphone",
  title: "buy now",
  price: 234
},
{
  product: "myphone1",
  title: "buy now1",
  price: 2341
}
]

export default function Mobile() {

 
  return (
    <div>
     
      {books.map((ele)=>{


        return <MobileList  product={ele.product} title={ele.title} price={ele.price} />
      })}

    </div>
  )
}



