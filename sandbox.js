var str = "https://data.cityofnewyork.us/resource/erm2-nwe9.json?$where=created_date>='2015-02-01'&&complaint_type='noise'&&incident_zip='11218'&$limit=3";
var models;
$.getJSON(str, function(d){models = d});


$select=incident_zip, street_name, closed_date, created_date, unique_key, x_coordinate_state_plane, y_coordinate_state_plane, longitude, latitude, descriptor

Object.getOwnPropertyNames(models[0])
["incident_zip", "school_name", "location", "closed_date", "complaint_type", "school_not_found", "street_name", "city", "park_borough", "school_state", "longitude", "community_board", "created_date", "school_address", "status", "facility_type", "unique_key", "agency_name", "x_coordinate_state_plane", "y_coordinate_state_plane", "latitude", "school_code", "school_city", "address_type", "school_number", "resolution_action_updated_date", "descriptor", "cross_street_2", "cross_street_1", "taxi_pick_up_location", "school_zip", "agency", "borough", "incident_address", "school_phone_number", "park_facility_name", "school_region"]


// some... could do more comprehensive search
_.uniq(descriptors)
["Noise: Construction Before/After Hours (NM1)", "Noise: Alarms (NR3)", "Noise: air condition/ventilation equipment (NV1)", "Noise, Barking Dog (NR5)", "Noise: Construction Equipment (NC1)", "Noise: Jack Hammering (NC2)", "Noise:  lawn care equipment (NCL)"]
["Noise: Construction Before/After Hours (NM1)", "Noise: Alarms (NR3)", "Noise: air condition/ventilation equipment (NV1)", "Noise, Barking Dog (NR5)", "Noise: Construction Equipment (NC1)", "Noise: Jack Hammering (NC2)", "Noise:  lawn care equipment (NCL)"]

var waveformMatching = {
	"Noise: Construction Before/After Hours (NM1)" : 'triangle with heavy fast tremelo', 
	"Noise: Alarms (NR3)" : 'sin with vibrato', 
	"Noise: air condition/ventilation equipment (NV1)" : 'pink noise / white noise',
	"Noise, Barking Dog (NR5)" : 'sample?' , 
	"Noise: Construction Equipment (NC1)" : 'triangle with heavy fast tremelo' , 
	"Noise: Jack Hammering (NC2)" : 'percussion?' , 
	"Noise:  lawn care equipment (NCL)" : 'buzz saw'
};


// "Noise: Construction Before/After Hours (NM1)", "Noise: Alarms (NR3)", "Noise: air condition/ventilation equipment (NV1)", "Noise, Barking Dog (NR5)", "Noise: Construction Equipment (NC1)", "Noise: Jack Hammering (NC2)", "Noise:  lawn care equipment (NCL)"




// map to duration

// data returns 
// find the earliest created_date -- that is 0:00 in composition
// find the latest closed_date -- this is 00:00

var created1 = new Date(models[1].created_date);
var times = [created1, created2, ended1, ended2];
_.min(times);
_.max(times);


_(models).forEach(function(n) {
  n.descriptor
});

var descriptors = [];
_.forEach(models, function(m){
	descriptors.push(m.descriptor);
});

_([1, 2]).forEach(function(n) {
  console.log(n);
}).value();

// If your number X falls between A and B, and you would like Y to fall between C and D, you can apply the following linear transform:

// Y = (X-A)/(B-A) * (D-C) + C

// That should give you what you want, although your question is a little ambiguous, since you could also map the interval in the reverse direction. Just watch out for division by zero and you should be


function linearTransform(num, originalRange, destinationRange){
	return ( num - originalRange[0] ) / (originalRange[1] - originalRange[0] ) * (destinationRange[1] - destinationRange[0] ) + destinationRange[0];
}


















