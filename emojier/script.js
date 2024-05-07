document.addEventListener('DOMContentLoaded', function() {
    const emojiImages = [
      '1.gif',
      '2.gif',
      '3.gif',
      '4.gif',
      '5.gif',
      '6.gif',
      '7.gif',
      '8.gif',
      '9.gif',

    ];
  
    const button = document.getElementById('showRandomEmoji');
    const emojiDisplay = document.getElementById('emojiDisplay');
  
    button.addEventListener('click', function() {
      const randomIndex = Math.floor(Math.random() * emojiImages.length);
      const randomEmojiURL = emojiImages[randomIndex];
      emojiDisplay.src = randomEmojiURL;
    });
  });
  