const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let newCollection = (collection instanceof Array) ? collection : Object.values(collection);
      newCollection.forEach((item, index, collection) => callback(item, index, collection));
      return collection;
    },

    map: function(collection, callback) {
      let newCollection = (collection instanceof Array) ? collection : Object.values(collection);
      return newCollection.map((item, index, collection) => callback(item, index, collection));
    },

    reduce: function(collection, callback, acc) {
      acc = acc || -2;
      return collection.reduce((accumulator, val, collection) => callback(accumulator, val, collection), acc);
    },

    find: function(collection, predicate) {
      return collection.find(predicate);
    },

    filter: function(collection, predicate) {
      return collection.filter(item => predicate(item));
    },

    size: function(collection) {
      return Object.keys(collection).length;
    },

    first: function(array, n=1) {
      return array.slice(0, n);
    },

    last: function(array, n=1) {
      return array.slice(-n);
    },

    compact: function(array) {
      return array.filter(Boolean);
    },

    sortBy: function(array, callback) {
      return [...array].sort((a, b) => callback(a) - callback(b))
    },

    flatten: function(array, shallow = false) {
      const depth = shallow ? 1 : Infinity;
      return array.flat(depth)
    },

    uniq: function(array, isSorted = false, callback = null) {
      if (!callback && isSorted) {
        return array.filter((item, index, array) => item !== array[index - 1]);
      } else if (!callback && !isSorted) {
        return array.filter((item, index) => {
          return array.indexOf(item) === index;
        });
      } else {
        let manipulatedArray = [];
        let trackingArray = [];
        for (let element of array) {
          let value = callback(element);
          if (!manipulatedArray.includes(value)) {
            manipulatedArray.push(value);
            trackingArray.push(element);
          }
        }
        return trackingArray;
      }
    },

    keys: function(object) {
      return Object.keys(object);
    },

    values: function(object) {
      return Object.values(object);
    },

    functions: function(object) {
      return Object.getOwnPropertyNames(object).filter(item => typeof object[item] === "function").sort()
    },

  }
})()

fi.libraryMethod()
