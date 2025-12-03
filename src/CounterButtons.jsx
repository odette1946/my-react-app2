// Component that shows + and - buttons
// It receives functions (props) from App.jsx
// Props here include: handleIncrement and handleDecrement

function CounterButtons(props) {             
   return ( 
   
   // A div container with a CSS class "card"
   <div className="card">

     {/* Increment button */}
      {/* When clicked, it runs the function passed from App.jsx (props.handleIncrement) */}
        <button onClick={props.handleIncrement}>    
          Increment                   {/*count is {count}*/ /*Name change from Count to Increment*/} 
        
{/* Comment: This button increases the counter value */}
{/* (Previously labeled "Count", but renamed to "Increment") */}
        
        </button>

 {/* Decrement button */}
      {/* When clicked, it runs props.handleDecrement from App.jsx */}
        <button onClick={props.handleDecrement}>
          Decrement                      {/*Decrement Buttont*/} 
        
{/* Comment: This button decreases the counter value */}
        
        </button>
       
      </div>)
}

export default CounterButtons;