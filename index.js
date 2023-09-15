// Partie 2, implémentation avec un array

var letters = [];

var word = "kayake";

var reverseWord = "";

// on met les lettres du mot dans la stack
for (var i = 0; i < word.length; i++) {
    letters.push(word[i]);
    console.log(letters);
}

console.log('----');
console.log('----');

// on les pop de la stack dans l'ordre inversé
for (var i = 0; i < word.length; i++) {
    reverseWord += letters.pop();
    console.log(letters, ' is the stack, and reverse word is ', reverseWord);
}

console.log('----');

console.log(word, ' est le mot');
console.log(reverseWord, ' est le mot inversé');


if (reverseWord === word) {
    console.log('le mot est un palindrome');
} else {
    console.log('le mot n\'est pas un palindrome');
}


// Partie 2, implémentation de notre class Stack

var MyStack = function() {
    this.count = 0;
    this.storage = {};

    // push
    this.push = function (value) {
        this.storage[this.count] = value;
        this.count++;
    }

    // pop
    this.pop = function() {
        if (this.count === 0) {
            return undefined;
        }

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    // size

    this.size = function() {
        return this.count;
    }

    // peek
    this.peek = function() {
        return this.storage[this.count-1];
    }
}
