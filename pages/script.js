function greeting(){
	var name= prompt("Whats your name");
	alert(" hello "+name);
	// body...
}



function thirdAngle() {
let angle1 = prompt("give 1st angle ");
let angle2 = prompt("give 2nd angle ");
let angle3 = 180 - angle1-angle2;
alert ("the 3rd angle is"+ angle3);

}



function centuryFromYear(year) {
	  var x = Math.floor(year/100);
	  if (year%100===0) {
	  	 alert( x);

	}
	else {
		alert( x + 1);
	}
