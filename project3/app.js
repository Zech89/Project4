var main = function() {
     var volume;
    var state;

  // The PLAY button
    $('#play').click(function() {
        $('#message').text("Playing track");
        $('#player').trigger("play");
    }); 

     // The PAUSE button
    $('#pause').click(function() {
        $('#message').text("Track paused");
        $('#player').trigger("pause");
    });

// The MUTE button
    $('#mute').click(function() {
        $('#player').prop('muted', true);
        $('#message').text("Track muted");
    });

    // The UNMUTE button
    $('#unmute').click(function() {
        $('#player').prop('muted', false);
        $('#message').text("Track unmuted");
    });

    // The STOP button
$('#stop').click(function() {
    $('#player').trigger("pause");          // Step 1: Pause the music
    $('#player').prop('currentTime', 0);    // Step 2: Reset to the beginning
    $('#message').text("Track stopped");    // Step 3: Update the message
});

// The VOLUME UP button
    $('#volUp').click(function() {
        var currentVolume = $('#player').prop('volume');
        if (currentVolume < 1.0) {
            $('#player').prop('volume', Math.min(currentVolume + 0.1, 1.0));
            $('#message').text("Volume increased");
        } else {
            $('#message').text("Volume is at maximum");
        }
    });

    // The VOLUME DOWN button
    $('#volDown').click(function() {
        var currentVolume = $('#player').prop('volume');
        if (currentVolume > 0.0) {
            $('#player').prop('volume', Math.max(currentVolume - 0.1, 0.0));
            $('#message').text("Volume decreased");
        } else {
            $('#message').text("Volume is at minimum");
        }
    });

};
  

$(document).ready(main);

