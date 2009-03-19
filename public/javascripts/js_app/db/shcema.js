/**
 * Local DataBase Schema
 *
 * Alex(blackanger.z@gmail.com)
 * 2009.3
 */
$j.m({ Shcema: {
	
	tableCreate: function(){
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
	}


}
});