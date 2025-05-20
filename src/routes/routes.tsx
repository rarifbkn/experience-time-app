import Home from "@/pages/home";
import Login from "@/pages/Login";
import { Route, Switch } from "wouter";

export const Routes = () => {
  return (
    <Switch>
      {/* Auth routes */}
      <Route path="/login" component={() => <Login />} />

      {/* Home routes */}
      <Route path="/home" component={() => <Home />} />

      {/* error routes */}
      <Route path="*" component={() => <div>404: no such page</div>} />
    </Switch>
  );
};
