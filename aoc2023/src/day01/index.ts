import run from "aocrunner"

const parseInput = (rawInput: string) => {
  const arrayOfStrings = rawInput.split('\n')
  return arrayOfStrings 
}

const fetchNumber = (line: string, reverse: boolean = false) => {
  let number = 0

  for (let stringPosition = 0; stringPosition < line.length; stringPosition++) {
    const stringSegment = reverse ? line.slice((line.length - 1 - stringPosition)) : line.slice(0, stringPosition + 1)

    // this can be improved
    if(stringSegment.includes('one') || stringSegment.includes('1')) {
      number = 1
      return number
    } else if((stringSegment.includes('two')) || stringSegment.includes('2')) {
      number = 2
      return number
    }  else if((stringSegment.includes('three')) || stringSegment.includes('3')) {
      number = 3
      return number
    }  else if((stringSegment.includes('four'))|| stringSegment.includes('4')) {
      number = 4
      return number
    }  else if((stringSegment.includes('five')) || stringSegment.includes('5')) {
      number = 5
      return number
    }  else if((stringSegment.includes('six')) || stringSegment.includes('6')) {
      number = 6
      return number
    }  else if((stringSegment.includes('seven')) || stringSegment.includes('7')) {
      number = 7
      return number
    }  else if((stringSegment.includes('eight')) || stringSegment.includes('8')) {
      number = 8
      return number
    }  else if((stringSegment.includes('nine')) || stringSegment.includes('9')) {
      number = 9
      return number
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

    lineTotal = `${firstNumber}${lastNumber}`
    listOfTotals.push(parseInt(lineTotal))
  }

  const finalTotal = listOfTotals.reduce((acc, numbers) => {
    return acc + numbers
  }, 0);

  return finalTotal
}


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
