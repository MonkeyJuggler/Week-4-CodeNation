const { epect } = require("@jest/globals");
const { multiply } = require("lodash");
const {test } = require("jest-circus");
const {add} = require("./test2");

test("two numbers correctly add together", () => {
    expect(add(1,2)).toBe(3);
});

test("two numbers correctly add together", () => {
    expect(subtract(10,5)).toBe(3);

});

test("two numbers correctly add together", () => {
        expect(multiply(10,10)).toBe(3);
});