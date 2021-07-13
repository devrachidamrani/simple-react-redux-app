export const deposit = amount => {
  return {
    type: 'DEPOSIT',
    payload: amount,
  }
}

export const withDraw = amount => {
  return {
    type: 'WITHDRAW',
    payload: amount,
  }
}

export const collectInterest = () => {
  return {
    type: 'COLLECT_INTEREST',
  }
}

export const deleteAccount = () => {
  return {
    type: 'DELETE_ACCOUNT',
  }
}

export const changeAccountType = () => {
  return {
    type: 'CHANGE_ACCOUNT_TYPE',
  }
}

export const toggleAuth = () => {
  return {
    type: 'TOGGLE_AUTH',
  }
}
