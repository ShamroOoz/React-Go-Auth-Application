import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {} from "./"
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/singup">
          <About />
        </Route>
        <Route path="/login">
          <Users />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
