/**
 * 双向链条（ Doubly-linked list ）
 */

function LinkedList() {
    this._length = 0;
    this.head = null;
    this.tail = null;
    Object.defineProperty(this, 'length', {// length 属性只读不能写
        get: function () {
            return this._length;
        }.bind(this)
    });
};


/**
 *  isempty
 *
 * @return Boolean
 */
LinkedList.prototype.isEmpty = function () {
    return this.length === 0;
};

/**
 * 链条节点(A linked list node)
 */
function Node(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
};

/**
 * get node 
 * @param { number } index
 * @return Node
 */
LinkedList.prototype.getNode = function (index) {
    var node = this.head;
    for (var i = 0; i < index; i++) //注意是1 和 <=//改成了 0  ,
    {
        node = node.next;
    }
    return node;
};

/**
 * 增加节点add
 *
 * @param { Object } n node's value
 * @param { Number } index position
 */
LinkedList.prototype.add = function (n, index) {
    if (index > this.length || index < 0) {
        throw new Error('数组越界');
    }
    var node = new Node(n);
    if (index !== undefined && index < this.length) {
        var nextNode;
        var prevNode;

        if (index === 0) {   // 0 开头
            nextNode = this.head;
            node.head = node;
        }
        else {
            nextNode = this.getNode(index);
            prevNode = nextNode.prev;

            prevNode.next = node;
            node.prev = prevNode;

        }
        nextNode.prev = node;
        node.next = nextNode;

    }
    else {
        if (!this.head) this.head = node;
        else {
            this.tail.next = node;
            node.prev = this.tail;
        }
        this.tail = node;
    }
    this._length++;
};
/**
 * get node value 
 * @param { number } index
 * @return { number } number
 */
LinkedList.prototype.get = function (index) {
    return this.getNode(index).value;
};

/**
 * 删除节点del
 *
 * @param { Number } node
 */
LinkedList.prototype.delNode=function(node){
    if (node === this.head) {
        // node.next.prev = null;
        this.head = node.next;
    }
    else {
        node.prev.next = node.next;
    }
    if (node === this.tail) {
        this.tail = node.prev;
    }
    else {
        node.next.prev = node.prev;
    }
    this._length--;
};
/**
 * del node according index 
 * @param { number } index
 * @return { number } number
 */
LinkedList.prototype.getvalue = function (index) {
    if (index >= this.length || index < 0) {
        throw new Error('数组越界');
    }
    this.del(this.getNode(index));
};


/**
 * fn每一个元素foreach)
 */
LinkedList.prototype.forEach = function(fn) {
    var node = this.head;
    while(node){
        fn(node.value);
        node = node.next;
    }
}


/**
 * 链表反转(reverse)
 * 
 */
LinkedList.prototype.reverse= function(){
    if (!this.isempty){
        throw new Error('list为空');
    }
    var nodeN= this.head;
    var nodePrev = null;
    while(nodeN){
        var nodeNext = nodeN.next;
        console.log(nodeN.value);
        nodeN.next = nodePrev;
        nodeN.prev = nodeNext;
        nodePrev = nodeN;
        nodeN = nodeNext;
    }
    var nodeHead = this.head;
    this.head = this.tail;
    this.tail=nodeHead;
}

module.exports = LinkedList;