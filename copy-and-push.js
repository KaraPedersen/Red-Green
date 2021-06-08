// const numbers = [1, 2, 3];
// copyAndPush(numbers, 4); //return [1, 2, 3, 4];


export default (arr, n) => {
  const newArray = [...arr];
  newArray.push(n);
  return newArray;
};
//adding this line so I can commit
