const redux = require("redux");

const counterReducer = (
  state = {
    counter: 0,
  },
  action
) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  return state;
};

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

const store = redux.createStore(counterReducer);

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
