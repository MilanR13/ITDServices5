var player;

function onYouTubeIframeAPIReady() {
     player = new YT.Player('video-foreground', {
     videoId: '8Zw4u5tNRrg', // YouTube Video ID
     playerVars: {
     autoplay: 1, // Auto-play the video on load
     controls: 0, // Show pause/play buttons in player
     showinfo: 0, // Hide the video title
     modestbranding: 1, // Hide the Youtube Logo
     loop: 1, // Run the video in a loop
     fs: 0, // Hide the full screen button
     cc_load_policy: 0, // Hide closed captions
     iv_load_policy: 3, // Hide the Video Annotations
     autohide: 0, // Hide video controls when playing
     playlist: '8Zw4u5tNRrg'
 },
 events: {
     onReady: function(e) {
     e.target.mute();
     }
 }
 });
}
/* Sound Control
 * You can remove below if you don't want to show the icon. Video will be muted by default.
 */
$(document).ready(function(e) {
 $('.sound').on('click', function() {
     $('#video-foreground').toggleClass('mute');
     $('.volume-icon').toggleClass('fa-volume-up', 'fa-volume-off');
 if ($('#video-foreground').hasClass('mute')) {
     player.mute();
 } else {
     player.unMute();
 }
 });
});

/* 
 */
if($('.class').length>0) {
   
}
/* Popup
 */
