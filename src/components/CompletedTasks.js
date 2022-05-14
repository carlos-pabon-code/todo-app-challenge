import styled from "styled-components";

const ActiveTasksContainer = styled.section`
  margin-top: 3rem;
`;

const NoTasksMessage = styled.p`
  font-family: var(--raleway);
  margin: 2rem auto;
  color: var(--dark-color);
`;

const CompletedTasks = () => {
  const tasksList = [];
  return (
    <ActiveTasksContainer>
      {tasksList.length === 0 && (
        <NoTasksMessage>No completed tasks</NoTasksMessage>
      )}
    </ActiveTasksContainer>
  );
};

export default CompletedTasks;
