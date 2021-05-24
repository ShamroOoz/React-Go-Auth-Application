import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home, Login, Singup } from "./Components";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/singup">
          <Singup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
