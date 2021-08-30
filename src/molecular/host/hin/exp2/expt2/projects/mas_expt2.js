// This file contains all general functions used in the experiment
    var images = []; // Two image-specific that are alternated in ordered to get the blinking effect of the spectrophotometer
    images[0] = "image-specific/spec_with_red.png";
    images[1] = "image-specific/spec_with_red.png";
    var x = 0;
    var y = 0;
    // Variables necessary to obtain motion of all the image-specific
    var initial_top;
    var initial_left;
    var final_top;
    var final_left;
    var step;
    var elem;
    var img,img1;
    var id,id1;
    var solution;
    var type_of_movement;// Indicates upward or downward motion
    var turnon; // It is used to store the spectrometer table image.
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

/*This method is called when the page is loaded. It helps in providing basic functionality to 
manual button and also sets the first set of instructions. */
function initial_function(){
  document.getElementById("demo").innerHTML = "चरण-नंबर 1: सॉल्वैंट्स में पांच 1 x 10 <sup> -5 </ sup> M Coumarin-१३ 1 समाधान तैयार करें: साइक्लोहेक्सेन, डाइऑक्साने, एसिटोनिट्राइल, एथिल अल्कोहल और एथिलीन ग्लाइकॉल। इस तरह के पतला समाधान 1 x 10 <sup> -4 </ sup> M स्टॉक समाधान से संबंधित सॉल्वैंट्स में कमजोर पड़ने के माध्यम से तैयार किए जा सकते हैं। यहां विभिन्न सॉल्वैंट्स में समाधान एक विलायक चयन बार पर दिखाए जाते हैं। एक विशेष समाधान लेने के लिए, विलायक चयन पट्टी पर उपयुक्त विलायक पर क्लिक करें और फिर समाधान युक्त वॉल्यूम फ्लास्क पर क्लिक करें।";
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

function popitup(url) {
  // Opens a new browser window called newwindow. url specifies the URL of the page to open.
  newwindow=window.open(url,'name','height=300,width=250',"_parent");
  // Sets focus to the new window if the focus is on the previous page.
    if (window.focus) {
      newwindow.focus();
    }
    return false;
}

//This is used to select the solution from the selection bar by clicking on the slider.
function setSolution(){
      solution = document.getElementById("slider").value;
      if(solution == 0){
        document.getElementById("solution_name").src = "image-specific/solution.png";
      }
      else if(solution == 1){
        document.getElementById("solution_name").src = "image-specific/solution1.png";
      }
      else if(solution == 2){
        document.getElementById("solution_name").src = "image-specific/solution2.png";
      }
      else if(solution == 3){
        document.getElementById("solution_name").src = "image-specific/solution3.png";
      }
      else if(solution == 4){
        document.getElementById("solution_name").src = "image-specific/solution4.png";
      }
      document.getElementById("round-bottom-flask").src = "image-specific/filled-round-bottom-flask.png";
  document.getElementById("demo").innerHTML = "चरण-संख्या 2: समाधान युक्त वॉल्यूम फ्लास्क पर क्लिक करें।";
}

//This function is used to add click events to elements
function addclickEvents(){
    document.getElementById("reset_btn").addEventListener("click", function() {
            window.location.reload();
    }, false);
    document.getElementById("data_button").addEventListener("click", function() {
            popitup("slideshow.html");
    }, false);
    document.getElementById("slider").addEventListener("click", function() {
            setSolution();
    }, false);
    document.getElementById("round-bottom-flask").addEventListener("click", function() {
            moveFlask();
    }, false);
    document.getElementById("pipette").addEventListener("click", function() {
            rotatePipette();
    }, false);
    document.getElementById("quartz_cuvette").addEventListener("click", function() {
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
    document.getElementById("start").addEventListener("click", function() {
            showInstruction();
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
        this.src='image-specific/hover_manual.png';
    });
    document.getElementById("manual_button").addEventListener("mouseout", function(){
        this.src='image-specific/manual_button.png';
    });
    document.getElementById("data_button").addEventListener("mouseover", function(){
        this.src='image-specific/hover_data.png';
    });
    document.getElementById("data_button").addEventListener("mouseout", function(){
        this.src='image-specific/data_button.png';
    });
}

// This function is a general method used to move image-specific from initial position to final position.
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

//To disable and enable the cursor pointers on elements.
function cursorPointers(id1, id2){
    document.getElementById(id1).style.cursor = "default";
    document.getElementById(id2).style.cursor = "pointer";
}

// This is the function called when flask is clicked. 
// It moves the flask from the shelf to the table.
function moveFlask(){
    if(step_no==0){
        if(solution == undefined)
        {
          alert("कृपया पहले विलायक चयन पट्टी से विलायक का चयन करें");
        }
      else {
        // Get image
        elem = document.getElementById("round-bottom-flask"); 
        //Detect thecurrent position of the flask.
        initial_top = Math.round($('#round-bottom-flask').position().top);
        initial_left = Math.round($('#round-bottom-flask').position().left);
        // Initialise all the values for the motion of the image-specific.
        final_top = 305;
        step_top = 1;
        step_left = 0.37;
        type_of_movement = 0;
        // Move the flask image to desired position.
        moveImage();
        // Change to next intsruction to be followed.
        document.getElementById("solution_name").style.visibility ="hidden";
        document.getElementById("slider").disabled = true;
        document.getElementById("slider").style.opacity = "0.4";   
        document.getElementById("demo").innerHTML = "चरण संख्या 3: साधन तालिका में ले जाने के लिए क्वार्ट्ज क्युवेट (पथ की लंबाई 1x1 सेमी) पर क्लिक करें। स्पेक्ट्रोफोटोमेट्रिक माप के लिए क्वार्ट्ज क्यूवेट केवल दो विपरीत पक्षों पर पारदर्शी होते हैं, जो पूर्णता माप के लिए उपयोग किए जाने वाले सभी साइड पारदर्शी क्वार्ट्ज क्यूवेट को खोलते हैं।";
        cursorPointers('round-bottom-flask', 'quartz_cuvette');
        step_no++;
      }
    }
}

// This is the function called when quartz cuvette is clicked. 
// It moves the cuvette from the shelf to the table.
function moveCuvette() {
  if(step_no  == 1 && count == 1){
    // get the image of the shelf
    elem = document.getElementById("quartz_cuvette"); 
    // Move the cuvette from the shelf to the table
    // Detect the current position of the flask.
    initial_top = Math.round($('#quartz_cuvette').position().top);
    initial_left = Math.round($('#quartz_cuvette').position().left);
    // Initialise all the values for the motion of the image-specific.
    final_top = 354;
    step_top = 1;
    step_left = -0.2;
    type_of_movement = 0;
    // Move it to the table.
    moveImage();
    // Change the next instruction to be followed.
    document.getElementById("demo").innerHTML = "चरण- 4: प्रयोगात्मक समाधान के 3 मिलीलीटर एकत्र करने के लिए 5 मिलीलीटर की क्षमता वाले पिपेट पर क्लिक करें, जिसे क्वार्ट्ज केवेट में स्थानांतरित किया जाएगा। वास्तविक ऑपरेशन में, एक को विंदुक में 3ml तक वॉल्यूम सेट करना पड़ता है और समाधान में डुबकी लगाने से पहले एक उचित टिप लगाना चाहिए।";
    cursorPointers('quartz_cuvette', 'pipette');
    step_no++;
  }
  if(step_no == 9){
    // Depending on the cuvette choosen get image-specific accordingly.
    elem = document.getElementById("quartz_cuvette"); 
    // Move the cuvette from the table to the socket in the spectrophotmeter.
    // Detect the current position of the flask.
    initial_top = Math.round($('#quartz_cuvette').position().top);
    initial_left = Math.round($('#quartz_cuvette').position().left);
    // Initialise all the values for the motion of the image-specific.
    final_top = 200;
    step_top = -0.4;
    step_left = -1.12;
    type_of_movement = 1;
    // Move it to a position over the spectrophotometer.
    moveImage();
    // After 1200ms call moveDown() method.
    setTimeout("moveDown()",2000);
    step_no++;
  }

}

//This method is used to move the cuvette downwards into the spectrophotometer.
function moveDown(){
  // Detect the current position of the flask.
  initial_top = Math.round($('#quartz_cuvette').position().top);
  initial_left = Math.round($('#quartz_cuvette').position().left);
  // Initialise all the values for the motion of the image-specific.
  final_top = 282;
  step_top = 1;
  step_left = 0;
  type_of_movement = 0;
  // Move it into the spectrophotometer.
  moveImage();
  // Call extraCuvette() method which moves the reference cuvette into the spectrophotometer.
  setTimeout("extraCuvette()",2000);
}

function extraCuvette(){
  // Get the transparent image and replace it with a reference cuvette image and move it down into the spectrophotometer.
  document.getElementById('ref_cuvette').style.visibility = 'visible';
  document.getElementById("reference").style.visibility ="visible";
  elem = document.getElementById("ref_cuvette");
  // Detect the current position of the flask.
  initial_top = Math.round($('#ref_cuvette').position().top);
  initial_left = Math.round($('#ref_cuvette').position().left);
  // Initialise all the values for the motion of the image-specific.
  final_top = 42;
  step_top = 0.5;
  step_left = -1.42;
  type_of_movement = 0;
  // Move it into the spectrophotometer.
  moveImage();
  // After 800ms make the sample cuvette and the referance cuvette hidden and replace the spectrophotometer with an image that has cuvette within them. 
  setTimeout(function(){
    $('#ref_cuvette, #quartz_cuvette, #reference').css('visibility', 'hidden');
    cursorPointers('quartz_cuvette', 'spectrolid_trans_button');
    count++;
  },4000);
}

/*This method is called whan the pipette is clicked.
   //when it is clicked for the first time it is moved from the shelf to the flask on the table.
   //When it is called for the second time pipette extracts the solution from the flask.
   //when it is called for the third time pipettte is moved out of the flask to the cuvette.
   //When it is called for the fourth time it tranfers the solution into the cuvette and moves back to the shelf again.*/
function rotatePipette() {
  if(step_no == 2 && count == 2){
    // Get image
    elem = document.getElementById("pipette"); 
    var angle=0;
    var id = setInterval(function(){
      angle+=1;
      if(angle>=1){
        clearInterval(id);
      }
      $("#pipette").rotate(angle);
    },10);
    //Detect thecurrent position of the flask.
    initial_top = Math.round($('#pipette').position().top);
    initial_left = Math.round($('#pipette').position().left);
    // Initialise all the values for the motion of the image-specific.
    final_top = 243;
    step_top = 1;
    step_left = -0.1;
    type_of_movement = 0;
    // Move the beaker image to desired position.
    moveImage();
    // Change to next intsruction to be followed.
    document.getElementById("demo").innerHTML = "चरण-संख्या 5: इसमें समाधान निकालने के लिए पिपेट पर क्लिक करें।";
    step_no++;
  }
  else if(step_no == 3 && count == 3){
    elem.src = "image-specific/pipette-with-solution.png";
    document.getElementById('round-bottom-flask').src = "image-specific/half-filled-flask.png";
    document.getElementById("demo").innerHTML = "चरण-संख्या 6: इसे वॉल्यूमेट्रिक फ्लास्क से बाहर निकालने के लिए पिपेट पर क्लिक करें।";
    step_no++;
    setTimeout(function(){ 
      count++; }, 500);       
  }
  else if(step_no == 4 && count == 4){
    $("#pipette").animate({top: '210px'},"slow")
                 .animate({left: '280px'},"slow")
                 .animate({top: '230px'},"slow");
    // Change to next instruction to be followed.
    document.getElementById("demo").innerHTML = "चरण-संख्या 7: क्यूवेट में समाधान को स्थानांतरित करने के लिए फिर से पिपेट पर क्लिक करें";
    step_no ++;
    setTimeout(function(){ 
      count++; }, 1000);
  }

  else if(step_no == 5 && count == 5){
    $("#pipette").attr("src", "image-specific/pipette.png");
    $("#quartz_cuvette").attr("src", "image-specific/quartz-cuvette-with-solution.png");
    // Change to next instruction to be followed.
    document.getElementById("demo").innerHTML = "Step-No 7:Click on the pipette again to transfer the solution into the cuvette ";
    step_no ++;
    setTimeout(function(){ 
      movebackPipette();
    }, 200);
  }
}

//This function is used to move the pipette back to the shelf.
function movebackPipette() {
  $('#pipette').rotate(-10);
  elem = document.getElementById("pipette");
  // Detect the current position of the pipette.
  initial_top = Math.round($('#pipette').position().top);
  initial_left = Math.round($('#pipette').position().left);
  // Initialise all the values for the motion of the image-specific.
  final_top = 20;
  step_top = -1;
  step_left = -.30;
  type_of_movement = 1;
  // Move it to the shelf
  moveImage();
  document.getElementById("demo").innerHTML = "चरण 8: अवशोषण वर्णक्रमीय स्कैन शुरू करने के लिए। पॉप-अप 'प्रारंभ अवशोषण मापन' पर क्लिक करें।";
  setTimeout( function(){
    document.getElementById("scan").style.visibility = 'visible';
    document.getElementById("start").style.visibility = 'visible';
  }, 800);
  cursorPointers('pipette', 'start');
}

function showInstruction() {
  if(step_no == 6){
    document.getElementById("scan").style.visibility = 'hidden';
    document.getElementById("start").style.visibility = 'hidden';
    document.getElementById("demo").innerHTML = 'चरण 9: पावर बटन पर क्लिक करके स्पेक्ट्रोमीटर चालू करें। वास्तविक ऑपरेशन में यह साधन के प्रारंभ के लिए लगभग 30 मिनट लगते हैं।';
      cursorPointers('start', 'power_trans_button');
      // Make the hidden power button to visible to run the spectrofluorimeter.  
      document.getElementById('power_trans_button').style.visibility = 'visible';
      step_no++;
  }
}

// Call turnOn() method every 250ms 
function changeImage(){
    setInterval("turnOn()", 250);
}

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
    
function showClock(){
  if(step_no==7){
      // Get the image-specific.
      var context=document.getElementById('clockScreen');
      var hand =document.getElementById('clockHand');
      // Make the visiblility of the obtained image-specific visible
      context.style.visibility='visible';
      hand.style.visibility="visible";
      // Rotate 'clockHand' using jQueryRotate.js
      var angle = 0;
      setInterval(function(){
      angle+=3;
      $('#clockHand').rotate(angle);
      },50);
      step_no++;
      //After few secs dispose clock
      setTimeout("removeClock()",3000);
  }
}

function removeClock() {
    $('#clockHand, #clockScreen').remove();
  document.getElementById("demo").innerHTML = "चरण 10: सेल धारक में नमूना रखने के लिए ढक्कन पर क्लिक करके स्पेक्ट्रोफोटोमीटर के नमूने कक्ष के ढक्कन पर क्लिक करें";
  cursorPointers('power_trans_button', 'spectrolid_trans_button');
}

// First time its called to open the spectrophotometer
// Second time its called to close the spectrophotometer
function spectrophotometer(){
    if (step_no == 8){
        // Replace the spectrophotometer image-specific with the open spectrophotometer image-specific
        images[0] = "image-specific/spec_open.png";
        images[1] = "image-specific/spec_open.png";
      document.getElementById("demo").innerHTML = "चरण संख्या 11: नमूना धारक में रखने के लिए क्युवेट पर क्लिक करें। इस माप में नमूना बैंक या संदर्भ के रूप में शुद्ध विलायक का उपयोग करना होता है। यहाँ एक डबल बीम स्पेक्ट्रोफोटोमीटर दिखाया गया है।";
        cursorPointers('spectrolid_trans_button', 'quartz_cuvette');
        step_no++;
    }
    else if(step_no == 10 && count == 10){
        // Replace the spectrophotometer image-specific with the closed spectrophotmeter image-specific.
        images[0] = "image-specific/spec_close.png";
        images[1] = "image-specific/spec_close1.png";
      document.getElementById("demo").innerHTML = "चरण संख्या 12: कंप्यूटर मॉनिटर और फिर स्कैन बटन पर क्लिक करके तरंगदैर्ध्य स्कैन चलाएं और तरंग दैर्ध्य स्कैन का निरीक्षण करें";
        cursorPointers('quartz_cuvette', 'comp_trans_button');
        step_no++;
    }

}

//This method is used to play a video which shows constructing graphs based on their sample path length. 
function scan(){
    if(step_no==11){
        // After the cuvette are inserted into the spectrophotometer, when the computer in pressed to scan, depending on the cuvette choosen appropriate graph video is obtained.
        $(".data_validation, #instruction_bkgd, #graph_instruction").css("visibility", "visible");
      document.getElementById("graph_instruction").innerHTML = "स्क्रीन पर, तरंग दैर्ध्य रेंज दर्ज करें। प्रारंभ: 430 एनएम अंत: 275 एनएम। वास्तविक ऑपरेशन में, नमूना के लिए घटना प्रकाश की तरंग दैर्ध्य रेंज को चुना जाता है और तरंग दैर्ध्य स्कैन को कंप्यूटर सॉफ्टवेयर के माध्यम से चलाया जाता है। एक स्कैन को एब्जॉर्बेंस (ए) या ट्रांसमिटेंस (% टी) मोड में चला सकते हैं।";
        step_no++;
        cursorPointers('comp_trans_button', 'start_btn');
    }
}

//function called for the data valiadtion to display the graph.
function startBtn(){
        input1 = document.getElementById("input1").value;
        input2 = document.getElementById("input2").value;
        video1 = document.getElementById("video1");
        video2 = document.getElementById("video2");
        video3 = document.getElementById("video3");
        video4 = document.getElementById("video4");
        video5 = document.getElementById("video5");
        if(solution== 0 &&  input1 == 430 && input2 == 275){
            $(".data_validation").css("visibility", "hidden");
            $("#scan, #video1").css("visibility", "visible");
          document.getElementById("graph_instruction").innerHTML = "चरण संख्या 14: वर्णक्रमीय स्केल पूरा होने पर बंद बटन पर क्लिक करें। वास्तविक ऑपरेशन में, स्कैन डेटा को कंप्यूटर में संग्रहीत किया जाता है। उपकरण डेटा संग्रहीत करता है और इसलिए नमूना फ़ाइल नाम के लिए पूछता है। डेटा सहेजने के लिए एक फ़ाइल नाम दर्ज करता है।";
            video1.play();
            step_no++;
            cursorPointers('start_btn', 'disposegraph');
        }
        else if(solution == 1 && input1 == 430 && input2 == 275){
            $(".data_validation").css("visibility", "hidden");
            $("#scan, #video2").css("visibility", "visible");
          document.getElementById("graph_instruction").innerHTML = "चरण संख्या 14: वर्णक्रमीय स्केल पूरा होने पर बंद बटन पर क्लिक करें। वास्तविक ऑपरेशन में, स्कैन डेटा को कंप्यूटर में संग्रहीत किया जाता है। उपकरण डेटा संग्रहीत करता है और इसलिए नमूना फ़ाइल नाम के लिए पूछता है। डेटा सहेजने के लिए एक फ़ाइल नाम दर्ज करता है।";
            video2.play();
            step_no++;
            cursorPointers('start_btn', 'disposegraph');
        }
        else if(solution == 2 && input1 == 430 && input2 == 275){
            $(".data_validation").css("visibility", "hidden");
            $("#scan, #video3").css("visibility", "visible");
          document.getElementById("graph_instruction").innerHTML = "चरण संख्या 14: वर्णक्रमीय स्केल पूरा होने पर बंद बटन पर क्लिक करें। वास्तविक ऑपरेशन में, स्कैन डेटा को कंप्यूटर में संग्रहीत किया जाता है। उपकरण डेटा संग्रहीत करता है और इसलिए नमूना फ़ाइल नाम के लिए पूछता है। डेटा सहेजने के लिए एक फ़ाइल नाम दर्ज करता है।";
            video3.play();
            step_no++;
            cursorPointers('start_btn', 'disposegraph');
        }
        else if(solution == 3 && input1 == 430 && input2 == 275){
            $(".data_validation").css("visibility", "hidden");
            $("#scan, #video4").css("visibility", "visible");
          document.getElementById("graph_instruction").innerHTML = "चरण संख्या 14: वर्णक्रमीय स्केल पूरा होने पर बंद बटन पर क्लिक करें। वास्तविक ऑपरेशन में, स्कैन डेटा को कंप्यूटर में संग्रहीत किया जाता है। उपकरण डेटा संग्रहीत करता है और इसलिए नमूना फ़ाइल नाम के लिए पूछता है। डेटा सहेजने के लिए एक फ़ाइल नाम दर्ज करता है।";
            video4.play();
            step_no++;
            cursorPointers('start_btn', 'disposegraph');
        }
        else if(solution == 4 && input1 == 430 && input2 == 275){
            $(".data_validation").css("visibility", "hidden");
            $("#scan, #video5").css("visibility", "visible");
          document.getElementById("graph_instruction").innerHTML = "चरण संख्या 14: वर्णक्रमीय स्केल पूरा होने पर बंद बटन पर क्लिक करें। वास्तविक ऑपरेशन में, स्कैन डेटा को कंप्यूटर में संग्रहीत किया जाता है। उपकरण डेटा संग्रहीत करता है और इसलिए नमूना फ़ाइल नाम के लिए पूछता है। डेटा सहेजने के लिए एक फ़ाइल नाम दर्ज करता है।";
          video5.play();
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
    document.getElementById('demo').innerHTML = 'माप पर प्रारंभ करने के लिए रीसेट बटन पर क्लिक करें।';
    }
}
