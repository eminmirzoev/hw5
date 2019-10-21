function IList() {}

IList.prototype.clear = function() {console.log('IList clear'); }
IList.prototype.toString = function() {console.log('IList toString'); }
IList.prototype.getSize = function() {console.log('IList getSize'); }
IList.prototype.getSort = function() {console.log('IList getSort'); }
IList.prototype.push = function() {console.log('IList push'); }
IList.prototype.pop = function() {console.log('IList pop'); }
IList.prototype.shift = function() {console.log('IList shift'); }
IList.prototype.unshift = function() {console.log('IList unshift'); }
IList.prototype.getSplice = function() {console.log('IList getSplice'); }
IList.prototype.getSlice = function() {console.log('IList getSlice'); }

module.exports = IList;