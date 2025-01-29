function getFirstLettersUpperCase(inputString: string): string {
  if (!inputString) return '';
  const words = inputString.split(' ');

  const firstLetters = words.map(word => {
    const capitalized = word.charAt(0).toUpperCase(); // Capitalize first letter of each word
    return capitalized; // Return only the first character
  });

  return firstLetters.join('').slice(0, 2); // Take only the first two characters
}

export default getFirstLettersUpperCase;

export const capitalizeFirstLetter = (str: string | undefined | null) => {
  if (!str) {
    return '';
  } // Return empty string if input is undefined, null, or an empty string
  return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
};
