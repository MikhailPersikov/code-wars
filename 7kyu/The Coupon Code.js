//My solution:

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  if (enteredCode !== correctCode) {
    return false;
  }
  
  const cur = Date.parse(currentDate);
  const exp = Date.parse(expirationDate);
  if (cur > exp) {
    return false;
  }
  
  return true;
}

//Favorite solution: 

// function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
//   return enteredCode===correctCode && new Date(currentDate) <= new Date(expirationDate);
// }