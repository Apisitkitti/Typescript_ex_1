"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greet = void 0;
function greet(name) {
    if (name.length === 0) {
        return 'Hello, my friend.';
    }
    var wordExceptLastWord = name.slice(0, name.length - 1);
    var wordJoin = wordExceptLastWord.join(', ');
    var Lastword = name[name.length - 1];
    return "Hello, ".concat(filterWord([wordJoin, Lastword], ' and '), ".");
}
exports.greet = greet;
function filterWord(wordtofilter, separator) {
    return wordtofilter.filter(function (w) { return w; }).join(separator);
}
//# sourceMappingURL=excercise.js.map