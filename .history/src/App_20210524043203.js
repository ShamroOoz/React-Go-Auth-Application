import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <R
    <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
