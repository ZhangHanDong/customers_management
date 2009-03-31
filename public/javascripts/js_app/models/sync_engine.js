/**
 * SyncEngine Model
 *
 * Alex(blackanger.z@gmail.com)
 * 2009.3
 */
$j.m({ SyncEngine: {
	isOnlie: function(){
		workerPool = google.gears.factory.create('beta.workerpool');
				
		workerPool.onmessage = function(a, b, message) {
			if (message.sender == monitorchildWorkerId) {
					if(message.text == 'online'){
						$('#is-connected').show();
						$('#is-disconnected').hide();
					}else if(message.text == 'offline'){
						$('#is-disconnected').show();
						$('#is-connected').hide();
					}
			}
		};
        
        var monitorchildWorkerId = workerPool.createWorkerFromUrl('/javascripts/js_app/models/monitor.js');
        workerPool.sendMessage(window.location + '?monitor', monitorchildWorkerId);
        
	},
	
	
	helloWorld: function(){

		workerPool = google.gears.factory.create('beta.workerpool');

		workerPool.onmessage = function(a, b, message) {			
			if(message.sender == hellowordWorkerId){
				
				var state = message.text;
				if(state == 'online'){
					console.log(message.text);
				}else if(state == 'offline'){
					alert("current offline , can't Sync Date");
				}
			}
		};

		var hellowordWorkerId = workerPool.createWorkerFromUrl('/javascripts/js_app/models/worker.js');
		workerPool.sendMessage(['a', 1, {helloWorld: "Hello world!"}], hellowordWorkerId);

	}
}
});