
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix == undefined || matrix[0] == undefined) return [];
  let result = '';
  for (let i = 0; i < matrix.length; i++) {
    if ((i + 1) % 2 == 0) {
      result += String(matrix[i].reverse());
    } else {
      result += String(matrix[i]);
    }
    if (i != matrix.length - 1) result += ',';
  }
  return result.split(',');
}
