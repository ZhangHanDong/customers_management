/**
* The ChinldWorkerPool of Monitor user is online or offline
*
* Alex(blackanger.z@gmail.com)
* 2009.3
*/
 
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
  var count = 0;
  var db = google.gears.factory.create('beta.database');
  db.open('red-CustomersManagement');
  request.open('HEAD', url + String(Math.floor(Math.random()*10000)));
  request.onreadystatechange = function() {
    if (request.readyState == 4) {
      try {
        if (request.status == 200) {
	      rs = db.execute("select * from isonline",[]);
	      if(rs.isValidRow()){count = rs.field(0)};
          if (!online) {
            online = true;
            if (count == 0){
				db.execute("insert into isonline (state) values (?)",['online']);
            }else{
				db.execute('update isonline set state=? where state=?;', ['online',"offline"]);
			}
            
            rs.close();
            wp.sendMessage("online", parentId);
          }
        }
      }
      catch(e) {
        if (online || first) {
			online = false;
	        first = false;
          db.execute('update isonline set state=? where state=?;', ['offline',"online"]);
          wp.sendMessage("offline", parentId);
          
        }
      }
      db.close();
      // wp.sendMessage('ddd', parentId);
      timer.setTimeout(monitor, POLLING_INTERVAL);
    }
  }
  try {
    request.send();
  }
  catch(e) {
    if (online) {
      online = false;
	var db = google.gears.factory.create('beta.database');
	db.open('red-CustomersManagement');
	db.execute('update isonline set state=? where state=?;', ['offline',"online"]);
	db.close();
      wp.sendMessage("offline", parentId);
    }
  }
}
 
wp.onmessage = function(a, b, message) {
  url = message.text;
  parentId = message.sender;
  monitor(message)
}