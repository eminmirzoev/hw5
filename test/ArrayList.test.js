const { assert } = require("chai");
let ArrayList = require("../src/ArrayList");

describe('ArrayList', () => {
     it('should return an object', () => {
          const list = new ArrayList();

         //Then
          assert.isObject(list);
         })
     });

describe('ArrayList.clear()', () => {
     it('should return size = 0 (undefined)', () => {
          const list = new ArrayList();
          const expectedSize = 0;
          const expectedString = '[]';

          list.clear();
        
          //Then
          assert.deepEqual(list.getSize(), expectedSize);
          assert.deepEqual(list.toString(), expectedString);
         })

      it('should return size = []', () => {
          const list = new ArrayList();
          const expectedSize = 0;
          const expectedString = '[]';

          list.clear();
        
          //Then
          assert.deepEqual(list.getSize(), expectedSize);
          assert.deepEqual(list.toString(), expectedString);
         })

      it('should expected [1]', () => {
          const list = new ArrayList();
          const value = [1];
          const expectedString = '[]';
          const expectedSize = 1;
          
          //When
          const actual = list.toString();

          list.init(value);

         //Then
          assert.deepEqual(list.getSize(), expectedSize);
          assert.deepEqual(actual, expectedString);
         })

      it('should expected = 2', () => {
          const list = new ArrayList();
          const value = [1, 2];
          const expectedSize = 2;
          const expectedString = '[]';

          //When
          const actual = list.toString();

          list.init(value);
          //Then
          assert.deepEqual(list.getSize(), expectedSize);
          assert.deepEqual(actual, expectedString);
         })
     });

describe('ArrayList.init()', () => {
     it('should return size = 0 (undefined)', () => {
          const list = new ArrayList();
          const expectedSize = 0;
          const expectedString = '[]';

          list.clear();
        
          //Then
          assert.deepEqual(list.getSize(), expectedSize);
          assert.deepEqual(list.toString(), expectedString);
         })

     it('should return size = []', () => {
          const list = new ArrayList();
          const expectedSize = 0;
          const expectedString = '[]';

          list.clear();

         //Then
          assert.deepEqual(list.getSize(), expectedSize);
          assert.deepEqual(list.toString(), expectedString);
         })

      it('should expected [1]', () => {
          const list = new ArrayList();
          const value = [1];
          const expectedString = '[]';
          const expectedSize = 1;

          //When
          const actual = list.toString();

          list.init(value);

         //Then
          assert.deepEqual(list.getSize(), expectedSize);
          assert.deepEqual(actual, expectedString);
         })

      it('should expected =[1, 2]', () => {
          const list = new ArrayList();
          const value = [1, 2];
          const expectedSize = 2;
          const expectedString = '[]';

          //When
          const actual = list.toString();

          list.init(value);

          //Then
          assert.deepEqual(list.getSize(), expectedSize);
          assert.deepEqual(actual, expectedString);
         })

      it('should expected =[1, 2, 3, 4]', () => {
          const list = new ArrayList();
          const value = [1, 2, 3, 4];
          const expectedSize = 4;
          const expectedString = '[]';

          //When
          const actual = list.toString();

          list.init(value);

          //Then
          assert.deepEqual(list.getSize(), expectedSize);
          assert.deepEqual(actual, expectedString);
         })
     });


describe('ArrayList.push()', () => {
     it('should returns new size of ArrayList', () => {
          const list = new ArrayList();
          const expectedSize = 0;
          const expectedString = '[]';

          list.push();
          
          //Then
          assert.deepEqual(list.getSize(), expectedSize);
          assert.deepEqual(list.toString(), expectedString);
      })

      it('should returns null', () => {
          const list = new ArrayList();
          const value = null;
          const expectedSize = list.getSize();
          const expectedString = list.toString();

          list.push(value);

          //Then
          assert.deepEqual(list.getSize(), expectedSize);
          assert.deepEqual(list.getString(), expectedString);
      })

      it('should expected Array size = 1', () => {
          const list = new ArrayList();
          const value = [1];
          const expectedString = '[1]';
          const expectedSize = value.length;

          list.push(value);
          
          //Then
          assert.deepEqual(list.getSize(), expectedSize);
          assert.deepEqual(list.toString(), expectedString);
      })

      it('should expected Array size = 2', () => {
          const list = new ArrayList();
          const value = [1, 2];
          const expectedSize = value.length;
          const expectedString = '[1, 2]';

          list.push(value);

          //Then
          assert.deepEqual(list.getSize(), expectedSize);
          assert.deepEqual(list.toString(), expectedString);
      })
     });

describe('ArrayList.pop()', () => {
     it('delete last element of Array and return it', () => {
          const list = new ArrayList();
          const value = [1, 2, 3];
          const last = value.length - 1;
          const expected = last;

          //When
          const actual = list.pop(value);
          
          //Then
          assert.deepEqual(actual, expected);
      })
     });

describe('ArrayList.unshift()', () => {
     it('should returns new size of ArrayList', () => {
          const list = new ArrayList();
          const value = 1;
          const expectedSize = list.getSize();

          list.unshift(value);

          //Then
          assert.deepEqual(list.getSize(), expectedSize);

      })

      it('should returns null', () => {
          const list = new ArrayList();
          const value = null;
          const expectedSize = list.getSize();
          const expectedString = list.toString();

          list.unshift(value);

          //Then
          assert.deepEqual(list.getSize(), expectedSize);
          assert.deepEqual(list.toString(), expectedString);
      })

     });

describe('ArrayList.shift()', () => {
     it('should returns the first element of ArrayList', () => {
          const list = new ArrayList();
          const value = [1, 2, 3];
          const first = value[0];
          const expected = first;

          //When
          const actual = list.shift(value);
          
          //Then
          assert.deepEqual(actual, expected);
      })
     }); 

describe('ArrayList.slice()', () => {
     it('should returns copy 2 elements of ArrayList', () => {
          const list = new ArrayList();
          const value = [1, 2, 3, 4, 5];
          const expectedSlice = [1, 2];

          //When
          const actual = list.getSlice(value);

          //Then
          assert.deepEqual(actual, expectedSlice);
      })
     });

describe('ArrayList.splice()', () => {
     it('should returns deleted elements of ArrayList', () => {
          const list = new ArrayList();
          const value = [1, 2, 3, 4, 5];

          //When
          const actual = list.getSplice(value);

          //Then
          assert.deepEqual(actual, expected);
      })

      it('should returns empty array', () => {
          const list = new ArrayList();
          const value = [1, 2];
          const expectedSlice = [empty, empty];

          //When
          const actual = list.getSplice(value);

          //Then
          assert.deepEqual(actual, expectedSlice);
      })
     });

describe('sort(function(first, seconod)', () => {
     it('should sorts', () => {
          const list = new ArrayList();
          const value = [2, 1, 5, 3];
          const expected = [1, 2, 3, 5];

          //When
          const actual = list.getSort(value);
          
          //Then
          assert.deepEqual(actual, expected); 
      })
});
