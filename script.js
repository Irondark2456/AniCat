function playVideo(videoSrc) {
    const videoContainer = document.getElementById('video-container');
    const videoPlayer = document.getElementById('video-player');
    const videoSource = document.getElementById('video-source');

    videoSource.src = videoSrc;
    videoPlayer.load();
    videoContainer.style.display = 'block';
    videoPlayer.play();

    videoPlayer.requestFullscreen();
}

document.getElementById('video-container').addEventListener('click', function() {
    this.style.display = 'none';
    const videoPlayer = document.getElementById('video-player');
    videoPlayer.pause();
    document.exitFullscreen();
});
