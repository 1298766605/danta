document.querySelector("button").addEventListener("click", () => {
  const input = document.querySelector("input");
  const text = input.value.trim();
  if (!text) return;

  const chat = document.querySelector(".chat-container");
  const msg = document.createElement("div");
  msg.className = "message right";
  msg.innerHTML = `
    <img src="avatar-right.jpeg" class="avatar" alt="蛋妹" />
    <div class="bubble">${text}</div>
  `;
  chat.appendChild(msg);
  input.value = "";
  chat.scrollTop = chat.scrollHeight;
});
