/* Launches modals on click of the corresponding picture */

$('.launch-modal').on('click', function(e){
    e.preventDefault();
    $( '#' + $(this).data('modal-id') ).modal();
});

/* Autoplays the videos on open */

$('#modal-video1', '#modal-video2', '#modal-video3').on('shown.bs.modal', function () {
    $(this).find('video')[0].play();
})


/* Stops and resets the videos on close */

$('#modal-video1', '#modal-video2', '#modal-video3' ).modal({
    show: false
}).on('hidden.bs.modal', function(){
    $(this).find('video')[0].pause();
    $(this).find('video')[0].load();
});

    