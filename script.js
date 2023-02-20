function displayTime(){
    let time = new Date();

    let hr = time.getHours();
    let min = time.getMinutes()
    let sec = time.getSeconds();
    let am_pm = "AM";

    if(hr >= 12)
        am_pm = "PM";
    else
        am_pm = "AM";

    if(hr > 12)
        hr = hr-12;

    hr = (hr<10)? "0" + hr : hr; 
    min = (min<10)? "0" + min : min;
    sec = (sec<10)? "0" + sec : sec;

    document.getElementById('hour').innerText = hr;
    document.getElementById('minute').innerText = min;
    document.getElementById('second').innerText = sec;
    document.getElementById('am-pm').innerText = am_pm;
}


setInterval(displayTime,10);