import React, {useState} from 'react'
import './Counter.scss';


const Counter = () => {
    
const [count, updateCount] = useState(0);

  return (
    <div className ="counter">
        <h4 >Counter</h4>
        <p className="counter_tickets">{count}</p>
        <div className="counter_buttons"> 
            <button onClick={()=> count>0 && updateCount(count-1)} >-</button>
            <button onClick={()=> updateCount(count+1)} >+</button>
        </div>
    </div>
  )
}

export default Counter