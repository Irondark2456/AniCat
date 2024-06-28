function playVideo(videoSrc) {
    const videoContainer = document.getElementById('video-container');
    const videoFrame = document.getElementById('video-frame');

    videoFrame.src = videoSrc;
    videoContainer.style.display = 'block';

    videoFrame.requestFullscreen();
}

document.getElementById('video-container').addEventListener('click', function() {
    this.style.display = 'none';
    const videoFrame = document.getElementById('video-frame');
    videoFrame.src = '';
    document.exitFullscreen();
});
