"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var excercise_1 = require("./excercise");
describe('Greeting People', function () {
    it('It can join only one word', function () {
        var result = (0, excercise_1.greet)(['Bob']);
        expect(result).toEqual('Hello, Bob.');
    });
    it('It can say hi to no name people', function () {
        var result = (0, excercise_1.greet)(['']);
        expect(result).toEqual('Hello, my friend.');
    });
    it('If want to shout a name', function () {
        var result = (0, excercise_1.greet)(['JERRY']);
        expect(result).toEqual('HELLO JERRY!');
    });
    it('If want to say hello with 2 people', function () {
        var result = (0, excercise_1.greet)(['Jill', 'Jane']);
        expect(result).toEqual('Hello, Jill and Jane.');
    });
    it('If want to say hello with 3 people', function () {
        var result = (0, excercise_1.greet)(['Amy', 'Brian', 'Charlotte']);
        expect(result).toEqual('Hello, Amy, Brian, and Charlotte.');
    });
    it('If want to say hello with 3 people and shount', function () {
        var result = (0, excercise_1.greet)(['Amy', 'BRIAN', 'Charlotte']);
        expect(result).toEqual('Hello, Amy and Charlotte. AND HELLO BRIAN!');
    });
    it('If want to say hello with 3 people can input comma', function () {
        var result = (0, excercise_1.greet)(['Bob', 'Charlie, Dianne']);
        expect(result).toEqual('Hello, Bob, Charlie, and Dianne.');
    });
    it('If want to say hello with slash for and', function () {
        var result = (0, excercise_1.greet)(['Bob', '\' Charlie, Dianne\'']);
        expect(result).toEqual('Hello, Bob and Charlie, Dianne.');
    });
});
//# sourceMappingURL=excercise.test.js.map