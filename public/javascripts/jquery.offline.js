// Copyright 2007, Google Inc.
//  =============
//  gears_offline
//  =============
// Changed by: Alex(blackanger.z@gmail.com)
// Time : 2009.01.23

(function() {

jQuery.fn.offline = {
	
	STORE_NAME: "customer_management_offline_docset",
	MANIFEST_FILENAME: "../offline_resources/cmmanifest.json",	
	DATABASE_NAME: "red-CustomersManagement",
	
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
				//create LocalServer

				localServer = google.gears.factory.create("beta.localserver","1.0");
				store = localServer.createManagedStore(this.STORE_NAME);
                
				//create DataBase
				db = google.gears.factory.create('beta.database', '1.0');
				var workerPool = google.gears.factory.create('beta.workerpool');
				
				request = google.gears.factory.create('beta.httprequest');
				if(db){
					
					// db.execute('BEGIN');
					try{
						ActiveRecord.connect(ActiveRecord.Adapters.Local,this.DATABASE_NAME);
						this.CreateModel();
						
						// db.execute('COMMIT');
						// 						alert('commit after')
					}catch(exp){
					// 						db.execute('ROLLBACK');
										}
					// 					
					// db.open(this.DATABASE_NAME);
					
                    
					request.open('GET','/customers.js');
					request.onreadystatechange = function() {
						if (request.readyState == 4) {
							try{
								
								response = request.responseText;
								// console.log(response);
								// var rt = this.jsonParse(response);
								// wp.sendMessage(["a","b",{text:rt.msg, action:"popup"}], x.message.sender);
							}catch(e){
								console.log(e);
							}
							
						}
					};
					request.send();	
					// workerpoolDbSyncInit();
				}

				return true;
			}catch(e){
				alert('Could not create LocalServer: ' + e.message);
				return false;
			}

			// this.textOut("Google Gears is installed, continue.");
		}
	},
	
	jsonParse: function(){
		
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
	},
	
	CreateModel: function(){
		
		//create model Customer
		var Customer = ActiveRecord.create('customers',{
				first_name:     { type: 'varchar(30)' },
				first_name_py:  { type: 'varchar(30)' },
				last_name:      { type: 'varchar(30)' },
				last_name_py:   { type: 'varchar(30)' },
				title:          { type: 'varchar(30)' },
				title_py:       { type: 'varchar(30)' },
				notes:          { type: 'varchar(30)' },
				account_num:    { type: 'varchar(30)' },
				company:        { type: 'varchar(30)' },
				company_py:     { type: 'varchar(30)' },
				created_at:     { type: 'varchar(30)' },
				updated_at:     { type: 'varchar(30)' }
		});
		
		//create model ContactData
		var ContactData = ActiveRecord.create('contact_datas',{
			customer_id:          { type: 'varchar(5)'  },
			type:                 { type: 'varchar(30)' },
			location:             { type: 'varchar(30)' },
			website:              { type: 'varchar(30)' },
			quotes:               { type: 'varchar(30)' },
			serial_num:           { type: 'varchar(30)' },
			email:                { type: 'varchar(30)' },
			phone:                { type: 'varchar(30)' },
			instant_message:      { type: 'varchar(30)' },
			protocol:             { type: 'varchar(30)' },
			urban_area:           { type: 'varchar(30)' },
			urban_area_py:        { type: 'varchar(30)' },
			reseller_company:     { type: 'varchar(30)' },
			reseller_company_py:  { type: 'varchar(30)' },
			reseller_name:        { type: 'varchar(30)' },
			reseller_name_py:     { type: 'varchar(30)' },
			reseller_mobile:      { type: 'varchar(30)' },
			client_name:          { type: 'varchar(30)' },
			client_name_py:       { type: 'varchar(30)' },
			client_mobile:        { type: 'varchar(30)' },
			street:               { type: 'varchar(30)' },
			city:                 { type: 'varchar(30)' },
			city_py:              { type: 'varchar(30)' },
			state:                { type: 'varchar(30)' },
			state_py:             { type: 'varchar(30)' },
			zip:                  { type: 'varchar(30)' },
			country:              { type: 'varchar(30)' },
			created_at:           { type: 'varchar(30)' },
			updated_at:           { type: 'varchar(30)' }
		});
		
		var cu1 = Customer.create({
			first_name: unescape( "\u4e8b\u5b9e\u6b7b" ),
			created_at: this.FormatDateTime()
		});
		var cu2 = Customer.create({
			first_name: 'suck!',
			created_at: this.FormatDateTime()
		});
		
	},
	
	FormatDate: function(){
	    var today=new Date();
		var year=today.getFullYear();
		var month=this.CheckTime(today.getMonth()+1);
		var day=this.CheckTime(today.getDate());
		return year+'-'+month+'-'+day;	
	},
	
	FormatDateTime: function(){
		var today=new Date();
		var h=this.CheckTime(today.getHours());
		var m=this.CheckTime(today.getMinutes());
		var s=this.CheckTime(today.getSeconds());
		return  this.FormatDate()+" "+h+":"+m+":"+s;
	},
	
	CheckTime: function(i){
		if (i<10){
		    i="0" + i;
		}
		return i;
	}
};

})(jQuery);