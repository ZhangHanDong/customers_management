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

// generate an object box
box = {};

box.addToCustomerList = function(responseText){
	$("#add_new_person").hide(1000);
	$("#customers").show(1000);
	$(responseText).prependTo('#customers table.index #customers_list').effect("highlight", {}, 10000);
	$('#new_customer')[0].reset();
}

// box.add_another = function(origin, target){
// 	var content = "<tr>" + $(origin).eq(0).clone(true).html() + "</tr>";
// 	$(target).before(content);
// }
// 
// box.focusEvent = function(target, origin_value){
// 	if (target.value == origin_value) { 
// 	    target.value = '';
// 	    $(target).removeClass('blank'); 
// 	}
// }
// 
// box.blurEvent = function(target,origin_value){
// 	if (target.value.match(/^ *$/)) {
// 		 target.value = origin_value;
// 		 $(target).addClass('blank');
// 	}
// }

box.CheckTime = function(i){
	if (i<10){
	    i="0" + i;
	}
	return i;
}

//cover time formate , from '2008-03-01T20:24:17Z' to '2008-03-01 20:24:17'
box.prettyDate = function(time){
	return (time).replace(/[TZ]/g," ");
	// var date = new Date((time).replace(/-/g,"/").replace(/[TZ]/g," "));
	// 	var year=date.getFullYear();
	// 	var month=box.CheckTime(date.getMonth()+1);
	// 	var day=box.CheckTime(date.getDate());
	// 	var h=box.CheckTime(date.getHours());
	// 	var m=box.CheckTime(date.getMinutes());
	// 	var s=box.CheckTime(date.getSeconds());
	// 	return  year+'-'+month+'-'+day+" "+h+":"+m+":"+s;
}
// show message when offline 
// box.flashMessage = function(message){
// 	$.blockUI({  
//       message: $('div.growlUI'), 
//       fadeIn: 700, 
//       fadeOut: 700, 
//       timeout: 3000, 
//       showOverlay: false, 
//       centerY: false, 
//       css: {  
//           width: '350px', 
//           top: '10px',  
//           left: '',  
//           right: '10px',  
//           border: 'none', 
//           padding: '5px', 
//           backgroundColor: '#000',
//           opacity: '.9', 
//           color: '#ffffff'
//       } 
//     });
//     $("#flash_message span").empty().addClass("notice").append(message);  
// }

$(document).ready(function() {
	// $("#new_customer").validate();
	// alert(box.prettyDate('2008-03-01T20:24:17'));
	$('#new_customer').ajaxForm({
		success: box.addToCustomerList
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
		    // $("#offline-status img#is-connected").offline.offlineCreateDatabase();
        }
        
		// 
		// 		// $("#offline-status img#is-connected").click(function() { 
		// 		// 	 createStore();
		// 		// });
		// 		// $("#offline-status img#is-connected").hide();
		// 		// $("#offline-status img#is-syncing").show();
		// 		// 
		
	});
	

	$('#dynamic').html( '<table cellpadding="0" cellspacing="0" border="0" class="display" id="example"></table>' );
					$('#example').dataTable( {
						"aaData": [
							/* Reduced data set */
							[ "Trident", "Internet Explorer 4.0", "Win 95+", 4, "X" ],
							[ "Trident", "Internet Explorer 5.0", "Win 95+", 5, "C" ],
							[ "Trident", "Internet Explorer 5.5", "Win 95+", 5.5, "A" ],
							[ "Trident", "Internet Explorer 6.0", "Win 98+", 6, "A" ],
							[ "Trident", "Internet Explorer 7.0", "Win XP SP2+", 7, "A" ],
							[ "Gecko", "Firefox 1.5", "Win 98+ / OSX.2+", 1.8, "A" ],
							[ "Gecko", "Firefox 2", "Win 98+ / OSX.2+", 1.8, "A" ],
							[ "Gecko", "Firefox 3", "Win 2k+ / OSX.3+", 1.9, "A" ],
							[ "Webkit", "Safari 1.2", "OSX.3", 125.5, "A" ],
							[ "Webkit", "Safari 1.3", "OSX.3", 312.8, "A" ],
							[ "Webkit", "Safari 2.0", "OSX.4+", 419.3, "A" ],
							[ "Webkit", "Safari 3.0", "OSX.4+", 522.1, "A" ]
						],
						"aoColumns": [
							{ "sTitle": "Engine" },
							{ "sTitle": "Browser" },
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
					} );	




});




// $('#add_person_phone_number td.add a').click(function(){
//     box.add_another('#phone_number_list_person tbody tr','table#phone_number_list_person tbody tr#add_person_phone_number');
// 	return false;	
// });
// 
// $('#add_person_email_addresses td.add a').click(function(){
//     box.add_another('#email_address_list_person tbody tr','table#email_address_list_person tbody tr#add_person_email_addresses');
// 	return false;	
// });
// 
// $('#add_person_instant_messagers td.add a').click(function(){
//     box.add_another('#instant_messager_list_person tbody tr','table#instant_messager_list_person tbody tr#add_person_instant_messagers');
// 	return false;	
// });

// // red ones
// 	$('#add_person_red_ones td.add a').click(function(){
// 	    box.add_another('#red_one_list_person tbody tr','table#red_one_list_person tbody tr#add_person_red_ones');
// 		return false;	
// 	});
// 	
// 	$('#red_one_list_person tr td').livequery(function(){
// 		$(this).find("input#quotes").focus(function(){
// 		    box.focusEvent(this,'Quote');	
// 		}),
// 		
// 		$(this).find("input#serial_num").focus(function(){
// 		    box.focusEvent(this,'Serial Number');
// 		})
// 	});
// 
// 	$('#red_one_list_person tr td').livequery(function(){
// 		$(this).find("input#quotes").blur(function(){
// 			box.blurEvent(this,'Quote');
// 		}),
// 		
// 		$(this).find("input#serial_num").blur(function(){
// 		    box.blurEvent(this,'Serial Number');
// 		})
// 	});	

// //urban areas
// 	$('#add_person_urban_areas td.add a').click(function(){
// 	    box.add_another('#urban_area_list_person tbody tr','table#urban_area_list_person tbody tr#add_person_urban_areas');
// 		return false;
// 	});
// 	
// 	// resellers
// 	$('#add_person_resellers td.add a').click(function(){
// 	    box.add_another('#reseller_list_person tbody tr','table#reseller_list_person tbody tr#add_person_resellers');
// 		return false;	
// 	});
// 	
// 	$('#reseller_list_person tr td').livequery(function(){
// 		$(this).find("input#reseller_company").focus(function(){
// 	    	box.focusEvent(this,'Reseller Company');
// 	    }),
// 	
// 	    $(this).find("input#reseller_name").focus(function(){
// 	    	box.focusEvent(this,'Reseller Name');
// 	    }),
// 	
// 		$(this).find("input#reseller_mobile").focus(function(){
// 	    	box.focusEvent(this,'Reseller Mobile');
// 	    })
// 	});
// 	
// 	$('#reseller_list_person tr td').livequery(function(){
// 		$(this).find("input#reseller_company").blur(function(){
// 	    	box.blurEvent(this,'Reseller Company');
// 	    }),
// 	
// 	    $(this).find("input#reseller_name").blur(function(){
// 	    	box.blurEvent(this,'Reseller Name');
// 	    }),
// 	
// 		$(this).find("input#reseller_mobile").blur(function(){
// 	    	box.blurEvent(this,'Reseller Mobile');
// 	    })
// 	});	
// 
// 
// 	// clients
// 	$('#add_person_clients td.add a').click(function(){
// 	    box.add_another('#client_list_person tbody tr','table#client_list_person tbody tr#add_person_clients');
// 		return false;	
// 	});
// 	
// 	$('#client_list_person tr td').livequery(function(){
// 		$(this).find("input#client_name").focus(function(){
// 	    	box.focusEvent(this,'Client Name');
// 	    }),
// 	
// 	    $(this).find("input#client_mobile").focus(function(){
// 	    	box.focusEvent(this,'Client Mobile');
// 	    })
// 	});
// 	
// 	$('#client_list_person tr td').livequery(function(){
// 		$(this).find("input#client_name").blur(function(){
// 	    	box.blurEvent(this,'Client Name');
// 	    }),
// 	
// 	    $(this).find("input#client_mobile").blur(function(){
// 	    	box.blurEvent(this,'Client Mobile');
// 	    })
// 	});
// 	
// 	// web sites
// 	$('#add_person_web_addresses td.add a').click(function(){
// 	    box.add_another('#web_address_list_person tbody tr','table#web_address_list_person tbody tr#add_person_web_addresses');
// 		return false;	
// 	});
// 	
// 	$('#add_person_addresses td.add a').click(function(){
// 	    box.add_another('#address_list_person tbody tr','table#address_list_person tbody tr#add_person_addresses');
// 		return false;
// 	});
// 	
// 	// address
// 	
// 	$('#address_list_person tr td').livequery(function(){
// 		$(this).find("textarea#street").focus(function(){
// 	    	box.focusEvent(this,'Street');
// 	    }),
// 	
// 	    $(this).find("input#city").focus(function(){
// 	    	box.focusEvent(this,'City');
// 	    }),
// 	
// 	    $(this).find("input#state").focus(function(){
// 	    	box.focusEvent(this,'State');
// 	    }),
// 	
// 	    $(this).find("input#zip").focus(function(){
// 	    	box.focusEvent(this,'Zip');
// 	    }),
// 	
// 	    $(this).find("input#country").focus(function(){
// 	    	box.focusEvent(this,'Country');
// 	    })
// 	});
// 	
// 	$('#address_list_person tr td').livequery(function(){
// 		$(this).find("textarea#street").blur(function(){
// 	    	box.blurEvent(this,'Street');
// 	    }),
// 	
// 	    $(this).find("input#city").blur(function(){
// 	    	box.blurEvent(this,'City');
// 	    }),
// 	
// 	    $(this).find("input#state").blur(function(){
// 	    	box.blurEvent(this,'State');
// 	    }),
// 	
// 	    $(this).find("input#zip").blur(function(){
// 	    	box.blurEvent(this,'Zip');
// 	    }),
// 	
// 	    $(this).find("input#country").blur(function(){
// 	    	box.blurEvent(this,'Country');
// 	    })
// 	});
// 	
// =============	
// $("#button_to_add_new").click(function() {
// 	$("#add_new_person").show(800);
// 	$("#customers").hide(800);
// 	return false;
// });

// $("#add_new_person p.submit a").click(function(){
// 		$("#add_new_person").hide(800);
// 		$("#customers").show(800);
// 		return false;
// 	});

// $("#add_new_person #link_to_show_contact_section p a.add_contack_info").click(function(){
// 	  $('#contact_section').show(800);
// 	  $('#link_to_show_contact_section').hide(800);
// 	  return false;	
// 	});



