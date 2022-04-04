let alphabets = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];

// undup = Array.from(new Set(alphabets))

alphabets.reduce((result, element) => {
  if (result.findIndex((alphabet) => alphabet === element) < 0) result.push(element);
  // else result[result.findIndex(alphabet => alphabet === element)] = element
  return result;
}, []);
