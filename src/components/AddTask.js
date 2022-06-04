import { useContext, useState } from "react";
import TasksListContext from "../context/TasksListContext";
import styled from "styled-components";

const AddContainer = styled.section`
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AddInput = styled.input`
  width: 100%;
  height: 56px;
  border-radius: 12px;
  border: 1px solid var(--gray-color);
  padding-left: 1rem;
  font-family: var(--montserrat);
  font-weight: 400;
  @media (min-width: 768px) {
    width: 100%;
  }
`;

const AddButton = styled.button`
  width: 100px;
  background-color: var(--primary-color);
  color: var(--white);
  box-shadow: 0px 2px 6px rgba(127, 177, 243, 0.4);
  border-radius: 12px;
  border: none;
  height: 56px;
  margin-left: 1rem;
  font-family: var(--montserrat);
  font-weight: 600;
  cursor: pointer;
`;

const AddTask = () => {
  const { itemsList, setItemsList } = useContext(TasksListContext);

  //useState to save the value filled on the input
  const [addedItem, setAddedItem] = useState(null);

  const handleItemChange = (e) => {
    setAddedItem(e.target.value);
  };

  const addItem = () => {
    console.log("agregar item");
    const taskInput = document.getElementById("details");
    let tasksList = JSON.parse(localStorage.getItem("itemsList")) || "";
    if (tasksList === "") {
      setItemsList([...itemsList, { name: addedItem, state: false }]);
    } else {
      setItemsList([...tasksList, { name: addedItem, state: false }]);
    }
    taskInput.value = "";
  };

  return (
    <AddContainer>
      <AddInput
        id="details"
        name="details"
        placeholder="Add details"
        onChange={handleItemChange}
      />
      <AddButton type="button" onClick={addItem}>
        Add
      </AddButton>
    </AddContainer>
  );
};

export default AddTask;
