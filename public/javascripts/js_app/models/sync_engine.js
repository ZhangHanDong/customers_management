/**
 * ContactData Model
 *
 * Alex(blackanger.z@gmail.com)
 * 2009.3
 */
$j.m({ SyncEngine: {
	mySync: function(){
		workerPool = google.gears.factory.create('beta.workerpool');
		workerPool.onmessage = function(a, b, message) {
			console.log('Received message from worker ' + message.sender + ': \n' + message.body);
		};

		var childWorkerId = workerPool.createWorkerFromUrl('/javascripts/js_app/models/worker.js');
		workerPool.sendMessage(["3..2..", 1, {helloWorld: "Hello world!"}], childWorkerId);
	}
}
});