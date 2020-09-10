const { mapValues } = require("lodash");

function hashIt(A) {
  let valueToIndicesMap = new Map();
  for (let index = 0; index < A.length; index++) {
    if (valueToIndicesMap.has(A[index])) {
      let indices = valueToIndicesMap.get(A[index]);
      indices.push(index);
      valueToIndicesMap.set(A[index], indices)
    } else {
      valueToIndicesMap.set(A[index], [index])
    }
  }
  return valueToIndicesMap;
}

function findTriplets(A) {
  const valueToIndicesMap = hashIt(A);
  for (let index = 0; index < A.length; index++) {
    if (A[index] > 0) {
      for (let j = 0; j < A.length; j++) {
        let sum = A[index] + A[j];
        if ( valueToIndicesMap.has(-sum) ) {
          let foundIndices = valueToIndicesMap.get(-sum), k;
          for (k = 0; k < foundIndices.length && foundIndices[k] != j; k++) {
            console.log('Triplet:', A[index], ',', A[j], ',', A[foundIndices[k]]);
            valueToIndicesMap.delete(A[index]);
            valueToIndicesMap.delete(A[j]);
            valueToIndicesMap.delete(A[foundIndices[k]]);
          }
        }
      }
    }
  }
}

findTriplets([0,-1,2,-3,1]);
findTriplets([1, -2, 1, 0, 5]);