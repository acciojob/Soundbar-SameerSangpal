const sounds = [
  { name: 'Clap', url: 'https://www.soundjay.com/button/sounds/button-4.mp3' },
  { name: 'Pop', url: 'https://www.soundjay.com/button/sounds/button-16.mp3' },
  { name: 'Click', url: 'https://www.soundjay.com/button/sounds/button-09.mp3' },
  { name: 'Snap', url: 'https://www.soundjay.com/button/sounds/button-3.mp3' },
  { name: 'Ping', url: 'https://www.soundjay.com/button/sounds/button-10.mp3' },
  { name: 'Beep', url: 'https://www.soundjay.com/button/sounds/button-5.mp3' }
];

const buttonsContainer = document.getElementById('buttons');
const audioElements = {};

// Create buttons and audio elements
sounds.forEach(({ name, url }) => {
  // Create button
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = name;
  btn.addEventListener('click', () => {
    stopSounds();
    audioElements[name].play();
  });

  // Create audio element
  const audio = new Audio(url);
  audioElements[name] = audio;

  // Append button to container
  buttonsContainer.appendChild(btn);
});

// Create stop button
const stopBtn = document.createElement('button');
stopBtn.classList.add('stop');
stopBtn.innerText = 'Stop';
stopBtn.addEventListener('click', stopSounds);
buttonsContainer.appendChild(stopBtn);

// Stop all audio
function stopSounds() {
  for (const sound in audioElements) {
    const audio = audioElements[sound];
    audio.pause();
    audio.currentTime = 0;
  }
}
