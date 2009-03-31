var POLLING_INTERVAL = 2000;

var wp = google.gears.workerPool;
var url;
var parentId;

var first = true;
var online;

var request = google.gears.factory.create('beta.httprequest', '1.0');
var timer = google.gears.factory.create('beta.timer');

var wp = google.gears.workerPool;

monitor = function (message) {
	request.open('HEAD', url + String(Math.floor(Math.random()*10000)));
	request.onreadystatechange = function() {
		if (request.readyState == 4) {
			try {
				if (request.status == 200) {
					if (!online) {
						online = true;
						wp.sendMessage("online", parentId);
					}
				}
			}
			catch(e) {
				if (online || first) {
					online = false;
					first = false;
					wp.sendMessage("offline", parentId);
				}
			}
			wp.sendMessage(url+ String(Math.floor(Math.random()*10000)), parentId);
			timer.setTimeout(monitor, POLLING_INTERVAL);
		}
	}
	try {
		request.send();
	}
	catch(e) {
		if (online) {
			online = false;
			wp.sendMessage("offline", parentId);
		}
	}
}

wp.onmessage = function(a, b, message) { 
	url = message.text;
	parentId = message.sender;
	monitor(message)
}