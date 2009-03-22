/**
 * CustomersController
 * 
 * Alex(blackanger.z@gmail.com)
 * 2009.3
 */
$j.c({Customers: {
    /**
     * Customers index action
     */
    index: function() {
	    this.displayForm();
	    this.cancelForm();
	    this.addContactInfo();
	    this.createDynamicTable($j.m.Customer.dynamicData());
	
        // contact info add event and blur && focus event
		this.addAnother('#add_person_phone_number td.add a', '#phone_number_list_person tbody tr','table#phone_number_list_person tbody tr#add_person_phone_number');
	    
	    this.addAnother('#add_person_email_addresses td.add a', '#email_address_list_person tbody tr','table#email_address_list_person tbody tr#add_person_email_addresses');

        this.addAnother('#add_person_instant_messagers td.add a', '#instant_messager_list_person tbody tr','table#instant_messager_list_person tbody tr#add_person_instant_messagers');

	    // red ones
	    this.addAnother('#add_person_red_ones td.add a','#red_one_list_person tbody tr','table#red_one_list_person tbody tr#add_person_red_ones');

		$('#red_one_list_person tr td').livequery(function(){
			$(this).find("input#quotes").focus(function(){
			    $j.v.Customers.focusEvent(this,'Quote');	
			}),

			$(this).find("input#serial_num").focus(function(){
			    $j.v.Customers.focusEvent(this,'Serial Number');
			})
		});

		$('#red_one_list_person tr td').livequery(function(){
			$(this).find("input#quotes").blur(function(){
				$j.v.Customers.blurEvent(this,'Quote');
			}),

			$(this).find("input#serial_num").blur(function(){
			    $j.v.Customers.blurEvent(this,'Serial Number');
			})
		});
		
		//urban areas
		 this.addAnother('#add_person_urban_areas td.add a','#urban_area_list_person tbody tr','table#urban_area_list_person tbody tr#add_person_urban_areas');

		// resellers
		this.addAnother('#add_person_resellers td.add a', '#reseller_list_person tbody tr','table#reseller_list_person tbody tr#add_person_resellers');

		$('#reseller_list_person tr td').livequery(function(){
			$(this).find("input#reseller_company").focus(function(){
		    	$j.current.focusEvent(this,'Reseller Company');
		    }),

		    $(this).find("input#reseller_name").focus(function(){
		    	$j.current.v.focusEvent(this,'Reseller Name');
		    }),

			$(this).find("input#reseller_mobile").focus(function(){
		    	$j.current.v.focusEvent(this,'Reseller Mobile');
		    })
		});

		$('#reseller_list_person tr td').livequery(function(){
			$(this).find("input#reseller_company").blur(function(){
		    	$j.current.v.blurEvent(this,'Reseller Company');
		    }),

		    $(this).find("input#reseller_name").blur(function(){
		    	$j.current.v.blurEvent(this,'Reseller Name');
		    }),

			$(this).find("input#reseller_mobile").blur(function(){
		    	$j.current.v.blurEvent(this,'Reseller Mobile');
		    })
		});	


		// clients
		this.addAnother('#add_person_clients td.add a', '#client_list_person tbody tr','table#client_list_person tbody tr#add_person_clients');

		$('#client_list_person tr td').livequery(function(){
			$(this).find("input#client_name").focus(function(){
		    	$j.current.v.focusEvent(this,'Client Name');
		    }),

		    $(this).find("input#client_mobile").focus(function(){
		    	$j.current.v.focusEvent(this,'Client Mobile');
		    })
		});

		$('#client_list_person tr td').livequery(function(){
			$(this).find("input#client_name").blur(function(){
		    	$j.current.v.blurEvent(this,'Client Name');
		    }),

		    $(this).find("input#client_mobile").blur(function(){
		    	$j.current.v.blurEvent(this,'Client Mobile');
		    })
		});

		// web sites
		this.addAnother('#add_person_web_addresses td.add a', '#web_address_list_person tbody tr','table#web_address_list_person tbody tr#add_person_web_addresses');

		// address
		this.addAnother('#add_person_addresses td.add a', '#address_list_person tbody tr','table#address_list_person tbody tr#add_person_addresses');
		
		$('#address_list_person tr td').livequery(function(){
			$(this).find("textarea#street").focus(function(){
		    	$j.current.v.focusEvent(this,'Street');
		    }),

		    $(this).find("input#city").focus(function(){
		    	$j.current.v.focusEvent(this,'City');
		    }),

		    $(this).find("input#state").focus(function(){
		    	$j.current.v.focusEvent(this,'State');
		    }),

		    $(this).find("input#zip").focus(function(){
		    	$j.current.v.focusEvent(this,'Zip');
		    }),

		    $(this).find("input#country").focus(function(){
		    	$j.current.v.focusEvent(this,'Country');
		    })
		});

		$('#address_list_person tr td').livequery(function(){
			$(this).find("textarea#street").blur(function(){
		    	$j.current.v.blurEvent(this,'Street');
		    }),

		    $(this).find("input#city").blur(function(){
		    	$j.current.v.blurEvent(this,'City');
		    }),

		    $(this).find("input#state").blur(function(){
		    	$j.current.v.blurEvent(this,'State');
		    }),

		    $(this).find("input#zip").blur(function(){
		    	$j.current.v.blurEvent(this,'Zip');
		    }),

		    $(this).find("input#country").blur(function(){
		    	$j.current.v.blurEvent(this,'Country');
		    })
		});
		
    }, // end index action


    /**
    * no action 
    * click 'add a new person display form'
    */
    displayForm: function(){
	    $("#button_to_add_new").click(function() {
	        $j.current.v.displayForm();
			return false;
		});
    },

    cancelForm: function(){
		$("#add_new_person p.submit a").click(function(){
			$j.v.Customers.cancelForm();
			return false;
		});
    },

    addContactInfo: function(){
		$("#add_new_person #link_to_show_contact_section p a.add_contack_info").click(function(){
		  $j.v.Customers.addContactInfo();
		  return false;	
		});
	},
	
	addAnother: function(dom, origin, target){
		$(dom).click(function(){
		    $j.v.Customers.addAnother(origin, target);
			return false;	
		});
	},
	
	createDynamicTable: function(dynamic_data){
		$j.current.v.createDynamicTable(dynamic_data);
	}
	
	
}
});
