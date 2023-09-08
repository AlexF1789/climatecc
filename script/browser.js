// Checks if the user is using Internet Explorer: in that case he's
// brought to a page asking him to use a browser between Firefox,
// Chrome, Opera or Edge

if(navigator.appVersion.indexOf('Trident/') > -1)
	window.location.href = "sources/pages/notSupported.html";
	
function whatBrowser() {
	var isFirefox = navigator.userAgent.indexOf("Firefox")*1;
	var isChrome = navigator.userAgent.indexOf("Chrome")*1;
	var isEdge = navigator.userAgent.indexOf("Edg")*1;
	var isSafari = navigator.userAgent.indexOf("Safari")*1;
	var isOpera = !!window.opr;
	
	var browser;
	
	if(isFirefox>-1)
		browser="Mozilla Firefox";
	else if(isEdge>-1)
		browser="Microsoft Edge";
	else if(isOpera)
		browser="Opera";
	else if(isSafari>-1 && !window.chrome)
		browser="Apple Safari";
	else if(isChrome>-1)
		browser="Google Chrome";
	else
		browser="Unknown";
		
	Swal.fire({
		title: 'Browser',
		text: 'You are using '+browser
	});
}
