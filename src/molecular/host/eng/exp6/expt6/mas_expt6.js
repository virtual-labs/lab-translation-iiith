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
    var type_of_movement;// Indicates upward or downward motion
    var turnon; // It is used to store the spectrometer table images.
    var step_no=0; /* This variable is used to perform all the actions on images in the required sequence. 
                      Depending on the value of this variable the part of the method is called.*/
    var count = 0; /* This variable is used to perform the actions on the objects without distortions.
                      i.e., It make sures that one or more actions are not performed at a time. */
    var choosen_solution= "Potassium Dichromate"; // default choosen solution.
    
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
    document.getElementById("demo").innerHTML = "Step-No 1: Turn on the instrument clicking on the power button and wait for 30 min for initialization of the instrument.";
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
    document.getElementById("slider").addEventListener("click", function() {
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

// Depending on the slider value selected, concentration color of the solution in the flask gets changed.
function setSolution(){
    var conc_value = document.getElementById('slider').value;
    if(conc_value == 0){
        // Standard syntax
        document.getElementById("flask").style.filter = "saturate(100%)";
        // Code for Safari 6.0 - 9.0
        document.getElementById("flask").style.WebkitFilter = "saturate(100%)";
        // Standard syntax
        document.getElementById("beaker").style.filter = "saturate(100%)";
        // Code for Safari 6.0 - 9.0
        document.getElementById("beaker").style.WebkitFilter = "saturate(100%)";
        // Standard syntax
        document.getElementById("cuvette").style.filter = "saturate(100%)";
        // Code for Safari 6.0 - 9.0
        document.getElementById("cuvette").style.WebkitFilter = "saturate(100%)";
    }
    else if(conc_value == 1){
        // Standard syntax
        document.getElementById("flask").style.filter = "saturate(250%)";
        // Code for Safari 6.0 - 9.0
        document.getElementById("flask").style.WebkitFilter = "saturate(250%)";
        // Standard syntax
        document.getElementById("beaker").style.filter = "saturate(250%)";
        // Code for Safari 6.0 - 9.0
        document.getElementById("beaker").style.WebkitFilter = "saturate(250%)";
        // Standard syntax
        document.getElementById("cuvette").style.filter = "saturate(250%)";
        // Code for Safari 6.0 - 9.0
        document.getElementById("cuvette").style.WebkitFilter = "saturate(250%)";
    }
    else if(conc_value == 2){
        // Standard syntax
        document.getElementById("flask").style.filter = "saturate(300%)";
        // Code for Safari 6.0 - 9.0
        document.getElementById("flask").style.WebkitFilter = "saturate(300%)";
        // Standard syntax
        document.getElementById("beaker").style.filter = "saturate(300%)";
        // Code for Safari 6.0 - 9.0
        document.getElementById("beaker").style.WebkitFilter = "saturate(300%)";
        // Standard syntax
        document.getElementById("cuvette").style.filter = "saturate(300%)";
        // Code for Safari 6.0 - 9.0
        document.getElementById("cuvette").style.WebkitFilter = "saturate(300%)";
    }
    else if(conc_value == 3){
        // Standard syntax
        document.getElementById("flask").style.filter = "saturate(400%)";
        // Code for Safari 6.0 - 9.0
        document.getElementById("flask").style.WebkitFilter = "saturate(400%)";
        // Standard syntax
        document.getElementById("beaker").style.filter = "saturate(400%)";
        // Code for Safari 6.0 - 9.0
        document.getElementById("beaker").style.WebkitFilter = "saturate(400%)";
        // Standard syntax
        document.getElementById("cuvette").style.filter = "saturate(400%)";
        // Code for Safari 6.0 - 9.0
        document.getElementById("cuvette").style.WebkitFilter = "saturate(400%)";
    }
    else if(conc_value == 4){
        // Standard syntax
        document.getElementById("flask").style.filter = "saturate(420%)";
        // Code for Safari 6.0 - 9.0
        document.getElementById("flask").style.WebkitFilter = "saturate(420%)";
        // Standard syntax
        document.getElementById("beaker").style.filter = "saturate(420%)";
        // Code for Safari 6.0 - 9.0
        document.getElementById("beaker").style.WebkitFilter = "saturate(420%)";
        // Standard syntax
        document.getElementById("cuvette").style.filter = "saturate(420%)";
        // Code for Safari 6.0 - 9.0
        document.getElementById("cuvette").style.WebkitFilter = "saturate(420%)";
    }
    else if(conc_value == 5){
        // Standard syntax
        document.getElementById("flask").style.filter = "saturate(450%)";
        // Code for Safari 6.0 - 9.0
        document.getElementById("flask").style.WebkitFilter = "saturate(450%)";
        // Standard syntax
        document.getElementById("beaker").style.filter = "saturate(420%)";
        // Code for Safari 6.0 - 9.0
        document.getElementById("beaker").style.WebkitFilter = "saturate(420%)";
        // Standard syntax
        document.getElementById("cuvette").style.filter = "saturate(420%)";
        // Code for Safari 6.0 - 9.0
        document.getElementById("cuvette").style.WebkitFilter = "saturate(420%)";
    }
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
    document.getElementById("demo").innerHTML = "Step-No 2:Make three aqueous solutions of appropriate concentrations (say, 0.001 M, 0.00075M, 0.001 M) of potassium dichromate [Click and drag on the concentration bar to choose the appropriate concentration of the solution whose absorbance has to be measured]. One should start with the lowest concentration solution first.Click on the beaker to take a clean, dry beaker.";
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
        document.getElementById("demo").innerHTML = "Step-No 9: Click on the cuvette to place it in the sample holder. One has to use water as the sample bank or reference in this measurement. Here a double beam spectrophotometer is shown.In this case one can place the sample in the sample holder(often the front one) and sample bank or reference in the reference holder(often the back one) simultaneously.";
        step_no++;
        cursorPointers('spectrolid_trans_button', 'cuvette');
    }
    else if(step_no == 10 && count == 13){
        // Replace the spectrophotometer images with the closed spectrophotmeter images.
        images[0] = "images/spec_close.png";
        images[1] = "images/spec_close1.png";
        document.getElementById("demo").innerHTML = "Step-No 10: Run the wavelength scan by clicking on the computer monitor and then on the scan button and observe the wavelength scan";
        step_no++;
        cursorPointers('spectrolid_trans_button', 'comp_trans_button');
    }
}
    
//This method is called to display the graph image based on cuvette chosen by clicking on computer screen.
function scan() {
    if(step_no==11){
        conc_value = document.getElementById('slider').value;
        if(conc_value==0||1||2||3||4||5){
            document.getElementById('scanimage1').style.visibility = 'visible';
        }
        // else if(conc_value==1){
        //     document.getElementById('scanimage2').style.visibility = 'visible';
        // }
        // else if(conc_value==2){
        //     document.getElementById('scanimage3').style.visibility = 'visible';
        // }
        // else if(conc_value==3){
        //     document.getElementById('scanimage4').style.visibility = 'visible';
        // }
        // else if(conc_value==4){
        //     document.getElementById('scanimage5').style.visibility = 'visible';
        // }
        // else if(conc_value==5){
        //     document.getElementById('scanimage6').style.visibility = 'visible';
        // }
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
        if(conc_value==0||1||2||3||4||5){
            vid = document.getElementById('graph1');
        }
        // else if(conc_value==1){
        //     vid = document.getElementById('graph2');
        // }
        // else if(conc_value==2){
        //     vid = document.getElementById('graph3');
        // }
        // else if(conc_value==3){
        //     vid = document.getElementById('graph4');
        // }
        // else if(conc_value==4){
        //     vid = document.getElementById('graph5');
        // }
        // else if(conc_value==5){
        //     vid = document.getElementById('graph6');
        // }
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
        document.getElementById('demo').innerHTML= ' Click on Reset button to start new measurement.Repeat the measurement with next higher concentration and so on.';
    }
}