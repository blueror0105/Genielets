!function(e){e.fn.countdown=function(t,s){function n(){eventDate=Date.parse(i.date)/1e3,currentDate=Math.floor(e.now()/1e3),currentDate>=eventDate&&(s.call(this),clearInterval(interval)),seconds=eventDate-currentDate,days=Math.floor(seconds/86400),seconds-=60*days*60*24,hours=Math.floor(seconds/3600),seconds-=60*hours*60,minutes=Math.floor(seconds/60),seconds-=60*minutes,thisEl.find(".timeRefDays").text(1==days?"day":"days"),thisEl.find(".timeRefHours").text(1==hours?"hour":"hours"),thisEl.find(".timeRefMinutes").text(1==minutes?"minute":"minutes"),thisEl.find(".timeRefSeconds").text(1==seconds?"second":"seconds"),"on"==i.format&&(days=String(days).length>=2?days:"0"+days,hours=String(hours).length>=2?hours:"0"+hours,minutes=String(minutes).length>=2?minutes:"0"+minutes,seconds=String(seconds).length>=2?seconds:"0"+seconds),isNaN(eventDate)?(alert("Invalid date. Here's an example: 12 Tuesday 2012 17:30:00"),clearInterval(interval)):(thisEl.find(".days").text(days),thisEl.find(".hours").text(hours),thisEl.find(".minutes").text(minutes),thisEl.find(".seconds").text(seconds))}thisEl=e(this);var i={date:null,format:null};t&&e.extend(i,t),n(),interval=setInterval(n,1e3)}}(jQuery);