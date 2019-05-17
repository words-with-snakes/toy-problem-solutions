/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  // rows = {0: {}, 1: {}, ..., 8: {}}
  // cols = {0: {}, 1: {}, ..., 8: {}}
  // grids = {'00': {}, '01': {}, '02': {}, '10': {}, ..., '22': {}}
  
  var rows = {};
  var cols = {};
  var grids = {};
  // Grid index helper
  var gridIndex = function(row, col) {
      var gIdx = '';
      
      gIdx += Math.floor(row / 3);
      gIdx += Math.floor(col / 3);
      
      return gIdx;
  }
  
  // Loop through rows
      // Loop though cols
      // Check if '.', then continue
          // Else:
              // If exist in rows, return false
              // If exist in cols, return false
              // If exist in grids, return false
  for (var row = 0; row < board.length; row++) {
      for (var col = 0; col < board[row].length; col++) {
          var currVal = board[row][col];
          if (currVal === '.') {
              continue;
          }
          
          // Check rows
          if (!rows[row]) rows[row] = {};
          if (rows[row][currVal]) {
              return false;
          } else {
              rows[row][currVal] = true;
          }

          // Check cols
          if (!cols[col]) cols[col] = {};
          if (cols[col][currVal]) {
              return false;
          } else {
              cols[col][currVal] = true;
          }

          // Check grids
          var grid = gridIndex(row, col);
          if (!grids[grid]) grids[grid] = {};
          if (grids[grid][currVal]) {
              return false;
          } else {
              grids[grid][currVal] = true;
          }
      }
  }
  
  return true;
};