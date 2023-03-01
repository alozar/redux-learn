function* generatorFunction() {
  for (let i = 0; i < 5; i++)
  {
    yield i;
  }
}

const iterator = generatorFunction();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());