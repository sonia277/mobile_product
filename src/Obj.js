import React from 'react'
import MobileList from './MobileList' 
import dd from "./bg.jpg"


let books = {
 
    product: "myphone",
    title: "buy now",
    price: 234,
    des :"dhvchfsd bdvcgavfhedv bdhaevdfheawfd bsdvhjavdscf bvfhavsdjfa hsdvfjhevfjhwef"
  }


  let books2=
  {
    product: "myphone1",
    title: "buy now1",
    price: 2341
  }


  
export default function Obj(){
  return (
    <div>
 
 
<MobileList name={books.product} title={books.title}  price={books.price}></MobileList>
<MobileList price={books2.price}></MobileList>

    </div>
  )
}

