const taskReducer = (tasks, action) => {
  switch (action.type) {
    case "add":
      return {
        all: [...tasks.all, action.payload],
        toShow: [...tasks.toShow, action.payload],
      };
    case "edit":
      return {
        all: tasks.all.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          } else {
            return item;
          }
        }),
        toShow: tasks.toShow.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          } else {
            return item;
          }
        }),
      };
    case "delete": {
      return {
        all: tasks.all.filter((item) => item.id !== action.payload),
        toShow: tasks.toShow.filter((item) => item.id !== action.payload),
      };
    }
    case "search": {
      return {
        ...tasks,
        toShow: tasks.all.filter((item) =>
          item.taskName.toLowerCase().includes(action.payload)
        ),
      };
    }
  }
};

export default taskReducer;
