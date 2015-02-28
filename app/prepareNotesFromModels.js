function prepareNotes(models){

	_.forEach(models, function(m){
		synthNotes[m.unique_key] = flock.synth({
			synthDef: m.synthDef,
			addToEnvironment: false
		});		
	});

};

function scheduleOns(){

};

function scheduleOffs(){

};

