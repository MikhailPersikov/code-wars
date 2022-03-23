// My solution:

function getLengthOfMissingArray(arrayOfArrays) {
    if (!arrayOfArrays || arrayOfArrays.length === 0) return 0;
    if (arrayOfArrays.some(array => !array || array.length === 0)) return 0;

    const lengthMissing = arrayOfArrays
      .map(array => array.length)
      .sort((a, b) => a - b)
      .find((_, i, lengths) => i > 0 && lengths[i] - lengths[i-1] > 1);
    return lengthMissing - 1;
}