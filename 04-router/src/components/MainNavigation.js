import { LinkLink, NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header>
      <div>Some tasks</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/tasks">All tasks</NavLink>
          </li>
          <li>
            <NavLink to="/new-task">Add task</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
