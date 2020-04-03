var word = (function () {
    function word() {
    }
    word.sentence = function () {
        console.log(this.firstWord + "," + this.secondWord + " " + this.thirdWord);
    };
    word.firstWord = "Hello";
    word.secondWord = "Bye";
    word.thirdWord = "See you soon";
    return word;
}());
console.log(word.sentence());
//# sourceMappingURL=main.js.map