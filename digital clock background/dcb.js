function updateClock() {
    let now = new Date();
    let hrs = now.getHours();
    let mins = now.getMinutes();
    let secs = now.getSeconds();
    let ampm = hrs >= 12 ? "PM" : "AM";

    // Convert 24-hour format to 12-hour format
    hrs = hrs % 12 || 12;

    // Format time with leading zeros
    hrs = hrs < 10 ? "0" + hrs : hrs;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;

    // Update time display
    document.getElementById("hrs").innerText = hrs;
    document.getElementById("mins").innerText = mins;
    document.getElementById("secs").innerText = secs;
    document.getElementById("ampm").innerText = ampm;

    // Update circle progress
    document.getElementById("hh").style.strokeDashoffset = 440 - (440 * hrs) / 12;
    document.getElementById("mm").style.strokeDashoffset = 440 - (440 * mins) / 60;
    document.getElementById("ss").style.strokeDashoffset = 440 - (440 * secs) / 60;

    // Rotate dots
    document.querySelector(".h_dot").style.transform = `rotate(${hrs * 30}deg)`;
    document.querySelector(".m_dot").style.transform = `rotate(${mins * 6}deg)`;
    document.querySelector(".s_dot").style.transform = `rotate(${secs * 6}deg)`;

    // Update background based on the hour
    updateBackground(now.getHours());
}

function updateBackground(hour) {
    let bgImage = "";
    
    if (hour >= 6 && hour < 12) {
        bgImage = "url('morning.jpeg')"; // Morning Image (Sunrise)
    } else if (hour >= 12 && hour < 17) {
        bgImage = "url('afternoon.jpeg')"; // Afternoon Image (Bright Day)
    } else if (hour >= 17 && hour < 20) {
        bgImage = "url('evening.jpeg')"; // Evening Image (Sunset)
    } else {
        bgImage = "url('night.jpeg')"; // Night Image (Dark Sky)
    }

    document.body.style.backgroundImage = bgImage;
}

// Run clock update every second
setInterval(updateClock, 1000);

// Initialize clock on load
updateClock();
