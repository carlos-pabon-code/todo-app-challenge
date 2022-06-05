import { useContext } from "react";
import styled from "styled-components";
import TasksListContext from "../context/TasksListContext";
import { handleCheckboxState } from "../helpers/handleCheckboxState";
import AddTask from "./AddTask";

const ActiveTasksContainer = styled.section`
  margin-top: 3rem;
`;

const NoTasksMessage = styled.p`
  font-family: var(--raleway);
  margin: 2rem auto;
  color: var(--dark-color);
`;

const ItemsListContainer = styled.section`
  text-align: left;
  margin: 1rem auto;
  display: flex;
  align-items: center;
  justify-content: start;
`;

const ItemCheckbox = styled.input`
  margin-right: 0.5rem;
`;

const ItemName = styled.span`
  font-family: var(--montserrat);
  font-weight: 500;
  color: var(--dark-color);
`;

const ActiveTasks = () => {
  const { itemsList, setItemsList } = useContext(TasksListContext);

  let tasksList = JSON.parse(localStorage.getItem("itemsList")) || "";
  let currentActiveTasks = 0;

  if (itemsList.length > 0) {
    localStorage.setItem("itemsList", JSON.stringify(itemsList));
  }

  if (tasksList.length > 0) {
    currentActiveTasks = tasksList.filter((task) => !task.state).length;
  }

  const handleCheckbox = (e, index) => {
    let stateList = handleCheckboxState(e.target.checked, index, tasksList);

    setItemsList([...stateList]);
  };

  return (
    <ActiveTasksContainer>
      <AddTask />
      {tasksList.length === 0 || currentActiveTasks === 0 ? (
        <NoTasksMessage>No active tasks</NoTasksMessage>
      ) : (
        tasksList.map((task, index) => {
          return (
            !task.state && (
              <ItemsListContainer key={index}>
                <ItemCheckbox
                  type="checkbox"
                  onChange={(e) => handleCheckbox(e, index)}
                  defaultChecked={task.state}
                />
                <ItemName>{task.name}</ItemName>
              </ItemsListContainer>
            )
          );
        })
      )}
    </ActiveTasksContainer>
  );
};

export default ActiveTasks;
