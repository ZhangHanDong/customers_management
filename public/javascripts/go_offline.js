// Copyright 2007, Google Inc.
//
// changed by Alex(blackanger.z@gmail.com)
// 2009.01.22
var Offline = Class.create({
    STORE_NAME: "customer_management_offline_docset",

    // Change this to set the URL of tha manifest file, which describe which
    // URLs to capture. It can be relative to the current page, or an
    // absolute URL.
    MANIFEST_FILENAME: "../cmmanifest.json",
    exe_onprogress: false,

    check: function(){
        if (!window.google || !google.gears) {
            alert("You must install Google Gears first.");
		    return false;
		}
		return true;
	},

	init:function(){
	    if (check){ 
		    localServer = google.gears.factory.create("beta.localserver","1.0");
		    store = localServer.createManagedStore(this.STORE_NAME);
		    cm.variables.offstore.textOut("Google Gears is installed, continue.");
		}
    },

	offline_onprogress: function(){
	    cm.variables.offstore.exe_onprogress = true;
		$("#offline-status img#is-connected").hide();
		$("#offline-status img#is-syncing").show();
	},

	offline_oncomplete: function(details){
	    if(cm.variables.offstore.exe_onprogress){
		    $("#offline-status img#is-syncing").hide();
		    $("#offline-status img#is-disconnected").show();
		}
	},

	//return null if no store exists.
	store: this.localServer.openManagedStore(this.STORE_NAME),
	
	if(this.store){
	    this.store.onprogress = offline_onprogress;
	    this.store.oncomplete = offline_oncomplete;
	},
    
	// Create the managed resource store
	offline_createStore: function() {
	    if (!check) return; 
	    // cm.variables.db.execute("update settings set myvalue ='true' where mykey = ?",["offline"]);
	    cm.variables.offline = true;
	    this.store = this.localServer.createManagedStore(this.STORE_NAME);
	    this.store.manifestUrl = this.MANIFEST_FILENAME;
	    this.store.checkForUpdate();
	    this.store.onprogress = offline_onprogress;
	    this.store.oncomplete = offline_oncomplete;
		// if download error occur,this function will display a note.
		var timerId = window.setInterval(function() {
		// When the currentVersion property has a value, all of the resources
		// listed in the manifest file for that version are captured. There is
		// an open bug to surface this state change as an event.
		if (cm.variables.offstore.store.currentVersion) {
		    window.clearInterval(timerId);
		    // cm.variables.db.execute("update settings set myvalue = 'false' where mykey = ?",["firstrun"]);
			cm.variables.offstore.textOut("The documents are now available offline.<br>" + 
			              "With your browser offline, load the document at " +
			              "its normal online URL to see the locally stored version. <br>" +
						        "The version stored is: " + 
			              store.currentVersion);
		    } else if (cm.variables.offstore.store.updateStatus == 3) {
		        cm.variables.offstore.textOut("Error: " +cm.variables.offstore.store.lastErrorMessage);
		    }
		 }, 500);
	},

	// Remove the managed resource store.
	offline_removeStore: function() {
	    if (!check) return; 
	    // cm.variables.db.execute("update settings set myvalue ='false' where mykey = ?",["offline"]);
	    cm.variables.offline = false;
	    this.localServer.removeManagedStore(this.STORE_NAME);
	    this.textOut("Done. The local store has been removed." +
	          "You will now see online versions of the documents.");
	},
    
	// Utility function to output some status text.
	this.textOut =function(s) {}
    
});


