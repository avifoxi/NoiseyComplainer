// &&status='Open' or 'Closed' => this will effect density of ending -- if Open there will almost inevitably be high density of notes sustaingin til the end of the piece

function makeQueryString(density, zip, start_date, end_date ) {
	if (!start_date){
		start_date = "'2014-02-01'";
	}
	var str = "https://data.cityofnewyork.us/resource/erm2-nwe9.json?$where=created_date>=";
	str += start_date;
	str += "&&complaint_type='noise'&&incident_zip='" + zip;
	str += "'&$limit=" + density;
	str += "&$select=incident_zip, street_name, closed_date, created_date, unique_key, x_coordinate_state_plane, y_coordinate_state_plane, longitude, latitude, descriptor, status";

	return str;

}