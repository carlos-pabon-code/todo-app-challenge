import styled from "styled-components";
import AddForm from "./AddForm";

const NoTasksMessage = styled.p``;

const AllTasks = () => {
  const tasksList = [];
  return (
    <>
      <AddForm />
      {tasksList.length === 0 && (
        <NoTasksMessage>There are no tasks added</NoTasksMessage>
      )}
    </>
  );
};

export default AllTasks;
