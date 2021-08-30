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
	document.getElementById('instruction').innerHTML = 'పవర్ బటన్‌పై క్లిక్ చేయడం ద్వారా స్పెక్ట్రోఫోటోమీటర్ పరికరాన్ని ఆన్ చేయండి మరియు వాయిద్యం ప్రారంభించడానికి 30 నిమిషాలు వేచి ఉండండి.';
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
		document.getElementById('instruction').innerHTML='తెరవడానికి స్పెక్ట్రోఫోటోమీటర్ మూతపై క్లిక్ చేయండి.';
		cursorPointers('power_btn', 'spectrometerlid_btn');
		step_no++;
	}
	else if(step_no == 8){
		showClock('710');
		document.getElementById('instruction').innerHTML='దానిపై క్లిక్ చేసి మైక్రోపిపెట్ తీసుకోండి.';
		cursorPointers('power_btn', 'pipette');
		step_no++;
	}
}

function spectrometer() {
	if(step_no == 1){
		document.getElementById('spectrometer').src='images/spectrometer_open.png';
		document.getElementById('instruction').innerHTML ='పరికరం యొక్క నమూనా సెల్ హోల్డర్‌లో ఉంచడానికి కువెట్‌పై క్లిక్ చేయండి. ఈ కొలతలో సజల టిఎక్స్ -100 ద్రావణాన్ని నమూనా ఖాళీగా లేదా సూచనగా ఉపయోగించాలి. ఇక్కడ డబుల్ బీమ్ స్పెక్ట్రోఫోటోమీటర్ చూపబడింది. ఈ సందర్భంలో, నమూనాను నమూనా హోల్డర్‌లో (తరచుగా ముందు ఒకటి) మరియు నమూనా బ్యాంక్ లేదా రిఫరెన్స్ హోల్డర్‌లో (తరచుగా వెనుకవైపు) ఒకేసారి ఉంచవచ్చు.';
		cursorPointers('spectrometerlid_btn', 'purple_solution1');
		step_no++;
	}
	else if(step_no == 3){
		document.getElementById('spectrometer').src='images/spectrometer.png';
		document.getElementById('instruction').innerHTML='కంప్యూటర్ మానిటర్‌పై క్లిక్ చేసి, ఆపై ‘స్కాన్’ టాబ్‌పై క్లిక్ చేసి తరంగదైర్ఘ్యం స్కాన్‌ను అమలు చేయండి మరియు స్కాన్‌ను గమనించండి. నిజమైన స్పెక్ట్రోఫోటోమీటర్‌లో, నమూనా కోసం తగిన తరంగదైర్ఘ్యం సంఘటన కాంతిని ఎంచుకోవచ్చు మరియు తరంగదైర్ఘ్యం స్కాన్‌ను కంప్యూటర్ సాఫ్ట్‌వేర్ ద్వారా అమలు చేస్తారు. స్కాన్‌ను శోషణ లేదా ట్రాన్స్మిటెన్స్ మోడ్‌లో అమలు చేయవచ్చు. స్కాన్ డేటా కంప్యూటర్‌లో నిల్వ చేయబడుతుంది. స్పెక్ట్రోఫోటోమీటర్ ఒకే పుంజం పరికరం అయితే, మొదట నమూనా ఖాళీ లేదా సూచనను ఒక కువెట్‌లో తీసుకుంటారు మరియు తరంగదైర్ఘ్యం స్కాన్ నమూనా తరువాత నడుస్తుంది. సంబంధిత తరంగదైర్ఘ్యాల కోసం నమూనా డేటా నుండి సూచన డేటాను తీసివేయాలి. డేటా టాబ్‌పై క్లిక్ చేయడం ద్వారా డేటాను సేకరించండి. వివిధ తరంగదైర్ఘ్యాల వద్ద నమూనా యొక్క శోషణ (మరియు ప్రసారం) ను ప్లాట్ చేయండి మరియు గరిష్ట శోషణ యొక్క తరంగదైర్ఘ్యాన్ని నిర్ణయించండి, అనగా, స్పెక్ట్రల్ పీక్-పొజిషన్. ఘర్షణ బంగారు కణాలు తరంగదైర్ఘ్యం 520 ఎన్ఎమ్ దగ్గర గరిష్ట కాంతిని గ్రహిస్తాయి.';
		cursorPointers('spectrometerlid_btn', 'computerscreen_btn');
		step_no++;
	}
	else if(step_no == 14 && count == 5){
		document.getElementById('spectrometer').src='images/spectrometer_open.png';
		document.getElementById('instruction').innerHTML= 'పరికరం యొక్క నమూనా సెల్ హోల్డర్‌లో ఉంచడానికి కువెట్‌పై క్లిక్ చేయండి. ఈ కొలతలో నీటిని నమూనా ఖాళీగా లేదా సూచనగా ఉపయోగించాలి. ఇక్కడ డబుల్ బీమ్ స్పెక్ట్రోఫోటోమీటర్ చూపబడింది. ఈ సందర్భంలో, నమూనా నమూనాను నమూనా హోల్డర్‌లో మరియు నమూనా బ్యాంక్ లేదా రిఫరెన్స్‌ను ఒకేసారి రిఫరెన్స్ హోల్డర్‌లో ఉంచవచ్చు.';
		cursorPointers('spectrometerlid_btn', 'yellow_solution');
		step_no++;
	}
	else if(step_no == 16){
		document.getElementById('spectrometer').src='images/spectrometer.png';
		document.getElementById('instruction').innerHTML= '‘స్కాన్’ బటన్‌పై క్లిక్ చేసి గతిశాస్త్ర మోడ్‌లో స్కాన్‌ను అమలు చేయండి మరియు స్కాన్‌ను గమనించండి. నిజమైన స్పెక్ట్రోఫోటోమీటర్‌లో, కాంతి యొక్క సరైన తరంగదైర్ఘ్యం ఎంపిక చేయబడింది (ఇక్కడ λ = 520 nm), దీనితో శోషణ పెరుగుదల వర్సెస్ టైమ్ స్కాన్ తోడు కంప్యూటర్ సాఫ్ట్‌వేర్‌ను ఉపయోగించడం ద్వారా నిర్వహిస్తారు.';
		cursorPointers('spectrometerlid_btn', 'computerscreen_btn');
		step_no++;
	}
	else if(step_no == 20){
		document.getElementById('spectrometer').src='images/spectrometer_open.png';
		document.getElementById('instruction').innerHTML= 'పై దశలను పునరావృతం చేయండి మరియు నమూనా 2 మరియు నమూనా 3 బంగారు కణాల అభివృద్ధిని అధ్యయనం చేయండి. ఈ విధంగా విత్తన కణాన్ని బట్టి u (III) అయాన్ గా ration త నిష్పత్తిని బట్టి వివిధ పరిమాణాల బంగారు కణాలను తయారు చేస్తుంది. అన్ని నమూనాలను ఇయోసిన్ తగ్గింపుకు ఉత్ప్రేరకంగా ఉపయోగించే ముందు ~ 12 గంటలు మిగిలి ఉన్నాయి. వారి సన్నాహాల నుండి 3-4 గంటలలోపు ఉత్ప్రేరక రేటు చాలా నెమ్మదిగా ఉన్నట్లు కనుగొనబడింది.';
		document.getElementById('Reset_instruction').innerHTML = 'గోల్డ్ పార్టికల్ ఎయోసిన్ తగ్గింపును ఉత్ప్రేరకపరిచింది';
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
			document.getElementById('instruction').innerHTML = 'దానిపై క్లిక్ చేయడం ద్వారా మూత మూసివేయండి.';
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
		document.getElementById('instruction').innerHTML = 'పార్టికల్ గ్రోత్ కైనటిక్స్ కొలతను ప్రారంభించండి';
		cursorPointers('close_btn', 'particlegrowth_btn');
	}
	else if(step_no == 19){
		$('#video2, #video3, #video4').css('visibility', 'hidden');
		document.getElementById('instruction').innerHTML = "తెరవడానికి స్పెక్ట్రోఫోటోమీటర్ మూతపై క్లిక్ చేయండి.";
		cursorPointers('close_btn', 'spectrometerlid_btn');
	}
	else if(step_no == 24){
		$('#video5, #video6, #video7').css('visibility', 'hidden');
		document.getElementById('Reset_instruction').innerHTML = "ప్రయోగాన్ని రీసెట్ చేయడానికి రీసెట్ పై క్లిక్ చేయండి";
	}
	step_no++;
}

function particleGrowth() {
	if(step_no == 7){
		document.getElementById('particlegrowth_btn').style.visibility = 'hidden';
		document.getElementById('purplesolution2').style.visibility = 'visible';
		document.getElementById('instruction').innerHTML = 'పవర్ బటన్‌పై క్లిక్ చేయడం ద్వారా స్పెక్ట్రోఫోటోమీటర్ పరికరాన్ని ఆన్ చేయండి మరియు వాయిద్యం ప్రారంభించడానికి 30 నిమిషాలు వేచి ఉండండి. నమూనా 1 బంగారు కణాల తయారీకి ఈ క్రింది విధంగా కొనసాగండి.';
		cursorPointers('particlegrowth_btn', 'power_btn');
		step_no++;
	}
}

function pipette() {
	if(step_no == 9){
		animateStraight('pipette', '+=53', '+=20');
		document.getElementById('instruction').innerHTML = 'విత్తన ద్రావణంలో అవసరమైన పరిమాణాన్ని సేకరించడానికి మైక్రోపిపెట్‌పై మళ్లీ క్లిక్ చేయండి.';
		step_no++;
		setTimeout(function(){
			count++;
		}, 1000);
	}
	else if(step_no == 10 && count == 1){
		document.getElementById('pipette').src = 'images/pipette_with_sol.png';
		document.getElementById('purplesolution2').src = 'images/half_filled_purple_sol.png';
		document.getElementById('instruction').innerHTML = 'మరోసారి పైపెట్‌పై క్లిక్ చేయడం ద్వారా క్యూపెట్‌లో అవసరమైన పరిమాణంలో u (III) అయాన్ ద్రావణానికి మైక్రోపిపెట్ నుండి విత్తన ద్రావణాన్ని జోడించండి.';
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
		document.getElementById('instruction').innerHTML = 'ఆస్కార్బిక్ ఆమ్ల ద్రావణంపై క్లిక్ చేయడం ద్వారా ఒకేసారి 0.04 mL 10-2 M ఆస్కార్బిక్ ఆమ్లాన్ని జోడించండి. ఆస్కార్బిక్ ఆమ్లం కలిపిన వెంటనే, విత్తనం నుండి కణాల అభివృద్ధి యొక్క గతిశాస్త్రం పెరుగుదల తరువాత అనుసరించాలి శోషక విలువ సమయంతో λ = 520 nm వద్ద (331 at C వద్ద). ';
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
			document.getElementById('instruction').innerHTML= 'తెరవడానికి స్పెక్ట్రోఫోటోమీటర్ మూతపై క్లిక్ చేయండి.';
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
			document.getElementById('instruction').innerHTML = 'ఛాంబర్ మూతపై క్లిక్ చేయడం ద్వారా దాన్ని మూసివేయండి.';
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
