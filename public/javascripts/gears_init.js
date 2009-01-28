// Copyright 2007 Google Inc. All Rights Reserved.
//
// Sets up google.gears.*, which is *the only* supported way to access Gears.
//
// Circumvent this file at your own risk!
//
// In the future, Gears may automatically define google.gears.* without this
// file. Gears may use these objects to transparently fix bugs and compatibility
// issues. Applications that use the code below will continue to work seamlessly
// when that happens.

(function() {
  // We are already defined. Hooray!
  var check = false;

  if (window.google && google.gears) {
     check = true;
     return;
  }else{
	alert("You must install Google Gears first.");
	return;
  }

  if(!check) return;
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
})();
