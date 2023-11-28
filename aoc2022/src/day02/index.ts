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
  let myTotalTournamentScore: number = 0 
  const pointsLegend = {
  rock: 1,
  paper: 2,
  scissors: 3,
  loss: 0,
  draw: 3,
  win: 6
}

  arrayOfMatches.forEach((match: string[]) => {
    switch(match[0]) {
        case 'A': // Rock
          switch(match[1]) {
            case 'X': // Lose = Paper
              myTotalTournamentScore = myTotalTournamentScore + pointsLegend.paper
              break;
            case 'Y': // Draw = Rock
              myTotalTournamentScore = myTotalTournamentScore + pointsLegend.rock + pointsLegend.draw
              break;
            case 'Z': // Win = Scissors
              myTotalTournamentScore = myTotalTournamentScore + pointsLegend.scissors + pointsLegend.win
              break;
            default:
              return
          }
          return;
        case 'B': // Paper
          switch(match[1]) {
            case 'X': // Lose = Scissors
              myTotalTournamentScore = myTotalTournamentScore + pointsLegend.scissors
              break;
            case 'Y': // Draw = Paper
              myTotalTournamentScore = myTotalTournamentScore + pointsLegend.paper + pointsLegend.draw
              break;
            case 'Z': // Win = Rock
              myTotalTournamentScore = myTotalTournamentScore + pointsLegend.rock + pointsLegend.win
              break;
            default:
              return
          }
          return;
        case 'C': // Scissors
          switch(match[1]) {
            case 'X': // Lose = Rock
              myTotalTournamentScore = myTotalTournamentScore + pointsLegend.rock
              break;
            case 'Y': // Draw = Scissors
              myTotalTournamentScore = myTotalTournamentScore + pointsLegend.scissors + pointsLegend.draw
              break;
            case 'Z': // Win = Paper
              myTotalTournamentScore = myTotalTournamentScore + pointsLegend.paper + pointsLegend.win
              break;
            default:
              return
          }
            return;
        default:
        return
    }
    console.log('For Each Match', myTotalTournamentScore)
    return myTotalTournamentScore
  })
  return myTotalTournamentScore
}

// 25630 - too high
// 11003 - too low

// left off - need to write some tests to figure out the problem. 

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
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
})
