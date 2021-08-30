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
    document.getElementById("demo").innerHTML = "దశ-సంఖ్య 1: ఈ క్రింది రెండు పరిష్కారాలను సిద్ధం చేయండి: ఎ) ~0.001M పొటాషియం డైక్రోమేట్ (K2Cr2O7) మరియు బి) స్వేదనజలంలో ~ 5mg / L కెఫిన్. ఇక్కడ పరిష్కారాలు రెండు వాల్యూమెట్రిక్ ఫ్లాస్క్‌లలో చూపించబడ్డాయి. డ్రాప్‌డౌన్ మెను నుండి కావలసిన పరిష్కారంపై క్లిక్ చేయడం ద్వారా కొలత కోసం ఒక పరిష్కారాన్ని ఎంచుకోవచ్చు. పవర్ బటన్‌పై క్లిక్ చేసే పరికరాన్ని ఆన్ చేసి, వాయిద్యం ప్రారంభించడానికి 30 నిమిషాలు వేచి ఉండండి.";
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
    document.getElementById("demo").innerHTML = "దశ-సంఖ్య 2: శుభ్రమైన, పొడి బీకర్ తీసుకోవడానికి బీకర్‌పై క్లిక్ చేయండి";
    cursorPointers('power_trans_button', 'beaker');
}

// First time its called to open the spectrophotometer
// Second time its called to close the spectrophotometer
function spectrophotometer(){
    if (step_no == 8 && count == 9){
        // Replace the spectrophotometer images with the open spectrophotometer images
        images[0] = "images/spec_open.png";
        images[1] = "images/spec_open1.png";
        document.getElementById("demo").innerHTML = "దశ-సంఖ్య 9: నమూనా హోల్డర్‌లో ఉంచడానికి కువెట్‌పై క్లిక్ చేయండి. ఈ కొలతలో నీటిని నమూనా బ్యాంకుగా లేదా సూచనగా ఉపయోగించాలి. ఇక్కడ డబుల్ బీమ్ స్పెక్ట్రోఫోటోమీటర్ చూపబడింది. ఈ సందర్భంలో నమూనా శాంపిల్ హోల్డర్‌లో (తరచుగా ముందు ఒకటి) మరియు నమూనా బ్యాంక్ లేదా రిఫరెన్స్ హోల్డర్‌లో రిఫరెన్స్ (తరచుగా వెనుకవైపు ఒకేసారి) ఉంచవచ్చు.";
        cursorPointers('spectrolid_trans_button', 'cuvette');
        step_no++;
    }
    else if(step_no == 10 && count == 13){
        // Replace the spectrophotometer images with the closed spectrophotmeter images.
        images[0] = "images/spec_close.png";
        images[1] = "images/spec_close1.png";
        document.getElementById("demo").innerHTML = "దశ-సంఖ్య 10: కంప్యూటర్ మానిటర్‌పై క్లిక్ చేసి, ఆపై స్కాన్ బటన్‌పై క్లిక్ చేసి తరంగదైర్ఘ్యం స్కాన్‌ను అమలు చేయండి మరియు తరంగదైర్ఘ్యం స్కాన్‌ను గమనించండి";
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
            document.getElementById("graph_instruction").innerHTML = "తెరపై స్పెక్ట్రల్ స్కాన్ యొక్క తరంగదైర్ఘ్యం పరిధిని నమోదు చేయండి. K2Cr2O7 కోసం: ప్రారంభం: 700 nm ముగింపు: 325 nm. నిజమైన ఆపరేషన్‌లో, నమూనా కోసం సంఘటన కాంతి యొక్క తరంగదైర్ఘ్యం పరిధి ఎంచుకోబడుతుంది మరియు తరంగదైర్ఘ్యం స్కాన్ కంప్యూటర్ సాఫ్ట్‌వేర్ ద్వారా నడుస్తుంది. ఒకరు స్కాన్‌ను శోషక (ఎ) లేదా ట్రాన్స్మిటెన్స్ (% టి) మోడ్‌లో అమలు చేయవచ్చు. తరంగదైర్ఘ్యం స్కాన్‌ను అమలు చేయడానికి కొలత సెటప్ స్క్రీన్‌పై ఆకుపచ్చ 'ప్రారంభ' బటన్‌పై క్లిక్ చేయండి. తరంగదైర్ఘ్యం స్కాన్‌ను గమనించండి. స్పెక్ట్రోఫోటోమీటర్ ఒకే పుంజం పరికరం అయితే, మొదట నమూనా ఖాళీ లేదా సూచనను ఒక కువెట్‌లో తీసుకుంటారు మరియు తరంగదైర్ఘ్యం స్కాన్ నమూనా తరువాత నడుస్తుంది. సంబంధిత తరంగదైర్ఘ్యాల కోసం నమూనా డేటా నుండి సూచన డేటాను తీసివేయాలి";
            step_no++;
        }else if(choosen_solution == "caffeine"){
            document.getElementById("graph_instruction").innerHTML = "తెరపై స్పెక్ట్రల్ స్కాన్ యొక్క తరంగదైర్ఘ్యం పరిధిని నమోదు చేయండి. కెఫిన్ కోసం: ప్రారంభం: 590 ఎన్ఎమ్ ముగింపు: 290 ఎన్ఎమ్. నిజమైన ఆపరేషన్‌లో, నమూనా కోసం సంఘటన కాంతి యొక్క తరంగదైర్ఘ్యం పరిధి ఎంచుకోబడుతుంది మరియు తరంగదైర్ఘ్యం స్కాన్ కంప్యూటర్ సాఫ్ట్‌వేర్ ద్వారా నడుస్తుంది. ఒకరు స్కాన్‌ను శోషక (ఎ) లేదా ట్రాన్స్మిటెన్స్ (% టి) మోడ్‌లో అమలు చేయవచ్చు. తరంగదైర్ఘ్యం స్కాన్‌ను అమలు చేయడానికి కొలత సెటప్ స్క్రీన్‌పై ఆకుపచ్చ 'ప్రారంభ' బటన్‌పై క్లిక్ చేయండి. తరంగదైర్ఘ్యం స్కాన్‌ను గమనించండి. స్పెక్ట్రోఫోటోమీటర్ ఒకే పుంజం పరికరం అయితే, మొదట నమూనా ఖాళీ లేదా సూచనను ఒక కువెట్‌లో తీసుకుంటారు మరియు తరంగదైర్ఘ్యం స్కాన్ నమూనా తరువాత నడుస్తుంది. సంబంధిత తరంగదైర్ఘ్యాల కోసం నమూనా డేటా నుండి సూచన డేటాను తీసివేయాలి";
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
            document.getElementById("graph_instruction").innerHTML = "";
            video1.play();
            step_no++;
            cursorPointers('start_btn', 'disposegraph');
        }
        else if(choosen_solution == "caffeine" && input1 == 590 && input2 == 290){
            $(".data_validation").css("visibility", "hidden");
            $("#scan, #video2").css("visibility", "visible");
            document.getElementById("graph_instruction").innerHTML = "దశ-సంఖ్య 14: స్పెక్ట్రల్ స్కేల్ పూర్తయినప్పుడు క్లోజ్ బటన్ పై క్లిక్ చేయండి. నిజమైన ఆపరేషన్‌లో, స్కాన్ డేటా కంప్యూటర్‌లో నిల్వ చేయబడుతుంది. వాయిద్యం డేటాను నిల్వ చేస్తుంది మరియు అందువల్ల నమూనా ఫైల్ పేరును అడుగుతుంది. డేటాను సేవ్ చేయడానికి ఒకరు ఫైల్ పేరును నమోదు చేస్తారు.";
            video2.play();
            step_no++;
            cursorPointers('start_btn', 'disposegraph');
        }
        else{
            alert("Enter start and end values and click start button on top of the window");
        }
}

//This method makes the graph hidden once the video is played and close is pressed. 
function disposeGraph(){
    if(step_no == 13) {
    // After playing the graph plotting video close option is choosen, the background scan image and the video is made hidden.
        $('.video, .common').css('visibility', 'hidden');
        if(choosen_solution == "potassium") {
            document.getElementById('demo').innerHTML = 'మరొక నమూనా కోసం కొలతను పునరావృతం చేయడానికి రీసెట్ చేయండి.';
        }
        else if(choosen_solution == "caffeine") {
            document.getElementById('demo').innerHTML = 'డేటా టాబ్‌పై క్లిక్ చేయడం ద్వారా డేటాను సేకరించండి.';
        }
    }   
}
