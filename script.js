function updateClock() {
    var now = new Date();
	time = now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    document.getElementById('time').innerHTML = time;
    setTimeout(updateClock, 1000);
}

updateClock();