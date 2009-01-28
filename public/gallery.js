
function localFilename(url)	// removing path
{
	var x = url.lastIndexOf("/");
	url = url.slice(x + 1);
	return url;		
}


// images are loaded asynchronously with no delay

function preloading(url)
{
	var xhr=gearsCreate();   
	xhr.onreadystatechange=function()
	{ 
		if(xhr.readyState == 4)
		{
			if (GEARS)
			{
				// nothing for now
			}
			else
			{
				var i = new Image();
				i.src = xhr.responseText;
			}
		} 
	}; 

	xhr.open("GET", url , true);
	xhr.send(null); 
} 


function enlarge(element)
{
	var name = element.src;
	
	name = localFilename(name);
	name = name.slice(6);   // remove the "thumb-" part
	name = "robots/" + name;  // restore path 
		
	// building a string to display the image
	
	var str = "<img src='" + name + "' >";
	document.getElementById("bigview").innerHTML = str;

}
