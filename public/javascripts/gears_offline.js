/**
 * JavaScript for gears_offline.html
 * Modified for xul.fr 
 */

// Change this to set the name of the managed resource store to create.

var STORE_NAME = "my_offline_docset";

// Change this to set the URL of the manifest file describing URLs to capture. 
// It can be relative to the current page, or an absolute URL.

var MANIFEST_FILENAME = "manifest.json";

var localServer;
var store;

function check()
{
  if (!window.google || !google.gears) 
  {
    alert("You must install Google Gears first.");
    return false;
  }
  return true;
}

// Called onload to initialize local server and store variables

function init()
{
  if (check()) 
  { 
    localServer = google.gears.factory.create("beta.localserver","1.0");
    store = localServer.createManagedStore(STORE_NAME);
    textOut("Google Gears is installed, continue.");
  }
}

// Create the managed resource store

function createStore() 
{
  if (!check()) return; 

  store.manifestUrl = MANIFEST_FILENAME;
  store.checkForUpdate();

  var timerId = window.setInterval(function() 
  {
    // When the currentVersion property has a value, all of the resources
    // listed in the manifest file for that version are captured. There is
    // an open bug to surface this state change as an event.
    
    if (store.currentVersion) 
    {
      window.clearInterval(timerId);
      textOut("The documents are now available offline.<br>" + 
              "With your browser offline, load the document at " +
              "its normal online URL to see the locally stored version. <br>" +
			        "The version stored is: " + 
              store.currentVersion);
    } 
    else if (store.updateStatus == 3) 
    {
      textOut("Error: " + store.lastErrorMessage);
    }
  }, 500);  
}

// Remove the managed resource store.

function removeStore() 
{
  if(!check()) return;

  localServer.removeManagedStore(STORE_NAME);
  textOut("Done. The local store has been removed.<br>" +
          "You will now see online versions of the documents.");
}

// Utility function to output some status text.

function textOut(s) 
{
  var storage = document.getElementById("textOut");
  storage.innerHTML = s;
}
