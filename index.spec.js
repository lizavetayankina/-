const { quickSort, binarySearch, toFlat, HashTable } = require('./index');

const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
}

const getArray = (length, getElement) => {
  const result = []
  for (let i = 0; i < length; i++) {
    result.push(getElement(i))
  }
  return result
};

describe('Base algorithms', () => {
  describe('QuickSort', () => {
    it('Should sort correctly', () => {
      const notSortedArray = getArray(
        5,
        () => ({
          order: Math.round(getRandomArbitrary(0, 99)),
          name: 'Alex',
        }))
      const expectedResult = [...notSortedArray]
      expectedResult.sort((a, b) => a.order - b.order)
      const result = quickSort(notSortedArray, (a, b) => a.order - b.order)
      expect(notSortedArray !== result).toBeTruthy()
      expect(result).toEqual(expectedResult)
    })
  })
  describe('BinarySearch', () => {
    it('Should find item', () => {
      const array = getArray(1000, i => ({
        amount: i,
        name: i % 2 ? 'John' : 'Smith',
      }))
      const searchValue = 764
      const result = binarySearch(array, searchValue)
      expect(result).toEqual(array.find(({ amount }) => amount === searchValue))
    })
  })
  /*describe('toFlat', () => {
    it('Should convert nested array to flat', () => {
      const originalArray = [[[[5, 4], 2], 1], 3]
      expect(toFlat(originalArray)).toEqual([5, 4, 2, 1, 3])
    })
  })*/
  describe('HashTable', () => {
    let workersTable

    beforeEach(() => {
      workersTable = new HashTable()
    })

    it('property map should be instance of Map', () => {
      expect(workersTable.map instanceof Map).toBeTruthy()
    })

    it('Should convert first letter to key and add to map', () => {
      const key1 = workersTable.add({ name: 'Alex', age: 25 })
      workersTable.add({ name: 'Alex2', age: 23 })
      const key2 = workersTable.add({ name: 'John', age: 23 })
      workersTable.add({ name: 'John2', age: 25 })

      expect(key1).toEqual('A'.charCodeAt(0))
      expect(key2).toEqual('J'.charCodeAt(0))
    })
    it('Should find value', () => {
      workersTable.add({ name: 'Alex', age: 25 })
      workersTable.add({ name: 'Dan', age: 29 })
      expect(workersTable.find('Alex')).toEqual( { name: 'Alex', age: 25 })
      expect(workersTable.find('Dan')).toEqual( { name: 'Dan', age: 29 })
    })
  })
})
