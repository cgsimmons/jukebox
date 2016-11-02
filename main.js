$(document).ready(function() {

  $('#song-form').on('submit', function(event){
    event.preventDefault();
    if($('#song-title:text').val() != ''){
      $('#song-queue').append($("<li><span class=\"title\">"
                            + $('#song-title:text').val()
                            + "</span><span hidden class=\"notes-view\"> [notes = "
                            + "<span class=\"notes\">"
                            + $('#song-notes:text').val()
                            + "</span>]</span></li>"));

      $('#song-notes:text').val('');
      $('#song-title:text').val('');
    }
  });

  // $('#play-button').on('click', function(){
  //   var list = document.getElementById("song-queue");
  //   var songs = list.getElementsById("li");
  //   for(var i = 0; i < songs.length; i++){
  //
  //   }
  // })

  function onComplete(){
    $('#song-queue li:first-child').remove();
    play();
  }

  function play(){
    var song = $('#song-queue li:first-child');
    if (song.length != 0){
      $('#play-button').slideUp();
      $('#song-message').html(song.find('.title').html() + " is playing...");
      playSong(parseSong(song.find('.notes').html()), 200, onComplete);
    }
    else{
      $('#play-button').slideDown();
      $('#song-message').html('');
    }
  }

$('#play-button').on('click',play);
$('#song-queue').on('mouseenter', 'li', function(event){
  $(this).find(".notes-view").slideToggle('fast');
});
$('#song-queue').on('mouseleave', 'li', function(event){
  $(this).find(".notes-view").slideToggle('fast');
});

$(document).keydown(function (event) {
    if ($(event.target).is('input')) { return true
    } else if (event.keyCode == 32) {
        play();
        return false;
    }
});


});
