import React from 'react'
import { useSelector } from 'react-redux'

const AccountStatus = () => {
  const isSavingAccount = useSelector(state => state.isSavingAccount)

  return (
    <div className='section'>
      <h1
        className={`title has-text-centered ${
          isSavingAccount ? 'has-text-success' : 'has-text-warning'
        }`}
      >
        {isSavingAccount ? 'Saving Account' : 'Checking Account'}
      </h1>
    </div>
  )
}

export default AccountStatus
