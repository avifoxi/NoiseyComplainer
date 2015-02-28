function getNsetModels(queryString){
	$.getJSON(queryString, function(d){
		
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
}
