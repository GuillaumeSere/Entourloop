document.addEventListener('DOMContentLoaded', function () {
    var radios = document.querySelectorAll('.radio');
    var currentAudio = null;

    function playRadio(audio) {
        if (currentAudio && currentAudio !== audio) {
            currentAudio.pause();
            currentAudio.parentElement.classList.remove('playing');
        }

        if (audio.paused) {
            audio.play();
            audio.parentElement.classList.add('playing');
            currentAudio = audio;
        } else {
            audio.pause();
            audio.parentElement.classList.remove('playing');
            currentAudio = null;
        }
    }

    radios.forEach(function (radio) {
        var audio = radio.querySelector('audio');

        radio.addEventListener('click', function () {
            playRadio(audio);
        });

        audio.addEventListener('playing', function () {
            radios.forEach(function (r) {
                if (r.querySelector('audio') !== audio) {
                    r.classList.remove('playing');
                    r.querySelector('audio').pause();
                }
            });

            radio.classList.add('playing');
        });

        audio.addEventListener('pause', function () {
            radio.classList.remove('playing');
        });
    });
});