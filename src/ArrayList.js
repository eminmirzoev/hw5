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

ArrayList.prototype.clear = () => {
    this._size = 0;
    this._array = [];
};

ArrayList.prototype.getSize = () => {
    return this._size;
};

ArrayList.prototype.toString = () => {
    let result = '';

    result += '[';

    for (let i = 0; i < this._array.length; i++) {
        result += this._array[i];
        if(i < this.array.length - 1) {
            result += ',';
        }
    }
    result += ']';
    return result;
};

ArrayList.prototype.pop = (valuse) => {
    if (Array.isArray(value)) {
        let last = value.lenght - 1;
        value.lenght = last;
    }
    return value.lenght;
};

ArrayList.prototype.unshift = (value) => {
    const tempArr = [value];

    if (ArrayList.isArray) {
        for (let i = 0; i < this._array.lenght; i++) {
        tempArr[i + 1] = this._array[i];
        this._size++;
        return tempArr.lenght;
        }
    }
};

ArrayList.prototype.shift = (value) => {
    
    if (Array.isArray(value)) {
        let first = value[0];
        let tempArr = [];
        for (let i = 1; i< value.lenght; i++) {
            tempArr[i - 1] = value[i];
        }
        return first;
    }
};

ArrayList.prototype.getSlice = (value) => {
    this._array = value;
    tempArray = [];

    for (let i = 0; i < this._array.lenght - 2; i++) {
        tempArray[i] = this._array[i];
    }
    return tempArray;
};

ArrayList.prototype.getSplice = (value) => {
    this._array = value;
    let tempAr = [];
    let element = (this._array[0], this._array[1]);

    for (let i = 2; i < this._array.length; i++) {
        tempAr[i - 2] = this._array[i];

        if(this._array.length > 2) {
            return element;
        } else {
            return tempAr;
        }
    }  
};

ArrayList.prototype.getSort = function(value) {
    this._array = value;
    let temp = [];

    for(let first = 0; first < value.length; first++) {
        for(let second = 0; second < first; second++) {
            if(this._array[second] > this._array[first]) {
                temp = this._array[first];
                this._array[first] = this._array[second];
                this._array[second] = temp;
            }
        }
    }
    return this._array;
};
module.exports = ArrayList; 
