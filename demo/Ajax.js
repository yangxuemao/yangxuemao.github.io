/*ajax*/
function Ajax(type, url, data, success, failed){
	var xhr = null;
	if(window.XMLHttpRequest){
		xhr = new XMLHttpRequest();
	}else{
		xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	var type = type.toUpperCase();
	
	if(typeof data == 'object'){
		var entries = Object.entries(data);
		data = entries.map(item => item[0] + '=' + item[1]).join('&');
	}
	
	if(type === "GET"){
		if(data){
			xhr.open(type, url + '?' + data, true);
			shr.send();
		}
	}else if(type === "POST"){
		xhr.open(type, url, true);
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(data);
	}
	
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status === 200){
				success(xhr.responseText);
			}else{
				if(failed){
					failed(xhr.status);
				}
			}
		}
	}
}

