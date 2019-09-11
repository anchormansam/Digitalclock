
var milliseconds = 1000
var clock = document.getElementById('currenttime');

function getDateString (now){
    var year = (now.getUTCFullYear());
    var currentMonth = (now.getUTCMonth() + 1 );
    var currentDate = (now.getUTCDate());
    var currentHour = (now.getHours());
    var currentMinute = (now.getUTCMinutes());
    var currentSecond = (now.getUTCSeconds());
    var amPM = "AM";
    var seconds = (currentSecond);
        if (seconds < 10){
        seconds = "0"+seconds;
        }
    var minutes = (currentMinute);
        if (minutes < 10){
        minutes = "0"+minutes;
        }
    var hours = (currentHour);
        if(hours > 12){
            hours = hours - 12;
            amPM = 'PM'
        }
        if (hours < 10){
             hours = "0"+hours;
        }
        if (hours === 0) { 
             hours = 12;
        }
       
        
     
    var days = (currentDate);
    if (days < 10){
    days = "0"+days;
     }
    var month = (currentMonth);
    if (currentMonth < 10){
        month = "0"+month
    }
   return  {
    'year': year,
    'month': month,    
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds,
    'meridiem': amPM
   }
}

var timeinterval = setInterval (function(){
var currentTime = new Date()
var dateStr = getDateString(currentTime);

clock.innerHTML =  
                ' ' + dateStr.month +
                '-' + dateStr.days +
                '-' + dateStr.year + '<br>' +
                ' '+ dateStr.hours + 
                ':' + dateStr.minutes +
                ':' + dateStr.seconds +
                ' ' + dateStr.meridiem;
},1000);

