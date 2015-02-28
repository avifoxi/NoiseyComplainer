function dateToUnix(dateString){
	return (new Date(dateString).getTime() / 1000 );
};

function linearTransform(num, originalRange, destinationRange){
	return ( num - originalRange[0] ) / (originalRange[1] - originalRange[0] ) * (destinationRange[1] - destinationRange[0] ) + destinationRange[0];
};

function minAndMaxByKey(collection, key){
	if (key === 'time'){
		var times = [];
		_.forEach(collection, function(m){
			times.push(m.start_time, m.end_time)
		});
		var min = _.min(times);
		var max = _.max(times);
		return [min, max];
	}
	var min = _.min(collection, key)[key];
	var max = _.max(collection, key)[key];
	return [min, max];
};
