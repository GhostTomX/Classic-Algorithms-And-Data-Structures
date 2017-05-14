var LinkedList = require('./linked_list.js');

function Queue(){
    this._elements = new LinkedList();
    Object.defineProperty(this,'length',{
    get: function(){
        return this._elements.length;
    }.bind(this)
    });
}

Queue.prototype.isEmpty = function(){
    return this._elements.isEmpty();
};

Queue.prototype.push = function(e){
    return this._elements.add(e);
}

Queue.prototype.pop = function(){
    if (this.isEmpty){
        throw new Error('empty queue can\'t pop');
    }
    var e = this._elements.head;
    this._elements.delNode(e);
    return e.value;
}

/**
 *  peek
 *
 * return first node without deleting it
 */

Queue.prototype.peek = function(){
    if (this.isEmpty){
    throw new Error('empty queue can\'t pop');
    }
    return this._elements.head;
}

module.exports = Queue;