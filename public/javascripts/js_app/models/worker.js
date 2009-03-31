var wp = google.gears.workerPool;

this.hello = function(message){
	var db = google.gears.factory.create('beta.database');
    db.open('red-CustomersManagement');
	var rs = db.execute("select state from isonline where id = ?",[1]);
	
	if(rs.isValidRow()) {
		var state = rs.fieldByName("state");
		if (state == "online"){
			
			wp.sendMessage('online', message.sender);
		}else if(state == "offline"){
			wp.sendMessage('offline', message.sender);
		}
	}
	db.close();
	
}
wp.onmessage = function(a, b, message) {
  this.hello(message);
}