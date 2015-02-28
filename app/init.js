
// for now... a whole bunch of globals!

var models;
var compositionLength; // seconds

var synthNotes = {};
var timeRange = [];
var latRange = [];
var longRange = [];
var xCoordRange = [];
var yCoordRange = [];

var enviro = flock.init();
enviro.play();
// enviro.stop();

var context = window.AudioContext ? new AudioContext() : new webkitAudioContext();
var clock = new WAAClock(context);

clock.start();

$('button').click(function(e){ 
	e.preventDefault(); 

	var zip = $('#zip').val();
	var density = $('#density').val();
	compositionLength = parseInt($('#length').val());

	var queryString = makeQueryString(density, zip);
	console.log(queryString);

	getNsetModels(queryString);
	// prepareNotes(models);
});