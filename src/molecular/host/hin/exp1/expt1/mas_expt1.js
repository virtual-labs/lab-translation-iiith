// This file contains all general functions used in the experiment
    var images = [];// Two images that are alternated in ordered to get the blinking effect of the spectrophotometer
    images[0] = "images/spec_with_red.png";
    images[1] = "images/spec_with_red.png";
    var x = 0;
    var y = 0;
    // Variables necessary to obtain motion of all the images
    var initial_top;
    var initial_left;
    var final_top;
    var final_left;
    var step;
    var elem;
    var turnon;
    var img,img1;
    var id,id1;
    var type_of_movement;// Indicates upward or downward motion
    var turnon; // It is used to store the spectrometer table image.
    var choosen_solution ="potassium";// Indicates default type of solution being used.
    var step_no=0; /*This variable is used to perform all the actions in the required sequence. 
                     Depending on the value of this variable the part of the method is called.*/
 	var count = 0; /* This variable is used to perform the actions on the objects without distortions.
                      i.e., It make sures that one or more actions are not performed at a time. */ 

/*This method is called when the page is loaded. *
First function helps in providing basic functionality to manual button and also sets the first set of instructions.
Second function adds click events to elements as soon as the page loads.
Third function adds mouse events to elements as soon as the page loads. */
window.onload = function(){ 
    initial_function();
    addclickEvents();
    mouseEvents();
}

/*This method is called when the page is loaded. It helps in providing basic functionality to two buttons 
manual and data and also sets the first set of instructions. */
function initial_function(){
    /*Method is called when the solution is changed. Here the change in solution is marked by changing
     the grayscale of flask and beaker. */
    $('#solution').change(function () {
            choosen_solution = $('#solution').val();      
            if(choosen_solution=='caffeine'){
                document.getElementById('flask').style.filter='grayscale(100%)';
                document.getElementById('beaker').style.filter='grayscale(100%)';
                document.getElementById("cuvette").style.filter='grayscale(100%)';
            }
            else{
                document.getElementById('flask').style.filter='grayscale(0%)';
                document.getElementById('beaker').style.filter='grayscale(0%)';
                document.getElementById('cuvette').style.filter='grayscale(0%)';
            }
    });
  // Intial intrsuction to be followed
  document.getElementById("demo").innerHTML = "चरण-नंबर 1: निम्नलिखित दो समाधान तैयार करें: ए) ~ 0.001 ग्राम पोटेशियम डाइक्रोमेट (K2Cr2O7) और बी) ~ 5mg / L कैफीन आसुत जल में। यहाँ समाधान दो वॉल्यूमेट्रिक फ्लास्क में दिखाए गए हैं। एक ड्रॉपडाउन मेनू से वांछित समाधान पर क्लिक करके माप के लिए एक समाधान का चयन कर सकते हैं। पावर बटन पर क्लिक करने वाले इंस्ट्रूमेंट को चालू करें और इंस्ट्रूमेंट के इनिशियलाइज़ेशन के लिए 30 मिनट तक प्रतीक्षा करें।";
    var modal = document.getElementById('manual');
    // Get the button that opens the manual modal
    var btn = document.getElementById("manual_button");
    // Get the <span> element that closes the manual modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks the button, open the manual modal 
    btn.onclick = function() {
        modal.style.display = "block";
    };
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    };
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}

/*When user clicks on the Data button it redirects him to the page containing slideshow of three 
graphs obtained from three different sample lengths */
function popitup(url) {
    // Opens a new browser window called newwindow. url specifies the URL of the page to open.
    newwindow=window.open(url,'name','height=380,width=350',"_parent");
    // Sets focus to the new window if the focus is on the previous page.
    if (window.focus) {
        newwindow.focus()
    }
    return false;
}

//This function is used to add click events to elements
function addclickEvents(){
    document.getElementById("reset_btn").addEventListener("click", function() {
            window.location.reload();
    }, false);
    document.getElementById("data_button").addEventListener("click", function() {
            popitup("slideshow.html");
    }, false);
    document.getElementById("flask").addEventListener("click", function() {
            flask();
    }, false);
    document.getElementById("pipette").addEventListener("click", function() {
            pipette();
    }, false);
    document.getElementById("beaker").addEventListener("click", function() {
            beaker();
    }, false);
    document.getElementById("cuvette").addEventListener("click", function() {
            cuvette();
    }, false);
    document.getElementById("comp_trans_button").addEventListener("click", function() {
            scan();
    }, false);
    document.getElementById("spectrolid_trans_button").addEventListener("click", function() {
            spectrophotometer();;
    }, false);
    document.getElementById("power_trans_button").addEventListener("click", function() {
            changeImage(); showClock();
    }, false);
    document.getElementById("start_btn").addEventListener("click", function() {
            startBtn();
    }, false);
    document.getElementById("disposegraph").addEventListener("click", function() {
            disposeGraph();
    }, false);
}

//This function is used to add mouse events to elements.
function mouseEvents(){
    document.getElementById("manual_button").addEventListener("mouseover", function(){
        this.src='images/hover_manual.png';
    });
    document.getElementById("manual_button").addEventListener("mouseout", function(){
        this.src='images/manual_button.png';
    });
    document.getElementById("data_button").addEventListener("mouseover", function(){
        this.src='images/hover_data.png';
    });
    document.getElementById("data_button").addEventListener("mouseout", function(){
        this.src='images/data_button.png';
    });
}

// Call turnOn() method every 250ms
function changeImage() { 
    setInterval("turnOn()", 250);
}

/*When the user switches on the spectrophotometer this method is called. Here the spectrophotometer image 
is changed continuously  to give the blinking light effect. The two images that are swapped is stored in images[] */
function turnOn() {
    /* Make the power button hidden, once the button is clicked to ensure that the spectrofluorimeter runs 
    only for one click. */
    document.getElementById('power_trans_button').style.visibility = 'hidden';
    // Get the image
    turnon = document.getElementById('table_with_spec');
    // Change the source of the image 
    turnon.src = images[x];
    //increment x;
    x++;
    if(x >= images.length){
        x = 0;
    }
}

/*This method displays a timer which runs for 30 seconds. There exists two images which are hidden initailly; 
when this method is called they are amde visible and the clock hand is made to rotate.  */
function showClock(){
    if(step_no==0){
        // Get the images.
        var context=document.getElementById('clockScreen');
        var hand =document.getElementById('clockHand');
        // Make the visiblility of the obtained images visible
        context.style.visibility='visible';
        hand.style.visibility="visible";
        // Rotate 'clockHand' using jQueryRotate.js
        var angle = 0;
        setInterval(function(){
            angle+=3;
            $('#clockHand').rotate(angle);
        },50);
        step_no++;
        //After 10 secs dispose clock
        setTimeout("removeClock()",3000);
    }
}

// After 30 seconds of display of the timer the visibility of clock is changed back to hidden.
function removeClock() {
    $('#clockHand, #clockScreen').remove();
  //Change to next intsruction to be followed.
  document.getElementById("demo").innerHTML = "स्टेप- नंबर 2: क्लीन, ड्राई बीकर लेने के लिए बीकर पर क्लिक करें";
  cursorPointers('power_trans_button', 'beaker');
}

// First time its called to open the spectrophotometer
// Second time its called to close the spectrophotometer
function spectrophotometer(){
  if (step_no == 8 && count == 9){
    // Replace the spectrophotometer images with the open spectrophotometer images
    images[0] = "images/spec_open.png";
    images[1] = "images/spec_open1.png";
    document.getElementById("demo").innerHTML = "चरण -9: नमूना धारक में रखने के लिए क्युवेट पर क्लिक करें। इस माप में पानी का उपयोग नमूना बैंक या संदर्भ के रूप में किया जाता है। यहाँ एक डबल बीम स्पेक्ट्रोफोटोमीटर दिखाया गया है। इस मामले में एक नमूना धारक (अक्सर सामने वाला) और नमूना बैंक या संदर्भ धारक (अक्सर एक साथ वापस एक) में नमूना रख सकता है।";
    cursorPointers('spectrolid_trans_button', 'cuvette');
    step_no++;
  }
  else if(step_no == 10 && count == 13){
    // Replace the spectrophotometer images with the closed spectrophotmeter images.
    images[0] = "images/spec_close.png";
    images[1] = "images/spec_close1.png";
    document.getElementById("demo").innerHTML = "चरण -10: कंप्यूटर मॉनिटर और फिर स्कैन बटन पर क्लिक करके तरंगदैर्ध्य स्कैन चलाएं और तरंग दैर्ध्य स्कैन का निरीक्षण करें";
    cursorPointers('spectrolid_trans_button', 'comp_trans_button');
    step_no++;
  }
}

//This method is used to play a video which shows constructing graphs based on their sample path length. 
function scan(){
  if(step_no==11){
    // After the cuvette are inserted into the spectrophotometer, when the computer in pressed to scan, depending on the cuvette choosen appropriate graph video is obtained.
    $(".data_validation, #instruction_bkgd, #graph_instruction").css("visibility", "visible");
    if(choosen_solution == "potassium"){
      document.getElementById("graph_instruction").innerHTML = "स्क्रीन पर वर्णक्रमीय स्कैन की तरंग दैर्ध्य रेंज दर्ज करें। K2Cr2O7 के लिए: प्रारंभ: 700 एनएम अंत: 325 एनएम। वास्तविक ऑपरेशन में, नमूना के लिए घटना प्रकाश की तरंग दैर्ध्य रेंज को चुना जाता है और तरंग दैर्ध्य स्कैन को कंप्यूटर सॉफ्टवेयर के माध्यम से चलाया जाता है। एक स्कैन को एब्जॉर्बेंस (ए) या ट्रांसमिटेंस (% टी) मोड में चला सकते हैं। तरंग दैर्ध्य स्कैन को चलाने के लिए माप सेट-अप स्क्रीन पर हरे 'प्रारंभ' बटन पर क्लिक करें। तरंग दैर्ध्य स्कैन का निरीक्षण करें। यदि स्पेक्ट्रोफोटोमीटर एक एकल बीम उपकरण है, तो पहले नमूना रिक्त या संदर्भ एक क्युवेट में लिया जाता है और नमूना के बाद तरंग दैर्ध्य स्कैन चलाया जाता है। संबंधित तरंगदैर्ध्य के लिए नमूना डेटा से संदर्भ डेटा को घटाना है";
      step_no++;
    }else if(choosen_solution == "caffeine"){
      document.getElementById("graph_instruction").innerHTML = "स्क्रीन पर वर्णक्रमीय स्कैन की तरंग दैर्ध्य रेंज दर्ज करें। कैफीन के लिए: प्रारंभ: 590 एनएम अंत: 290 एनएम। वास्तविक ऑपरेशन में, नमूना के लिए घटना प्रकाश की तरंग दैर्ध्य रेंज को चुना जाता है और तरंग दैर्ध्य स्कैन को कंप्यूटर सॉफ्टवेयर के माध्यम से चलाया जाता है। एक स्कैन को एब्जॉर्बेंस (ए) या ट्रांसमिटेंस (% टी) मोड में चला सकते हैं। तरंग दैर्ध्य स्कैन को चलाने के लिए माप सेट-अप स्क्रीन पर हरे 'प्रारंभ' बटन पर क्लिक करें। तरंग दैर्ध्य स्कैन का निरीक्षण करें। यदि स्पेक्ट्रोफोटोमीटर एक एकल बीम उपकरण है, तो पहले नमूना रिक्त या संदर्भ एक क्युवेट में लिया जाता है और नमूना के बाद तरंग दैर्ध्य स्कैन चलाया जाता है। संबंधित तरंगदैर्ध्य के लिए नमूना डेटा से संदर्भ डेटा को घटाना है";
      step_no++;
    }
    cursorPointers('comp_trans_button', 'start_btn');
  }
}

//function called for the data valiadtion to display the graph.
function startBtn(){
  input1 = document.getElementById("input1").value;
  input2 = document.getElementById("input2").value;
  video1 = document.getElementById("video1");
  video2 = document.getElementById("video2");
  if(choosen_solution== "potassium" &&  input1 == 700 && input2 == 325){
    $(".data_validation").css("visibility", "hidden");
    $("#scan, #video1").css("visibility", "visible");
    document.getElementById("graph_instruction").innerHTML = "चरण-संख्या 14: वर्णक्रमीय स्केल पूरा होने पर बंद बटन पर क्लिक करें। वास्तविक ऑपरेशन में, स्कैन डेटा को कंप्यूटर में संग्रहीत किया जाता है। उपकरण डेटा संग्रहीत करता है और इसलिए नमूना फ़ाइल नाम के लिए पूछता है। डेटा सहेजने के लिए एक फ़ाइल नाम दर्ज करता है।";
    video1.play();
    step_no++;
    cursorPointers('start_btn', 'disposegraph');
  }
  else if(choosen_solution == "caffeine" && input1 == 590 && input2 == 290){
    $(".data_validation").css("visibility", "hidden");
    $("#scan, #video2").css("visibility", "visible");
    document.getElementById("graph_instruction").innerHTML = "चरण-संख्या 14: वर्णक्रमीय स्केल पूरा होने पर बंद बटन पर क्लिक करें। वास्तविक ऑपरेशन में, स्कैन डेटा को कंप्यूटर में संग्रहीत किया जाता है। उपकरण डेटा संग्रहीत करता है और इसलिए नमूना फ़ाइल नाम के लिए पूछता है। डेटा सहेजने के लिए एक फ़ाइल नाम दर्ज करता है।";
    video2.play();
    step_no++;
    cursorPointers('start_btn', 'disposegraph');
  }
  else{
    alert("प्रारंभ और समाप्ति मान दर्ज करें और विंडो के शीर्ष पर प्रारंभ बटन पर क्लिक करें");
  }
}

//This method makes the graph hidden once the video is played and close is pressed. 
function disposeGraph(){
  if(step_no == 13) {
    // After playing the graph plotting video close option is choosen, the background scan image and the video is made hidden.
    $('.video, .common').css('visibility', 'hidden');
    if(choosen_solution == "potassium") {
      document.getElementById('demo').innerHTML = 'दूसरे नमूने के लिए माप दोहराने के लिए रीसेट करें।';
    }
    else if(choosen_solution == "caffeine") {
      document.getElementById('demo').innerHTML = 'डेटा टैब पर क्लिक करके डेटा एकत्र करें।';
        }
    }   
}
