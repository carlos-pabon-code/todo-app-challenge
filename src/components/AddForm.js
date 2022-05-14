import styled from "styled-components";

const AddContainer = styled.section``;
const AddInput = styled.input``;
const AddButton = styled.button``;

const AddForm = () => {
  return (
    <AddContainer>
      <AddInput id="details" name="details" placeholder="Add details" />
      <AddButton type="button">Add</AddButton>
    </AddContainer>
  );
};

export default AddForm;
