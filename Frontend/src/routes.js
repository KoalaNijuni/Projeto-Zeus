import InitialPage from "./pages/InitalPage/index";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={InitialPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
