import run from "aocrunner"

const parseInput = (rawInput: string) => rawInput

// const gameLegend = {
//   a: 'rock',
//   b: 'paper',
//   c: 'scissors',
//   x: 'rock',
//   y: 'paper',
//   z: 'scissors'
// }

// // if you pick
// const pointsLegend = {
//   rock: 1,
//   paper: 2,
//   scissors: 3,
//   loss: 0,
//   draw: 3,
//   win: 6
// }

// can we try out object with a methods on it for fun?
// assinging a value and doing it with math? possible but mindnumbing

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)
  const listOfMatches: string[] = input.split("\n")
  const arrayOfMatches: string[][] = listOfMatches.map((listOfMatches) => listOfMatches.split(" "));

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

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)

  return
}

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
