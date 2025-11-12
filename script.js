const input = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const chat = document.querySelector('.chat-container');

sendBtn.addEventListener('click', sendMessage);
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
  const text = input.value.trim();
  if (!text) return;

  // 创建气泡
  const msgDiv = document.createElement('div');
  msgDiv.classList.add('message', 'right');
  msgDiv.innerHTML = `
    <img src="avatar-right.jpeg" class="avatar">
    <div class="bubble">${text}</div>
  `;
  chat.appendChild(msgDiv);

  // 清空输入框
  input.value = '';

  // 自动滚动到底部
  chat.scrollTop = chat.scrollHeight;

  // 模拟回复
  setTimeout(() => {
    const reply = document.createElement('div');
    reply.classList.add('message', 'left');
    reply.innerHTML = `
      <img src="avatar-left.jpeg" class="avatar">
      <div class="bubble">哼，还挺会回嘴。</div>
    `;
    chat.appendChild(reply);
    chat.scrollTop = chat.scrollHeight;
  }, 800);
}
