/**
 * jsRPG 1.x-dev
 * 
 * This file is the core application launcher.
 * 
 */

/**
 * Define parent application namespace.
 * 
 */
// top-level namespace being assigned an object literal
var jsRPG = jsRPG || {};

// a convenience function for parsing string namespaces and automatically generating nested namespaces
function extend(ns, ns_string) {
	"use strict";
	
	var parts = ns_string.split('.'),
			parent = ns,
			pl, i;
			
	if (parts[0] == "jsRPG") {
		parts = parts.slice(1);
	}
	
	pl = parts.length;
	
	for (i = 0; i < pl; i++) {
		//create a property if it doesnt exist
		if (typeof parent[parts[i]] === 'undefined') {
			parent[parts[i]] = {};
		}
		parent = parent[parts[i]];
	}
	
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

