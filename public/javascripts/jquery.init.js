// Copyright 2007 Google Inc. All Rights Reserved.
//  ==========
//  gears_init
//  ==========
// Changed by: Alex(blackanger.z@gmail.com)
// Time : 2009.01.23


(function() {

	jQuery.fn.gearsInit = function(){
		if (window.google && google.gears) {
	        return;
	    }

		var factory = null;

		// Firefox
		if (typeof GearsFactory != 'undefined') {
			factory = new GearsFactory();
		} else {
			// IE
			try {
				factory = new ActiveXObject('Gears.Factory');
			} catch (e) {
				// Safari
				if (navigator.mimeTypes["application/x-googlegears"]) {
					factory = document.createElement("object");
					factory.style.display = "none";
					factory.width = 0;
					factory.height = 0;
					factory.type = "application/x-googlegears";
					document.documentElement.appendChild(factory);
				}
			}
		}

		// *Do not* define any objects if Gears is not installed. This mimics the
		// behavior of Gears defining the objects in the future.
		if (!factory) {
			return;
		}

		// Now set up the objects, being careful not to overwrite anything.
		if (!window.google) {
			window.google = {};
		}

		if (!google.gears) {
			google.gears = {factory: factory};
		}
	};

	jQuery.fn.gearsCheck = function(){
		if (!window.google || !google.gears) {
			if (confirm('Whether you install Google Gears for using the function ?')) {
		        location.href = 'http://gears.google.com/';
		    } else {
		        alert("You must install Google Gears first.");
		    }
			return;	
		}
	};
})(jQuery);