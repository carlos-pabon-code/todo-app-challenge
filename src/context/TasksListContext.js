import { createContext, useState } from "react";

const TasksListContext = createContext();

const TasksListProvider = ({ children }) => {
  //useState to save the item that the user fills in the input
  const [itemsList, setItemsList] = useState([]);
  const data = { itemsList, setItemsList };
  return (
    <TasksListContext.Provider value={data}>
      {children}
    </TasksListContext.Provider>
  );
};

export { TasksListProvider };
export default TasksListContext;
