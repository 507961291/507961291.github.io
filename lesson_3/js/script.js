 // Copyright Year
 let cyear = new Date();
 let year = cyear.getFullYear();
 document.getElementById("cYear").textContent=year;

 // current
 const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
 document.getElementById("current").textContent=new Date().toLocaleDateString("en-US", options);

 // modified
 let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
 let last = new Date(document.lastModified); 
 let dayName = dayNames[last.getDay()];
 let dayDate = last.Date;
 let monthName = months[last.getMonth()];
 let Year = last.getFullYear();
 let hour = last.getHours();
 let minute = last.getMinutes();
  if (minute<10) {
      minute = "0" + minute;
  }
  if (hour==0) {
      hour = "12";
  }
  if (hour>12) {
      hour -= 12;
      minute += " PM";
  }
  else {
    minute += " AM";
  }
 let fullDate = dayName + ", " + monthName + " " + last.getDate() + ", " + Year + ", " + hour + ":" + minute;
 document.getElementById("modified").textContent=fullDate;

