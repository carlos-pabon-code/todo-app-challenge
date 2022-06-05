import { useContext } from "react";
import styled, { css } from "styled-components";
import TasksListContext from "../context/TasksListContext";
import { handleCheckboxState } from "../helpers/handleCheckboxState";

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
  justify-content: space-between;
`;

const ItemCheckbox = styled.input`
  margin-right: 0.5rem;
`;

const ItemName = styled.span`
  font-family: var(--montserrat);
  font-weight: 500;
  color: var(--dark-color);
  ${({ state }) =>
    state &&
    css`
      text-decoration: line-through;
    `}
`;

const TasksInfo = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DeleteTaskButton = styled.button`
  width: auto;
  cursor: pointer;
  background-color: transparent;
  border: none;
  svg {
    width: 2rem;
    color: var(--gray-color);
  }
`;

const DeleteAllTasksButton = styled.button`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  height: 40px;
  padding: 1rem;
  float: right;
  cursor: pointer;
  background-color: var(--delete-color);
  color: var(--white);
  svg {
    width: 1rem;
    padding-bottom: 0.1rem;
    padding-right: 0.2rem;
  }
`;

const CompletedTasks = () => {
  const { itemsList, setItemsList } = useContext(TasksListContext);

  let tasksList = JSON.parse(localStorage.getItem("itemsList")) || "";
  let currentCompletedTasks = 0;

  if (itemsList.length > 0) {
    localStorage.setItem("itemsList", JSON.stringify(itemsList));
  }

  if (tasksList.length > 0) {
    currentCompletedTasks = tasksList.filter((task) => task.state).length;
  }

  const handleCheckbox = (e, index) => {
    let stateList = handleCheckboxState(e.target.checked, index, tasksList);

    setItemsList([...stateList]);
  };

  const deleteTask = (index) => {
    tasksList.splice(index, 1);
    localStorage.setItem("itemsList", JSON.stringify(tasksList));
    setItemsList([...tasksList]);
  };

  const clearAllTasks = () => {
    let currentActiveTasks = tasksList.filter((task) => !task.state);
    localStorage.setItem("itemsList", JSON.stringify(currentActiveTasks));
    setItemsList([...currentActiveTasks]);
  };

  return (
    <ActiveTasksContainer>
      {tasksList.length === 0 || currentCompletedTasks === 0 ? (
        <NoTasksMessage>No completed tasks</NoTasksMessage>
      ) : (
        <>
          {tasksList.map((task, index) => {
            return (
              task.state && (
                <ItemsListContainer key={index}>
                  <TasksInfo>
                    <ItemCheckbox
                      type="checkbox"
                      onChange={(e) => handleCheckbox(e, index)}
                      defaultChecked={task.state}
                    />
                    <ItemName state={task.state}>{task.name}</ItemName>
                  </TasksInfo>
                  <DeleteTaskButton
                    type="button"
                    onClick={() => deleteTask(index)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </DeleteTaskButton>
                </ItemsListContainer>
              )
            );
          })}
          <DeleteAllTasksButton onClick={clearAllTasks}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            Delete All
          </DeleteAllTasksButton>
        </>
      )}
    </ActiveTasksContainer>
  );
};

export default CompletedTasks;
