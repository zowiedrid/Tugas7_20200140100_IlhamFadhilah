document.addEventListener('DOMContentLoaded', function() {
    var videoElement = document.getElementById('video');
    var audioElement = document.getElementById('audio');
    var imageElement = document.getElementById('gambar');

    videoElement.addEventListener('click', function() {
        alert('Video clicked');
    });

    audioElement.addEventListener('click', function() {
        alert('Audio clicked');
    });

    imageElement.addEventListener('click', function() {
        alert('Image clicked');
    });
});