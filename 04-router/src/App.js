import { Route, Switch, Redirect } from "react-router-dom";
import AllTasks from "./components/AllTasks";
import Task from "./components/Task";
import NewTask from "./components/NewTask";

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
