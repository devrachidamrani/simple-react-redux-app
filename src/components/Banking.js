import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  deposit,
  withDraw,
  deleteAccount,
  collectInterest,
  changeAccountType,
} from '../actions'

const Banking = () => {
  const [amount, setAmount] = useState(0)
  const dispatch = useDispatch()

  const handleDeposit = () => {
    dispatch(deposit(+amount))
  }

  const handleWithDraw = () => {
    dispatch(withDraw(+amount))
  }

  const handleCollectInterest = () => {
    dispatch(collectInterest())
  }

  const handleDelete = () => {
    dispatch(deleteAccount())
  }

  const handleChangeAcount = () => {
    dispatch(changeAccountType())
  }

  return (
    <div className='notification'>
      <div className='field'>
        <input
          value={amount}
          onChange={e => setAmount(e.target.value)}
          type='number'
          className='input is-normal'
          placeholder='Amount'
        />
      </div>
      <button
        className='mr-2 button is-rounded is-primary'
        onClick={handleDeposit}
      >
        Deposit
      </button>
      <button
        className='mr-2 button is-rounded is-link'
        onClick={handleWithDraw}
      >
        Withdraw
      </button>
      <button
        className='mr-2 button is-rounded is-info'
        onClick={handleCollectInterest}
      >
        Collect Interest
      </button>
      <button
        className='mr-2 button is-rounded is-danger'
        onClick={handleDelete}
      >
        Delete Account
      </button>
      <button
        className='mr-2 button is-rounded is-success'
        onClick={handleChangeAcount}
      >
        Change Account Type
      </button>
    </div>
  )
}

export default Banking
