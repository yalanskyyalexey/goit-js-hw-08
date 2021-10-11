import throttle from 'lodash/throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};

const videoplayerCurrentTime = localStorage.getItem('videoplayer-current-time');
if (videoplayerCurrentTime !== null) {
  player.setCurrentTime(videoplayerCurrentTime);
}

player.on('timeupdate', throttle(onPlay, 1000));
