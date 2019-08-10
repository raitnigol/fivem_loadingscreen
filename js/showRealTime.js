
function startTime() {
  var monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  // time
  var today = new Date();
  var h = today.getHours();
  if (h < 10) { h = '0'+h; } 
  var m = today.getMinutes(); 
  var s = today.getSeconds();
  var year = today.getFullYear();
  var monthIndex = today.getMonth();
  var month = monthNames[monthIndex];
  var day = today.getDate();  
  m = checkTime(m);
  s = checkTime(s);
  var t = setTimeout(startTime, 500);
  document.getElementById("showRealTime").innerHTML = day+". "+monthNames[monthIndex]+" | "+h+":"+m+":"+s;
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}