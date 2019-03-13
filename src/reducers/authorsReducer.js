export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_AUTHORS":
      return [...state, action.payload];

    case "ADD_AUTHOR":
      return [...state[0], action.payload];

    default:
      return state;
  }
};
