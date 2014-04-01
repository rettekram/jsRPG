/**
 * @file
 * Processes automated unit tests for the Character class
 * 
 */

module("Character");

// Test methods existance
test("All required methods exist", function() {
  ok(Character, "Character constructor method exists");
});
