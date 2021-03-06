function repositionFloats()
{
    var browserWidth = Math.min(document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth, document.documentElement.clientWidth, window.innerWidth);
	    
    var floats = document.getElementsByClassName("float");
	if(browserWidth>830)
	{
		for(var i=0; i<floats.length; i++)
		{
			var cssFloat = floats[i].classList[1];
			var margin = -floats[i].offsetWidth/2;
			floats[i].style.cssFloat = cssFloat;
			floats[i].style.padding = "20px";

			if(cssFloat=="left") floats[i].style.marginLeft = margin+"px";
			else if(cssFloat=="right") floats[i].style.marginRight = margin+"px";

			// Make sure that the elemengt doesn't get cut off to the left
			var left = floats[i].getBoundingClientRect().left;
			if(left<0) floats[i].style.marginLeft = (margin-left)+"px";

			// Make sure that the elemengt doesn't get cut off to the right
			var right = browserWidth - floats[i].getBoundingClientRect().right;
			if(right<0) floats[i].style.marginRight = (margin-right)+"px";
		}
	} else
	{
		for(var i=0; i<floats.length; i++)
		{
			floats[i].style.cssFloat = "none";
			floats[i].style.marginLeft = "auto";
			floats[i].style.marginRight = "auto";
			floats[i].style.marginBottom = "2em";
			floats[i].style.padding = "0px";
		}
	}
}

window.addEventListener("resize", repositionFloats);
window.addEventListener("load", repositionFloats);

//alert(document.getElementsByClassName("container")[0].offsetWidth);
