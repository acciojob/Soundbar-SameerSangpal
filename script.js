//your JS code here. If required.
// Sound names must match files in the 'sounds' folder
const sounds = ['sound1', 'sound2', 'sound3'];

const buttonsContainer = document.getElementById('buttons');

// Create button for each sound
sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;

  btn.addEventListener('click', () => {
    stopSounds();
    const audio = new Audio(`sounds/${sound}.mp3`);
    audio.play();
    btn.dataset.audio = audio;
  });

  buttonsContainer.appendChild(btn);
});

// Stop button
const stopBtn = document.createElement('button');
stopBtn.classList.add('stop');
stopBtn.innerText = 'Stop';

stopBtn.addEventListener('click', stopSounds);

buttonsContainer.appendChild(stopBtn);

// Stop all playing sounds
function stopSounds() {
  const audios = document.querySelectorAll('.btn');
  audios.forEach(btn => {
    if (btn.dataset.audio) {
      const audio = btn.dataset.audio;
      audio.pause?.();
      audio.currentTime = 0;
      delete btn.dataset.audio;
    }
  });
}
