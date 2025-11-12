const taskReducer = (tasks, action) => {
  switch (action.type) {
    case "add":
      return [...tasks, action.payload];
    case "edit":
      return tasks.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        } else {
          return item;
        }
      });
    case "delete":
      return tasks.filter((item) => item.id !== action.payload);
  }
};

export default taskReducer;
