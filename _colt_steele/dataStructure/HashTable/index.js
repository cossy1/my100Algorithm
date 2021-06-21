class HashTable {
  constructor(size = 23) {
    this._keymap = new Array(size);
  }
  _hash(key) {
     let total = 0;
     let WEIRD_PRIME = 31;
     for (let i = 0; i < Math.min(key.length, 100); i++){
       let char= key[i]
       let value = char.charCodeAt(0) + 96;
       total = (total * WEIRD_PRIME + value) % this._keymap.length
     }
     return total
  }
}
