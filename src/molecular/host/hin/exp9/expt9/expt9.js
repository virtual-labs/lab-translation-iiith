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
    var turnon; // It is used to store the spectrometer table images.
    var type_of_movement;// Indicates upward or downward motion
    var step_no=0; /* This variable is used to perform all the actions on images in the required sequence. 
                      Depending on the value of this variable the part of the method is called.*/
    var count = 0; /* This variable is used to perform the actions on the objects without distortions.
                      i.e., It make sures that one or more actions are not performed at a time. */

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
  document.getElementById("demo").innerHTML = "चरण संख्या 1: निम्नलिखित समाधान तैयार करें: (i) 0.5 ग्राम / एल मिथाइल नारंगी समाधान 100 एमएल आसुत जल में 0.05 ग्राम मिथाइल नारंगी भंग करके; (ii) ०.२ एम डिसोडियम हाइड्रोजन ऑर्थोफोस्फेट (ना <sub> २ </ sub> एचपीओ <sub> ४ </ sub>) घोल ५.६ g ग्राम ना <sub> २ </ sub> एचपीओ <sub> ४ / 0.2 </sub> 200 एमएल आसुत जल में; और (iii) 500 एमएल डिस्टिल्ड वॉटर में 9.61 ग्राम साइट्रिक एसिड को भंग करके 0.1 एम साइट्रिक एसिड समाधान। Na <sub> 2 </ sub> HPO <sub> 4 </ sub> समाधान की अलग-अलग मात्राओं को मिलाकर आठ बफर समाधान तैयार करें और साइट्रिक एसिड समाधान तालिका 1 में दिया गया है। प्रत्येक बफर समाधान को 25 के दो समान भागों में विभाजित करें एमएल मात्रा। प्रत्येक बफर समाधान के एक 25 एमएल हिस्से में मिथाइल नारंगी समाधान के 0.5 एमएल जोड़ें। मिथाइल ऑरेंज इंडिकेटर वाले बफर सॉल्यूशंस के एब्सॉर्बेंस माप को संदर्भ या नमूना रिक्त के रूप में बफर के अन्य भागों के खिलाफ किया जाना है। ये नमूना समाधान एक चयन पैमाने पर दिखाए जाते हैं। कंप्यूटर और साधन शक्तियों पर स्विच करें; साधन के 'वार्म-अप' के लिए 30 मिनट तक प्रतीक्षा करें।";
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

//This function is used to add click events to elements
function addclickEvents(){
    document.getElementById("reset_btn").addEventListener("click", function() {
            window.location.reload();
    }, false);
    document.getElementById("data_button").addEventListener("click", function() {
            popitup("slideshow.html");
    }, false);
    document.getElementById("flask").addEventListener("click", function() {
            moveFlask();
    }, false);
    document.getElementById("micro_pipette").addEventListener("click", function() {
            moveMicropipette();
    }, false);
    document.getElementById("pipette").addEventListener("click", function() {
            movePipette();
    }, false);
    document.getElementById("beaker").addEventListener("click", function() {
            moveBeaker();
    }, false);
    document.getElementById("cuvette").addEventListener("click", function() {
            moveCuvette();
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

// This function is a general method used to move images from initial position to final position.
function moveImage(){
    id = setInterval(frame, 5);
    function frame() {
        if(type_of_movement == 0){
            if (initial_top > final_top) {
                clearInterval(id);
                count++;
            } else {
                initial_top+=step_top; 
                initial_left+=step_left;
                elem.style.top = initial_top + 'px'; 
                elem.style.left = initial_left + 'px'; 
            }
        }
        else if(type_of_movement == 1){
            if (initial_top < final_top) {
                clearInterval(id);
                count++;
            } else {
                initial_top+=step_top; 
                initial_left+=step_left;
                elem.style.top = initial_top + 'px'; 
                elem.style.left = initial_left + 'px'; 
                
            }
        }
    } 
}

// This is the function called when beaker is clicked. 
// It moves the beaker from the shelf to the table.
function moveBeaker()
{
  if(step_no == 1){
    // Get image
    elem = document.getElementById("beaker"); 
    //Detect the current position of the beaker .
    initial_top = Math.round($('#beaker').position().top);
    initial_left = Math.round($('#beaker').position().left);
    // Initialise all the values for the motion of the images.
    final_top = 325;
    step_top = 1;
    step_left = 0;
    type_of_movement = 0;
    // Move the beaker image to desired position.
    moveImage();
    // Change to next intsruction to be followed.
    document.getElementById("slider").disabled = true;
    document.getElementById("slider").style.opacity ="0.4";
    document.getElementById("demo").innerHTML = "चरण संख्या 3: प्रयोग की मेज पर ले जाने के लिए बफर समाधान पर क्लिक करें।";
    cursorPointers('beaker', 'flask');
    step_no++;
  }
}

// This is the function called when buffer solution flask is clicked.
// When this function is called for the first time the flask moves from shelf to the table.
// When this function is called for the second time pourFlask() method is called.   
function moveFlask() {
  if (step_no == 2 && count == 1){
    // Get image
    elem = document.getElementById("flask");
    // Detect the current position of the flask. 
    initial_top = Math.round($('#flask').position().top);
    initial_left = Math.round($('#flask').position().left);
    // Initialise all the values for the motion of the images.
    final_top = 315;
    step_top = 1;
    step_left = 0.5;
    type_of_movement = 0;
    // Move the flask image to desired position.
    moveImage();
    // Change to next intsruction to be followed.
    document.getElementById("demo").innerHTML = "चरण संख्या 4: साफ, सूखे बीकर में घोल डालने के लिए बफर समाधान पर क्लिक करें।";
    step_no++;
  }
  else if(step_no==3 && count == 2){
    document.getElementById("flask").onclick = pourFlask();
    document.getElementById("demo").innerHTML = "चरण संख्या 5: वॉल्यूमेट्रिक फ्लास्क (शेल्फ पर रखा गया) से 0.5 मिलीलीटर मिथाइलोरेंज समाधान इकट्ठा करने के लिए बड़े पिपेट पर क्लिक करें।";
    step_no++;
  }
}

// This method moves the flask upwards and then calls changeFlask() and moveFlaskback().
function pourFlask() {
    // Get image
    elem = document.getElementById("flask");
    // Detect the current position of the flask. 
    initial_top = Math.round($('#flask').position().top);
    initial_left = Math.round($('#flask').position().left);
    // Initialise all the values for the motion of the images.
    final_top = 250;
    step_top = -0.75;
    step_left = 0.57;
    type_of_movement = 1;
    // Move the flask image to desired location. 
    moveImage();
    // Call changeFlask() at a regular interval of 50 ms.
    id1 = setInterval(changeFlask,50);
    // Call moveFlaskBack() to move it back to the table.
    setTimeout(moveFlaskBack,1725);
}

/* This method provides rotational motion along with the solution pouring effect to the flask and filling 
effect to the beaker. It consists of a set of 30 images flask[] changed continuously.*/
function changeFlask(){
  img = document.getElementById("flask");
  var flask =[];
  flask[0] = "images/flask1.png";
  flask[1] = "images/flask2.png";
  flask[2] = "images/flask3.png";
  flask[3] = "images/flask4.png";
  flask[4] = "images/flask5.png";
  flask[5] = "images/flask6.png";
  flask[6] = "images/flask7.png";
  flask[7] = "images/flask8.png";
  flask[8] = "images/flask9.png";
  flask[9] = "images/flask10.png";
  flask[10] = "images/flask11.png";
  flask[11] = "images/flask12.png";
  flask[12] = "images/flask13.png";
  flask[13] = "images/flask14.png";
  flask[14] = "images/flask15.png";
  flask[15] = "images/flask16.png";
  flask[16] = "images/flask17.png";
  flask[17] = "images/flask18.png";
  flask[18] = "images/flask19.png";
  flask[19] = "images/flask20.png";
  flask[20] = "images/flask21.png";
  flask[21] = "images/flask22.png";
  flask[22] = "images/flask22.png";
  flask[23] = "images/flask22.png";
  flask[24] = "images/flask22.png";
  flask[25] = "images/flask23.png";
  flask[26] = "images/flask24.png";
  flask[27] = "images/flask25.png";
  flask[28] = "images/flask26.png";
  flask[29] = "images/flask26.png";

  if(y < flask.length){
    img.src = flask[y];
  }
  y++;
  if (y == 3){
    img.style.width = '11%';
  }
  else if (y == 16){
    img.style.width = '15%';
  }
  else if (y == 25){
    img.style.width = '14%';
  }
  else if(y == 30){
    clearInterval(id1);    
  }
}

// This method helps in moving back the empty flask back to the table
function moveFlaskBack() {
  // Get image
  elem = document.getElementById("flask");
  // Detect the current position of the flask.
  initial_top = Math.round($('#flask').position().top);
  initial_left = Math.round($('#flask').position().left);
  //Initialise all the values for the motion of the images.
  final_top = 315;
  step_top = 1;
  step_left = -1;
  type_of_movement = 0;
  // Move it back to the table
  elem.style.width = "8%";
  // Change the image to an empty flask image
  elem.src= "images/empty_flask.png"; 
  moveImage();
  cursorPointers('flask', 'pipette');
}

// This function is called when bigger pipette is clicked.
// When it is called for the first time, pipette is moved to the methyl orange flask.
/*When it is called for the second time, pipette extracts the solution.
(Here the pipette images will be changed.)*/
// When it is called for the third time, pippette is moved down to the beaker to add solution into it.
// When it is called for the fourth time, pipete image gets changed and moves back to the shelf.
function movePipette() {
  if (step_no == 4 && count == 4){
    // Get image
    elem = document.getElementById("pipette"); 
    // Detect the current position of the pipette.
    initial_top = Math.round($('#pipette').position().top);
    initial_left = Math.round($('#pipette').position().left);
    // Initialise all the values for the motion of the images.
    final_top = 0;
    step_top = -0.05;
    step_left = .65;
    type_of_movement = 1;
    // Move it to the methyl orange solution
    moveImage();
    // Change to next instruction to be followed. 
    document.getElementById("demo").innerHTML = "चरण संख्या 5: वॉल्यूमेट्रिक फ्लास्क (शेल्फ पर रखा गया) से 0.5 मिलीलीटर मिथाइलोरेंज समाधान इकट्ठा करने के लिए बड़े पिपेट पर क्लिक करें।";
    step_no++;
  }
  else if(step_no==5 && count == 5){
    setTimeout(function(){
      elem.src = "images/pipette1_filled.png";
      document.getElementById('orange_flask').src = "images/half-filled-flask.png";
      count++;
    }, 500);
    // Change to next instruction to be followed.
    document.getElementById("demo").innerHTML = "चरण संख्या 6: फिर से बड़े पिपेट पर क्लिक करें, नीचे की मेज पर बीकर के लिए 0.5 मिली मिथाइलरेंज समाधान जोड़ें।";
    step_no++;
  }
  else if(step_no==6 && count == 6){
    // Get images
    elem = document.getElementById("pipette");
    // Detect the current position of the pipette.
    initial_top = Math.round($('#pipette').position().top);
    initial_left = Math.round($('#pipette').position().left);
    // Initialise all the values for the motion of the images.
    final_top = 268;
    step_top = 1;
    step_left = -0.5;
    type_of_movement = 0;
    // Move it to the beaker
    moveImage();
    // Change to next instruction to be followed.
    document.getElementById("demo").innerHTML = "चरण संख्या 6: फिर से बड़े पिपेट पर क्लिक करें, नीचे की मेज पर बीकर के लिए 0.5 मिली मिथाइलरेंज समाधान जोड़ें।";
    step_no++;
  }
  else if(step_no==7 && count == 7){
    img = document.getElementById("beaker");
    conc_value = document.getElementById('slider').value;
    if(conc_value == 0) {
      img.src = "images/beaker_red.png";
    }
    else if(conc_value == 1) {
      img.src = "images/beaker_red.png";
    }
    else if(conc_value == 2) {
      img.src = "images/beaker_red.png";
    }
    else if(conc_value == 3) {
      img.src = "images/beakerph34.png";
    }
    else if(conc_value == 4) {
      img.src = "images/beakerph38.png";
    }
    else if(conc_value == 5) {
      img.src = "images/beakerph42.png";
    }
    else if(conc_value == 6) {
      img.src = "images/beaker_yellow.png";
    }
    else if(conc_value == 7) {
      img.src = "images/beaker_yellow.png";
    }
    img1 = document.getElementById("pipette");
    img1.src = "images/pipette1.png";
    // Get images
    elem = document.getElementById("pipette");
    // Detect the current position of the pipette.
    initial_top = Math.round($('#pipette').position().top);
    initial_left = Math.round($('#pipette').position().left);
    // Initialise all the values for the motion of the images.
    final_top = 18;
    step_top = -1;
    step_left = -.30;
    type_of_movement = 1;
    // Move it to the shelf
    moveImage();
    // Change to next instruction to be followed.
    document.getElementById("demo").innerHTML = "चरण संख्या 7: बीकर से उचित मात्रा में घोल एकत्र करने के लिए माइक्रोप्रिपेट पर क्लिक करें।";
    cursorPointers('pipette', 'micro_pipette');
    step_no++;
  }
}

// This function is called when micro pipette is clicked.
// When it is called for the first time pipette is moved from the shelf to the beaker on the table.
/*When it is called for the second time, pipette extracts the solution.
(Here the pipette images will be changed.)*/
//When it is called for the third time, pipette is moved to the cuvette.
//When it is called for the fourth time, pipete and cuvette image gets changed and pipette moves back to the shelf.
function moveMicropipette() {
    if(step_no == 8 && count == 8){
      // Get image
      elem = document.getElementById("micro_pipette"); 
      // Detect the current position of the pipette.
      initial_top = Math.round($('#micro_pipette').position().top);
      initial_left = Math.round($('#micro_pipette').position().left);
      // Initialise all the values for the motion of the images.
      final_top = 274;
      step_top = 1;
      step_left = 0.52;
      type_of_movement = 0;
      // Move it to the beaker
      moveImage();
      step_no++;
  }
  else if(step_no==9 && count == 9){
      img = document.getElementById("micro_pipette");
      img.src = "images/micro_pipette_filled.png";
    // Change to next instruction to be followed.
    document.getElementById("demo").innerHTML = "स्टेप नंबर 8: इस पर क्लिक करके क्युवेट लें";
      cursorPointers('micro_pipette', 'cuvette')
      step_no++;
  }
  else if(step_no==11 && count == 10){
    // Get images
    elem = document.getElementById("micro_pipette");
    // Detect the current position of the pipette.
    initial_top = Math.round($('#micro_pipette').position().top);
    initial_left = Math.round($('#micro_pipette').position().left);
    // Initialise all the values for the motion of the images.
    final_top = 267;
    step_top = -.052;
    step_left = -0.5;
    type_of_movement = 1;
    // Move it to the cuvette
    moveImage();
    step_no++;
  }
  else if(step_no==12 && count == 11){
    img = document.getElementById("micro_pipette");
    img.src = "images/micro_pipette.png";
    img1 = document.getElementById("cuvette");
    conc_value = document.getElementById('slider').value;
    if(conc_value == 0) {
      img1.src = "images/cuvette_red.png";
    }
    else if(conc_value == 1) {
      img1.src = "images/cuvette_red.png";
    }
    else if(conc_value == 2) {
      img1.src = "images/cuvette_red.png";
    }
    else if(conc_value == 3) {
      img1.src = "images/cuvetteph34.png";
    }
    else if(conc_value == 4) {
      img1.src = "images/cuvetteph38.png";
    }
    else if(conc_value == 5) {
      img1.src = "images/cuvetteph42.png";
    }
    else if(conc_value == 6) {
      img1.src = "images/cuvette_yellow.png";
    }
    else if(conc_value == 7) {
      img1.src = "images/cuvette_yellow.png";
    }
    // Get images
    elem = document.getElementById("micro_pipette");
    // Detect the current position of the flask.
    initial_top = Math.round($('#micro_pipette').position().top);
    initial_left = Math.round($('#micro_pipette').position().left);
    // Initialise all the values for the motion of the images.
    final_top = 30;
    step_top = -2;   
    step_left = -.3;
    type_of_movement = 1;
    // Move it to the shelf
    moveImage();
    document.getElementById("demo").innerHTML = "चरण संख्या 10: इसे खोलने के लिए स्पेक्ट्रोफोटोमीटर के ढक्कन पर क्लिक करें।";
    cursorPointers('micro_pipette', 'spectrolid_trans_button');
    step_no++;
  }
}


// This function is called cuvette is clicked.
// When it is called for the first time cuvette is moved from the shelf onto the table.
// When this method is called for the second time the cuvette is moved upto the spectrophotometer.
function moveCuvette() {
  if (step_no == 10) {
    // get the image of the shelf
    elem = document.getElementById("cuvette"); 
    // Move the cuvette from the shelf to the table
    // Detect the current position of the cuvette.
    initial_top = Math.round($('#cuvette').position().top);
    initial_left = Math.round($('#cuvette').position().left);
    // Initialise all the values for the motion of the images.
    final_top = 345;
    step_top = .75;
    step_left = -0.43;
    type_of_movement = 0;
    // Move it to the table.
    moveImage();
    // Change the next instruction to be followed.
    document.getElementById("demo").innerHTML = "चरण संख्या 9: क्युवेट पर क्लिक करके माइक्रोवेट से क्युवेट में घोल डालें (वास्तविक माप में क्युवेट इसकी मात्रा के दो-तिहाई से भर जाता है)";
    cursorPointers('cuvette', 'micro_pipette');
    step_no++;
  }
  else if(step_no == 14){
    // Depending on the cuvette choosen get images accordingly.
    elem = document.getElementById("cuvette"); 
    // Move the cuvette from the table to the socket in the spectrophotmeter.
    // Detect the current position of the cuvette.
    initial_top = Math.round($('#cuvette').position().top);
    initial_left = Math.round($('#cuvette').position().left);
    // Initialise all the values for the motion of the images.
    final_top = 221;
    step_top = -0.5;
    step_left = -1.6;
    type_of_movement = 1;
    // Move it to a position over the spectrophotometer.
    moveImage();
    // After 1500ms call moveDown() method.
    setTimeout("moveDown()",1500);
    document.getElementById("demo").innerHTML = "चरण संख्या 12: इसे बंद करने के लिए स्पेक्ट्रोफोटोमीटर के ढक्कन पर क्लिक करें।";
    step_no++;
  }
}

// This method is used to move the cuvette downwards into the spectrophotometer.
function moveDown(){
    // Detect the current position of the flask.
    initial_top = Math.round($('#cuvette').position().top);
    initial_left = Math.round($('#cuvette').position().left);
    // Initialise all the values for the motion of the images.
    final_top = 292;
    step_top = 1;
    step_left = 0;
    type_of_movement = 0;
    // Move it into the spectrophotometer.
    moveImage();
    // Call extraCuvette() method which moves the reference cuvette into the spectrophotometer.
    setTimeout("extraCuvette()",1500);
}

// This method is used to move the reference cuvette into the spectrophptometer. 
function extraCuvette(){
    // Get the transparent image and replace it with a reference cuvette image and move it down into the spectrophotometer.
    $('#ref_cuvette').attr('src', 'images/cuvette_filled_water.png'); 
    document.getElementById("reference").style.visibility ="visible";
    elem = document.getElementById("ref_cuvette"); 
    // Detect the current position of the flask.
    initial_top = Math.round($('#ref_cuvette').position().top);
    initial_left = Math.round($('#ref_cuvette').position().left);
    // Initialise all the values for the motion of the images.
    final_top = 42;
    step_top = 0.5;
    step_left = -1.38;
    type_of_movement = 0;
    // Move it into the spectrophotometer.
    moveImage();
    // After 2000ms make the sample cuvette and the referance cuvette hidden. 
    setTimeout(function(){
        $('#ref_cuvette, #cuvette, #reference').css('visibility', 'hidden');
        cursorPointers('cuvette', 'spectrolid_trans_button');
        count++;
    },2000);
}

// This function is called when spectrometer lid is clicked.
// First time its called to open the spectrophotometer
// Second time its called to close the spectrophotometer
function spectrophotometer(){
  if (step_no == 13 && count ==12){
    // Replace the spectrophotometer images with the open spectrophotometer images
    images[0] = "images/spec_open.png";
    images[1] = "images/spec_open.png";
    document.getElementById("demo").innerHTML = "चरण संख्या 11: नमूना धारक में रखने के लिए क्युवेट पर क्लिक करें। इस माप में पानी को नमूना रिक्त या संदर्भ के रूप में उपयोग करना है। यहाँ एक डबल बीम स्पेक्ट्रोफोटोमीटर दिखाया गया है। इस मामले में, कोई नमूना धारक (अक्सर सामने वाला) और नमूना बैंक या संदर्भ धारक (अक्सर पीछे वाला) में एक साथ नमूना रख सकता है।";
    cursorPointers('spectrolid_trans_button', 'cuvette');
    step_no++;
  }
  else if(step_no == 15 && count == 16){
    // Replace the spectrophotometer images with the closed spectrophotmeter images.
    images[0] = "images/spec_close.png";
    images[1] = "images/spec_close1.png";
    document.getElementById("demo").innerHTML = "चरण संख्या 13: कंप्यूटर मॉनिटर पर क्लिक करके तरंग दैर्ध्य स्कैन चलाएं और तरंग दैर्ध्य स्कैन का निरीक्षण करें।";
    cursorPointers('spectrolid_trans_button', 'comp_trans_button');
    step_no++;
  }
}

//This method is called to display the graph image based on cuvette chosen by clicking on computer screen.
function scan() {
    if(step_no==16){
        conc_value = document.getElementById('slider').value;
        if(conc_value==0){
            document.getElementById('scanimage1').style.visibility = 'visible';
        }
        else if(conc_value==1){
            document.getElementById('scanimage2').style.visibility = 'visible';
        }
        else if(conc_value==2){
            document.getElementById('scanimage3').style.visibility = 'visible';
        }
        else if(conc_value==3){
            document.getElementById('scanimage4').style.visibility = 'visible';
        }
        else if(conc_value==4){
            document.getElementById('scanimage5').style.visibility = 'visible';
        }
        else if(conc_value==5){
            document.getElementById('scanimage6').style.visibility = 'visible';
        }
        else if(conc_value==6){
            document.getElementById('scanimage7').style.visibility = 'visible';
        }
        else if(conc_value==7){
            document.getElementById('scanimage8').style.visibility = 'visible';
        }
        // Get the scan image background.                                                               }
        document.getElementById('scan').style.visibility = 'visible';
        cursorPointers('comp_trans_button','scan_btn');
        step_no++;
    }
}

// This method is used to play a video which shows constructing graphs based on the concentration values. 
function scanGraph(){
    if(step_no==17){
        /*After the cuvette are inserted into the spectrophotometer, when the computer in pressed to scan, 
        depending on the value choosen from the slider appropriate graph video is obtained.*/
        if(conc_value==0){
            var vid = document.getElementById("graph1");
        }
        else if(conc_value==1){
            var vid = document.getElementById("graph2");
        }
        else if(conc_value==2){
            var vid = document.getElementById("graph3");
        }
        else if(conc_value==3){
            var vid = document.getElementById("graph4");
        }
        else if(conc_value==4){
            var vid = document.getElementById("graph5");
        }
        else if(conc_value==5){
            var vid = document.getElementById("graph6");
        }
        else if(conc_value==6){
            var vid = document.getElementById("graph7");
        }
        else if(conc_value==7){
            var vid = document.getElementById("graph8");
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
    if(step_no==18){
        /*After playing the graph plotting video close option is choosen, the background scan image and the 
        video is made hidden.*/
        $('#scan, .video').css('visibility', 'hidden');
        document.getElementById('disposegraph').style.cursor = 'default';
      document.getElementById('demo').innerHTML= 'नया माप शुरू करने के लिए रीसेट बटन पर क्लिक करें। अगले उच्च एकाग्रता और इतने पर माप को फिर से खोलें।';
    }
}
