import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { Route, Switch } from "wouter";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={() => <div>Home</div>} />

      {/* Auth routes */}
      <Route path="/login" component={() => <Login />} />
      <Route path="/register" component={() => <Register />} />

      {/* error routes */}
      <Route path="*" component={() => <div>404: no such page</div>} />
    </Switch>
  );
};
