// Components
import Auth from './components/Auth'
import Balance from './components/Balance'
import Banking from './components/Banking'
import AccountStatus from './components/AccountStatus'
// Styling
import 'bulma'

// App Entry Point
const App = () => {
  return (
    <div className='section'>
      <h1 className='is-size-1 is-black has-text-black has-text-centered has-text-weight-bold'>
        Banking App
      </h1>
      <hr />
      <Auth />
      <Balance />
      <Banking />
      <AccountStatus />
    </div>
  )
}

export default App
