function updateClock() {
  var now = new Date();
  let time = now.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  document.getElementById("time").innerHTML = time;
  setTimeout(updateClock, 1000);
}

updateClock();

document.addEventListener("keydown", function (event) {
  // Solo ejecutar si Ctrl no está presionado
  if (event.ctrlKey) {
    return;
  }

  const keyMappings = {
    y: "https://www.youtube.com",
    t: "https://x.com/home",
    h: "https://app.hubstaff.com/reports/559623/time_and_activities",
    w: "https://web.whatsapp.com/",
    o: "https://open.spotify.com/",
    c: "https://chatgpt.com/",
    g: "https://mail.google.com/mail/u/0/#inbox",
    v: "https://calendar.google.com/calendar/u/2/r",
    i: "https://www.instagram.com/",
    m: "https://meet.google.com/landing?authuser=2",
  };

  const key = event.key.toLowerCase();
  const url = keyMappings[key];

  if (url) {
    window.location.href = url;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("mode-toggle");
  const entertainmentBox = document.querySelector(
    ".box-container:nth-child(1)"
  );

  // Recuperar el estado guardado o usar "personal" como valor predeterminado
  const savedMode = localStorage.getItem("pageMode") || "personal";

  // Aplicar el estado guardado al cargar la página
  toggleButton.textContent = savedMode;
  if (savedMode === "work") {
    entertainmentBox.style.display = "none";
  } else {
    entertainmentBox.style.display = "flex";
  }

  // Manejar el cambio de modo
  toggleButton.addEventListener("click", function () {
    if (toggleButton.textContent === "personal") {
      // Cambiar a modo trabajo
      toggleButton.textContent = "work";
      entertainmentBox.style.display = "none";
      // Guardar el estado
      localStorage.setItem("pageMode", "work");
    } else {
      // Cambiar a modo personal
      toggleButton.textContent = "personal";
      entertainmentBox.style.display = "flex";
      // Guardar el estado
      localStorage.setItem("pageMode", "personal");
    }
  });
});
