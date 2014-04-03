/**
 * @file
 * Controls the character creation.
 * 
 */

(function (jsRPG) {
	"use strict";
	
/**
 * Define parent class object.
 * 
 */
Character = function() {
	// sets default parameters
	this.maxHP = 4;
	this.currentHP = this.maxHP;
	this.coreClass = [];

	// debug to the screen
	this.debug = true;
};


/**
 * Getter method the Maximum Hit Point property.
 * 
 */
Character.prototype.setMaxHP = function (newMaxHP) {
	// validates as integer
	if (typeof newMaxHP !== 'undefined') {
		newMaxHP = parseInt(newMaxHP, 10);
	}
	
	// update  value
	this.maxHP = newMaxHP;
	
	// returns the value
	return this.maxHP;
};


/**
 * Setter method the Maximum Hit Point property.
 * 
 */
Character.prototype.getMaxHP = function () {
	// returns the value
	return this.maxHP;
};


/**
 * Adds a dice rolled value to the Maximum Hit Point property.
 * 
 */
Character.prototype.rollMaxHP = function (diceRoll) {
	// save new dice roll to a variable
	var rollHP = new Dice,
			addHP = rollHP.parseDice(diceRoll),
			arrayHP = [this.maxHP, addHP],
			newMaxHP;

	// adds array values together
	newMaxHP = arrayHP.sum();
	
	// new value becomes the maxHP 
	this.maxHP = newMaxHP;
	
	// return the value
	return this.maxHP;
};


var Bob = new Character();
Bob.setMaxHP(8);
console.log("Bob's maximum HP is", Bob.getMaxHP());
console.log("Bob gains a level!");
Bob.rollMaxHP("1d6+2");
console.log("-----------");
console.log("Bob's new maximum HP is", Bob.getMaxHP());


}(jsRPG));