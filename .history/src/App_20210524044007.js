import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Login, Singup, Navbar } from "./Components";
function App() {
  return (
    <Router>
      <Navbar />
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
