//My solution:

function launchAll(launchMissile) {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => launchMissile(i), i * 1000);
  }
}

//Favorite solution:

// function launchAll(launchMissile) {
//   for (var i = 0; i < 5; i++) {
//     setTimeout(launchMissile.bind(null, i), i * 1000);
//   }
// }