const QA_URL = 'https://raw.githubusercontent.com/Pemmaiah123/internship-2025/main/21-07-2025/qa.json';
console.log('QA_URL :', QA_URL);

let qaPairs = [];

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed.');

  fetch(QA_URL)
    .then(response => {
      console.log('Fetch response status:', response.status);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Data fetched successfully:', data);
      qaPairs = data;      
      appendMessage('bot', "Hi! how can i help you ");
    })
    .catch(error => {
      console.error('Error fetching or parsing JSON:', error);
      appendMessage('bot', "Failed to load chat database.");
    });
});


document.getElementById('chat-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const input = document.getElementById('user-input');
  const userMsg = input.value.trim();
  if (!userMsg) return;
  appendMessage('user', userMsg);
  input.value = '';
  const answer = findAnswer(userMsg);
  setTimeout(() => appendMessage('bot', answer), 300);
});

function appendMessage(sender, text) {
  const chatbox = document.getElementById('chatbox');
  const message = document.createElement('div');
  // User messages on right, bot messages on left
  message.className = sender === 'user' ? 'd-flex justify-content-end mb-2' : 'd-flex justify-content-start mb-2';

  // Use rounded-pill for short, rounded for longer multi-line (Bootstrap), bg-primary/text-white for user, bg-light/text-dark for bot.
  let bubbleClasses;
  if (sender === 'user') {
    bubbleClasses = 'bg-primary text-white rounded px-3 py-2';
  } else {
    bubbleClasses = 'bg-light text-dark rounded px-3 py-2';
  }

  // Col-auto makes the bubble size fit content, w-100 and text-break ensure proper wrapping for long content
  message.innerHTML = `<div class="col-auto ${bubbleClasses} w-auto text-break" style="max-width: 80%">${text}</div>`;
  chatbox.appendChild(message);
  chatbox.scrollTop = chatbox.scrollHeight;
}

function normalize(str) {
  // Remove trailing spaces and question marks, then make lowercase
  return str.trim().replace(/\?+$/, '').toLowerCase();
}

function findAnswer(question) {
  const userNormalized = normalize(question);
  const found = qaPairs.find(
    pair => normalize(pair.question) === userNormalized
  );
  if (found) {
    return found.answer;
  } else {
    const questionsList = qaPairs.map(pair => {
      return `<div class="mb-2">
                <button class="form-control text-start question-link">${pair.question}</button>
              </div>`;
    }).join('');
    return `Sorry, we could not answer your question.<br><br>Try these questions:<br>${questionsList}`;
  }
}

// Event delegation to handle dynamic question clicks
document.addEventListener('click', function (e) {
  if (e.target && e.target.classList.contains('question-link')) {
    const selectedQuestion = e.target.textContent;
    appendMessage('user', selectedQuestion);
    
    const answer = findAnswer(selectedQuestion);
    setTimeout(() => appendMessage('bot', answer), 300);
  }
});
document.body.style.overflowX = "hidden";
    
