/**
 * @file
 * Processes automated unit tests for the Character class
 * 
 */

// Define test variables
module("Character", {
	setup: function() {
		var maxHP = "8",
				currentHP = 8,
				hitDice = "1d6+2";
	}
});

// Test method existance
test("All required methods exist", function() {
  ok(Character, "Character constructor method exists");
  ok(Character.prototype.setMaxHP, "setMaxHP method exists");
  ok(Character.prototype.getMaxHP, "getMaxHP method exists");
  ok(Character.prototype.rollMaxHP, "rollMaxHP method exists");
});

// Test that methods are providing the correct values
test("All methods provide the correct type of value", function() {
	strictEqual($.type(Character), "function", "Character constructor result is a function");
  strictEqual($.type(Character.prototype.setMaxHP(10)), "number", "setMaxHP result is a number");
  strictEqual($.type(Character.prototype.getMaxHP()), "number", "getMaxHP result is a number");
  strictEqual($.type(Character.prototype.rollMaxHP("1d6+2")), "number", "rollMaxHP result is a number");
});
