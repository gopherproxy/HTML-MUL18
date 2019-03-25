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
	msg = document.getElementById('msg');

	// input er et array med alle input elementer fra formen
	console.log(input);
	// lokale variabler (let), kan kun bruges inden for funktionen!
	let w = input[0].value;
	let h = input[1].value;
	// concatenation af brugerens input
	console.log('Weight: ' + w + ', height: ' + h);

	// Beregningen af BMI
	bmi = (w / (h * h)).toFixed(2);
	
	// Feedback til brugeren
	if (bmi < 18.5 ) {
		msg.innerHTML = 'BMI = ' + bmi + ' - Underweight!';
		
		// dynamiske CSS classes med JavaScript:
		msg.removeAttribute("class"); // nullstiller CSS fra ev tidligere forsøg
		msg.classList.add('alert-light'); // tilføjer en bootstrap class
		msg.classList.add('p-4'); // tilføjer en yderlige klasse (padding 4)
		
	} else if (bmi <= 25) {
		msg.innerHTML = 'BMI = ' + bmi + ' - Normal (healthy weight)!';
		msg.removeAttribute("class");
		msg.classList.add('alert-success');
		msg.classList.add('p-4');
	} else if (bmi <= 30) {
		msg.innerHTML = 'BMI = ' + bmi + ' - Overweight!';
		msg.removeAttribute("class");
		msg.classList.add('alert-warning');
		msg.classList.add('p-4');
	} else {
		msg.innerHTML = 'BMI = ' + bmi + ' - You\'re an American!';
		msg.removeAttribute("class");
		msg.classList.add('alert-danger');
		msg.classList.add('p-4');
	}

	// funktioner giver "false" (< her er noget forkert!) tilbage til formen
	// En form bliver kun sent ved "true" tilstand ;-)
	return false;
}
