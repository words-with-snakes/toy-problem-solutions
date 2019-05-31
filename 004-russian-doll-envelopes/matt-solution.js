/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
  
  if (envelopes.length === 0) {
    return 0;
  }
  
  const doesTupleFit = (tuple1, tuple2) => {
    if (tuple1[0] < tuple2[0] && tuple1[1] < tuple2[1]) {
      return true;
    }
    return false;
  };
  
  let greatestCount = 1;
  const backtrack = (compareTuple, currentTupleIndex, remainingTuples, currentCount) => {
    const tuples = remainingTuples.slice(0);
    if (tuples.length === envelopes.length) {
      tuples.splice(currentTupleIndex, 1);
    }
    for (let i = 0; i < tuples.length; i += 1) {
      if (!doesTupleFit(compareTuple, tuples[i])) {
        tuples.splice(i, 1);
        i -= 1;
      } else {
        let newCount = currentCount + 1;
        if (newCount > greatestCount) {
          greatestCount = newCount;
        }
        backtrack(tuples[i], i, tuples, newCount);
      }
    }
  }
  
  for (let i = 0; i < envelopes.length; i += 1) {
    backtrack(envelopes[i], i, envelopes, 1);
  }
  
  return greatestCount;
};