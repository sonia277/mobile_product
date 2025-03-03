import React from 'react'

const Practice = ({name, ispacked}) => {
// let pagmsg;
// if(ispacked){
//     pagmsg = "✅";
// }
// else{
//     pagmsg=" ";
// }


  return (
    <div>
      
      <li className="item">
      {name} {ispacked && '✅'}
  </li>



    </div>
  )
}

export default Practice