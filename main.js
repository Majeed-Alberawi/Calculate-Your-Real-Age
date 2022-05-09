function calcAge() {
  var age             = document.getElementById("ageInput").value, 
      sleep           = document.getElementById("sleepTime").value,
      studing         = document.getElementById("studingTime").value,
      shower          = document.getElementById("showerTime").value,
      bathTime        = document.getElementById("bathTime").value,
      howManyBath     = document.getElementById("howManyBath").value,
      workingYear     = document.getElementById("workingYear").value,
      workingTime     = document.getElementById("workingTime").value,
      workingDays     = document.getElementById("howManyDay").value;

  var generalAge      = 5.277
      ageHour         = (age-generalAge) * 365 * 24,
      sleepHour       = sleep * 7 * 4 * 12 * (age-generalAge), // MainTime * Day * Weeks * Month * Age
      studingHour     = studing * 7 * 4 * 12 * (age-generalAge)
      showerMin       = shower * 7 * 4 * 12 * (age-generalAge) / 60,
      bathTimeMin     = bathTime * 7 * 4 * 12 * (age-generalAge) / 60,
      howManyBathTime = bathTimeMin * howManyBath,
      WorkingHour     = workingTime * workingDays * 4 * 12 * workingYear; //يجب وضع خانات لتحديد كم سنه بدأ بالعمل 
  document.getElementById("message").innerHTML = 
  `${ageHour}    ${" Hours"}
  ${sleepHour}   ${"Hours In Sleep"} 
  ${studingHour} ${"Hours In Studing"} 
  ${showerMin}   ${"In Shower"}
  ${bathTimeMin} ${"In Shower"}
  ${workingYear} ${"Working Years"}
  ${workingTime} ${"hours At Work"}
  ${workingDays} ${"Working Days"}`;
  document.getElementById("result").innerHTML = `${"You Had "}
  ${(ageHour - (sleepHour + studingHour + showerMin + WorkingHour + howManyBathTime)) / (365 * 24)} ${"To Become Better "}`;

  if (age > 100) {
    document.getElementById("result").innerHTML = `${"WOW How You Are Using The Internet?"}`;
  } else if (age === "") {
    document.getElementById("result").innerHTML = `${"You Should Write Your Age"}`;
  } else if (sleep > 14) {
    document.getElementById("result").innerHTML = `${"Did You sleep " + sleep + " Hours" + " Everyday!!?"}`;
  } else if (studing > 12) {
    document.getElementById("result").innerHTML = `${"You Defeated Einstein !!"}`;
  } else if (age < 10) {
    document.getElementById("result").innerHTML = `${"Go Play With Toys"}`;
  } else if (workingDays > 7) {
    document.getElementById("result").innerHTML = `${"How You Have " + workingDays + " Days In Your Week!!"}`;
  }
}


/*

(3*4*7*15.5) + (8*4*7*14) + (1*365*13.5) + (3*365*11.5) + (7*365*9.5) = 46,230.5

46,230 / (365*24) = 5.277 of First 10 Years In Our Age Go Sleeping

*/