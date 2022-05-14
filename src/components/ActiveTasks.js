import styled from "styled-components";
import AddForm from "./AddForm";

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
      <AddForm />
      {tasksList.length === 0 && (
        <NoTasksMessage>No active tasks</NoTasksMessage>
      )}
    </ActiveTasksContainer>
  );
};

export default ActiveTasks;
