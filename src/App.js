import React from "react";
import { GlobalProvider } from "./context/GlobalState";
import { Switch, Route, HashRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";

const App = () => {
  return (
    <GlobalProvider>
      <HashRouter>
        <Switch>
          <Route exact path="/" render={(props) => <HomePage {...props} />} />
           <Route exact path="/signin" render={(props) => <SignIn {...props} />} />
        </Switch>
      </HashRouter>
    </GlobalProvider>
  );
};

export default App;
