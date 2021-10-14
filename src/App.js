import { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import toggleTheme from './utils/theme'

import HomeToggle from './components/HomeToggle'
import styles from './css/App.module.css'
import ErrorScreen from './pages/ErrorScreen'

const App = () => {
  useEffect(() => {
    if (localStorage.theme === 'dark') {
      toggleTheme()
    }
  }, [])

  return (
    <div id={styles.app}>
      <Router>
        <Switch>
          <Route exact path="/">
            <ErrorScreen />
          </Route>
          <Route path="/stormhacks2021">
            <HomeToggle />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
