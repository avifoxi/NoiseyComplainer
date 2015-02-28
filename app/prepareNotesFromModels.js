function prepareNotes(models){

	_.forEach(models, function(m){
		synthNotes[m.unique_key] = flock.synth({
			synthDef: m.synthDef,
			addToEnvironment: false
		});	
	});

	_.forEach(models, function(m){
		scheduleOne(m);
	});

};

function scheduleOne(model){
	var start = model.start_time;
	var stop = model.end_time;
	var note = synthNotes[model.unique_key];
	clock.setTimeout(function() { note.play()}, start);
	clock.setTimeout(function() { note.pause()}, stop);
};