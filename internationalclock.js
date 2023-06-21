function updateTime() {
    var date = new Date();

    var time1 = date.toLocaleTimeString("en-US", {
        timeZone: "America/New_York"
    });
    var time2 = date.toLocaleTimeString("en-US", {
        timeZone: "Europe/London"
    });
    var time3 = date.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata"
    });

    document.getElementById("time1").textContent = time1;
    document.getElementById("time2").textContent = time2;
    document.getElementById("time3").textContent = time3;

    setTimeout(updateTime, 1000);
}

updateTime();