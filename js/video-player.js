/* Launches modals on click of the corresponding picture */

$('.launch-modal').on('click', function(e){
    e.preventDefault();
    $( '#' + $(this).data('modal-id') ).modal();
});

$('#modal-video1, #modal-video2, #modal-video3').modal({
    show: false
})

/* Plays the video on open */

.on('shown.bs.modal', function () {
    $(this).find('video')[0].play();
})

/* Stops and resets the videos on close */

.on('hidden.bs.modal', function() {
    var video = $(this).find('video')[0];
    video.pause();
    video.load();
});

    