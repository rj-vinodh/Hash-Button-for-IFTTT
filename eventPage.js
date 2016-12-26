 document.getElementById("try_another").addEventListener("click",function(){
	 document.getElementById("try_another").style.display = "none";
	 document.getElementById("comp").style.display = null;
	 document.getElementById("status").style.display = "none";
	 
 } );
 document.getElementById("try_it_btn").addEventListener("click", 

 function(){

        var request_url = get_trigger_url();

        var request_data = {
            value1 : document.getElementById("value1").value,
            value2 : document.getElementById("value2").value,
            value3 : document.getElementById("value3").value
        };
var http = new XMLHttpRequest();
var url = request_url;
var params = request_data;
http.open("POST", url, true);




http.onreadystatechange = function() {
	if(http.readyState == 4){
    if(http.status == 200) {
		document.getElementById("comp").style.display = "none";
        document.getElementById("status").innerHTML=http.responseText;
		
		document.getElementById("try_another").style.display = null;
    }
	else{
		document.getElementById("comp").innerHTML="There was a problem triggering your Event. Try again later.";
		console.log(http.responseText);
	}}
}
http.send(params);
       
    });
	function get_trigger_url()
    {
        return "https://maker.ifttt.com/trigger/" + document.getElementById("event_name_input").value + "/with/key/"+document.getElementById("key").value;
    }