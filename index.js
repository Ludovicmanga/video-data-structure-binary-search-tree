
var mySet = function() {
    var collection = [];

    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    }

    this.values = function() {
        return collection;
    }

    this.add = function(element) {
        if (!this.has(element)) {
            collection.push(element)
            return true;
        } else {
            return false;
        }
    }

    this.remove = function (element) {
        if (this.has(element)) {
            var i = collection.indexOf(element);
            collection.splice(i,1);
            return true;
        } else {
            return false;
        }
    }

    this.size = function() {
        return collection.length;
    }

    this.union = function (otherSet) {
        var unionSet = new mySet();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function(e) {
            unionSet.add(e);
        })
        secondSet.forEach(function(e) {
            unionSet.add(e);
        })
        return unionSet;
    }

    this.intersection = function(otherSet) {
        var intersectionSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e) {
            if (otherSet.has(e)) {
                intersectionSet.add(e);
            }
        })
        return intersectionSet;
    }

    this.difference = function(otherSet) {
        var differenceSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e) {
            if (!otherSet.has(e)) {
                differenceSet.add(e)
            }
        })
        return differenceSet;
    }

    this.subset = function(otherSet) {
        var firstSet = this.values();
        return firstSet.every(function(e) {
            return otherSet.has(e);
        })
    }
}

const set1 = new mySet();
set1.add('a');
set1.add('b');
set1.add('c');
set1.add('d');
console.log(set1.values(), ' are the values');
const set2 = new mySet();
set2.add('a');
set2.add('b');
console.log(set1.union(set2).values(), ' is the union');
console.log(set1.intersection(set2).values(), ' is the intersection');
console.log(set2.subset(set1), ' set2 is or not a subet of set1');
console.log(set1.difference(set2).values(), ' is the diff');