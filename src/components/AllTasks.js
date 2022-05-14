import styled from "styled-components";
import AddForm from "./AddForm";

const AllTasksContainer = styled.section`
  margin: 3rem auto;
`;

const NoTasksMessage = styled.p`
  font-family: var(--raleway);
  margin: 2rem auto;
  color: var(--dark-color);
`;

const AllTasks = () => {
  const tasksList = [];
  return (
    <AllTasksContainer>
      <AddForm />
      {tasksList.length === 0 && (
        <NoTasksMessage>No tasks added</NoTasksMessage>
      )}
    </AllTasksContainer>
  );
};

export default AllTasks;
