
  var firebaseConfig = {
    apiKey: "AIzaSyBWj9tILYp2X316mtmTVFy9IXdZlJH2mhw",
    authDomain: "train-scheduler-3947c.firebaseapp.com",
    databaseURL: "https://train-scheduler-3947c.firebaseio.com",
    projectId: "train-scheduler-3947c",
    storageBucket: "train-scheduler-3947c.appspot.com",
    messagingSenderId: "871860707964",
    appId: "1:871860707964:web:555ca25977c8c6cc"
  };

firebase.initializeApp(firebaseConfig);

var database = firebase.database();


$("#add-train-btn").on("click", function(event) {
    event.preventDefault();

var trainName = $("#train-name-input").val().trim();
var destination = $("#destination-input").val().trim();
var firstTraintime = $("#train-time-input").val().trim();
var frequency = $("#frequency-input").val().trim();

console.log(trainName);
console.log(destination);
console.log(firstTraintime);
console.log(frequency);

database.ref().push({
    trainName: trainName,
    destination: destination,
    firstTraintime: firstTraintime,
    frequency: frequency
});
});

