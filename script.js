// Esto será la parte que muestra los tickets (más adelante conectamos con Firebase)
const ticketsDiv = document.getElementById("tickets");

// Ejemplo de tickets
const tickets = [
  { user: "Juan", msg: "Hola, necesito ayuda", time: "2026-03-29 10:00" },
  { user: "Ana", msg: "Mi ticket fue resuelto", time: "2026-03-29 11:00" }
];

tickets.forEach(t => {
  const div = document.createElement("div");
  div.classList.add("ticket");
  div.innerHTML = `<b>${t.user}</b> (${t.time}): <br>${t.msg}`;
  ticketsDiv.appendChild(div);
});
