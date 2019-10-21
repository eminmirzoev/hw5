const {assert} = require ("chai");
ArrayList = require ("../src/ArrayList");

describe('ArrayList', () => {
     it('should return Object', () => {
        const IList = new ArrayList();

         //Then
         assert.isObject(IList);

    })

});