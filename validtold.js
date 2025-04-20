function vf(){
	for(var o =0; o<frm.elements.length;o++){
if(frm.elements[o].className == "req" && frm.elements[o].value.length ==0){
	
	alert('fill all rqrd field');
	return false;
	
}		
	}
	
	var e = document.getElementById('email').value;
	var f = e.indexOf('@');
	var t = e.lastIndexOf('.') ;
	
	if(f < 1 || t < e+2 || t+2 >= x.length){
		alert('type valid email bro');
		return false;
	}
	
	
}