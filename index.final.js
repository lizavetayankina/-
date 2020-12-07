const quickSort = (array, sorter) => {
  const result = [...array]
  sort(result, 0, array.length - 1, sorter)
  return result
}

const sort = (array, start, end, sorter) => {
  const middle = array[Math.round((start + end) / 2)]
  let localStart = start
  let localEnd = end
  while (localStart <= localEnd) {
    while (sorter(middle, array[localStart]) > 0) {
      localStart += 1
    }
    while (sorter(middle, array[localEnd]) < 0) {
      localEnd -= 1
    }
    if (localStart <= localEnd) {
      const temp = array[localStart]
      array[localStart] = array[localEnd]
      array[localEnd] = temp
      localStart += 1
      localEnd -= 1
    }
  }

  if (start < localEnd) {
    sort(array, start, localEnd, sorter)
  }

  if (end > localStart) {
    sort(array, localStart, end, sorter)
  }
}

const toFlat = array => {
 // return array
}

const binarySearch = (array, searchValue) => {
  let rigth = 0;
  let left = array.length;
  while (rigth-left > 0) {
    const midleEl = Math.round((rigth+left)/2);
    if (array[midleEl] === searchValue) {
    return midleEl;
    }
    if (array[midleEl] > searchValue) {
    rigth = midleEl;
    } else {
    left = midleEl;
    }
  }
  return 0
}

class HashTable {
  getHashByName (name = '') {
    return name.charCodeAt(0)
  }
  constructor () {
    this.map = new Map()
  }
  add (value) {
    const key = this.getHashByName(value.name)
    if (!this.map.has(key)) {
      this.map.set(key, [value])
    } else {
      this.map.get(key).push(value)
    }
    return key
  }
  find (name) {
    const key = this.getHashByName(name)
    const values = this.map.get(key)
    if (!values) {
      return
    }
    return values.find((item) => item.name)
  }
}


module.exports = {
  quickSort,
  toFlat,
  binarySearch,
  HashTable,
}
