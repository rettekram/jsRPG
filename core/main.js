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
Extend = function (namespace, namespaceString) {
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
};


/**
 * Define namespaced modules.
 * 
 * Usage:
 * var Module2 = new Extend(jsRPG, 'jsRPG.Modules.Module2');
 * var d20 = new Extend(jsRPG, 'jsRPG.System.d20');
 * var Dnd3 = new Extend(jsRPG, 'jsRPG.System.d20.Dnd3');
 *
 */
// Core components
var Character = new Extend(jsRPG, "jsRPG.Core.Character");
var Dice = new Extend(jsRPG, "jsRPG.Core.Dice");
var Encounter = new Extend(jsRPG, "jsRPG.Core.Encounter");

	
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
