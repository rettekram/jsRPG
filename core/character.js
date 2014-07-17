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
	this.hitDice = "1d4";
	this.characterLevel = 1;
	this.gainedHP = [this.maxHP];

	// debug to the screen
	this.debug = true;
};


/**
 * Getter/Setter methods the Hit Point property.
 * 
 */
Character.prototype.getHP = function () {
	// validates as integer
	this.currentHP = parseInt(this.currentHP, 10);
	
	// returns the value
	return this.currentHP;
};

Character.prototype.setHP = function (newHP) {
	// validates as integer
	if (typeof newHP !== 'undefined') {
		newHP = parseInt(newHP, 10);
	}
	
	// update value
	this.currentHP = newHP;
	
	// returns the value
	return this.currentHP;
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
	var rollHP = new Dice(),
			addHP = rollHP.parseDice(diceRoll);
	
	// store dice roll value to array
	this.gainedHP.push(addHP);

	// adds array values together
	this.maxHP = this.gainedHP.sum();

	// return the value
	return this.maxHP;
};


/**
 * Getter/Setter methods the Character Level property.
 * 
 */
Character.prototype.getLevel = function () {
	// validates as integer
	this.characterLevel = parseInt(this.characterLevel, 10);
	
	// returns the value
	return this.characterLevel;
};

Character.prototype.setLevel = function (newLevel) {
	// validates as integer
	if (typeof newLevel !== 'undefined') {
		newLevel = parseInt(newLevel, 10);
	}
	
	// update  value
	this.characterLevel = newLevel;
	
	// returns the value
	return this.characterLevel;
};


/**
 * Increments the Character Level by 1 or more
 * 
 */
Character.prototype.levelUp = function (i) {
	// iterate through levels gained
	
		// roll additional hit dice
		
		// increase level by 1
	
	// returns values
	return this.characterLevel;
};




/**
 * Debug Output
 * 
 */
var Bob = new Character();
if (Bob.debug == 1) {
	console.log(Bob);
	console.log("Bob's starting HP is", Bob.getMaxHP());
	console.log("----");
	console.log("Bob gains a level!");
	Bob.rollMaxHP(Bob.hitDice);
	console.log("Bob rolls", Bob.hitDice, "for his additional hp and gets a", Bob.gainedHP.last());
	console.log("Bob's new maximum HP is now", Bob.getMaxHP());
}


}(jsRPG));