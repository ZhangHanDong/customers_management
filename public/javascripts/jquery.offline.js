// Copyright 2007, Google Inc.
//  =============
//  gears_offline
//  =============
// Changed by: Alex(blackanger.z@gmail.com)
// Time : 2009.01.23

(function() {

jQuery.fn.offline = {
	
	STORE_NAME: "customer_management_offline_docset",
	MANIFEST_FILENAME: "../cmmanifest.json",	
	
	check: function(){
		if (!window.google || !google.gears) {
		    alert("You must install Google Gears first.");
			return false;
		}
		return true;
	},
	
	init: function(){
		if(this.check){
			try{
			   localServer = google.gears.factory.create("beta.localserver","1.0");
			   store = localServer.createManagedStore(this.STORE_NAME);
			   return true;
			}catch(e){
			   alert('Could not create LocalServer: ' + e.message);
			   return false;
			}
			 
			 // this.textOut("Google Gears is installed, continue.");
		}
	},
	
	offlineCreateStore: function(){
		if (!this.check) return; 
		this.store = localServer.createManagedStore(this.STORE_NAME);
		this.store.manifestUrl = this.MANIFEST_FILENAME;
		this.store.checkForUpdate();

		// if download error occur,this function will display a note.
		var timerId = window.setInterval(function() {
			// When the currentVersion property has a value, all of the resources
			// listed in the manifest file for that version are captured. There is
			// an open bug to surface this state change as an event.
			if (this.store.currentVersion) {
				window.clearInterval(timerId);
				// this.textOut("Google Gears is installed, continue.");
			} else if (this.store.updateStatus == 3) {
				// this.textOut("Error: " +this.store.lastErrorMessage);
			}
			}, 500);
	},
	
	offlineRemoveStore: function(){
		if (!this.check) return; 
		localServer.removeManagedStore(this.STORE_NAME);
		// this.textOut("Done. The local store has been removed." +
		// "You will now see online versions of the documents.");
	}	
};

})(jQuery);