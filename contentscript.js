chrome.extension.sendRequest(count(window.getSelection().toString())); 


function count (text) {
	
	//string to be returned 
	finalString = "";	
		
	finalString = finalString + text.split(' ').length + ',';
	finalString = finalString + text.split('\n').length + ',';
	finalString = finalString + text.length;
	
	return finalString;
}
