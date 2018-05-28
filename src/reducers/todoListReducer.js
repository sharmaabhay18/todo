const initialState = {
  todos: ['Click to remove', 'Learn React Native', 'Write Code', 'Ship App']
};

export const reducer = (state = initialState, action) => {
  const { todos } = state;

  switch (action.type) {
    case 'add_item':
    return {
      ...state,
      todos: [action.payload, ...todos]
    };

  case 'remove_item':
  return {
    ...state,
        todos: todos.filter((todo, i) => i !== action.payload)
  };

   default:
    return state;
  }
};
