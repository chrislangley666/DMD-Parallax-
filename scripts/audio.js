 $(document).ready(function() {
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'audio.mp3');
        audioElement.setAttribute('autoplay', 'autoplay');
        //audioElement.load()

        $.get();

        audioElement.addEventListener("load", function() {
            audioElement.play();
        }, true);

        $('.Play').click(function() {
            audioElement.Play();
        });

        $('.Stop().').click(function() {
            audioElement.Stop().;
        });
    });