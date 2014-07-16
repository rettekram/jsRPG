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
	this.hp = 0;
	this.maxHP = 0;
	this.level = 0;

	// debug to the screen
	this.debug = true;
};


/**
 * Getter/Setter methods the Hit Point property.
 * 
 */
Character.prototype.getHP = function () {
	// validates as integer
	this.hp = parseInt(this.hp, 10);
	
	// returns the value
	return this.hp;
};

Character.prototype.setHP = function (newHP) {
	// validates as integer
	if (typeof newHP !== 'undefined') {
		newHP = parseInt(newHP, 10);
	}
	
	// update value
	this.hp = newHP;
	
	// returns the value
	return this.hp;
};


/**
 * Getter/Setter methods the Maximum Hit Point property.
 * 
 */
Character.prototype.getMaxHP = function () {
	// validates as integer
	this.maxHP = parseInt(this.maxHP, 10);
	
	// returns the value
	return this.maxHP;
};

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
	this.setMaxHP(newMaxHP);

	// return the value
	return this.maxHP;
};


/**
 * Getter/Setter methods the Character Level property.
 * 
 */
Character.prototype.getLevel = function () {
	// validates as integer
	this.level = parseInt(this.level, 10);
	
	// returns the value
	return this.level;
};

Character.prototype.setLevel = function (newLevel) {
	// validates as integer
	if (typeof newLevel !== 'undefined') {
		newLevel = parseInt(newLevel, 10);
	}
	
	// update  value
	this.level = newLevel;
	
	// returns the value
	return this.level;
};








/**
 * Debug Output
 * 
 */
var Bob = new Character();
if (Bob.debug == 1) {
	Bob.setMaxHP(12);
	console.log("Bob's maximum HP is", Bob.getMaxHP());
	console.log("Bob gains a level!");
	Bob.rollMaxHP("1d10+2");
	console.log("Bob's new maximum HP is", Bob.getMaxHP());
}


}(jsRPG));