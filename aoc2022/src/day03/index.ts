import run from "aocrunner"

type legendType = {
  [key:string]:number
}

const parseInput = (rawInput: string): string[][] => {
  const listOfBackpacks = rawInput.split("\n")

  const listOfBrokenupBackpacks = listOfBackpacks.map((backpack) => {
    const backpackItemAmounts = backpack.length / 2;
    const firstComparment = backpack.slice(0, backpackItemAmounts);
    const secondComparment = backpack.slice(backpackItemAmounts);
    const backpackCompartments = [firstComparment, secondComparment]
    return backpackCompartments
  });
  return listOfBrokenupBackpacks;
}

function createLegend() {
  // Create a single Alphabet
  const startCharCode = 'A'.charCodeAt(0);
  const endCharCode = 'Z'.charCodeAt(0);
  
  let alphabet = '';
  for(let i = startCharCode; i <= endCharCode; i++) {
    alphabet += String.fromCharCode(i)
  }

  // Clone a lowercase verison and add them together
  const lowerCaseAlphabet = alphabet.toLowerCase();
  const bothAlphabets: Array<string> = [...lowerCaseAlphabet, ...alphabet];

  // Assign numbers in key:value
  let number = 0
  const legend = bothAlphabets.reduce((accumulator: legendType, currentLetter) => {
    number = number + 1;
    return (accumulator[currentLetter]=number, accumulator)
  },{})

  return legend
}

function findSame(str1: string, str2: string, str3?: string) {
  const set1 = new Set(str1);
  const commonCharacters = Array.from(set1).filter(char => str2.includes(char)).join('');
  return commonCharacters;
}

// Assign by Troop
function groupElvesByTroop(allBackpacks: string[]) {
  const troopSize = 3
  let troops
  for (let i = 0; i < allBackpacks.length; i += troopSize) {
    troops = allBackpacks.slice(i, i + troopSize)
  }
  return troops
}

const part1 = (rawInput: string) => {
  const formattedBackpack = parseInput(rawInput)
  const legend = createLegend();

  // loop over array of arrays of strings return array of just matching strings
  const sameLetters = formattedBackpack.map((backPack) => {
    return findSame(backPack[0], backPack[1])
  })

  // Loop over the array of same letters and map that to the keys, add the values together. Reduce forsure.
  const backpackValue = sameLetters.reduce((acc, current) => {
    return acc + legend[current]
  }, 0)

  return backpackValue
}

// Elves are divided into groups of 3 - check / not a check, its only running for so many
// They all should have one matching item in common, in at least one of the compartments in their rucksucks
// They are tranlated as much
// Add them all up.
// Dont need the compartment - check

const part2 = (rawInput: string) => {
  const listOfBackpacks = rawInput.split("\n");
  const elfsByTroop = groupElvesByTroop(listOfBackpacks);

  // Find the matching item in each troop
  const sameLetters = elfsByTroop?.map((troop) => {
    return findSame(troop[0], troop[2], troop[3])
  })

  console.log(sameLetters, 'what same letters do we get from troop 1 and two')


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
