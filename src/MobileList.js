import React from 'react'
import "./MobileList.css"


export default function MobileList(props) {

  return (
    <>
  <div>
   

<img src={props.img} alt='erroe'></img>
   <h2> MY PRODUCT {props.product}</h2>
   <h3>PRODUCT TITLE {props.title}</h3>
   <h4>PRODUCT PRICE {props.price}</h4>
   <h4>p des {props.des}</h4>
   <hr></hr>
  </div>
    </>

  )
}
