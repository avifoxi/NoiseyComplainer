function setPans(models){
	_.forEach(models, function(m){			
		m.synthDef.pan = linearTransform(m.x_coordinate_state_plane, xCoordRange, [-1, 1]);
	});
};

function setFreq(models){
	_.forEach(models, function(m){			
		m.synthDef.freq = linearTransform(m.y_coordinate_state_plane, yCoordRange, [200, 3000]);
	});
};

function setTimes(models){
	_.forEach(models, function(m){			
		if (m.status === 'Open') {
			m.end_time = compositionLength;
		} else {
			m.end_time = linearTransform(m.end_time, timeRange, [0, compositionLength]);
		}
		m.start_time = linearTransform(m.start_time, timeRange, [0, compositionLength]);
	});
};

function setWave(models){

	// TODO -- add sample playback -- dog barks + percussion for jackhammering
	var wavDictionary =  {
		"Noise: Construction Before/After Hours (NM1)" : "flock.ugen.tri", 
		"Noise: Alarms (NR3)" : "flock.ugen.sinOsc", 
		"Noise: air condition/ventilation equipment (NV1)" : "flock.ugen.pinkNoise",
		"Noise, Barking Dog (NR5)" : "flock.ugen.pinkNoise" , 
		"Noise: Construction Equipment (NC1)" : "flock.ugen.tri", 
		"Noise: Jack Hammering (NC2)" : "flock.ugen.square", 
		"Noise:  lawn care equipment (NCL)" : "flock.ugen.whiteNoise",
		"Noise: Private Carting Noise (NQ1)" : "flock.ugen.whiteNoise",
		"Noise, Ice Cream Truck (NR4)" : "flock.ugen.square",
		"Noise, Other Animals (NR6)" : "flock.ugen.sinOsc"
	};

	_.forEach(models, function(m){
		if (!wavDictionary[m.descriptor]) {
			m.synthDef.ugen = "flock.ugen.sinOsc";
			console.log('add me to the wavDictionary');
			console.log(m.descriptor);
		} else {
			m.synthDef.ugen = wavDictionary[m.descriptor];
		}
	});
};


function formatIncoming(models){ 
	_.forEach(models, function(m){
		m.start_time = dateToUnix(m.created_date);
		m.end_time = dateToUnix(m.closed_date);
		m.synthDef = {};
		m.synthDef.id = m.unique_key;
	});
};
	

