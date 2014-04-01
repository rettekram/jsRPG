/**
 * @file
 * Controls the encounter rounds and actions.
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
	this.currentHP = 0;
	this.maxHP = 0;
	this.coreClass = [];

	// debug to the screen
	this.debug = true;
};


/**
 * Iterates through all the players in the combat encounter and checks the initative order
 * @todo
 */
Character.prototype.setHP = function () {
	// debug to the screen
	if (this.debug) {
		// log the results
		console.log (this);
	}
};


var Mark = new Character();
console.log (Mark);

}(jsRPG));