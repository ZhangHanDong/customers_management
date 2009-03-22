/**
 * Customer Model
 *
 * Alex(blackanger.z@gmail.com)
 * 2009.3
 */
$j.m({ Customer: {
	
	relation: function(){
		Customer.hasMany(ContactData, {
			name: 'contact_datas', foreignKey: 'customer_id', dependent: false
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
	
	// support data for dynamic create table
	dynamicData: function(){
		
		var data = {
			"aaData": [
			/* Reduced data set */
			[ "张三", "Internet Explorer 4.0", "Win 95+", 4, "X" ],
			[ "李四", "Internet Explorer 5.0", "Win 95+", 5, "C" ],
			[ "王麻子", "Internet Explorer 5.5", "Win 95+", 5.5, "A" ],
			[ "Trident", "Internet Explorer 6.0", "Win 98+", 6, "A" ],
			[ "Trident", "Internet Explorer 7.0", "Win XP SP2+", 7, "A" ],
			[ "Gecko", "Firefox 1.5", "Win 98+ / OSX.2+", 1.8, "A" ],
			[ "Gecko", "Firefox 2", "Win 98+ / OSX.2+", 1.8, "A" ],
			[ "Gecko", "Firefox 3", "Win 2k+ / OSX.3+", 1.9, "A" ],
			[ "Webkit", "Safari 1.2", "OSX.3", 125.5, "A" ],
			[ "Webkit", "Safari 1.3", "OSX.3", 312.8, "A" ],
			[ "Webkit", "Safari 2.0", "OSX.4+", 419.3, "A" ],
			[ "Webkit", "Safari 2.0", "OSX.4+", 419.3, "A" ],
			[ "Webkit", "Safari 2.0", "OSX.4+", 419.3, "A" ],
			[ "Webkit", "Safari 2.0", "OSX.4+", 419.3, "A" ],
			[ "Webkit", "Safari 2.0", "OSX.4+", 419.3, "A" ],
			[ "Webkit", "Safari 2.0", "OSX.4+", 419.3, "A" ],
			[ "Webkit", "Safari 2.0", "OSX.4+", 419.3, "A" ],
			[ "Webkit", "Safari 2.0", "OSX.4+", 419.3, "A" ],
			[ "Webkit", "Safari 2.0", "OSX.4+", 419.3, "A" ],
			[ "Webkit", "Safari 2.0", "OSX.4+", 419.3, "A" ],
			[ "Webkit", "Safari 2.0", "OSX.4+", 419.3, "A" ],
			[ "Webkit", "Safari 2.0", "OSX.4+", 419.3, "A" ],
			[ "Webkit", "Safari 2.0", "OSX.4+", 419.3, "A" ],
			[ "Webkit", "Safari 2.0", "OSX.4+", 419.3, "A" ],
			[ "Webkit", "Safari 2.0", "OSX.4+", 419.3, "A" ],
			[ "Webkit", "Safari 2.0", "OSX.4+", 419.3, "A" ],
			[ "Webkit", "Safari 2.0", "OSX.4+", 419.3, "A" ],
			[ "Webkit", "Safari 2.0", "OSX.4+", 419.3, "A" ],
			[ "Webkit", "Safari 2.0", "OSX.4+", 419.3, "A" ],
			[ "Webkit", "Safari 2.0", "OSX.4+", 419.3, "A" ],
			[ "Webkit", "Safari 2.0", "OSX.4+", 419.3, "A" ],
			[ "Webkit", "Safari 3.0", "OSX.4+", 522.1, "A" ]
			],
			"aoColumns": [
			{ "sTitle": "Name" },
			{ "sTitle": "Email" },
			{ "sTitle": "Platform" },
			{ "sTitle": "Version", "sClass": "center" },
			{
				"sTitle": "Grade",
				"sClass": "center",
				"fnRender": function(obj) {
					var sReturn = obj.aData[ obj.iDataColumn ];
					if ( sReturn == "A" ) {
						sReturn = "<b>A</b>";
					}
					return sReturn;
				}
			}
			]
		};
		
		return data;
	}
	
}
});