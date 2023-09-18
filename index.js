function MyCustomQueue() {
  var collection = [];
  this.print = function () {
    console.log(collection);
  };
  this.enqueue = function (element) {
    collection.push(element);
  };
  this.dequeue = function () {
    return collection.shift();
  };
  this.front = function () {
    return collection[0];
  };
  this.size = function () {
    return collection.length;
  };
  this.isEmpty = function () {
    return collection.length === 0;
  };
}

var myQueue = new MyCustomQueue();
myQueue.enqueue("ludo");
myQueue.enqueue("antoine");
myQueue.enqueue("bastien");
console.log(myQueue.front());
myQueue.print();
myQueue.dequeue();
myQueue.print();
myQueue.dequeue();
myQueue.print();
console.log(myQueue.front());

function PriorityQueue() {
  var collection = [];
  this.print = function () {
    console.log(collection);
  };
  this.enqueue = function (element) {
    if (this.isEmpty()) {
      collection.push(element);
    } else {
      var added = false;
      for (i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) {
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        collection.push(element);
      }
    }
  };
  this.dequeue = function () {
    return collection.shift();
  };
  this.front = function () {
    return collection[0];
  };
  this.size = function () {
    return collection.length;
  };
  this.isEmpty = function () {
    return collection.length === 0;
  };
}

const queue = new PriorityQueue();
queue.enqueue(["ludo", 2]);
queue.enqueue(["paul", 10]);
queue.enqueue(["eric", 7]);
queue.enqueue(["linda", 5]);
queue.enqueue(["cynthia", 2]);
queue.enqueue(["vincent", 20]);
queue.enqueue(["corinne", 1]);
queue.dequeue();
queue.print();
