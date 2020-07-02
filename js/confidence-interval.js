function multiply_matrix(a, b) {
  var aNumRows = a.length, aNumCols = a[0].length,
      bNumRows = b.length, bNumCols = b[0].length,
      m = new Array(aNumRows);  // initialize array of rows
  for (var r = 0; r < aNumRows; ++r) {
    m[r] = new Array(bNumCols); // initialize the current row
    for (var c = 0; c < bNumCols; ++c) {
      m[r][c] = 0;             // initialize the current cell
      for (var i = 0; i < aNumCols; ++i) {        
        m[r][c] += a[r][i] * b[i][c];
      }
    }
  }
  return m;
}

//transpose matrix
function transpose(array) {
  return array[0].map((_, colIndex) => array.map(row => row[colIndex]));
}

// ***************** Formula *********************
// Y_hat +/- [t0.975(n-k-1) * S * sqrt(1/n + X'CX) ]
// ***********************************************
function confidence_interval(y,x,tSnC){  
  //unpacking
  let [t,S,n,C] = tSnC

  //confident
  xtp = transpose(x)
  xtpC = multiply_matrix(x,C)
  xtpCx = multiply_matrix(xtpC,xtp)
  // formula: [t0.975(n-k-1) * S * sqrt(1/n + X'CX) ]
  h = t * S * Math.sqrt(((1/n) + xtpCx[0][0]))
  console.log('confidence_interval', h)
  return [y-h,y+h]
}

