const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callbackFn) {
      const iteratedCollection = (collection instanceof Array) ? collection : Object.values(collection)
      for (let i = 0; i < iteratedCollection.length; i++) {
        callbackFn(iteratedCollection[i])
      }
      return collection;
    },

    map: function(collection, callbackFn) {
      const originalCollection = (collection instanceof Array) ? collection : Object.values(collection)
      const newCollection = [];
      for (let i = 0; i < originalCollection.length; i++) {
        newCollection.push(callbackFn(originalCollection[i]));
      }
      return newCollection;
    },

    reduce: function(sourceArray = [], callbackFn = () => {}, startingValue) {
      if (!startingValue) {
        startingValue = sourceArray[0];
        sourceArray = sourceArray.slice(1);
      }

      for (let i = 0; i < sourceArray.length; i++) {
        startingValue = callbackFn(startingValue, sourceArray[i], sourceArray);
      }

      return startingValue;
    },

    find: function(sourceArray, searchQuery) {
      for (let i =0; i < sourceArray.length; i++) {
        if (searchQuery(sourceArray[i])) {
          return sourceArray[i];
        }
      }
    },

    filter: function(sourceArray, filterQuery) {
      let newArray = [];
      for (let i = 0; i < sourceArray.length; i++) {
        if (filterQuery(sourceArray[i])) {
          newArray.push(sourceArray[i]);
        }
      }
      return newArray;
    },

    size: function(sourceCollection) {
      if (sourceCollection instanceof Array) {
        return sourceCollection.length;
      } else {
        return Object.keys(sourceCollection).length;
      }
    },

    first: function(sourceCollection, nElements) {
      return nElements ? sourceCollection.slice(0, nElements) : sourceCollection[0];
    },

    last: function(sourceCollecton, nElements) {
      return nElements ? sourceCollecton.slice(sourceCollecton.length - nElements) : sourceCollecton[sourceCollecton.length - 1];
    },

    compact: function(sourceArray) {
      let newArray = []
      const filteredValues = new Set([false, null, 0, '', undefined, NaN]);
      for (let i = 0; i < sourceArray.length; i++) {
        if(filteredValues.has(sourceArray[i]) === false) {
          newArray.push(sourceArray[i]);
        }
      }
      return newArray;
    },

    sortBy: function(sourceArray, callbackFn) {
      let newArray = [...sourceArray];
      return newArray.sort((a,b) => callbackFn(a) - callbackFn(b));
    },

    flatten: function(sourceArray, flattenOnceBoolean, flattenedArray = []) {
      
      // Appends element to flattened array if it is not an array itself; breaks recursion
      if(!Array.isArray(sourceArray)) {
        return flattenedArray.push(sourceArray);
      }

      if(flattenOnceBoolean) {
        for(let i = 0; i < sourceArray.length; i++) {
          if(Array.isArray(sourceArray[i])) {
            for(let j = 0; j < sourceArray[i].length; j++) {
              flattenedArray.push(sourceArray[i][j]);
            }
          } else {
            flattenedArray.push(sourceArray[i]);
          }
        }
      } else {
        for(let i = 0; i < sourceArray.length; i++) {
          this.flatten(sourceArray[i], false, flattenedArray);
        }
      }
      
      console.log(flattenedArray);
      return flattenedArray;
    },

    uniq: function(sourceArray, isSorted = false, callbackFn = false) {
      let arrayOfUniqueValues = [sourceArray[0]]

      if(isSorted) {
        for(let i = 1; i < sourceArray.length; i++) {
          if(arrayOfUniqueValues[i - 1] !== sourceArray[i]) {
            arrayOfUniqueValues.push(sourceArray[i])
          }
        }
      } else if (!callbackFn) {
        arrayOfUniqueValues = Array.from(new Set(sourceArray))
      } else {
        let transformedValues = new Set()
        let uniqueValues = new Set()

        for(let i = 0; i < sourceArray.length; i++) {
          if(!transformedValues.has(callbackFn(sourceArray[i]))) {
            transformedValues.add(callbackFn(sourceArray[i]))
            uniqueValues.add(sourceArray[i])
          }
        }
        arrayOfUniqueValues = Array.from(uniqueValues)
      }

      return arrayOfUniqueValues;
    },

    keys: function(sourceObject) {
      let keysFromObject = []
      for(let objectKey in sourceObject) {
        keysFromObject.push(objectKey);
      }
      return keysFromObject;
    },

    values: function(sourceObject) {
      let valuesFromObject = []
      for(let objectKey in sourceObject) {
        valuesFromObject.push(sourceObject[objectKey]);
      }
      return valuesFromObject;
    },

    functions: function(sourceObject) {
      let objectFunctions = []
      for(let objectKey in sourceObject) {
        if(typeof sourceObject[objectKey] === 'function') {
          objectFunctions.push(objectKey);
        }
      }
      console.log(objectFunctions);
      return objectFunctions;
    }


  }
})()

fi.libraryMethod()
