const chatMessages = document.getElementById('chat-messages');
let currentChatBubble = createNewChatBubble();

document.addEventListener('keydown', function (event) {
  // Create a new chat bubble if Enter is pressed
  if (event.key === 'Enter') {
    currentChatBubble = createNewChatBubble();
  }

  // Handle Backspace key
  else if (event.key === 'Backspace') {
    // Check if the current chat bubble is empty
    if (currentChatBubble.textContent.length > 0) {
      // Remove the last character from the current chat bubble
      currentChatBubble.textContent = currentChatBubble.textContent.slice(
        0,
        -1
      );
    } else {
      // If the current chat bubble is empty, delete the entire bubble
      deleteCurrentChatBubble();
    }
  }

  // Append the entered key to the current chat bubble (excluding Enter, Backspace, Shift, and Control)
  else if (
    event.key !== 'Backspace' &&
    event.key !== 'Shift' &&
    event.key !== 'Control'
  ) {
    // Append Shift only if it's not already present in the bubble
    if (
      (event.key === 'Shift' || event.key === 'Control') &&
      !currentChatBubble.textContent.includes(event.key)
    ) {
      currentChatBubble.textContent += event.key;
    }

    // Append the entered key
    else {
      currentChatBubble.textContent += event.key;
    }
  }
});

function createNewChatBubble() {
  const chatBubble = document.createElement('div');
  chatBubble.className = 'chat-bubble';
  chatMessages.appendChild(chatBubble);
  return chatBubble;
}

function deleteCurrentChatBubble() {
  if (chatMessages.children.length > 1) {
    // Only delete the current chat bubble if there is more than one bubble
    chatMessages.removeChild(currentChatBubble);
    currentChatBubble = chatMessages.lastChild;
  }
}