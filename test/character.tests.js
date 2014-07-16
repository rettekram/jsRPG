/**
 * @file
 * Processes automated unit tests for the Character class
 * 
 */

/**
 * Character tests
 * 
 */
module("Character");

// Test method existance
test("All required methods exist", function() {
  ok(Character, "Character constructor method exists");
});

// Test that methods are providing the correct values
test("All methods provide the correct type of value", function() {
	strictEqual($.type(Character), "function", "Character constructor result is a function");
});


/**
 * Hit Point tests
 * 
 */
module("Hit Points", {
	setup: function () {
		var maxHP = "8",
				currentHP = 8,
				hitDice = "1d6+2";
	}
});

// Test method existance
test("All required methods exist", function() {
  ok(Character.prototype.getHP, "getHP method exists");
  ok(Character.prototype.setHP, "setHP method exists");
  ok(Character.prototype.getMaxHP, "getMaxHP method exists");
  ok(Character.prototype.setMaxHP, "setMaxHP method exists");
  ok(Character.prototype.rollMaxHP, "rollMaxHP method exists");
});

// Test that methods are providing the correct values
test("All methods provide the correct type of value", function() {
  strictEqual($.type(Character.prototype.getHP()), "number", "getHP result is a number");
  strictEqual($.type(Character.prototype.setHP(10)), "number", "setHP result is a number");
  strictEqual($.type(Character.prototype.getMaxHP()), "number", "getMaxHP result is a number");
  strictEqual($.type(Character.prototype.setMaxHP(10)), "number", "setMaxHP result is a number");
  strictEqual($.type(Character.prototype.rollMaxHP("1d6+1")), "number", "rollMaxHP result is a number");
});


/**
 * Hit Point tests
 * 
 */
module("Level");

// Test method existance
test("All required methods exist", function() {
  ok(Character.prototype.getLevel, "getLevel method exists");
  ok(Character.prototype.setLevel, "setLevel method exists");
});

// Test that methods are providing the correct values
test("All methods provide the correct type of value", function() {
  strictEqual($.type(Character.prototype.getLevel()), "number", "getLevel result is a number");
  strictEqual($.type(Character.prototype.setLevel(2)), "number", "setLevel result is a number");
});
