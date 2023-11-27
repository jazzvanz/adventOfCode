import run from "aocrunner"

const parseInput = (rawInput: string) => rawInput

const gameLegend = {
  a: 'rock',
  b: 'paper',
  c: 'scissors',
  x: 'rock',
  y: 'paper',
  z: 'scissors'
}

// if you pick
const pointsLegend = {
  rock: 1,
  paper: 2,
  scissors: 3,
  loss: 0,
  draw: 3,
  win: 6
}

// Frist Draft Plan? 
// add to parse function - breaking up each line

// Do i want to work with an array or object? 


// I feel like a swtich/break statement could be good idea.
const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)
  const listOfMatches: string[] = input.split("\n")
  const arrayOfMatches: string[][] = listOfMatches.map((listOfMatches) => listOfMatches.split(" "));

  console.log(arrayOfMatches, 'results?')
  let totalPoints;
  

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
