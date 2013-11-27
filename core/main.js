/**
 * jsRPG 1.x-dev
 * 
 * This file is the core application launcher.
 * 
 */

var jsRPG = jsRPG || {};


/**
 * Parse namespace string and generate nested namespaces
 * 
 */
function extend (namespace, namespaceString) {
	"use strict";
	
	// declare variables
	var parts = namespaceString.split("."),
			parent = namespace,
			i;
	
	// removes top-level namespace from string
	if (parts[0] === "jsRPG") {
		parts = parts.slice(1);
	}
	
	// iterates through remaining string elements and adds to array
	for (i = 0; i < parts.length; i+=1) {
		//create a property if it doesnt exist
		if (typeof parent[parts[i]] === "undefined") {
			parent[parts[i]] = {};
		}
		parent = parent[parts[i]];
	}
	
	// returns a value
	return parent;
}


/**
 * Define namespaced modules.
 * 
 * Usage:
 * var mod = extend(jsRPG, 'jsRPG.modules.module2');
 * 
 */
// Core components
var Character = extend(jsRPG, "jsRPG.Core.Character");
var Dice = extend(jsRPG, "jsRPG.Core.Dice");
var Encounter = extend(jsRPG, "jsRPG.Core.Encounter");

// Game systems
var d20 = extend(jsRPG, 'jsRPG.Game.d20');
var Dnd3 = extend(jsRPG, 'jsRPG.Game.d20.Dnd3');
var Dnd4 = extend(jsRPG, 'jsRPG.Game.d20.Dnd4');
var DndNext = extend(jsRPG, 'jsRPG.Game.d20.DndNext');

console.log(jsRPG);

	
/**
 * Additional methods for Array()
 * 
 */
// Adds the elements of an array
Array.prototype.sum = function () {
  for (var i = 0, sum = 0; i < this.length; sum += this[i++]);
  return sum;
};

// Finds the maximum value in an array
Array.prototype.max = function () {
  return Math.max.apply({}, this);
};

// Finds the minimum value in an array
Array.prototype.min = function () {
  return Math.min.apply({}, this);
};
