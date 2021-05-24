import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Login, Singup, Navbar, PrivateRoute } from "./Components";
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
          <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute>
        </Switch>
      </Router>
    </ProvideAuth>
  );
}

export default App;
