// This file contains all general functions used of the experiment
    var images = []; /* Two images that are alternated in ordered to get the blinking effect of the 
                       spectrophotometer. */
    images[0] = "images/spec_with_red.png";
    images[1] = "images/spec_with_red.png";
    var x = 0;
    var y = 0;
    var turnon; //this variable is used to store the spectrometer table images.
    // Variables necessary to obtain motion of all the images
    var initial_top;
    var initial_left;
    var final_top;
    var final_left;
    var step;
    var elem;
    var img,img1;
    var id,id1;
    var turnon; //It is used to store the spectrometer table images.
    var type_of_movement;// Indicates upward or downward motion
    var step_no=0; /* This variable is used to perform all the actions on images in the required sequence. 
                      Depending on the value of this variable the part of the method is called.*/
    var count = 0; /* This variable is used to perform the actions on the objects without distortions.
                      i.e., It make sures that one or more actions are not performed at a time. */
    var choosen_solution= "Coumarin343"; // default choosen solution.
    
/*This method is called when the page is loaded. *
   First function helps in providing basic functionality to manual button and also sets the 
   first set of instructions.
   Second function adds click events to elements as soon as the page loads.
   Third function adds mouse events to elements as soon as the page loads. */
window.onload = function(){ 
    initial_function();
    addclickEvents();
    mouseEvents();
}

/*This method is called when the page is loaded. It helps in providing basic functionality to 
manual button and also sets the first set of instructions. */
function initial_function(){
  // Intial intrsuction to be followed
  document.getElementById("demo").innerHTML = "चरण संख्या 1: विश्लेषण किए जाने वाले समाधान ड्रॉप-डाउन मेनू से हटाए गए हैं। सॉल्यूशन कॉन्संट्रेशन एकाग्रता स्केल बार से चुने जाते हैं और पावर बटन पर क्लिक करने वाले इंस्ट्रूमेंट को चालू करते हैं और इंस्ट्रूमेंट के इनिशियलाइजेशन के लिए 30 मिनट तक इंतजार करते हैं।";
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

//This function is used to add click events to elements
function addclickEvents(){
    document.getElementById("reset_btn").addEventListener("click", function() {
            window.location.reload();
    }, false);
    document.getElementById("data_button").addEventListener("click", function() {
            popitup("slideshow.html");
    }, false);
    document.getElementById("solution").addEventListener("click", function() {
            setSolution();
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
            spectrophotometer();
    }, false);
    document.getElementById("power_trans_button").addEventListener("click", function() {
            changeImage(); showClock();
    }, false);
    document.getElementById("scan_btn").addEventListener("click", function() {
            scanGraph();
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

/*When user clicks on the Data button it redirects him to the page containing slideshow of the graphs 
obtained from different sample concentration values.*/
function popitup(url) {
    // Opens a new browser window called newwindow. url specifies the URL of the page to open.
    newwindow=window.open(url,'name','height=400,width=350',"_parent");
    // Sets focus to the new window if the focus is on the previous page.
    if (window.focus) {
        newwindow.focus()
    }
    return false;
}

/*Method is called when the solution is changed. change in solution changes the 
saturation of flask and scale range.*/
function setSolution() {
    $('#solution').change(function () {
        choosen_solution = $('#solution').val();
        if(choosen_solution =='Coumarin343'){
            document.getElementById('scale_image').src = "images/scale1.png";
            document.getElementById('flask').style.filter = 'saturate(100%)';
            document.getElementById('beaker').style.filter= 'saturate(100%)';
            document.getElementById('cuvette').style.filter= 'saturate(100%)';
            document.getElementById('scale').style.visibility = 'visible';
            document.getElementById('slider').value=0;
        }      
        else if(choosen_solution =='Coumarin6'){
            document.getElementById('scale_image').src = "images/scale2.png";
            document.getElementById('flask').style.filter = 'saturate(400%)';
            document.getElementById('beaker').style.filter= 'saturate(400%)';
            document.getElementById('cuvette').style.filter= 'saturate(400%)'; 
            document.getElementById('scale').style.visibility = 'visible';
            document.getElementById('slider').value=0;  
        }
        else if(choosen_solution == '1:1mixture') {
            document.getElementById('flask').style.filter = 'saturate(400%)';
            document.getElementById('beaker').style.filter= 'saturate(400%)';
            document.getElementById('cuvette').style.filter= 'saturate(400%)';
            document.getElementById('scale').style.visibility = 'hidden';
            document.getElementById('slider').value=0;
        }   
    });
}

//To disable and enable the cursor pointers on elements.
function cursorPointers(id1, id2){
    document.getElementById(id1).style.cursor = "default";
    document.getElementById(id2).style.cursor = "pointer";
}

//Call changeImage() method every 250ms 
function changeImage(){
    setInterval(turnOn, 250);
}

/*When the user switches on the spectrophotometer this method is called. Here the spectrophotometer image is 
changed continuously to give the blinking light effect. The two images that are swapped is stored in images[]*/
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
when this method is called they are made visible and the clock hand is made to rotate.*/  
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
        //After 3 secs dispose clock
        setTimeout("removeClock()",3000);
    }
}

// After 3 seconds of display of the timer the visibility of clock is changed back to hidden.
function removeClock() {
    $('#clockHand, #clockScreen').remove();
  //Change to next intsruction to be followed.
  document.getElementById("demo").innerHTML = "चरण संख्या 2: साफ, सूखे बीकर लेने के लिए बीकर पर क्लिक करें।";
    cursorPointers('power_trans_button', 'beaker');
}

// This function is called when spectrometer lid is clicked.
// First time its called to open the spectrophotometer
// Second time its called to close the spectrophotometer
function spectrophotometer(){
    if (step_no == 8 && count == 9){
        // Replace the spectrophotometer images with the open spectrophotometer images
        images[0] = "images/spec_open.png";
        images[1] = "images/spec_open.png";
      document.getElementById("demo").innerHTML = "चरण संख्या 9: नमूना धारक में रखने के लिए क्युवेट पर क्लिक करें। इस माप में पानी का उपयोग नमूना बैंक या संदर्भ के रूप में किया जाता है। यहां एक डबल बीम स्पेक्ट्रोफोटोमीटर दिखाया गया है। इस मामले में एक नमूना धारक (अक्सर सामने वाला) और नमूना बैंक या संदर्भ धारक (अक्सर वापस एक) में एक साथ नमूना रख सकते हैं।";
        step_no++;
        cursorPointers('spectrolid_trans_button', 'cuvette');
    }
    else if(step_no == 10 && count == 13){
        // Replace the spectrophotometer images with the closed spectrophotmeter images.
        images[0] = "images/spec_close.png";
        images[1] = "images/spec_close1.png";
      document.getElementById("demo").innerHTML = "चरण संख्या 10: कंप्यूटर मॉनिटर और फिर स्कैन बटन पर क्लिक करके तरंग दैर्ध्य स्कैन चलाएं और तरंग दैर्ध्य स्कैन का निरीक्षण करें";
        step_no++;
        cursorPointers('spectrolid_trans_button', 'comp_trans_button');
    }
}
    
//This method is called to display the graph image based on cuvette chosen by clicking on computer screen.
function scan() {
    if(step_no==11){
        conc_value = document.getElementById('slider').value;
        if(choosen_solution=='Coumarin343'&& conc_value==0){
            document.getElementById('scanimage1').style.visibility = 'visible';
        }
        else if(choosen_solution=='Coumarin343'&& conc_value==1){
            document.getElementById('scanimage2').style.visibility = 'visible';
        }
        else if(choosen_solution=='Coumarin343'&& conc_value==2){
            document.getElementById('scanimage3').style.visibility = 'visible';
        }
        else if(choosen_solution=='Coumarin343'&& conc_value==3){
            document.getElementById('scanimage4').style.visibility = 'visible';
        }
        else if(choosen_solution=='Coumarin343'&& conc_value==4){
            document.getElementById('scanimage5').style.visibility = 'visible';
        }
        else if(choosen_solution=='Coumarin6'&& conc_value==0){
            document.getElementById('scanimage6').style.visibility = 'visible';
        }
        else if(choosen_solution=='Coumarin6'&& conc_value==1){
            document.getElementById('scanimage7').style.visibility = 'visible';
        }
        else if(choosen_solution=='Coumarin6'&& conc_value==2){
            document.getElementById('scanimage8').style.visibility = 'visible';
        }
        else if(choosen_solution=='Coumarin6'&& conc_value==3){
            document.getElementById('scanimage9').style.visibility = 'visible';
        }
        else if(choosen_solution=='Coumarin6'&& conc_value==4){
            document.getElementById('scanimage10').style.visibility = 'visible';
        }
        else if(choosen_solution=='1:1mixture'){
            document.getElementById('scanimage11').style.visibility = 'visible';
        }
        // Get the scan image background.                                                               }
        document.getElementById('scan').style.visibility = 'visible';
        cursorPointers('comp_trans_button','scan_btn');
        step_no++;
    }
}

// This method is used to play a video which shows constructing graphs based on the concentration values. 
function scanGraph(){
    if(step_no==12){
        /*After the cuvette are inserted into the spectrophotometer, when the computer is pressed to scan, 
        depending on the value choosen from the slider appropriate graph video is obtained.*/
        conc_value = document.getElementById('slider').value;
        if(choosen_solution=='Coumarin343'&& conc_value==0){
            vid = document.getElementById('graph1');
        }
        else if(choosen_solution=='Coumarin343'&& conc_value==1){
            vid = document.getElementById('graph2');
        }
        else if(choosen_solution=='Coumarin343'&& conc_value==2){
            vid = document.getElementById('graph3');
        }
        else if(choosen_solution=='Coumarin343'&& conc_value==3){
            vid = document.getElementById('graph4');
        }
        else if(choosen_solution=='Coumarin343'&& conc_value==4){
            vid = document.getElementById('graph5');
        }
        else if(choosen_solution=='Coumarin6'&& conc_value==0){
            vid = document.getElementById('graph6');
        }
        else if(choosen_solution=='Coumarin6'&& conc_value==1){
            vid = document.getElementById('graph7');
        }
        else if(choosen_solution=='Coumarin6'&& conc_value==2){
            vid = document.getElementById('graph8');
        }
        else if(choosen_solution=='Coumarin6'&& conc_value==3){
            vid = document.getElementById('graph9');
        }
        else if(choosen_solution=='Coumarin6'&& conc_value==4){
            vid = document.getElementById('graph10');
        }
        else if(choosen_solution=='1:1mixture'){
            vid = document.getElementById('graph11');
        }
        $(".scanimage").css('visibility', 'hidden');
        // make the video obtained visible.
        vid.style.visibility='visible';
        //play the video.
        vid.play(); 
        cursorPointers('scan_btn', 'disposegraph');
        step_no++;
    }
}

//This method makes the graph hidden once the video is played and close is pressed. 
function disposeGraph(){
    if(step_no==13){
        /*After playing the graph plotting video close option is choosen, the background scan image and the 
        video is made hidden.*/
        $('#scan, .video').css('visibility', 'hidden');
        document.getElementById('disposegraph').style.cursor = 'default';
      document.getElementById('demo').innerHTML= 'नया माप शुरू करने के लिए रीसेट बटन पर क्लिक करें। अगले उच्च एकाग्रता और इतने पर माप को फिर से खोलें।';
    }
}
