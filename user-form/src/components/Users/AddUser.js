const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input type="text" id="username"></input>

      <label htmlFor="age">Age (years)</label>
      <input type="number" id="age"></input>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddUser;
