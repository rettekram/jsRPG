/**
 * @file
 * Controls the handling of dice rolls.
 * 
 */

(function (jsRPG) {
	"use strict";
	
/**
 * Define parent class object.
 * 
 */
Dice = function() {
	// sets default parameters
	this.numberOfDice = 0;
	this.numberOfSides = 0;
	this.adjustValue = 0;
	this.resultOfRoll = 0;
	
	// debug to the screen
	this.debug = true;
};


/**
 * Calculates the number of dice in the roll and adds any modifers.
 * 
 */
Dice.prototype.rollDice = function (numberOfDice, numberOfSides, adjustValue) {
	// declare variables
	var resultOfDice = [], 
			valueOfDice = [], 
			outputOfDice = "", 
			totalRoll = 0,
			i;
	
	// validates as integer and sets default value (1)
	this.numberOfDice = parseInt(numberOfDice, 10);
	if (isNaN(numberOfDice)) {
		numberOfDice = 1;
	}
	// validates as integer and sets default value (6)
	this.numberOfSides = parseInt(numberOfSides, 10);
	if (isNaN(numberOfSides)) {
		numberOfSides = 6;
	}
	// validates as integer and sets default value (0)
	this.adjustValue = typeof (adjustValue) === 'string' ? parseInt(adjustValue.replace(/\s/g),'') : 0;
	if (isNaN(adjustValue)) {
		adjustValue = 0;
	}

	// loop over the numberOfDice generating a random number between one and the the numberOfSides
	for (i = 0; i < numberOfDice; i+=1) {
		// generate a random number between 1 and numberOfSides;
		valueOfDice = Math.floor((Math.random() * numberOfSides) + 1);
		// store it in the array;
		resultOfDice[i] = valueOfDice;
	}
	
	// includes adjustValue to the end of the resultOfDice array
	resultOfDice.push(this.adjustValue);
	
	// adds all elements of resultOfDice together
	this.totalRoll = resultOfDice.sum();
	
	// debug to the screen
	if (this.debug) {
		// loop over the results
		for (i = 0; i < resultOfDice.length; i+=1) {
			// add results the outputOfDice string
			outputOfDice += resultOfDice[i] + " ";
		}
		// log the results
		console.log("-----------");
		console.log(outputOfDice, typeof outputOfDice);
		console.log(this.totalRoll, typeof this.totalRoll);
	}
	
	// returns the value of the calculated dice roll
	return this.totalRoll;
};


/**
 * Converts written dice format into regular expresion and parses result.
 * 
 */
Dice.prototype.parseDice = function (diceRegEx) {
	// declare variables
	var diceArray = [];
	
	// parses value from the following formats: d6,1d20,15D6,1d4+5,1D10,2d8 +67, 1d6+1,1 d 6 + 1, 1 d12+ 67
	diceArray = diceRegEx.match(/\s*(\d*)\s*d\s*(\d+)\s*([\+\-]\s*\d+)?/i);
	
	// removes the first item in the array which is the regular expression
	diceArray.splice(0, 1);
	
	// sends parameters to rollDice() method
	return this.rollDice.apply(this, diceArray);
};


/**
 * Check the dice results verses a target difficulty class.
 * 
 */
Dice.prototype.checkResult = function (resultOfRoll, targetRoll) {
	// delcare variables
	var isSuccess, 
			resultText = "";

	// validates as integer and sets default value (1)
	resultOfRoll = parseInt(resultOfRoll, 10);
	if (isNaN(resultOfRoll)) {
		resultOfRoll = 1;
	}
	// validates as integer and sets default value (10)
	targetRoll = parseInt(targetRoll, 10);
	if (isNaN(targetRoll)) {
		targetRoll = 10;
	}
	
	// calculates dice roll against target difficulty
	if (resultOfRoll >= targetRoll) {
		isSuccess = true;
		resultText = "succeeds!";
	} else {
		isSuccess = false;
		resultText = "fails.";
	}
	
	// debug to the screen
	if (this.debug) {
		// log the results
		console.log ("Player rolls a", resultOfRoll, "against a DC", targetRoll, "and the check", resultText);
	}
	
	// return the results of the check
	return isSuccess;
};


}(jsRPG));