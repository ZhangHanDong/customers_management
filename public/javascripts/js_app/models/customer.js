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
	}
	
}
});