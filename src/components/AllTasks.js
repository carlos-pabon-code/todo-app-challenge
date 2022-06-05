import { useContext } from "react";
import styled from "styled-components";
import { css } from "styled-components";
import TasksListContext from "../context/TasksListContext";
import { handleCheckboxState } from "../helpers/handleCheckboxState";
import AddTask from "./AddTask";

const AllTasksContainer = styled.section`
  margin: 3rem auto;
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
  ${({ state }) =>
    state &&
    css`
      text-decoration: line-through;
    `}
`;

const AllTasks = () => {
  const { itemsList, setItemsList } = useContext(TasksListContext);

  let tasksList = JSON.parse(localStorage.getItem("itemsList")) || "";

  if (itemsList.length > 0) {
    localStorage.setItem("itemsList", JSON.stringify(itemsList));
  }

  const handleCheckbox = (e, index) => {
    let stateList = handleCheckboxState(e.target.checked, index, tasksList);

    setItemsList([...stateList]);
  };

  return (
    <AllTasksContainer>
      <AddTask />
      {tasksList.length === 0 ? (
        <NoTasksMessage>No tasks added</NoTasksMessage>
      ) : (
        tasksList.map((item, index) => (
          <ItemsListContainer key={index}>
            <ItemCheckbox
              type="checkbox"
              onChange={(e) => handleCheckbox(e, index)}
              defaultChecked={item.state}
            />
            <ItemName state={item.state}>{item.name}</ItemName>
          </ItemsListContainer>
        ))
      )}
    </AllTasksContainer>
  );
};

export default AllTasks;
