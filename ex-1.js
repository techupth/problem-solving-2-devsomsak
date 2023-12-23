const romanToInt = function (stringRomans) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;
  let prevNumber = 0;

  for (let i = 0; i < stringRomans.length; i++) {
    const currentNumber = romanNumerals[stringRomans[i]];

    if (prevNumber === 0) {
      total = currentNumber;
    } else if (currentNumber > prevNumber) {
      total = total + currentNumber - (2 * prevNumber);
    } else {
      total = total + currentNumber;
    }
      prevNumber = currentNumber;
  }
  return total;
};
const romanNumber = "IV";
console.log(romanToInt(romanNumber)); // Output: 6
