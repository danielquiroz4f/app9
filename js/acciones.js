// JavaScript Document

$(document).ready(function(e) {
document.addEventListener("deviceready", onDeviceReady, false);

});

function onDeviceReady() {
	
	$('#posicion').on ('click', function (){
		getPosition ();
	});
	
$('#watch').on ('click', function (){
		WatchPosition ();
	});
	
	}
	
	function getPosition(){
		var options = {
			enableHighAccuary : true,
			maximumAge: 3600000
		}
		
		var WatchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
		function onSuccess(position) {
			
			alert ('latitude: ' + position.coords.latitude +'/n' + 
			'longitude: ' + position.coords.longitude +'/n' + 
			'altitude: ' + position.coords.altitude +'/n' + 
			'accuracy: ' + position.coords.accuracy +'/n' + 
			'altitude accuracy: ' + position.coords.altitudeAccuracy +'/n' + 
			'heading: ' + position.coords.heading +'/n' + 
			'speed: ' + position.coords.speed +'/n' + 
			'timestamp: ' + position.timestamp +'/n');
		};
		
		function onError(error) {
			alert('code:' + error.code + '/n' + 'message: ' + error.message + '/n');
		}
	}
	
	function WatchPosition() {
		var options = {
			maximumAge: 3600000,	
			timeout : 3000,
			enableHighAccuary : true,
		}
		var WatchID = navigator.geolocation.WatchPosition(onSuccess, onError, options);
		function onSuccess(position) {
			
			$('#latitud').html(position.coords.latitude);
			$('#longitud').html(position.coords.longitude);
			$('#altitud').html(position.coords.altitude);
			$('#accuracy').html(position.coords.accuracy);
			$('#aacuracy').html(position.coords.altitudeAccuracy);
			$('#heading').html(position.coords.heading);
			$('#speed').html(position.coords.speed);
			$('#timestamp').html(position.timestamp);
		};
		function onError(error) {
			alert('code:' + error.code + '/n' +'message: ' + error.message + '/n');
		}
	}
			
			