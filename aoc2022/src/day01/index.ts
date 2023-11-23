import run from "aocrunner"

const parseInput = (rawInput: string) => rawInput

const part1 = (rawInput: string): number => {
  const input = parseInput(rawInput)

  // We convert the large string into an array of strings.
  // Each string is a list of what is in each Elfs backpack
  const listOfBackpacks: string[] = rawInput.split("\n\n")

  // Then we take each of those strings in the array and convert them to their own arrays. 
  // These Arrays (representing a Elf backpack) as a list of strings, being each snacks calorie count.
  const listOfSnacks: string[][] = listOfBackpacks.map((listOfBackpacks) => listOfBackpacks.split("\n"));

  // We are now maping over each backpack in the array
  // In each backpack we are reducing the calories to the total in the backpack (while also converting them to numbers)
  const totalBackpackCals = listOfSnacks.map((eachBackPack) => {
    return eachBackPack.reduce(
      (totalCals, currentCals) => {
        const nowANumber = Number(currentCals)
        return totalCals + nowANumber
      }, 0,
    );
  });
  
  // We then return the highest number in the array
  const hightCalCount =  Math.max(...totalBackpackCals)

  // Tests 
  // Typescript
  return hightCalCount
}

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)

  // Find the top three Elves carrying the most Calories. How many Calories are those Elves carrying in total?
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
