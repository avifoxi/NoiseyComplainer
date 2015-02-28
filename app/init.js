// &&status='Open' or 'Closed' => this will effect density of ending -- if Open there will almost inevitably be high density of notes sustaingin til the end of the piece
var str = "https://data.cityofnewyork.us/resource/erm2-nwe9.json?$where=created_date>='2014-02-01'&&complaint_type='noise'&&incident_zip='11218'&$limit=5&$select=incident_zip, street_name, closed_date, created_date, unique_key, x_coordinate_state_plane, y_coordinate_state_plane, longitude, latitude, descriptor, status";

// for now... a whole bunch of globals!

var models;
var synthNotes = {};
var timeRange = [];
var latRange = [];
var longRange = [];
var xCoordRange = [];
var yCoordRange = [];
var compositionLength = 10; // seconds

var enviro = flock.init();
enviro.play();
// enviro.stop();

var context = window.AudioContext ? new AudioContext() : new webkitAudioContext()
  , clock = new WAAClock(context);

clock.start();


$.getJSON(str, function(d){
	
	models = d;
	
	formatIncoming(models);

	latRange = minAndMaxByKey(models, 'latitude');
	longRange = minAndMaxByKey(models, 'longitude');
	timeRange = minAndMaxByKey(models, 'time');
	xCoordRange = minAndMaxByKey(models, 'x_coordinate_state_plane');
	yCoordRange = minAndMaxByKey(models, 'y_coordinate_state_plane');

	// set times relative to composition length
	setTimes(models);
	
	// set pan based on x val
	setPans(models);

	// set pitch based on y state val
	setFreq(models);

	// dictionary in method, associates to flock oscillator types
	setWave(models);

	prepareNotes(models);

});
