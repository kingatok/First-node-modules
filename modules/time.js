var os = require('os');

function formatTime(time) {
	// var uptime = os.uptime();
	var hours = (time / 3600).toFixed(0);
	var minutes = ((time % 360)/60).toFixed(0);
	var seconds = ((time % 360) % 60); 

	console.log('Time: ', hours, 'hours', minutes, 'minutes', seconds, 'seconds');
}

exports.print = formatTime;