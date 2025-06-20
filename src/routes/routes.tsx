import CreateExperience from "@/pages/CreateExperience";
import ExperiencePage from "@/pages/ExperiencePage";
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
      <Route path="/create-experience" component={() => <CreateExperience />} />

      {/* Form routes */}
      <Route path="/experience/:id" component={() => <ExperiencePage />} />

      {/* error routes */}
      <Route path="*" component={() => <div>404: no such page</div>} />
    </Switch>
  );
};
