/**
 * @file
 * Processes automated unit tests for the Dice class
 * 
 */

module("Dice");

// Test methods existance
test("All required methods exist", 3, function() {
  ok(Dice.prototype.rollDice, "rollDice method exists");
  ok(Dice.prototype.parseDice, "parseDice method exists");
  ok(Dice.prototype.checkResult, "checkResult method exists");
});

// Test correct output type
test("All methods provide the correct type of value", 3, function() {
  strictEqual($.type(Dice.prototype.rollDice("1", "20", "+4")), "number", "rollDice result is a number");
  strictEqual($.type(Dice.prototype.parseDice("1d20+4")), "number", "parseDice result is a number");
  strictEqual($.type(Dice.prototype.checkResult()), "boolean", "checkResult result is a boolean");
});

