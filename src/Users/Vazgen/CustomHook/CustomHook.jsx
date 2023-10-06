export default function useRandom(count, type, font) {
  const generateNumber = () => Math.random();
  const generateString = (uppercase) => {
    const randomString = Math.random().toString(36).substring(2);
    return uppercase ? randomString.toUpperCase() : randomString.toLowerCase();
  };

  const generateRandomElement = () => {
    if (type === 2) {
      return generateNumber();
    } else if (type === 3) {
      return generateString(font === "uppercase");
    } else {
      throw new Error("Invalid type parameter.");
    }
  };

  const randomElements = [];
  for (let i = 0; i < count; i++) {
    randomElements.push(generateRandomElement());
  }

  return randomElements;
}
