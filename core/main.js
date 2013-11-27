/**
 * jsRPG 1.x-dev
 * 
 * This file is the core application launcher.
 * 
 */

/**
 * Define parent namespace
 * 
 */
var jsRPG = jsRPG || {};

jsRPG.namespace = function (ns_string) {
	var parts = ns_string.split('.'),
			parent = jsRPG,
			i;
	
	// strip redundant leading global
	if (parts[0] === "jsRPG") {
		parts = parts.slice(1);
	}
	
	for (i = 0; i < parts.length; i += 1) {
		// create a property if it doesn't exist
		if (typeof parent[parts[i]] === "undefined") {
			parent[parts[i]] = {};
		}
		parent = parent[parts[i]];
	}
	return parent;
};