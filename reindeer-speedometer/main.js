const speedometer = document.getElementById("speedometer")
const select = document.getElementById("select")
const time = document.getElementById("time");
const runBtn=document.querySelector('.run-btn');
const travelHistory=document.querySelector('.travel-history');
runBtn.addEventListener('click',()=>{
  calculateSpeed();
})
let currentLocation = ""
let timeTaken = 0
const distanceHistory=[];
const timeHistory=[];
let destination = [
  {
    name: "Munich",
    distanceFromPrevDestination: 2892
    },
  {
    name: "Kiev",
    distanceFromPrevDestination: 1111
    },
  {
    name: "Ulaanbaatar",
    distanceFromPrevDestination: 5324
    },
  {
    name: "Sydney",
    distanceFromPrevDestination: 5458
    },
  {
    name: "Tijuana",
    distanceFromPrevDestination: 6531
    },
  {
    name: "Chicago",
    distanceFromPrevDestination: 1729
    }
]

function calculateSpeed() {
  let speed = 0
  currentLocation = lower(select.value);
  for (obj of destination) {
    if (lower(obj.name) == currentLocation) {
      const distance = obj.distanceFromPrevDestination;
      timeTaken = +time.value;
      if(timeTaken==='' || timeTaken ==0) return;
      distanceHistory.push(distance);
      timeHistory.push(timeTaken);
      speed = Math.round(distance / timeTaken);
      calculateAverageSpeed(distanceHistory,timeHistory,speed);
  drawGUAGE(speed);
      
      
    }
  }

  // Task:
  // - Retrieve distance from previous destination from array of objects.
  // - Calculate speed and round speed to an integer (whole number).
  // - Display speed in speedometer paragraph.

}

// Stretch goals: 
// - Calculate average overall speed.
// - Display location as North Pole on pageload.
function calculateAverageSpeed(distanceHistory,timeHistory,speed) {
  const totalTime=sum(timeHistory)
  const totalDistance=sum(distanceHistory);
  const averageSpeed=Math.round((totalDistance/totalTime));
  if(distanceHistory.length){
travelHistory.textContent=`Reindeer travelled to ${distanceHistory.length}  destination at an average speed of ${averageSpeed}/MPH`;
}
}



google.charts.load('current', { 'packages': ['gauge'] });
google.charts.setOnLoadCallback(drawGUAGE);

function drawGUAGE(val) {

  var data = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Speed MPH', 0]
        ]);

  let options = {
    width: 600,
    height: 350,
    redFrom: 1400,
    redTo: 2000,
    yellowFrom: 700,
    yellowTo: 1400,
    minorTicks: 100,
    greenFrom: 0,
    greenTo: 700,
    max: 2000
  };

  const GUAGE = new google.visualization.Gauge(document.getElementById('speedometer_guage'));

  GUAGE.draw(data, options);

  setTimeout(function() {
    data.setValue(0, 1, val);
    GUAGE.draw(data, options);

  }, 50)


}



// Turns string to lowercase
function lower(str) {
  return (String(str).toLowerCase())
}

function sum(arr) {
  return (arr.reduce((accum,val)=>{
    return (accum+=val)
  },0));
}
