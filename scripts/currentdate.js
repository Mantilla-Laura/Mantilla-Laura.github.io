function renderTime() {
    var mydate = new Date();
    var year = mydate.getFullYear();
      if (year < 1000) {
          year+= 1900
      }
    var day = mydate.getDay();
    var month = mydate.getMonth();
    var daym = mydate.getDate();
    var dayarray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    var montharray = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    //Date End

    var myTime = document.getElementById("renderTime");
    myTime.textContent = " "+dayarray[day]+ " "+daym+ " " +montharray[month]+ " " +year+"";
    myTime.innerText = " "+dayarray[day]+ " "+daym+ " " +montharray[month]+ " " +year+" ";

    setTimeout("renderTime()", 1000);
}
renderTime();

function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}