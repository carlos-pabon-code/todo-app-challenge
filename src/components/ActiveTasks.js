import styled from "styled-components";
import AddTask from "./AddTask";

const ActiveTasksContainer = styled.section`
  margin-top: 3rem;
`;

const NoTasksMessage = styled.p`
  font-family: var(--raleway);
  margin: 2rem auto;
  color: var(--dark-color);
`;

const ActiveTasks = () => {
  const tasksList = [];
  return (
    <ActiveTasksContainer>
      <AddTask />
      {tasksList.length === 0 && (
        <NoTasksMessage>No active tasks</NoTasksMessage>
      )}
    </ActiveTasksContainer>
  );
};

export default ActiveTasks;
