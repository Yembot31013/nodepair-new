// Determine the WebSocket protocol based on the current page protocol
const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";

// Construct the WebSocket URL
const websocketURL = `${protocol}//${window.location.host}/chat/`;

// Create a WebSocket instance
const socket = new ReconnectingWebSocket(websocketURL);

// Connection opened event
socket.addEventListener("open", (event) => {
  console.log("WebSocket connection opened:", event);
  document.getElementById("status").textContent = "online";
});

// Listen for messages
socket.addEventListener("message", (event) => {
  console.log("WebSocket message received:", event.data);
  document.getElementById("status").textContent = "receive";
});

// Connection closed event
socket.addEventListener("close", (event) => {
  console.log("WebSocket connection closed:", event);
  document.getElementById("status").textContent = "offline";
});

// Error event
socket.addEventListener("error", (event) => {
  console.error("WebSocket error:", event);
});

// Sending data
function sendMessage() {
  const message = "Hello, WebSocket!";
  socket.send(message);
  console.log("Message sent:", message);
}

// Close the WebSocket connection
function closeConnection() {
  socket.close();
}
