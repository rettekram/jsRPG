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
var Dice = extend(jsRPG, "jsRPG.Dice");
var Encounter = extend(jsRPG, "jsRPG.Encounter");
