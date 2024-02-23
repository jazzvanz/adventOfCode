import run from "aocrunner"

const parseInput = (rawInput: string) => {
  const arrayOfStrings = rawInput.split('\n')
  return arrayOfStrings 
}

const digits: {} = {
  'one': '1',
  'two': '2',
  'three': '3',
  'four': '4',
  'five': '5',
  'six': '6',
  'seven': '7',
  'eight': '8',
  'nine': '9'
}

// const reverseString = (str : string) => {
//   return str.split("").reverse().join("");
// }

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)
  let codes: number[] = []

  for (let line = 0; line < input.length; line++){
    const instruction: string[] = input[line].split("");

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
  let codes: number[] = []

  for (let line = 0; line < input.length; line++){

    let newLine = input[line]

    for (let [key, value] of Object.entries(digits)) {
      newLine = newLine.replaceAll(key, `${value}`)
    }

    const instruction: string[] = newLine.split("");
    // console.log(instruction, 'instruction')

    const numbers = instruction.filter(character => /\d/.test(character));

    console.log(numbers, 'instruction')

    const firstNumber = numbers[0]
    const lastNumber = numbers.slice(-1)
    const total = firstNumber + lastNumber

    codes.push(parseInt(total))
  }

  const totalCalibrationValues = codes.reduce((acc, code) => {
    return acc + code
  }, 0)
  
  return totalCalibrationValues
}

// attempt 1: 52630 - too low
// attempt 2: 52638 - too low

// Part 1 = O(n)
// Part 2 = O(n + 1)

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
