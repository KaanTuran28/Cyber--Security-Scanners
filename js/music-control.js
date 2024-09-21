function openPage(page) {
    window.location.href = page;
}

// Sayfa yüklendiğinde müziği kontrol et
window.onload = function() {
    const audio = document.getElementById('background-music');
    const isPlaying = localStorage.getItem('musicPlaying') === 'true';
    if (isPlaying) {
        audio.play().catch(function(error) {
            console.log('Müzik oynatılamadı:', error);
        });
    }
};

// Müziği başlatma/durdurma butonuna tıklama olayı
document.getElementById('play-music').addEventListener('click', function() {
    const audio = document.getElementById('background-music');
    if (audio.paused) {
        audio.play().catch(function(error) {
            console.log('Müzik oynatılamadı:', error);
        });
        localStorage.setItem('musicPlaying', 'true');
    } else {
        audio.pause();
        localStorage.setItem('musicPlaying', 'false');
    }
});
