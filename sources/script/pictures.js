var innerLink=false;
var currentImage=1;
				
function showNext() {
	if(currentImage<max)
		currentImage++;
						
	document.getElementById("slideshow").src="/sources/images/"+country+"/"+currentImage+".jpeg";
	document.getElementById("status").innerHTML = currentImage+" / "+max;
}
				
function showPrevious() {
	if(currentImage>min)
		currentImage--;
						
	document.getElementById("slideshow").src="/sources/images/"+country+"/"+currentImage+".jpeg";
	document.getElementById("status").innerHTML = currentImage+" / "+max;
}
