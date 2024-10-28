import { puppyList } from './data'
import { useState } from 'react';
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  console.log(`puppies passed into array:`, puppies);

  return (
    <div>
      { 
        puppies.map((puppy) => {
          return <p key={puppy.id}>{puppy.name}</p>
        }) 
      }
    </div>
  )
}

export default App
