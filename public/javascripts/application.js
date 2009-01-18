// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults


$(document).ready(function() {
	$("#button_to_add_new").click(function() {
		$("#add_new_person").show();
		$("#customers").hide();
	});
	
	$("#add_new_person p.submit a").click(function(){
		$("#add_new_person").hide();
		$("#customers").show();	
	});
	
	$("#add_new_person #link_to_show_contact_section p a.add_contack_info").click(function(){
	  $('#contact_section').show();
	  $('#link_to_show_contact_section').hide();	
	});
});