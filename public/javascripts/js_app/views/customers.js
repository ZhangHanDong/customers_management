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
	}
}
});