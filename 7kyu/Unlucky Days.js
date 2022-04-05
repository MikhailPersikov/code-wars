//My solution:

function unluckyDays(year) {
  let counter = 0;
  const dates = createDates(year);

  dates.forEach((date) => {
    if (date.getDay() === 5) {
      counter++;
    }
  });
  
  return counter;
}

function createDates(year) {
  const dates = [];

  for (let i = 0; i < 12; i++) {
    dates.push(new Date(year, i, 13, 12));
  }
  
  return dates;
}

//Favotrite solution:

// function unluckyDays(year){
//   return Array.from({ length: 12 }).filter((_, i) => new Date(year, i, 13).getDay() === 5).length
// }