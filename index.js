const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let newCollection = (collection instanceof Array) ? collection : Object.values(collection)
      for (let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i])
      }
      return collection
    },

    map: function(collection, callback) {
      let newCollection = [];
      let newerCollection = (collection instanceof Array) ? collection : Object.values(collection)
      for (let i = 0; i < newerCollection.length; i++) {
        newCollection.push(callback(newerCollection[i]))
      }
      return newCollection
    },

    reduce: function(collection, callback, acc) {
      let newCollection = collection;
      if (!acc) {
        acc = collection[0];
        newCollection = collection.slice(1);
      }for (let i = 0; i < newCollection.length; i++) {
        acc = callback(acc, newCollection[i], newCollection)
      }
      return acc
    },

    find: function(collection, predicate){
      let value;
      for (let i = 0; i < collection.length; i++){
        if(predicate(collection[i])){
          value = collection[i]
          break
        } else {
          value = undefined
        }
      }
      return value
    },

    filter: function(collection, predicate){
      let values = [];
      for (let i = 0; i < collection.length; i++){
        if(predicate(collection[i])){
          values.push(collection[i])
        } 
      }
      return values
    },

    size: function(collection){
      let newCollection = (collection instanceof Array) ? collection : Object.values(collection)
      return newCollection.length
    },

    first: function(array, n){
      let newArray = (n > 1) ? array.slice(0, n) : array[0];
      return newArray;
    },

    last: function(array, n){
      let newArray = (n > 1) ? array.slice(-n) : array[array.length - 1];
      return newArray;
    },

    compact: function(array){
      let newArray = [];
      for (let i = 0; i < array.length; i++){
        if(!!array[i] === true){
          newArray.push(array[i])
        }
      }
      return newArray
    },

    sortBy: function(array, callback){
      let newArray = [...array]
      newArray.sort((a, b) => callback(a) - callback(b))
      return newArray
    },

    flatten: function(array, shallow = false){
      let newArray = [];
      for (let i=0; i < array.length; i++){
        let val;
        if (typeof array[i] !== "number" && !shallow){
          val = this.flatten(array[i])
        } else {
          val = array[i]
        }
        newArray = newArray.concat(val);
      }
      return newArray;
    },

    uniq: function(array, sorted = false, callback = false){  
      if (sorted) {
        let newArray = [array[0]]
        for (let i = 1; i < array.length; i++) {
          if (newArray[i - 1] !== array[i]) {
            newArray.push(array[i])
          }
        }
        return newArray
      }
      else if (!callback){
        return Array.from(new Set(array))
      } 
      
      else {
        let modArray = []
        let newArray = []
        for (let elem of array) {
          let elemVal = callback(elem)
          if (!modArray.includes(elemVal) )
          { 
            modArray.push(elemVal)
            newArray.push(elem)
          }
        }
        return newArray
      }
    },

    keys: function(object){
      const keys = [];
      for (const key in object){keys.push(key)};
      return keys;
    },

    values: function(object){
      const values = [];
      for (const key in object){values.push(object[key])};
      return values;
    },

    functions: function(object) {
      let array = [];
      for(const key in object) {
        if(typeof object[key] === "function"){
          array.push(key)
        }
      }
      return array.sort()
    },

  }
})()

fi.libraryMethod()
