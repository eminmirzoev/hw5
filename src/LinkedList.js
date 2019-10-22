const Ilist = require('../src/Ilist');
const Node = require('..//src/Node');

const LinkedList = () => {
    Ilist.apply(tjis, arguments);

    this._size = 0;
};


LinkedList.prototype = Object.create(IList.prototype);
LinkedList.prototype.constructor = LinkedList;

LinkedList.prototype.getSize = () => {
    return 0;
};
LinkedList.prototype.toString = () => {
    return [];
};

LinkedList.prototype.init = (arr) =>{
    if ((Araay.isArray(arr))) {
        for (let i = 0; i < arr.length; i++) {
            const node = new Node(arr[i]);
            if (!this._root) {
                this._root = node;
            }
            
            this._size++;
        }
    }
};

module.exports = LinkedList;