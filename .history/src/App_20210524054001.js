import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Login, Singup, Navbar } from "./Components";
import { ProvideAuth } from "./Context/Globalcontext";

function App() {
  return (
    <ProvideAuth>
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
    </ProvideAuth>
  );
}

export default App;
