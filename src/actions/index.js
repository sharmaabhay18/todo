export const todoAdd = (item) => {
  return {
    type: 'add_item',
    payload: item
  };
};

export const todoRemove = (index) => {
  return {
    type: 'remove_item',
    payload: index
  };
};
