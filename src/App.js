import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomeToggle from './components/HomeToggle'
import styles from './css/App.module.css'

const App = () => {
  return (
    <div id={styles.app}>
      <Router>
        <Switch>
          <Route path="/">
            <HomeToggle/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
