// function named hasValuesFromArray that returns a boolean
// if all the elements in the array exist within the set.

const hasValuesFromArray = (set, array) => {
  for (const elem of array) {
    if (!set.has(elem)) {
      return false;
    }
  }
  return true;
};

export default hasValuesFromArray;
