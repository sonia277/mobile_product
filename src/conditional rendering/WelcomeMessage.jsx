import React from 'react'
import Practice from './Practice'

const WelcomeMessage = () => {
  return (
    <div>
<Practice name="book" ispacked={false}></Practice>
<Practice name="book1" ispacked={true}></Practice>
<Practice name="book11" ispacked={false}></Practice>
<Practice name="book111" ispacked={true}></Practice>
<Practice name="book1111" ispacked={false}></Practice>
    </div>
  )
}

export default WelcomeMessage