//------------------------------------------ Google Maps ---------------------------------------------

function onGoogleMapResponse(){
	map = new google.maps.Map(document.getElementById('googleMapContainer'), {
		zoom: 10,
		mapTypeId: 'hybrid'
	});

	var country = "New York";
	var geocoder = new google.maps.Geocoder();
	geocoder.geocode( { 'address' : country}, function(results, status){
		if(status == google.maps.GeocoderStatus.OK){
			map.setCenter(results[0].geometry.location);
		};
	});
}

$(document).ready( function(){
	$("#filter").on("click", filter);
	$("#compare").on("click", compare);
	$("#download").on("click", download);
	$("#reset").on("click", reset);
})
