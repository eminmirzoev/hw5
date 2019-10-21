const Ilist = require('./Ilist');



const ArrayList = () => {
    Ilist.apply(this, arguments);
    this.size = 0;
    this._array = [];
};

ArrayList.prototype = Object.create(Ilist.prototype);
Array.prototype.constructor = ArrayList;

ArrayList.prototype.init = (value) => {
    this.clear();
    if (Array.isArray(value)) {
        for (let i = 0; i < value.length; i++) {
            this._array[i] = value[i];
            this._size++;
        }
    }
};
