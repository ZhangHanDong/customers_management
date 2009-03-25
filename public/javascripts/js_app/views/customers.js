/**
 * CustomersView
 *
 * This is a jamal sample view
 */
$j.v({ Customers: {
	
	displayForm: function(){
		$("#add_new_person").show(800);
		$("#customers").hide(800);
	},
	
	cancelForm: function(){
		$("#add_new_person").hide(800);
		$("#customers").show(800);
	},
    
    addContactInfo: function(){
		$('#contact_section').show(800);
		$('#link_to_show_contact_section').hide(800);
	},
	
	
	focusEvent: function(target, origin_value){
		if (target.value == origin_value) { 
		    target.value = '';
		    $(target).removeClass('blank'); 
		}
	},

	blurEvent: function(target,origin_value){
		if (target.value.match(/^ *$/)) {
			 target.value = origin_value;
			 $(target).addClass('blank');
		}
	},
	
	addAnother: function(origin, target){
		var content = "<tr>" + $(origin).eq(0).clone(true).html() + "</tr>";
		$(target).before(content);
	},
	
	createDynamicTable: function(dynamic_data){
	
		////////////////////////////////////////////////////////
		// Variables for jsonT to transform apps json objects //
		////////////////////////////////////////////////////////
		var _APP_TABLE_T={
			"self":"[{$}]",
			"self[*]":"['{$.customer.first_name}','{$.customer.last_name}','{$.customer.created_at}','<a href=javascript:editApp({$.customer.first_name})>Edit</a> <a href=javascript:delApp({$.customer.first_name})>Delete</a>'],"
		};
		var _APP_TABLE_HEADER=[{"sTitle":"FirstName"},{"sTitle":"LastName"},{"sTitle":"Created Date"},{"sTitle":"Actions"}];
	    bb = eval(dynamic_data);
		aa = eval(jsonT(bb,_APP_TABLE_T).replace(",]","]"));
		
		$('#dynamic').html( '<table cellpadding="0" cellspacing="0" border="0" class="display" id="customers_table"></table>' );
	    
		oTable = $('#customers_table').dataTable({
			"aaData": aa,
			"aoColumns": _APP_TABLE_HEADER
		});

		$('#customers_table tbody tr').live('click', function(){
			oTable.fnOpen( this, "详细信息", "info_row" );
			/* Then when the info row is clicked upon - close it */
			$('#customers_table .info_row').click( function () {
				oTable.fnClose();
			} );
		});
	}
}
});