import run from "aocrunner"

const parseInput = (rawInput: string) => {
  const arrayOfStrings = rawInput.split('\n')
  return arrayOfStrings 
}

const digits: { [key: string]: string; } = {
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

  for (let line = 0; line < input.length; line++) {

    const newLine = input[line];

    for (let stringPosition = 0; stringPosition < newLine.length; stringPosition++){
      const endOfIndex = newLine.length
      let stringStart = newLine.slice(0, stringPosition)
      let stringEnd = newLine.slice(endOfIndex - stringPosition, endOfIndex)

      let endLetter
      let startLetter
      let totalLetter = ''

      for(let [key, value] of Object.entries(digits)) {

        if(startLetter && endLetter) {
          totalLetter = startLetter + endLetter
          break
        }

        if(stringStart.includes(key) ||  stringStart.includes(value)){
          // console.log('String Start includes KeyValue', key, value, stringStart)
          startLetter = value
        }
        if(stringEnd.includes(key) || stringEnd.includes(value)){
          // console.log('String end includes Key/Value', key, value, stringEnd)
          endLetter = value
        }
      }
      console.log(totalLetter)
      return codes.push(parseInt(totalLetter))
    }
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
