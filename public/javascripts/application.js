// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults


// rails auth token enabled in jquery
$(document).ajaxSend(function(event, request, settings) {
	if (typeof(AUTH_TOKEN) == "undefined") return;
	settings.data = settings.data || "";
	settings.data += (settings.data ? "&" : "") + "authenticity_token=" + encodeURIComponent(AUTH_TOKEN);
});

// add javascript request type
jQuery.ajaxSetup({
	'beforeSend': function(xhr) {xhr.setRequestHeader("Accept", "text/javascript")},
});


$(document).ready(function() {
	$("#button_to_add_new").click(function() {
		$("#add_new_person").show();
		$("#customers").hide();
		return false;
	});
	
	$("#add_new_person p.submit a").click(function(){
		$("#add_new_person").hide();
		$("#customers").show();
		return false;
	});
	
	$("#add_new_person #link_to_show_contact_section p a.add_contack_info").click(function(){
	  $('#contact_section').show();
	  $('#link_to_show_contact_section').hide();
	  return false;	
	});
});