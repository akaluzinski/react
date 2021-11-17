import { useParams } from "react-router-dom";

const Task = () => {
  const params = useParams();
  return <h1>Task {params.taskId} </h1>;
};

export default Task;
