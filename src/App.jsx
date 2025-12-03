// Import React features and other files we need

import { useState } from 'react'                    // React Hook to create state variables
import reactLogo from './assets/react.svg'          // React logo image
import viteLogo from '/vite.svg'                    // Vite logo image
import './App.css'                                  // Import global CSS styles
import Footer from './Footer'                       // Footer component
import CounterButtons from './CounterButtons'       // Component with + / - buttons
import CounterDisplay from './CounterDisplay'       // Component to show the count


// Main component of our app

function App() {

  // Declare a state variable "count" with default value = 1
  // "setCount" is a function to update "count"
  const [count, setCount] = useState(1)

  // Function to increase the count by 1
  const handleIncrement =() => setCount((count)=>count +1);
  
  // Function to decrease the count by 1
  const handleDecrement =() => setCount((count)=>count -1);
  
  // JSX (UI layout) that React will render

  return (
    <>
      <div>

     {/* Vite logo with a link to vite.dev */}
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>

    {/* React logo with a link to react.dev */}
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    
  {/* Display count */}
      <CounterDisplay count={count} />
      <CounterDisplay count={count} />  
      <CounterDisplay count={count} />
      <CounterDisplay count={count} />
      <CounterDisplay count={count} />

{/* Buttons to control count */}

      <CounterButtons handleIncrement={handleIncrement} handleDecrement={handleDecrement}/>
{/* Footer at the bottom */}
      <Footer/>
    </>
  )
}
// Export App so Vite can run it
export default App
