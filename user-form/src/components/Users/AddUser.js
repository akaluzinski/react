import Card from "../UI/card/Card";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username"></input>

        <label htmlFor="age">Age (years)</label>
        <input type="number" id="age"></input>
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default AddUser;
