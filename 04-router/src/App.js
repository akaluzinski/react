import { Route, Switch, Redirect } from "react-router-dom";
import React, { Suspense } from "react";
import AllTasks from "./components/AllTasks";
import MainNavigation from "./components/MainNavigation";

const NewTask = React.lazy(() => import("./components/NewTask"));
const Task = React.lazy(() => import("./components/Task"));

function App() {
  return (
    <div>
      <MainNavigation></MainNavigation>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/tasks"></Redirect>
          </Route>
          <Route path="/tasks" exact>
            <AllTasks></AllTasks>
          </Route>
          <Route path="/tasks/:taskId">
            <Task></Task>
          </Route>
          <Route path="/new-task">
            <NewTask></NewTask>
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
