import { useContext } from "react";
import styled from "styled-components";
import TasksListContext from "../context/TasksListContext";
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
`;

const AllTasks = () => {
  const { itemsList } = useContext(TasksListContext);

  const handleCheckboxState = (e, index) => {
    if (e.target.checked) {
      itemsList[index].state = true;
    } else {
      itemsList[index].state = false;
    }
  };

  return (
    <AllTasksContainer>
      <AddTask />
      {itemsList.length === 0 ? (
        <NoTasksMessage>No tasks added</NoTasksMessage>
      ) : (
        itemsList.map((item, index) => (
          <ItemsListContainer key={index}>
            <ItemCheckbox
              type="checkbox"
              onChange={(e) => handleCheckboxState(e, index)}
            />
            <ItemName>{item.name}</ItemName>
          </ItemsListContainer>
        ))
      )}
    </AllTasksContainer>
  );
};

export default AllTasks;
