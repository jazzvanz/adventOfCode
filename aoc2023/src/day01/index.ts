import run from "aocrunner"

const parseInput = (rawInput: string) => {

  // order does not matter here, could we return an object?
  const arrayOfStrings = rawInput.split('\n')
  return arrayOfStrings 
}

// const reverseString = (str : string) => {
//   return str.split("").reverse().join("");
// }

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)
  let codes: number[] = []



  // swtiching for something that returns the array 
  for (let line = 0; line < input.length; line++){
    const instruction: string[] = input[line].split("");

    // serach for numbers.
    const numbers = instruction.filter(character => /\d/.test(character));
    const firstNumber = numbers[0]
    const lastNumber = numbers[numbers.length - 1]
    const total = firstNumber + lastNumber

    codes.push(parseInt(total))
  }

  const totalCalibrationValues = codes.reduce((acc, code) => {
    return acc + code
  }, 0)
  
  return totalCalibrationValues
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
