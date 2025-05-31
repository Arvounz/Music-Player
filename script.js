const songs = [
  { title: "No.1 Party Anthem - Arctic Monkeys", file: "music/song1.mp3" },
  { title: "All We Know - The Chainsmokers ft. Phoebe Ryan", file: "music/song2.mp3" },
  { title: "Photograph - Ed Sheeran", file: "music/song3.mp3" }
];

let currentSong = 0;
const audio = document.getElementById('audio');
const title = document.getElementById('title');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

function loadSong(index) {
  title.textContent = songs[index].title;
  audio.src = songs[index].file;
}

function playPause() {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = '⏸';
  } else {
    audio.pause();
    playBtn.textContent = '▶️';
  }
}

function nextSong() {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(currentSong);
  audio.play();
  playBtn.textContent = '⏸';
}

function prevSong() {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  loadSong(currentSong);
  audio.play();
  playBtn.textContent = '⏸';
}

playBtn.addEventListener('click', playPause);
nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);

// Initial load
loadSong(currentSong);
