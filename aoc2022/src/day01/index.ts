import run from "aocrunner"

const parseInput = (rawInput: string) => rawInput
const countCalories = (parsedInput: string): number[] => {
  // We convert the large string into an array of strings.
  // Each string is a list of what is in each Elfs backpack
  const listOfBackpacks: string[] = parsedInput.split("\n\n")

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

  return totalBackpackCals;
}

const part1 = (rawInput: string): number => {
  const input = parseInput(rawInput)

  const totalBackpackCals = countCalories(input)
  
  // We then return the highest number in the array
  const hightCalCount =  Math.max(...totalBackpackCals)

  return hightCalCount
}

const part2 = (rawInput: string): number => {
  const input = parseInput(rawInput)

  const totalBackpackCals = countCalories(input)

  // sort ascending and return the last 3 results
  const topThreeCalorieCount = totalBackpackCals.sort().slice(-3);

  // add those calories together
  const totalTopCalories = topThreeCalorieCount.reduce(
    (totalCals, currentCals) => {
      return totalCals + currentCals
    }, 0,
  );

  return totalTopCalories;
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
