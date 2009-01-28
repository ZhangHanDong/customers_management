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

function addToCustomerList(responseText){
	$("#add_new_person").hide(1000);
	$("#customers").show(1000);
	$(responseText).prependTo('#customers table.index #customers_list').effect("highlight", {}, 10000);
	$('#new_customer')[0].reset();
}

function add_another(origin, target){
	var content = "<tr>" + $(origin).eq(0).html() + "</tr>";
	$(target).before(content);
}

$(document).ready(function() {
	// $("#new_customer").validate();
	
	$('#new_customer').ajaxForm({
		success: addToCustomerList
	});
	
	$('#add_person_phone_number td.add a').click(function(){
	    add_another('#phone_number_list_person tbody tr','table#phone_number_list_person tbody tr#add_person_phone_number');	
	});
	
	
	// show message when offline 
	function flashMessage(message){
		$.blockUI({  
	      message: $('div.growlUI'), 
	      fadeIn: 700, 
	      fadeOut: 700, 
	      timeout: 3000, 
	      showOverlay: false, 
	      centerY: false, 
	      css: {  
	          width: '350px', 
	          top: '10px',  
	          left: '',  
	          right: '10px',  
	          border: 'none', 
	          padding: '5px', 
	          backgroundColor: '#000',
	          opacity: '.9', 
	          color: '#ffffff'
	      } 
	    });
	    $("#flash_message span").empty().addClass("notice").append(message);  
	}
		
	$("#button_to_add_new").click(function() {
		$("#add_new_person").show(1000);
		$("#customers").hide(1000);
		return false;
	});
	
	$("#add_new_person p.submit a").click(function(){
		$("#add_new_person").hide(1000);
		$("#customers").show(1000);
		return false;
	});
	
	$("#add_new_person #link_to_show_contact_section p a.add_contack_info").click(function(){
	  $('#contact_section').show(1000);
	  $('#link_to_show_contact_section').hide(1000);
	  return false;	
	});
	
	$("#phone_number_list_person td.add a").click(function() {
	   // $("#phone_number_list_person")
	   return false;
	});
	
	$("#offline-status img#is-connected").click(function() {
		
		$("#offline-status img#is-connected").gearsInit();
		$("#offline-status img#is-connected").gearsCheck();
		// var f = $("ul#menu li");
		//         for(var i = 0;i < $(f).size(); i++){
		// 	        if (!$(f).eq(i).find("a").hasClass("active")){
		// 		$(f).eq(i).find("a").hide();
		// 	}
		// 	         
		//         }
		if( $("#offline-status img#is-connected").offline.init() ){
		    $("#offline-status img#is-connected").offline.offlineCreateStore();
        }
        
		// 
		// 		// $("#offline-status img#is-connected").click(function() { 
		// 		// 	 createStore();
		// 		// });
		// 		// $("#offline-status img#is-connected").hide();
		// 		// $("#offline-status img#is-syncing").show();
		// 		// 
		flashMessage('you can use in offline model!');
	});
	
	

});





// 
// 
// (function($){
// 	$.fn.gearify = function(options){
// 
// 		var defaults = {};                  
// 		var options = $.extend(defaults, options);
// 
// 		var submitToGears = function(a){
// 			console.log("function submitToGears() : "+a);
// 			if (submitToGears && window.google && google.gears){
// 				var db = google.gears.factory.create('beta.database');
// 			}
// 		}  
// 
// 		return this.each(function(){
// 			$(this).submit(function(){
// 				$.ajax({type: 'post',
// 				url: $(this).attr('action'),
// 				data: {dummy: "bla", stuff: "blo" },
// 				success: function(data){                    
// 
// 					if ($('h1',
// 					data).html() == 'An Error Was Encountered') {
// 						//DB is down
// 
// 						submitToGears('db error');          
// 					}
// 					else {
// 						//Server is up
// 
// 						console.log('NO need for gears');
// 
// 						document.write(data);                      
// 					}
// 				},
// 				error: function(data){      
// 					submitToGears('error.
// 					server down. '+data);            // Server down
// 				}
// 			});
// 			return false;          
// 		});      
// 	});
// }
// })(jQuery);  
// 
// $('form').gearify();
// 
























