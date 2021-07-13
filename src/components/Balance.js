import React from 'react'
import { useSelector } from 'react-redux'

const Balance = () => {
  const data = useSelector(state => {
    return {
      balance: state.balance,
      interest: state.interest,
    }
  })
  return (
    <div>
      <h1 className='is-size-3 has-text-link'>Balance : ${data.balance}</h1>
      <h1 className='is-size-3 has-text-link'>Interest : ${data.interest}</h1>
    </div>
  )
}

export default Balance
