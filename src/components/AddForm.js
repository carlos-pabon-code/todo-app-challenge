import styled from "styled-components";

const AddContainer = styled.section`
  /* margin: 1rem auto; */
  /* text-align: center; */
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
`;

const AddForm = () => {
  return (
    <AddContainer>
      <AddInput id="details" name="details" placeholder="Add details" />
      <AddButton type="button">Add</AddButton>
    </AddContainer>
  );
};

export default AddForm;
