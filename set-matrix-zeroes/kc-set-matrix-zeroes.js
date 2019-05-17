/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  // m + n space
//     var rows = [];
//     var cols = [];
  
//     for (var row = 0; row < matrix.length; row++) {
//         for (var col = 0; col < matrix[row].length; col++) {
//             var value = matrix[row][col];
//             rows[row] = rows[row] || false;
//             cols[col] = cols[col] || false;
          
//             if (value === 0) {
//                 rows[row] = true;
//                 cols[col] = true;
//             }
//         }
//     }
  
//     for (var row = 0; row < matrix.length; row++) {
//         for (var col = 0; col < matrix[row].length; col++) {
//             if (rows[row] || cols[col]) {
//                 matrix[row][col] = 0;
//             }
//         }
//     }
  
  // constant space
  // Use first element in rows and first element in columns to denote whether row/column should be 0
  // Since the 0,0 location could mean either row or column, we should pick one, and have another variable hold the other, e.g. 0,0 represents whether row 0 should be 0, and new var col0 represents whether col 0 should be 0
  // Can't avoid looping twice though
  var col0 = null;
  for (var row = 0; row < matrix.length; row++) {
      for (var col = 0; col < matrix[row].length; col++) {
          var value = matrix[row][col];
          
          if (value === 0) {
              matrix[row][0] = 0;
              if (col === 0) {
                  col0 = 0;
              } else {
                  matrix[0][col] = 0;    
              }
          }
      }
  }
  
  for (var row = matrix.length - 1; row >= 0 ; row--) {
      for (var col = matrix[row].length - 1; col >= 0 ; col--) {
          var rowZeroed = matrix[row][0] === 0;
          var colZeroed = col === 0 ? col0 === 0 : matrix[0][col] === 0;
          if (rowZeroed || colZeroed) {
              matrix[row][col] = 0;
          }
      }
  }
};