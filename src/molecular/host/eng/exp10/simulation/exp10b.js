var step_no=0; /*This variable is used to perform all the actions in the required sequence. 
                     Depending on the value of this variable the part of the method is called.*/
var count = 0; /* This variable is used to perform the actions on the objects without distortions.
                      i.e., It make sures that one or more actions are not performed at a time. */ 

var select; // used to store the select element 
var samplevalue; // Used to store the samplenumber on clicking the drop down menu.
var video1, video2, video3, // Used to store the video elements
video4, video5, video6, video7; 

/*This method is called when the page is loaded. */
window.onload = function(){ 
    initialFunction();
    addclickEvents();
}

// This function is called to set the first set of instructions as the page loads.
function  initialFunction() {
	document.getElementById('instruction').innerHTML = 'Turn on the spectrophotometer instrument by clicking on the power button and wait for 30 min for initialization of the instrument.';
}

//This function is used to add click events to elements
function addclickEvents(){
    document.getElementById("power_btn").addEventListener("click", function() {
          	turnOn();
    }, false);
    document.getElementById("spectrometerlid_btn").addEventListener("click", function() {
          	spectrometer();
    }, false);
	document.getElementById("purple_solution1").addEventListener("click", function() {
          	purpleSolution();
    }, false);
    document.getElementById("yellow_solution").addEventListener("click", function() {
          	yellowSolution();
    }, false);
    document.getElementById("computerscreen_btn").addEventListener("click", function() {
          	runWavelength();
    }, false);
    document.getElementById("scan_btn").addEventListener("click", function() {
          	scan();
    }, false);
    document.getElementById("close_btn").addEventListener("click", function() {
          	close();
    }, false);
    document.getElementById("particlegrowth_btn").addEventListener("click", function() {
          	particleGrowth();
    }, false);
    document.getElementById("EosinReduction_btn").addEventListener("click", function() {
          	EosinReduction();
    }, false);
    document.getElementById("pipette").addEventListener("click", function() {
          	pipette();
    }, false);
    document.getElementById("ascorbic_acid").addEventListener("click", function() {
          	ascorbicAcid();
    }, false);
}

//To disable and enable the cursor pointers on elements.
function cursorPointers(id1, id2){
    document.getElementById(id1).style.cursor = "default";
    document.getElementById(id2).style.cursor = "pointer";
}

// This method is called to make the clockface and clock handle visible and make the clock handle rotate 
// and make it hidden after a certain period of time.
function showClock(deg) {
	$('#clockface2, #clockhand2').css('visibility', 'visible');
	rotateElements('clockhand2', deg);
	setTimeout(function(){
		$('#clockface2, #clockhand2').css('visibility', 'hidden');
	}, 3000);
}

function turnOn() {
	if(step_no == 0){
		showClock('360');
		document.getElementById('instruction').innerHTML='Click on the spectrophotometer lid to open it.';
		cursorPointers('power_btn', 'spectrometerlid_btn');
		step_no++;
	}
	else if(step_no == 8){
		showClock('710');
		document.getElementById('instruction').innerHTML='Take the micropipette by clicking on it.';
		cursorPointers('power_btn', 'pipette');
		step_no++;
	}
}

function spectrometer() {
	if(step_no == 1){
		document.getElementById('spectrometer').src='images/spectrometer_open.png';
		document.getElementById('instruction').innerHTML ='Click on the cuvette to place it in the sample cell holder of the instrument. One has to use aqueous TX-100 solution as the sample blank or reference in this measurement. Here a double beam spectrophotometer is shown. In this case, one can place the sample in the sample holder(often the front one) and the sample bank or reference in the reference holder(often the back one) simultaneously.';
		cursorPointers('spectrometerlid_btn', 'purple_solution1');
		step_no++;
	}
	else if(step_no == 3){
		document.getElementById('spectrometer').src='images/spectrometer.png';
		document.getElementById('instruction').innerHTML='Run the wavelength scan by clicking on the Computer monitor and then on the ‘Scan’ tab and observe the scan. In the real spectrophotometer, an appropriate wavelength range of incident light for the sample can be chosen and the wavelength scan are run via the accompanied computer software. One can run the scan in absorbance or transmittance mode. The scan data is stored in the computer.If the spectrophotometer is a single beam instrument, then first the sample blank or reference is taken in a cuvette and the wavelength scan is run followed by the sample. One has to subtract the reference data from the sample data for respective wavelengths. Collect data by clicking on the Data tab. Plot the absorbance (and transmittance) of the sample at various wavelengths and determine the wavelength of maximum absorption i.e., spectral peak-position. Colloidal gold particles absorb maximum light near wavelength 520 nm.';
		cursorPointers('spectrometerlid_btn', 'computerscreen_btn');
		step_no++;
	}
	else if(step_no == 14 && count == 5){
		document.getElementById('spectrometer').src='images/spectrometer_open.png';
		document.getElementById('instruction').innerHTML= 'Click on the cuvette to place it in the sample cell holder of the instrument.One has to use water as the sample blank or reference in this measurement. Here a double beam spectrophotometer is shown. In this case, one can place the sample in the sample holder and the sample bank or reference in the reference holder simultaneously.';
		cursorPointers('spectrometerlid_btn', 'yellow_solution');
		step_no++;
	}
	else if(step_no == 16){
		document.getElementById('spectrometer').src='images/spectrometer.png';
		document.getElementById('instruction').innerHTML= 'Run the scan in the kinetics mode by clicking on the ‘Scan’ button and observe the scan. In the real spectrophotometer, an appropriate wavelength of light is selected (here λ=520 nm) at which increase in absorbance vs. time scan is performed by using the accompanied computer software.';
		cursorPointers('spectrometerlid_btn', 'computerscreen_btn');
		step_no++;
	}
	else if(step_no == 20){
		document.getElementById('spectrometer').src='images/spectrometer_open.png';
		document.getElementById('instruction').innerHTML= 'Repeat the above steps and study the developments of Sample 2 and Sample 3 gold particles. Thus one prepares various-sized gold particles depending on the seed particle to Au(III) ion concentration ratio. All the samples left for ~12 hrs before using them as catalysts for eosin reduction. The rate of catalysis was found to be very slow within 3-4 hrs of their preparations.';
		document.getElementById('Reset_instruction').innerHTML = 'Gold Particle catalyzed Eosin Reduction';
		document.getElementById('EosinReduction_btn').style.visibility = 'visible';
		document.getElementById('Eosin').style.visibility = 'visible';
		document.getElementById('sol_name1').style.visibility = 'visible';
		document.getElementById('sol_name2').style.visibility = 'visible';
		document.getElementById('grey_solution').style.visibility = 'visible';
		document.getElementById('purple_solution1').style.visibility = 'visible';
		animateStraight('grey_solution', '-=47', '+=1.5');
		animateStraight('purple_solution1', '-=29', '+=25');
		setTimeout(function() {
			document.getElementById('purple_solution1').style.width = '1.8%';
			document.getElementById('grey_solution').style.width = '1.8%';
		}, 800);
		cursorPointers('spectrometerlid_btn', 'EosinReduction_btn');
		step_no++;
	}
}

function purpleSolution() {
	if(step_no == 2){
		animateStraight('purple_solution1', '-=9', '-=35.1');
		setTimeout(function() {
			document.getElementById('purple_solution1').style.width = '1.2%';
		}, 800);

		setTimeout(function() {
			document.getElementById('ref_cuvette1').style.visibility = 'visible';
			animateStraight('ref_cuvette1', '+=14', '-=9.5');
		}, 1100);

		setTimeout(function() {
			animateStraight('purple_solution1', '+=4', '+=0');
			animateStraight('ref_cuvette1', '+=4.5', '+=0');
		}, 2100);

		setTimeout(function() {
			$('#purple_solution1, #ref_cuvette1').css('visibility', 'hidden');
			document.getElementById('instruction').innerHTML = 'Close the lid by clicking on it.';
			cursorPointers('purple_solution1', 'spectrometerlid_btn');
		}, 3100);
		step_no++;
	}
}

function runWavelength() {
	select = document.getElementById("samplenumber").selectedIndex;
	samplevalue = document.getElementsByTagName("option")[select].value;

	if(step_no == 4 ) {
		if(samplevalue == 'sample1'||'sample2'||'sample3'){
			document.getElementById('graph1').style.visibility = 'visible';
		}
	}

	else if(step_no == 17){
		if(samplevalue == 'sample1') {
			document.getElementById('graph2').style.visibility = 'visible';
		}
		else if(samplevalue == 'sample2') {
			document.getElementById('graph3').style.visibility = 'visible';
		}
		else if(samplevalue == 'sample3') {
			document.getElementById('graph4').style.visibility = 'visible';
		}
	}

	else if(step_no == 22 && count == 6){
		if(samplevalue == 'sample1') {
			document.getElementById('graph5').style.visibility = 'visible';
		}
		else if(samplevalue == 'sample2') {
			document.getElementById('graph6').style.visibility = 'visible';
		}
		else if(samplevalue == 'sample3') {
			document.getElementById('graph7').style.visibility = 'visible';
		}
		document.getElementById('indication_arrow2').style.visibility = 'hidden';
	}
	cursorPointers('computerscreen_btn', 'scan_btn');
	step_no++;
}

function scan() {
	if(step_no == 5){
		if(samplevalue == 'sample1'||'sample2'||'sample3') {
			video1 = document.getElementById('video1');
			video1.style.visibility = 'visible';
			video1.play();
		}
		document.getElementById('graph1').style.visibility = 'hidden';
	}

	else if(step_no == 18){
		if(samplevalue == 'sample1') {
			video2 = document.getElementById('video2');
			video2.style.visibility = 'visible';
			video2.play();
			document.getElementById('graph2').style.visibility = 'hidden';
		}
		else if(samplevalue == 'sample2') {
			video3 = document.getElementById('video3');
			video3.style.visibility = 'visible';
			video3.play();
			document.getElementById('graph3').style.visibility = 'hidden';
		}
		else if(samplevalue == 'sample3') {
			video4 = document.getElementById('video4');
			video4.style.visibility = 'visible';
			video4.play();
			document.getElementById('graph4').style.visibility = 'hidden';
		}
	}

	else if(step_no == 23){
		if(samplevalue == 'sample1') {
			video5 = document.getElementById('video5');
			video5.style.visibility = 'visible';
			video5.play();
			document.getElementById('graph5').style.visibility = 'hidden';
		}
		else if(samplevalue == 'sample2') {
			video6 = document.getElementById('video6');
			video6.style.visibility = 'visible';
			video6.play();
			document.getElementById('graph6').style.visibility = 'hidden';
		}
		else if(samplevalue == 'sample3') {
			video7 = document.getElementById('video7');
			video7.style.visibility = 'visible';
			video7.play();
			document.getElementById('graph7').style.visibility = 'hidden';
		}
	}
	
	cursorPointers('scan_btn', 'close_btn');
	step_no++;
}

function close() {
	if(step_no == 6){
		$('#video1').css('visibility', 'hidden');
		document.getElementById('particlegrowth_btn').style.visibility = 'visible';
		document.getElementById('instruction').innerHTML = 'Start Particle Growth Kinetics Measurement';
		cursorPointers('close_btn', 'particlegrowth_btn');
	}
	else if(step_no == 19){
		$('#video2, #video3, #video4').css('visibility', 'hidden');
		document.getElementById('instruction').innerHTML = "Click on the spectrophotometer lid to open it.";
		cursorPointers('close_btn', 'spectrometerlid_btn');
	}
	else if(step_no == 24){
		$('#video5, #video6, #video7').css('visibility', 'hidden');
		document.getElementById('Reset_instruction').innerHTML = "Click on RESET to reset the Experiment";
	}
	step_no++;
}

function particleGrowth() {
	if(step_no == 7){
		document.getElementById('particlegrowth_btn').style.visibility = 'hidden';
		document.getElementById('purplesolution2').style.visibility = 'visible';
		document.getElementById('instruction').innerHTML = 'Turn on the spectrophotometer instrument by clicking on the power button and wait for 30 min for initialization of the instrument.For the preparation of Sample 1 gold particle proceed as follows. ';
		cursorPointers('particlegrowth_btn', 'power_btn');
		step_no++;
	}
}

function pipette() {
	if(step_no == 9){
		animateStraight('pipette', '+=53', '+=20');
		document.getElementById('instruction').innerHTML = 'Click on the micropipette again to collect the required quantity of seed solution.';
		step_no++;
		setTimeout(function(){
			count++;
		}, 1000);
	}
	else if(step_no == 10 && count == 1){
		document.getElementById('pipette').src = 'images/pipette_with_sol.png';
		document.getElementById('purplesolution2').src = 'images/half_filled_purple_sol.png';
		document.getElementById('instruction').innerHTML = 'Add the seed solution from micropipette to the required quantity of Au(III) ion solution in the cuvette by clicking on the pipette once again.';
		step_no++;
		setTimeout(function(){
			count++;
		}, 1000);
	}
	else if(step_no == 11 && count == 2){
		animate('pipette', '-=10', '-=10', '+=10');
		setTimeout(function(){
			document.getElementById('pipette').src = 'images/pipette.png';
		}, 3500);
		step_no++;
		setTimeout(function(){
			count++;
		}, 3000);
	}
	else if(step_no == 12 && count == 3){
		document.getElementById('pipette').src = 'images/pipette_with_sol.png';
		document.getElementById('yellow_solution').src = 'images/yellow_sol.png';
		animateStraight('pipette', '-=54', '-=10');
		document.getElementById('instruction').innerHTML = 'Add 0.04 mL 10-2 M ascorbic acid at a time (not drop by drop) by clicking on the ascorbic acid solution.Immediately after addition of ascorbic acid, the kinetics of the particle development from the seed should be followed by following the increase in absorbance value at λ=520 nm with time (at 331°C). ';
		step_no++;
		setTimeout(function(){
			cursorPointers('pipette', 'ascorbic_acid');
			count++;
		}, 1500);
	}
	else if(step_no == 21){
		document.getElementById('indication_arrow1').style.visibility='hidden';
		animateStraight('pipette', '+=18', '+=13.5');

		setTimeout(function(){
			animate('pipette', '-=10', '-=5.5', '+=10');
		}, 2000);

		setTimeout(function(){
			animate('pipette', '-=10', '+=11.5', '+=10');
		}, 4000);

		setTimeout(function(){
			animate('pipette', '-=10', '-=12', '+=10');
		}, 6000);

		setTimeout(function(){
			animateStraight('pipette', '-=17', '-=8');
			animateStraight('purple_solution1', '+=27', '-=25.2');
		}, 12000);

		setTimeout(function(){
			document.getElementById('spectrometer').src='images/spectrometer.png';
			document.getElementById('indication_arrow2').style.visibility = 'visible';
			document.getElementById('purple_solution1').style.visibility = 'hidden';
		}, 14000);

		setTimeout(function(){
			cursorPointers('pipette', 'computerscreen_btn');
			count++;
		}, 14100);
		step_no++;
	}
}

function ascorbicAcid() {
	if(step_no == 13 && count == 4) {
		animateStraight('pipette', '+=18', '+=21.5');

		setTimeout(function(){
			animateStraight('pipette', '-=10', '+=0');
		}, 2000);

		setTimeout(function(){
			animateStraight('pipette', '+=45', '-=11.5');
		}, 3000);

		setTimeout(function(){
			animateStraight('pipette', '-=53', '-=8');
			document.getElementById('instruction').innerHTML= 'Click on the spectrophotometer lid to open it.';
			cursorPointers('pipette', 'spectrometerlid_btn');
		}, 5000);

		setTimeout(function(){
			count++;
		}, 6000);
		step_no++;
	}
}

function yellowSolution() {
	if(step_no == 15){
		animateStraight('yellow_solution', '-=7', '-=25.2');
		setTimeout(function() {
			document.getElementById('yellow_solution').style.width = '1.2%';
			document.getElementById('grey_solution').style.width = '1.2%';
		}, 800);

		setTimeout(function() {
			document.getElementById('grey_solution').style.visibility = 'visible';
			animateStraight('grey_solution', '+=48', '-=2.2');
		}, 1100);

		setTimeout(function() {
			animateStraight('yellow_solution', '+=2.8', '+=0');
		}, 2100);

		setTimeout(function() {
			$('#yellow_solution, #grey_solution').css('visibility', 'hidden');
			document.getElementById('instruction').innerHTML = 'Close the chamber lid by clicking on it.';
			cursorPointers('yellow_solution', 'spectrometerlid_btn');
		}, 3100);
		step_no++;
	}
}

function EosinReduction() {
	document.getElementById('EosinReduction_btn').style.visibility = 'hidden';
	document.getElementById('indication_arrow1').style.visibility = 'visible';
	cursorPointers('EosinReduction_btn', 'pipette');
}