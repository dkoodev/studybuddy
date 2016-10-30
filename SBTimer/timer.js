var inputtedTime;

var studyButton = document.getElementById("studyButton");
studyButton.addEventListener('click', function() {
	inputtedTime = document.getElementById("studyInput").value;
	alert(inputtedTime);
});

function convertTime() {
	var splitTime = inputtedTime.split(':');
	return (+splitTime[0]) * 60 * 60 + (+splitTime[1]) * 60 + (+splitTime[2]);
}

var time = convertTime();

function updateTime() {
	time--;
	return time;
}

function initializeClock() {
	// Create function that finds time interval and prints it
	var interval = setInterval(function() {
		updateTime();
		var seconds = Math.floor((time % 60));
		if(seconds < 10) {
			seconds = ('0' + seconds).slice(-2);
		}
		var minutes = Math.floor(((time/60) % 60));
		if(minutes < 10) {
			minutes = ('0' + minutes).slice(-2);
		}
		var hours = Math.floor((((time/60)/60 % 24)));
		if(hours < 10) {
			hours = ('0' + hours).slice(-2);
		}
		document.getElementById("clock").innerHTML = hours + ':' + minutes + ':' + seconds;
		if(time <= 0) {
			clearInterval(interval);
		}
	}, 1000)
}

initializeClock();