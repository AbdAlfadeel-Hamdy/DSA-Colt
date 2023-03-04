class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
  _hash = (key) => {
    let total = 0;
    const PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.keyMap.length;
    }
    return total;
  };
  set(key, value) {
    const index = this._hash(key);
    if (!this.keyMap[index]) this.keyMap[index] = [];
    this.keyMap[index].push([key, value]);
    return index;
  }
  get(key) {
    const index = this._hash(key);
    if (this.keyMap[index])
      for (const [keyHash, value] of this.keyMap[index])
        if (keyHash === key) return value;
    return undefined;
  }
  keys() {
    const keys = [];
    for (const pair of this.keyMap) {
      if (!pair) continue;
      for (const [key] of pair) keys.push(key);
    }
    return keys;
  }
  values() {
    const values = [];
    for (const pair of this.keyMap) {
      if (!pair) continue;
      for (const [, val] of pair) {
        if (!values.includes(val)) values.push(val);
      }
    }
    return values;
  }
}

const ht = new HashTable();
ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#808000");
ht.set("salmon", "#FA8072");
ht.set("lightcoral", "#F08080");
ht.set("mediumvioletred", "#C71585");
ht.set("plum", "#DDA0DD");
console.log(ht);
