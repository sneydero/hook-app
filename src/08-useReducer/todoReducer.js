export const todoReducer = (initialState = [], action = {}) => {
  switch (action.type) {
    case "ABC":
      throw new Error("Action.type = this action is not implemented");

    default:
      return initialState;
  }
};
