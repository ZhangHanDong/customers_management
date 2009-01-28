/*
   Ajax Offline 
   (c) 2008 Xul.fr
   Creative Common license
   Use it freely, do not change the copyright notice
*/   

var GEARS = false;

// Create XMLHttpRequest via Gears if present, of via browser otherwise.

function gearsCreate()
{
	//var xhr = google.gears.factory.create('beta.httprequest');
	var xhr = false;
	if(!xhr)
	{
		try {  xhr = new ActiveXObject('Msxml2.XMLHTTP');   }
		catch (err1) 
		{
			try  {  xhr = new ActiveXObject('Microsoft.XMLHTTP');   }
			catch (err2) 
			{
				try {  xhr = new XMLHttpRequest();   }
				catch (err3) 
				{
					xhr = false;
				}
			}
		}
	}

	GEARS =  (window.google && google.gears);
	return xhr;
}


function gearsGet(xhr, fun, filename)
{
	xhr.open('GET', filename);
	xhr.onreadystatechange = function() 
	{
		if (xhr.readyState == 4) 
		{
			fun(xhr.responseText);
		}
	};
	xhr.send(null);
}


