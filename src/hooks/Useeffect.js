// import React, { useEffect, useState } from 'react'

// const Useeffect = () => {
//     const [count,setcount] = useState(0);
//     useEffect(()=>{
//        console.log("useeffect hooks in react")
//     })
//   return (
//   <>
//   <h2>useEffect Hook</h2>
//    <h3>count : {count}</h3> 
//   <button onClick={()=>setcount(count+1)}>counter</button> 
  
//   </>
//   )
// }

// export default Useeffect


//by using props...............................

// import React, { useEffect } from 'react'

// const Useeffect = (props) => {
//     useEffect(()=>{
//         console.log("useeffect by using props",props)
//     })
//   return (
//     <div>
// <h2>useEffect hook with props</h2>
// <h3>count: {props.data}</h3>


//     </div>
//   )
// }

// export default Useeffect



import React, { useState, useEffect } from 'react';

function JokeApp() {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    const fetchJoke = async () => {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await response.json();
      setJoke(`${data.setup} - ${data.punchline}`);
    };

    fetchJoke();
  }, []);

  return (
    <div>
      <h1>Random Joke</h1>
      <p>{joke}</p>
    </div>
  );
}

export default JokeApp;
