const charLower = (char) => char.toLowerCase();

const wordLower = (word) => {
  return word.split('').map(charLower).join('');
};
const arrayLower = (arr) => {
  return arr.map(wordLower);
};
const inputArr = ["MA", "SA", "I", "SCH", "OOL"];
const outputArr = arrayLower(inputArr);
console.log(outputArr);  // Output: ["ma", "sa", "i", "sch", "ool"]