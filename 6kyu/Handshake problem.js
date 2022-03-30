//My solutions: 
function getParticipants(handshakes) {
  let participants = 1;

  for (let i = 0; i < handshakes; i++) {
      handshakes -= i;
      participants++
  }

  return participants;
}

//Favorites solutions:

// function getParticipants(handshakes){
//   return Math.floor(1 + Math.round(Math.sqrt(1 + 8 * handshakes)) / 2);
// }

