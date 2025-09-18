document.addEventListener("DOMContentLoaded", () => {
  const jugadoresContainer = document.getElementById("jugadoresContainer");

  // Array de prueba: cambia el número de jugadores para testear
  const jugadores = [
    { nombre: "Jugador 1", puntos: 1500, img: "https://i.ibb.co/p4WZ5sH/lobo.png" },
    { nombre: "Jugador 2", puntos: 1200, img: "https://i.ibb.co/RT8VsmP/tigre.png" },
    { nombre: "Jugador 3", puntos: 900,  img: "https://i.ibb.co/fGSzQXM/aguila.png" },
    { nombre: "Jugador 4", puntos: 1100, img: "https://i.ibb.co/BP98cQ6/pantera.png" },
    { nombre: "Jugador 5", puntos: 800,  img: "https://i.ibb.co/M5DnH3V/oso.png" },
    { nombre: "Jugador 6", puntos: 700,  img: "https://i.ibb.co/0m9d1ht/leon.png" },
    { nombre: "Jugador 7", puntos: 950,  img: "https://i.ibb.co/fGSzQXM/aguila.png" },
    { nombre: "Jugador 8", puntos: 1050, img: "https://i.ibb.co/p4WZ5sH/lobo.png" }
  ];

  jugadoresContainer.innerHTML = ""; // limpiar antes de dibujar

  if (jugadores.length <= 7) {
    // Distribución en semicírculo feliz
    const total = jugadores.length;
    const radio = 250; // más grande para más espacio
    const centroX = jugadoresContainer.offsetWidth / 2;
    const centroY = jugadoresContainer.offsetHeight / 1.2; // bajar un poco la curva

    jugadores.forEach((jugador, i) => {
      // Ángulo entre 0 → π (feliz 😀)
      const angle = Math.PI * (i / (total - 1));
      const x = centroX + radio * Math.cos(angle);
      const y = centroY - radio * Math.sin(angle); // hacia arriba

      const card = document.createElement("div");
      card.classList.add("card", "perfil-jugador");
      card.style.left = `${x}px`;
      card.style.top = `${y}px`;

      card.innerHTML = `
        <img src="${jugador.img}" class="card-img-top perfil-img" alt="${jugador.nombre}">
        <div class="card-body">
          <h5 class="card-title">${jugador.nombre}</h5>
          <p class="card-text">Puntos: ${jugador.puntos}</p>
        </div>
      `;

      jugadoresContainer.appendChild(card);
    });

  } else {
    // Carrusel horizontal si hay más de 7 jugadores
    jugadoresContainer.style.display = "flex";
    jugadoresContainer.style.overflowX = "auto";
    jugadoresContainer.style.justifyContent = "center";
    jugadoresContainer.style.gap = "20px";
    jugadoresContainer.style.scrollSnapType = "x mandatory";

    jugadores.forEach(jugador => {
      const card = document.createElement("div");
      card.classList.add("card", "perfil-jugador");
      card.style.position = "relative"; // ya no usamos absolute
      card.style.flex = "0 0 auto";
      card.style.scrollSnapAlign = "center";

      card.innerHTML = `
        <img src="${jugador.img}" class="card-img-top perfil-img" alt="${jugador.nombre}">
        <div class="card-body">
          <h5 class="card-title">${jugador.nombre}</h5>
          <p class="card-text">Puntos: ${jugador.puntos}</p>
        </div>
      `;

      jugadoresContainer.appendChild(card);
    });
  }
});
