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
	jsRPG.Encounter = function() {
		// sets default parameters
		this.players = 0;
		this.npcs = 0;
		
		// debug to the screen
		this.debug = true;
	};
	
	
	/**
	 * Iterates through all the players in the combat encounter and checks the initative order
	 * @todo
	 */
	jsRPG.Encounter.prototype.rollInitiative = function () {
		// debug to the screen
		if (this.debug) {
			// log the results
			console.log (this);
		}
	};

}(jsRPG));