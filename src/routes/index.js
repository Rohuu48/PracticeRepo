import { Route, Switch } from "react-router-dom";
import Details from "../pages/Details";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/:name" component={Details}></Route>
    </Switch>
  );
};

export default Routes;
