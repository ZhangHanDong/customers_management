/**
 * SyncEngine Model
 *
 * Alex(blackanger.z@gmail.com)
 * 2009.3
 */
$j.m({ SyncEngine: {
	mySync: function(){
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
        
        var monitorchildWorkerId = workerPool.createWorkerFromUrl('/javascripts/js_app/models/isonline.js');
        this.monitorChildWorkerPool(monitorchildWorkerId);
	},
	
	
	monitorChildWorkerPool: function(monitorchildWorkerId){
		workerPool.sendMessage(window.location + '?monitor', monitorchildWorkerId);
	}
}
});