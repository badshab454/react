import React, {useState} from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>{count}liked</p>
      <button onClick={()=> {setCount(count+1)}}>Like</button>
    </>
  )
}

export default App;