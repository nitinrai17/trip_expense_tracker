import React from 'react'

const isIncome = Math.round(Math.random());

const Infocard = () => {
  return (
    <div style={{ textAlign : 'center', padding : '0 10%'}}>
        Try saying: <br/>
        Add {isIncome ? 'Income ' : 'Expense '} 
        for {isIncome ? '₹100 ' : '₹50 '}  
        in Category {isIncome ? 'Salary ' : 'Travel '}
        for {isIncome ? 'Monday ' : 'Thursday '}
    </div>
  )
}

export default Infocard;