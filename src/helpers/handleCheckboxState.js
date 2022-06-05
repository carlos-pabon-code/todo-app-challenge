const handleCheckboxState = (isChecked, index, tasksList) => {
  if (isChecked) {
    tasksList[index].state = true;
  } else {
    tasksList[index].state = false;
  }

  localStorage.setItem("itemsList", JSON.stringify(tasksList));

  return tasksList;
};

export { handleCheckboxState };
