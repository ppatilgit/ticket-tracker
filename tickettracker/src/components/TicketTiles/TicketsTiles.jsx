import React from 'react'
import Counter from '../Counter/Counter'
import './TicketsTiles.scss';

const TicketsTiles = (props) => {

    const employeeCard = props.teamArr.map((employee) => 
        <div className= "employee" key={employee.id}>
            <h3 className ="employee__name"> {employee.name}</h3>
            <h2 className ="employee__role"> {employee.role}</h2>
            <Counter />
        </div>)
  return (
    <div className='employees'>
      {employeeCard}  
    </div>
  )
}

export default TicketsTiles