const words = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

const longWords = words.filter(word => {
  return word.length > 5;
});

console.log(longWords);
