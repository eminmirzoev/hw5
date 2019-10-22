const { assert } = require('chai');
const LinkedList = require('../src/LinkedList');

describe('isObject', () => {
    it('should object', () => {
        const actual = new LinkedList;

        //Then 
        assert.isObject(actual,);
    })
});

describe('LinkedList clear', () => {
    let llist = null;

    beforeEach(() => {
        llist = new LinkedList();
    })
    it('should clear correctly(undefined)', () => {
        const arr = undefined;
        const expectedSize = 0;
        const expectedString = '[]';
        llist.init(arr);

        llist.clear();

        assert.deepEqual(llist.getSize(), expected);
        assert.deepEqual(llist.toString(), expectedString);
    })
    it('should clear correctly []', () => {
        const arr = [];
        const expectedSize = 0;
        const expectedString = '[]';
        llist.init(arr);

        llist.clear();

        assert.deepEqual(llist.getSize(), expected);
        assert.deepEqual(llist.toString(), expectedString);
    })
    it('should clear correctly[1]', () => {
        const arr = [1];
        const expectedSize = 0;
        const expectedString = '[]';
        llist.init(arr);

        llist.clear();

        assert.deepEqual(llist.getSize(), expected);
        assert.deepEqual(llist.toString(), expectedString);
    })
    it('should clear correctly[1, 2]', () => {
        const arr = [1, 2];
        const expectedSize = 0;
        const expectedString = '[]';
        llist.init(arr);

        llist.clear();

        assert.deepEqual(llist.getSize(), expected);
        assert.deepEqual(llist.toString(), expectedString);
    })
    it('should clear correctly[1, 2, 3, 4, 5]', () => {
        const arr = [1, 2, 3, 4, 5];
        const expectedSize = 0;
        const expectedString = '[]';
        llist.init(arr);

        llist.clear();

        assert.deepEqual(llist.getSize(), expected);
        assert.deepEqual(llist.toString(), expectedString);
    })
});

describe('LinkedList getSize', () => {
    it('should return (undefined)', () => {
        const arr = undefined;
        const expectedSize = 0;
        llist.init(arr);

        const actual = llist.getSize();

        llist.clear();

        assert.deepEqual(llist.getSize(), expected);
    })
});
describe('LinkedList toString', () => {

});