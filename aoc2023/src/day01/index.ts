import run from "aocrunner"

const parseInput = (rawInput: string) => {
  const arrayOfStrings = rawInput.split('\n')
  return arrayOfStrings 
}

const fetchNumber = (line: string, reverse: boolean = false) => {
  let number = 0

  // lets figure out the total from reach line as a number.
  for (let stringPosition = 0; stringPosition < line.length; stringPosition++) {

    let individualCharacter = reverse ? line[line.length - 1 - stringPosition]: line[stringPosition + 1];

    // early exit
    // If the value is a number, add it and no need to run through switch.
    // we need a better check for number. 
    const isNumber = parseInt(individualCharacter)

    if(!isNaN(isNumber)){
      number = isNumber
      return number
    } else {
      const stringSegment = reverse ? line.slice((line.length - 1 - stringPosition)) : line.slice(0, stringPosition + 1)
      console.log('string segment:', stringSegment, 'Reverse:', reverse)

      // this can be improved
      if(stringSegment.includes('one')) {
        number = 1
        return number
      } else if((stringSegment.includes('two'))) {
        number = 2
        return number
      }  else if((stringSegment.includes('three'))) {
        number = 3
        return number
      }  else if((stringSegment.includes('four'))) {
        number = 4
        return number
      }  else if((stringSegment.includes('five'))) {
        number = 5
        return number
      }  else if((stringSegment.includes('six'))) {
        number = 6
        return number
      }  else if((stringSegment.includes('seven'))) {
        number = 7
        return number
      }  else if((stringSegment.includes('eight'))) {
        number = 8
        return number
      }  else if((stringSegment.includes('nine'))) {
        number = 9
        return number
      }
    }
  }
  return number
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
  let listOfTotals: number[] = []

  for (let line = 0; line < input.length; line++) {

    const newLine = input[line];
    let lineTotal

    const getLastNumber = true

    const firstNumber = fetchNumber(newLine)
    const lastNumber = fetchNumber(newLine, getLastNumber)

    console.log('Line:', newLine, 'First Number:',  firstNumber)
    console.log('Line:', newLine, 'Last Number:',  lastNumber)

    // last number

    lineTotal = firstNumber + lastNumber

    // add together again 
    listOfTotals.push(lineTotal)
  }

  // Expecting [23, 45, 54, etc.]
  const finalTotal = listOfTotals.reduce((acc, numbers) => {
    return acc + numbers
  }, 0);

  return finalTotal
}
// part 1 correct
// 52974

// part 2
// attempt 1: 52630 - too low
// attempt 2: 52638 - too low
// atempt 3: 9304 -- too low

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
