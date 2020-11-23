import { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import toggleTheme from './utils/toggleTheme'
import WebToggle from './components/WebToggle'


import HomeToggle from './components/HomeToggle'
import styles from './css/App.module.css'

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
          <Route path="/20210221" >
            <WebToggle />
          </Route>
          <Route path="/">
            <HomeToggle />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
