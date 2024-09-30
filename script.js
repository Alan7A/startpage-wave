function updateClock() {
    var now = new Date();
	let time = now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    document.getElementById('time').innerHTML = time;
    setTimeout(updateClock, 1000);
}

updateClock();

document.addEventListener('keydown', function(event) {
    if (event.key === 'y' || event.key === 'Y') {
        window.location.href = 'https://www.youtube.com';
    }
    if (event.key === 't' || event.key === 'T') {
        window.location.href = 'https://x.com/home';
    }
    if (event.key === 'h' || event.key === 'H') {  
        window.location.href = 'https://app.hubstaff.com/dashboard/559623/me';
    }
    if (event.key === 'w' || event.key === 'W') {
        window.location.href = 'https://web.whatsapp.com/';
    }
    if (event.key === 'o' || event.key === 'O') {
        window.location.href = 'https://open.spotify.com/';
    }
    if (event.key === 'c' || event.key === 'C') {
        window.location.href = 'https://chatgpt.com/';
    }
    if (event.key === 'g' || event.key === 'G') { 
        window.location.href = 'https://mail.google.com/mail/u/0/#inbox';
    }
    if (event.key === 'm' || event.key === 'M') { 
        window.location.href = 'https://monkeytype.com/';
    }
});