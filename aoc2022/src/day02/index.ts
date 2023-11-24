import run from "aocrunner"

const parseInput = (rawInput: string) => rawInput

 // A for Rock, 
 // B for Paper, and 
 // C for Scissors - First column
 // X for Rock, 
 // Y for Paper, 
 // and Z for Scissors - 2nd coloumn (you are the second column)

//  Two ways you score
// By Shape you choose 
// 1 for Rock
// 2 for Paper
// 3 for Scissors

// By outcome of the match
// 0 if you lost,
//  3 if the round was a draw, 
// and 6 if you won).

// Frist Draft Plan? 
// add to parse function - breaking up each line

// Do i want to work with an array or object? 


// I feel like a swtich/break statement could be good idea.
const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)
  const listOfMatches: string[] = input.split("\n")

  console.log(listOfMatches, 'results?')

  return
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
