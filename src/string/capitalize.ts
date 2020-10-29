export function capitalize(word: string) {
  if (word) {
    return word.charAt(0).toUpperCase() + word.substr(1);
  }
  return word;
}
