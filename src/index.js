module.exports = function solveSudoku(matrix) {
  let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const res = [];

  for(let i = 0; i < 9; i++) {  // каждый элемент
    for(let a = 0; a < 9; a++) {
      if(matrix[i][a] === 0) { // число от 0 до 9
        number = rowCol(i, a); // рекурсия
        for(let count of number) { // номер из массива, где матрица = число
          matrix[i][a] = count;
        }
      }
    }
  }


  function rowCol(i, a) { 

    i = Math.floor(i / 3) * 3;
    a = Math.floor(a / 3) * 3;
    for (let b = 0; b < 9; b++) {
      res.push([matrix[i][b], matrix[b][a], matrix[i + b % 3][a + Math.floor(b / 3)]])
    }
    return res;
  }
  return matrix;
}