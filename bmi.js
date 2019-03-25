/*
The BMI is defined as the body mass divided by the square of the body height, and is universally expressed in units of kg/m2 (source: Wikipedia)

BMI = weight (kg) / (height * height (m))

Underweight < 18.5
Normal (healthy weight) 18.5 - 25
Overweight 25 - 30
Obesity > 30

*/

// globale variabler (synlige for HELE scriptet!)
var input, bmi, msg;

function calculateBMI() {
	'use strict';
	// test
	console.log('Form er på vej!');
	
	input = document.getElementsByTagName('input');
	// input er et array med alle input elementer fra formen
	console.log(input);
	// lokale variabler (let), kan kun bruges indenfor funktionen!
	let w = input[0].value;
	let h = input[1].value;
	// contatenation af brugerens input
	console.log('Weight: ' + w + ', height: ' + h);
	
	// funktioner giver "false" (< her er noget forkert!) tilbage til formen
	// En form bliver kun sent ved "true" tilstand ;-)
	return false;

}
