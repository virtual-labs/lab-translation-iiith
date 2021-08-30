function plot()
{
  if(window.value=="1")
    plotbenzene();
  else if(window.value=="2")
    plotacetaldehyde();
  else if(window.value=="3")
    plotacetate();
  else
  	alert("select an option");


}

function plotbenzene() {
 document.getElementById("chartContainer").style.display="block";
var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	exportEnabled: true,
	
	axisY:{ 
		
		includeZero: true, 
		interval: 200,
		gridThickness: .1,
		
	},
	axisX:{ 
		
		includeZero: false, 
		interval: 1,
		 gridThickness: .1,
		
		
	},
	data: [{
		type: "stepLine",
		
		markerSize: 1,
		dataPoints: [
			
			{ x: 1, y: 0.4,label:" 9" },
			{ x: 2, y: 0.4 ,label:" 8" },
			{ x: 2.7, y: 990 },
			{ x: 2.7, y: 0.4 },
			{x:3,y:0.4,label:"7" },
			{ x: 4, y: 0.4 ,label:"6"},
			{ x: 5, y: 0.4 },
			{ x: 6, y: 0.4,label:"4"  },
			{ x: 7, y: 0.4 ,label:"3" },
			{ x: 8, y: 0.4 ,label:"2" },
			{ x: 9, y: 0.4 ,label:"1" },
			{x:10,y:0.4,label:"0" }
			
			
		]
	}]
});
chart.render();

}
function plotacetaldehyde() {
 document.getElementById("chartContainer").style.display="block";
var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	exportEnabled: true,
	
	axisY:{ 
		
		includeZero: true, 
		interval: 200,
		gridThickness: .1,
		
	},
	axisX:{ 
		
		includeZero: false, 
		interval: 1,
		 gridThickness: .1,
		
		
	},
	data: [{
		type: "stepLine",
		
		markerSize: 1,
		dataPoints: [
			
			{ x: 0.6, y: 210 },
			{ x: 0.6, y: 0.3 },
			{ x: 1, y: 0.4 ,label:"9" },
			{ x: 2, y: 0.4 ,label:"8" },
			{ x: 3, y: 0.4 ,label:"7" },
			{ x: 4, y: 0.4 ,label:"6" },
			{ x: 5, y: 0.4 ,label:"5" },
			{ x: 6, y: 0.4 ,label:"4" },
			{ x: 7, y: 0.4 ,label:"3" },
			{ x: 7.8, y: 998 },
			{ x: 7.8, y: 0.3 },
			{x:8,y:0.4,label:"2" },
			{x:9,y:0.4,label:"1" },
			{x:10,y:0.4,label:"0" },
			
			
			
		]
	}]
});
chart.render();

}
function plotacetate() {
 document.getElementById("chartContainer").style.display="block";
var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	exportEnabled: true,
	
	axisY:{ 
		
		includeZero: true, 
		interval: 200,
		gridThickness: .1,
		
	},
	axisX:{ 
		
		includeZero: false, 
		interval: 1,
		 gridThickness: .1,
		
		
	},
	data: [{
		type: "stepLine",
		
		markerSize: 1,
		dataPoints: [
			
			{ x: 1, y: 0.4, label:" 9"},
			{ x: 2, y: 0.4,label: "8"  },
			{ x: 3, y: 0.4 ,label: "7" },
			{ x: 4, y: 0.4,label: "6"  },
			{ x: 5, y: 0.4,label: "5"  },
			{ x: 5.81, y: 80 },
			{ x: 5.81, y: 0.4 },
            { x: 5.87, y: 170 },
			{ x: 5.87, y: 0.4 },
			{ x: 5.92, y: 190 },
			{x:5.92 ,y:0.4},
			{ x: 6, y: 100,  },
			{ x: 6, y: 0.4,label:"4"  },
			{ x: 7, y: 0.4 ,label: "3" },
			{ x: 8, y: 999  },
			{ x: 8, y: 0.3,label:"2"  },
			{ x: 8.7, y:240},
			{ x: 8.7, y:0.4 },
            { x: 8.8, y:580 },
            { x: 8.8, y:0.4 },
            { x: 8.9, y:205 },
            { x: 8.9, y:0.4 },

			{ x: 9, y: 0.3,label: "1"  },
			{x:10,y:0.3,label:"0"}
			
		]
	}]
});
chart.render();

}