Gears = {
	createStore : function() {
		if ( 'undefined' == typeof google || ! google.gears ) return;
		
		if ( 'undefined' == typeof localServer )
			localServer = google.gears.factory.create("beta.localserver");
		
			store = localServer.createManagedStore(this.storeName());
			store.manifestUrl = "/manifest.json";
			store.checkForUpdate();
	},
	
	getPermission : function() {
		var perm = true;
		
		if ( 'undefined' != typeof google && google.gears ) {
			if ( ! google.gears.factory.hasPermission )
				perm = google.gears.factory.getPermission( 'Red', '/apple-touch-icon.png' );
			
			if ( perm )
				try { this.createStore(); } catch(e) { this.message(); } // silence if canceled
			else
				alert()
				
		}
	},
	
	storeName : function() {
		var name = window.location.protocol + window.location.host;
		
		name = name.replace(/[\/\\:*"?<>|;,]+/g, '_'); // gears beta doesn't allow certain chars in the store name
		name = 'tracks_' + name.substring(0, 56);
		
		return name;
	}
};

(function() {
	if ( 'undefined' != typeof google && google.gears ) return;
	
	var gf = false;
	if ( 'undefined' != typeof GearsFactory ) {
		gf = new GearsFactory();
	} else {
		try {
			gf = new ActiveXObject('Gears.Factory');
			if ( factory.getBuildInfo().indexOf('ie_mobile') != -1 )
				gf.privateSetGlobalObject(this);
		} catch (e) {
			if ( ( 'undefined' != typeof navigator.mimeTypes ) && navigator.mimeTypes['application/x-googlegears'] ) {
				gf = document.createElement("object");
				gf.style.display = "none";
				gf.width = 0;
				gf.height = 0;
				gf.type = "application/x-googlegears";
				document.documentElement.appendChild(gf);
			}
		}
	}
	
	if ( ! gf ) return;
	if ( 'undefined' == typeof google ) google = {};
	if ( ! google.gears ) google.gears = { factory : gf };
})();
