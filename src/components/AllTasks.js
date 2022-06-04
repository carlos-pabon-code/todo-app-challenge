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

  console.log(itemsList);
  let tasksList = JSON.parse(localStorage.getItem("itemsList")) || "";

  if (itemsList.length > 0) {
    localStorage.setItem("itemsList", JSON.stringify(itemsList));
  }

  const handleCheckboxState = (e, index) => {
    if (e.target.checked) {
      tasksList[index].state = true;
      itemsList[index].state = true;
      localStorage.setItem("itemsList", JSON.stringify(tasksList));
    } else {
      tasksList[index].state = false;
      itemsList[index].state = false;
      localStorage.setItem("itemsList", JSON.stringify(tasksList));
    }
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
              onChange={(e) => handleCheckboxState(e, index)}
              defaultChecked={item.state}
            />
            <ItemName>{item.name}</ItemName>
          </ItemsListContainer>
        ))
      )}
    </AllTasksContainer>
  );
};

export default AllTasks;
