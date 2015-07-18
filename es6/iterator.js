var = ForeverIterator = {
  curr:0,
  elems: [1,2,3,4],
  [Symbol.iterator]: function () {
    return this;
  },
  next: function () {
    return {done: this.curr == this.elems.length, value: this.elems[this.curr++]};
  }
};
for(value of zeroesForeverIterator) { console.log(value)}

