setInterval(()=>{
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

    let hr = document.querySelector("#hr");
    hr.innerText = htime;

    let min = document.querySelector("#min");
    min.innerText = mtime;

    let sec = document.querySelector("#sec");
    sec.innerText = stime;

},1000);