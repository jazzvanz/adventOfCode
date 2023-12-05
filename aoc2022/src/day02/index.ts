import run from "aocrunner"

const parseInput = (rawInput: string): string[][] => {
  const listOfMatches = rawInput.split("\n")
  const arrayOfMatches = listOfMatches.map((listOfMatches) => listOfMatches.split(" "));
  return arrayOfMatches
}

const part1 = (rawInput: string) => {
  const arrayOfMatches = parseInput(rawInput)
  let myTotalTournamentScore: number = 0 

  arrayOfMatches.forEach((match: string[]) => {
    switch(match[1]) {
        case 'X': // Rock
          myTotalTournamentScore = myTotalTournamentScore + 1

          switch(match[0]) {
            case 'A': // Rock = Draw
              myTotalTournamentScore = myTotalTournamentScore + 3
              break;
            case 'B': // Paper = Loss
              break;
            case 'C': // Scissors = Win
              myTotalTournamentScore = myTotalTournamentScore + 6
              break;
            default:
              return
          }
          break;
        case 'Y': // Paper
          myTotalTournamentScore = myTotalTournamentScore + 2

          switch(match[0]) {
            case 'A': // Rock = Win
              myTotalTournamentScore = myTotalTournamentScore + 6
              break;
            case 'B': // Paper = Draw
              myTotalTournamentScore = myTotalTournamentScore + 3
              break;
            case 'C': // Scissors = Loss
              break;
            default:
              return
          }
          break;
        case 'Z': // Scissors
          myTotalTournamentScore = myTotalTournamentScore + 3

          switch(match[0]) {
            case 'A': // Rock = Loss
              break;
            case 'B': // Paper = Win
              myTotalTournamentScore = myTotalTournamentScore + 6
              break;
            case 'C': // Scissors = Draw
              myTotalTournamentScore = myTotalTournamentScore + 3
              break;
            default:
              return
          }
            break;
        default:
          return
    }

    return myTotalTournamentScore
  })
  return myTotalTournamentScore
}

// const gameLegend = {
//   a: 'rock',
//   b: 'paper',
//   c: 'scissors',
//   x: 'rock',
//   y: 'paper',
//   z: 'scissors'
// }

// X means you need to lose, Y means you need to end the round in a draw, and Z means you need to win.
// const updatedLegend = { 
// x: 'lose',
//   y: 'draw',
//   z: 'win'
// }

const part2 = (rawInput: string) => {
  const arrayOfMatches = parseInput(rawInput)
  let myTotalTournamentScore: number = 0;
  // let competitorsSelection: string | undefined;

  const pointsLegend = {
    rock: 1,
    paper: 2,
    scissors: 3,
    loss: 0,
    draw: 3,
    win: 6
  }

  // const gameLegend = {
  //   a: 'rock',
  //   b: 'paper',
  //   c: 'scissors',
  //   x: 'rock',
  //   y: 'paper',
  //   z: 'scissors'
  // }

// attempt 2
// const map1 = arrayOfMatches.map((match) => {
//   // match ['Y', 'R']
//   match.reduce((myTotalTournamentScore, current:string) => {
//     switch(current) {
//       case 'A': // Rock
//         competitorsSelection = 'A'
//         break;
//       case 'B': // Paper
//         competitorsSelection = 'B'
//         break;
//       case 'C': // Scissors
//         competitorsSelection = 'C'
//         break;
//       case 'X': // Lose
//         if(competitorsSelection === 'A'){
//           myTotalTournamentScore = myTotalTournamentScore + pointsLegend.paper
//         } else if (competitorsSelection === 'B') {
//           myTotalTournamentScore = myTotalTournamentScore + pointsLegend.scissors
//         } else {
//           myTotalTournamentScore = myTotalTournamentScore + pointsLegend.rock
//         }
//         break;
//       case 'Y': // Draw
//         myTotalTournamentScore = myTotalTournamentScore + pointsLegend.draw
//         if(competitorsSelection === 'A'){
//           myTotalTournamentScore = myTotalTournamentScore + pointsLegend.rock
//         } else if (competitorsSelection === 'B') {
//           myTotalTournamentScore = myTotalTournamentScore + pointsLegend.paper
//         } else {
//           myTotalTournamentScore = myTotalTournamentScore + pointsLegend.scissors
//         }
//         break;
//       case 'Z': // Win
//         myTotalTournamentScore = myTotalTournamentScore + pointsLegend.win
//         if(competitorsSelection === 'A'){
//           myTotalTournamentScore = myTotalTournamentScore + pointsLegend.paper
//         } else if (competitorsSelection === 'B') {
//           myTotalTournamentScore = myTotalTournamentScore + pointsLegend.scissors
//         } else {
//           myTotalTournamentScore = myTotalTournamentScore + pointsLegend.rock
//         }
//         break;
//       default:
//         return myTotalTournamentScore;
//         // maybe return above? 
//   }
//   return myTotalTournamentScore
//   }, myTotalTournamentScore)

//   return myTotalTournamentScore
// });

// attenpt 1:
  // arrayOfMatches.forEach((match: string[]) => {
  //   // console.log(match[0], match[1], 'do we see each match')
  //   switch(match[0]) {
  //       case 'A': // Rock
         
  //         switch(match[1]) {
  //           case 'X': // Lose = Paper
  //             myTotalTournamentScore = myTotalTournamentScore + pointsLegend.paper
  //             break;
  //           case 'Y': // Draw = Rock
  //             myTotalTournamentScore = myTotalTournamentScore + pointsLegend.rock + pointsLegend.draw
  //             break;
  //           case 'Z': // Win = Scissors
  //             myTotalTournamentScore = myTotalTournamentScore + pointsLegend.scissors + pointsLegend.win
  //             break;
  //           default:
  //           return;
  //         }
  //       case 'B': // Paper
  //         switch(match[1]) {
  //           case 'X': // Lose = Scissors
  //             myTotalTournamentScore = myTotalTournamentScore + pointsLegend.scissors
  //             break;
  //           case 'Y': // Draw = Paper
  //             myTotalTournamentScore = myTotalTournamentScore + pointsLegend.paper + pointsLegend.draw
  //             break;
  //           case 'Z': // Win = Rock
  //             myTotalTournamentScore = myTotalTournamentScore + pointsLegend.rock + pointsLegend.win
  //             break;
  //           default:
  //           return;
  //         }
  //       case 'C': // Scissors
  //         switch(match[1]) {
  //           case 'X': // Lose = Rock
  //             myTotalTournamentScore = myTotalTournamentScore + pointsLegend.rock
  //             break;
  //           case 'Y': // Draw = Scissors
  //             myTotalTournamentScore = myTotalTournamentScore + pointsLegend.scissors + pointsLegend.draw
  //             break;
  //           case 'Z': // Win = Paper
  //             myTotalTournamentScore = myTotalTournamentScore + pointsLegend.paper + pointsLegend.win
  //             break;
  //           default:
  //             return;
  //         }
  //       default:
  //       break;
  //   }
  // })

  // They have selected  - so you get these points
  // Some sort of index
  // const win = {
  //   'A': 2,
  //   'B': 3,
  //   'C': 1,
  // }
  // const loss = {
  //   A: 3, // rock
  //   B: 1, // paper
  //   C: 2, // scissors
  // }
  // const draw = {
  //   'A': 1, // rock
  //   'B': 2, // paper
  //   'C': 3, // scissors
  // }
  // .getItem(key)

  // 100p better solution but lets move on lol
  // attempt 3
   arrayOfMatches.forEach((match: string[]) => {
    if(match.includes('X')){ // loss
      if(match.includes('A')){ 
        myTotalTournamentScore = myTotalTournamentScore + pointsLegend.scissors;
      }
      if(match.includes('B')){
        myTotalTournamentScore = myTotalTournamentScore + pointsLegend.rock;
      }
      if(match.includes('C')){
        myTotalTournamentScore = myTotalTournamentScore + pointsLegend.paper;
      }
    }
    if(match.includes('Y')){
      myTotalTournamentScore = myTotalTournamentScore + pointsLegend.draw;
      if(match.includes('A')){ // rock
        myTotalTournamentScore = myTotalTournamentScore + pointsLegend.rock;
      }
      if(match.includes('B')){
        myTotalTournamentScore = myTotalTournamentScore + pointsLegend.paper;
      }
      if(match.includes('C')){
        myTotalTournamentScore = myTotalTournamentScore + pointsLegend.scissors;
      }
    }
    if(match.includes('Z')){
      myTotalTournamentScore = myTotalTournamentScore + pointsLegend.win;
      if(match.includes('A')){ // rock
        myTotalTournamentScore = myTotalTournamentScore + pointsLegend.paper;
      }
      if(match.includes('B')){
        myTotalTournamentScore = myTotalTournamentScore + pointsLegend.scissors;
      }
      if(match.includes('C')){
        myTotalTournamentScore = myTotalTournamentScore + pointsLegend.rock;
      }
    }
    console.log(match, myTotalTournamentScore);
  })
  return myTotalTournamentScore
}

// 25630 - too hig
// ?? 4649
// ?? 11258
// 11003 - too low 

// [[Y,C] ]

// someone suggested 
// isDraw
// isWin
// isLose
// and assigning all the letters to strings of the words

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: 
        `A Y
        C Y
        C X
        A Y`,
        expected: 15,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
})
