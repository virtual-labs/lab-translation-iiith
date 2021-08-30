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
  document.getElementById('instruction').innerHTML = 'पावर बटन पर क्लिक करके स्पेक्ट्रोफोटोमीटर उपकरण चालू करें और साधन के आरंभीकरण के लिए 30 मिनट तक प्रतीक्षा करें।';
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
	  document.getElementById('instruction').innerHTML='इसे खोलने के लिए स्पेक्ट्रोफोटोमीटर के ढक्कन पर क्लिक करें।';
	  cursorPointers('power_btn', 'spectrometerlid_btn');
	  step_no++;
	}
  else if(step_no == 8){
    showClock('710');
    document.getElementById('instruction').innerHTML='इस पर क्लिक करके micropipette लें।';
    cursorPointers('power_btn', 'pipette');
    step_no++;
  }
}

function spectrometer() {
  if(step_no == 1){
    document.getElementById('spectrometer').src='images/spectrometer_open.png';
    document.getElementById('instruction').innerHTML ='इंस्ट्रूमेंट के सैंपल सेल होल्डर में लगाने के लिए क्युवेट पर क्लिक करें। इस माप में नमूना रिक्त या संदर्भ के रूप में जलीय TX-100 समाधान का उपयोग करना पड़ता है। यहाँ एक डबल बीम स्पेक्ट्रोफोटोमीटर दिखाया गया है। इस मामले में, कोई नमूना धारक (अक्सर सामने वाला) और नमूना बैंक या संदर्भ धारक (अक्सर पीछे वाला) में एक साथ नमूना रख सकता है।';
    cursorPointers('spectrometerlid_btn', 'purple_solution1');
    step_no++;
  }
  else if(step_no == 3){
    document.getElementById('spectrometer').src='images/spectrometer.png';
    document.getElementById('instruction').innerHTML='कंप्यूटर मॉनिटर और फिर ‘स्कैन’ टैब पर क्लिक करके तरंग दैर्ध्य स्कैन चलाएं और स्कैन का निरीक्षण करें। वास्तविक स्पेक्ट्रोफोटोमीटर में, नमूना के लिए घटना प्रकाश की एक उपयुक्त तरंग दैर्ध्य रेंज को चुना जा सकता है और तरंग दैर्ध्य स्कैन कंप्यूटर सॉफ्टवेयर के माध्यम से चलाया जाता है। एक स्कैन को अवशोषकता या संप्रेषण मोड में चला सकता है। स्कैन डेटा को कंप्यूटर में संग्रहीत किया जाता है। यदि स्पेक्ट्रोफोटोमीटर एक एकल बीम उपकरण है, तो पहले नमूना रिक्त या संदर्भ एक क्यूवेट में लिया जाता है और नमूना के बाद तरंग दैर्ध्य स्कैन चलाया जाता है। संबंधित तरंगदैर्ध्य के लिए नमूना डेटा से संदर्भ डेटा को घटाना है। डेटा टैब पर क्लिक करके डेटा एकत्र करें। विभिन्न तरंग दैर्ध्य पर नमूने के अवशोषण (और संप्रेषण) को प्लॉट करें और अधिकतम अवशोषण की वर्णक्रमीयता यानी, वर्णक्रमीय शिखर-स्थिति निर्धारित करें। कोलाइडयन सोने के कण तरंगदैर्ध्य 520 एनएम के पास अधिकतम प्रकाश को अवशोषित करते हैं।';
    cursorPointers('spectrometerlid_btn', 'computerscreen_btn');
    step_no++;
  }
  else if(step_no == 14 && count == 5){
    document.getElementById('spectrometer').src='images/spectrometer_open.png';
    document.getElementById('instruction').innerHTML= 'इंस्ट्रूमेंट के सैंपल सेल होल्डर में लगाने के लिए क्युवेट पर क्लिक करें। इस माप में सैंपल ब्लैंक या रेफरेंस के रूप में पानी का इस्तेमाल करना है। यहाँ एक डबल बीम स्पेक्ट्रोफोटोमीटर दिखाया गया है। इस मामले में, नमूना नमूना धारक और नमूना बैंक या संदर्भ धारक में संदर्भ को एक साथ रख सकता है।';
    cursorPointers('spectrometerlid_btn', 'yellow_solution');
    step_no++;
  }
  else if(step_no == 16){
    document.getElementById('spectrometer').src='images/spectrometer.png';
    document.getElementById('instruction').innerHTML= 'Et स्कैन ’बटन पर क्लिक करके स्कैन को कैनेटीक्स मोड में चलाएं और स्कैन का निरीक्षण करें। वास्तविक स्पेक्ट्रोफोटोमीटर में, प्रकाश की एक उपयुक्त तरंग दैर्ध्य का चयन किया जाता है (यहां λ = 520 एनएम) जिसमें कंप्यूटर सॉफ्टवेयर का उपयोग करके अवशोषण बनाम समय स्कैन में वृद्धि की जाती है।';
    cursorPointers('spectrometerlid_btn', 'computerscreen_btn');
    step_no++;
  }
  else if(step_no == 20){
    document.getElementById('spectrometer').src='images/spectrometer_open.png';
    document.getElementById('instruction').innerHTML= 'उपरोक्त चरणों को दोहराएं और नमूना 2 और नमूना 3 सोने के कणों के विकास का अध्ययन करें। इस प्रकार कोई एक कण कण के आधार पर Au (III) आयन सांद्रता अनुपात के आधार पर विभिन्न आकार के सोने के कणों को तैयार करता है। ईोसिन की कमी के लिए उत्प्रेरक के रूप में उपयोग करने से पहले सभी नमूने ~ 12 बजे के लिए छोड़ दिया। उनकी तैयारी के 3-4 घंटे के भीतर कैटेलिसिस की दर बहुत धीमी पाई गई।';
    document.getElementById('Reset_instruction').innerHTML = 'गोल्ड पार्टिकल ने इओसिन रिडक्शन को उत्प्रेरित किया';
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
      document.getElementById('instruction').innerHTML = 'उस पर क्लिक करके ढक्कन बंद करें।';
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
    document.getElementById('instruction').innerHTML = 'कण विकास कैनेटीक्स मापन शुरू करें';
    cursorPointers('close_btn', 'particlegrowth_btn');
  }
  else if(step_no == 19){
    $('#video2, #video3, #video4').css('visibility', 'hidden');
    document.getElementById('instruction').innerHTML = "इसे खोलने के लिए स्पेक्ट्रोफोटोमीटर के ढक्कन पर क्लिक करें।";
    cursorPointers('close_btn', 'spectrometerlid_btn');
  }
  else if(step_no == 24){
    $('#video5, #video6, #video7').css('visibility', 'hidden');
    document.getElementById('Reset_instruction').innerHTML = "प्रयोग रीसेट करने के लिए RESET पर क्लिक करें";
  }
  step_no++;
}

function particleGrowth() {
  if(step_no == 7){
    document.getElementById('particlegrowth_btn').style.visibility = 'hidden';
    document.getElementById('purplesolution2').style.visibility = 'visible';
    document.getElementById('instruction').innerHTML = 'पावर बटन पर क्लिक करके स्पेक्ट्रोफोटोमीटर उपकरण चालू करें और साधन के आरंभीकरण के लिए 30 मिनट तक प्रतीक्षा करें। नमूना 1 सोने के कण की तैयारी निम्नानुसार करें।';
    cursorPointers('particlegrowth_btn', 'power_btn');
    step_no++;
  }
}

function pipette() {
  if(step_no == 9){
    animateStraight('pipette', '+=53', '+=20');
    document.getElementById('instruction').innerHTML = 'बीज के घोल की आवश्यक मात्रा को इकट्ठा करने के लिए फिर से micropipette पर क्लिक करें।';
    step_no++;
    setTimeout(function(){
      count++;
    }, 1000);
  }
  else if(step_no == 10 && count == 1){
    document.getElementById('pipette').src = 'images/pipette_with_sol.png';
    document.getElementById('purplesolution2').src = 'images/half_filled_purple_sol.png';
    document.getElementById('instruction').innerHTML = 'एक बार फिर पिपेट पर क्लिक करके क्यूवेट में एयू (III) आयन समाधान की आवश्यक मात्रा में माइक्रोप्रिपेट से बीज समाधान जोड़ें।';
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
    document.getElementById('instruction').innerHTML = 'एस्कॉर्बिक एसिड समाधान पर क्लिक करके एक बार में 0.04 एमएल 10-2 एम एस्कॉर्बिक एसिड जोड़ें (ड्रॉप द्वारा नहीं)। एस्कॉर्बिक एसिड के अलावा तुरंत बाद, बीज से कण विकास के कैनेटीक्स को वृद्धि का पालन करके किया जाना चाहिए। समय के साथ λ = 520 एनएम पर अवशोषण मूल्य (331 डिग्री सेल्सियस पर)।';
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
      document.getElementById('instruction').innerHTML= 'इसे खोलने के लिए स्पेक्ट्रोफोटोमीटर के ढक्कन पर क्लिक करें।';
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
      document.getElementById('instruction').innerHTML = 'उस पर क्लिक करके चैम्बर का ढक्कन बंद करें।';
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
